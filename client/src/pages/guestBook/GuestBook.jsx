import { useEffect, useState } from "react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box, Button, Card, Grid, MenuItem, Modal, Paper, Select, TextField, Typography } from "@mui/material"
import { storage, db } from '../../firebase';
import moment from 'moment';
import DOMPurify from 'dompurify';
import "./GuestBook.css"
import { useAuth } from "../../contexts/AuthContext"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useMediaQuery } from '@material-ui/core';

import { useTheme } from '@material-ui/core';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80vw",
    bgcolor: 'rgba(0,0,0,0.9)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "scroll",
    maxHeight: "100vh",
  };


export default function GuestBook(){

    const theme = useTheme();
    const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));
    const [contributions, setContributions] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [id, setId] = useState(null)
    const { currentUser } = useAuth()

    const dateFormat = 'DD. MM. YYYY';

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    async function AddOrUpdateNew(){
        try {
            var record = {
                author,
                text: DOMPurify.sanitize(text),
                date: (moment(new Date())).format(dateFormat)
            }
            
            console.log("adding: ",id)

            if(id != null){
                db.collection("GuestBook").doc(id).update(record)
            }
            else{
                db.collection("GuestBook").add(record)
            }

        }
        catch(e){
            console.log("adding error: ", e)
        }

        setAuthor("")
        setText("")
        setId(null)
        setModalOpen(false)
    }

    const deleteDocument = async (id) => {
        const newsRef = db.collection("GuestBook").doc(id);
      
        try {
          await newsRef.delete();
          console.log("Document deleted successfully");
        } catch (error) {
          console.log("Error deleting document: ", error);
        }
    };


    useEffect(() => {
        console.log("downloading records")
        const newsRef = db.collection("GuestBook").orderBy("date", "desc");
      
        const unsubscribe = newsRef.onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setContributions(data);
        });
      
        return () => {
          // Unsubscribe from the snapshot listener when the component unmounts
          unsubscribe();
        };
      }, []);



    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
    
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Kniha návštěv</h1>

                <div style={{display: "flex", justifyContent: "flex-end", width: "25%"}}>
                    <Button variant="contained" onClick={() => {setAuthor(""); setText(""); setModalOpen(!modalOpen)}}>Přidat příspěvek</Button>
                </div>
            </div>

            <div>
                {contributions.map(contribution => <div style={{border: "1px solid white", borderRadius: "10px", padding: "10px", margin: "10px", position: "relative"}} key={contribution.id}>
                    <Grid container>
                        {currentUser != undefined &&
                        <>
                            <DeleteIcon style={{position: "absolute", top: 0, right: 0, cursor: "pointer", fill: "#ff9800", zIndex: 999}} onClick={() => deleteDocument(contribution.id)}/>
                            <EditIcon style={{position: "absolute", top: 0, right: 20, cursor: "pointer", fill: "#ff9800", zIndex: 999}} onClick={() => {setId(contribution.id); setAuthor(contribution.author); setText(contribution.text); setModalOpen(true);}}/>
                        </>
                        }  
                        <Grid item md={8} sm={12}>
                            <div style={{width: "100%"}}>
                                <p>Autor: {contribution.author}</p>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={12}>
                            <div style={{width: "100%", textAlign: isMediumOrSmaller ? "inherit" : "end", marginTop: "10px"}}>
                                <p>{contribution.date}</p>
                            </div>
                        </Grid>

                        <Grid item xl={12}>
                            <div dangerouslySetInnerHTML={{ __html: contribution.text }} />
                        </Grid>
                    </Grid>


                </div>)}
            </div>







            <Modal
                open={modalOpen}
                onClose={() => {setModalOpen(false); setId(null);}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Přidat novinku
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField
                        label="Autor"
                        type="text"
                        fullWidth
                        margin="normal"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    
                    <ReactQuill value={text} onChange={setText} modules={modules} formats={formats}/>
                    <div style={{display:"flex", justifyContent: "center", marginTop: "10px"}}>
                        <Button variant="contained" onClick={() => AddOrUpdateNew() }>Uložit</Button>
                        <Button variant="contained" onClick={() => {setModalOpen(false); setId(null);}}>Zavřít</Button>
                    </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}