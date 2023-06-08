import { Grid, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { storage, db } from '../../firebase';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const NewCard = ({data, setModalOpen, setId}) => {

    const [open, setOpen] = useState(false);

    const deleteDocument = async (id) => {
        const newsRef = db.collection("News").doc(id);
      
        try {
          await newsRef.delete();
          console.log("Document deleted successfully");
        } catch (error) {
          console.log("Error deleting document: ", error);
        }
    };

    return (
        <Paper style={{padding: "8px", margin: "8px", position: "relative"}}>
        <DeleteIcon style={{position: "absolute", top: 0, right: 0, cursor: "pointer", fill: "#ff9800"}} onClick={() => deleteDocument(data.id)}/>
        <EditIcon style={{position: "absolute", top: 0, right: 20, cursor: "pointer", fill: "#ff9800"}} onClick={() => {setId(data.id); setModalOpen(true);}}/>
        
        <Grid container>
            <Grid item md={8} style={{paddingRight: "8px"}}>
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
                {open &&
                    <KeyboardArrowUpIcon style={{position: "absolute", bottom: 0, right: 0, cursor: "pointer", fill: "#ff9800"}} onClick={() => setOpen(false)}/>
                }
                { ! open &&
                    <KeyboardArrowDownIcon style={{position: "absolute", bottom: 0, right: 0, cursor: "pointer", fill: "#ff9800"}} onClick={() => setOpen(true)}/>
                }
            </Grid>
        </Grid>
        {
            open &&
            <div style={{paddingTop: "20px"}}>
                <ImageGallery items={data.imageUrls.map(url => ({original: url, thumbnail: url}))} />
            </div>
            
        }
    </Paper>
    )
}

export default NewCard;