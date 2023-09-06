import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import { storage, db } from '../../firebase';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import ImageGallery from 'react-image-gallery';
import { useAuth } from "../../contexts/AuthContext"
import "react-image-gallery/styles/css/image-gallery.css";
import extractFileName from "../../utils/extractFileName";

const NewCard = ({data, setModalOpen, setId}) => {

    const [open, setOpen] = useState(false);

    const [deleteModalOpen, setDeleteModalOpen] = useState(false)

    const { currentUser } = useAuth()
    const deleteDocument = async (id) => {
        const newsRef = await db.collection("News").doc(id);
        try {

          var newObj = (await newsRef.get()).data();

          newObj.imageUrls?.forEach(url => {            
            const storageRef = storage.ref(`images/${extractFileName(url)}_${id}`);
            storageRef.delete()
          });

          await newsRef.delete();
          console.log("Document deleted successfully");
        } catch (error) {
          console.log("Error deleting document: ", error);
        }
    };

    return (
        <Paper style={{padding: "8px", margin: "8px", position: "relative"}}>

        {currentUser != undefined &&
        <>
            <DeleteIcon style={{position: "absolute", top: 0, right: 0, cursor: "pointer", fill: "#ff9800", zIndex: 999}} onClick={() => setDeleteModalOpen(true)}/>
            <EditIcon style={{position: "absolute", top: 0, right: 20, cursor: "pointer", fill: "#ff9800", zIndex: 999}} onClick={() => {setId(data.id); setModalOpen(true);}}/>
        </>
        }   
        <Grid container>
            <Grid item md={8} style={{paddingRight: "8px", width: "100%"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h2>{data.header}</h2>
                    <p>{data.date}</p>
                </div>
                <p>{data.description}</p>
            </Grid>
            <Grid item md={4} style={{position: "relative"}}>
                {data.imageUrls != undefined &&
                 <img src={data.imageUrls[0]} style={{maxWidth: "100%", maxHeight: "150px", display: "flex"}}/> 
                }
                
                {open && data.imageUrls?.length > 0 &&
                    <KeyboardArrowUpIcon style={{position: "absolute", bottom: 0, right: 0, cursor: "pointer", fill: "#ff9800"}} onClick={() => setOpen(false)}/>
                }
                { ! open && data.imageUrls?.length > 0 &&
                    <KeyboardArrowDownIcon style={{position: "absolute", bottom: 0, right: 0, cursor: "pointer", fill: "#ff9800"}} onClick={() => setOpen(true)}/>
                }
            </Grid>
        </Grid>
        {
            open &&
            <div style={{paddingTop: "20px"}}>
                <ImageGallery items={data.imageUrls?.map(url => ({original: url, thumbnail: url}))} />
            </div>
            
        }


    <Modal
      open={deleteModalOpen}
      onClose={() => setDeleteModalOpen(false)}
      aria-labelledby="delete-confirmation-modal"
      aria-describedby="delete-confirmation-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography id="delete-confirmation-modal-description" variant="h6" component="h2">
          Opravdu si přejete smazat novinku?
        </Typography>
        <Button variant="outlined" color="primary" onClick={() => {deleteDocument(data.id); setDeleteModalOpen(false);}} sx={{ mt: 2 }}>
          Smazat
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => setDeleteModalOpen(false)} sx={{ mt: 2, ml: 2 }}>
          Zrušit
        </Button>
      </Box>
    </Modal>
    </Paper>
    )
}

export default NewCard;