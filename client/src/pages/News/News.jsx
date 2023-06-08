import { Box, Button, Card, Grid, MenuItem, Modal, Paper, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import {DropzoneArea} from 'material-ui-dropzone'
import "./News.css";
import { storage, db } from '../../firebase';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import NewCard from "../../components/NewCard/NewCard";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'rgba(0,0,0,0.9)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "scroll",
    maxHeight: "100vh",
  };


const News = (props) => {
    
    const [newsData, setNewsData] = useState([]);
    const { currentUser } = useAuth()

    const [modalOpen, setModalOpen] = useState(false)
    const [images, setImages] = useState([])
    const [header, setHeader] = useState("")
    const [date, setDate] = useState(null)
    const [category, setCategory] = useState("Ostatní")
    const [description, setDescription] = useState("")
    const [uploadProgress, setUploadProgress] = useState(0);
    //console.log("upload progress: ", uploadProgress)

    useEffect(() => {
        const newsRef = db.collection("News");
      
        const unsubscribe = newsRef.onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setNewsData(data);
        });
      
        return () => {
          // Unsubscribe from the snapshot listener when the component unmounts
          unsubscribe();
        };
      }, []);



    async function AddOrUpdateNew(){
        try {
            const imageUrls = [];
      
            for (const image of images) {
              const storageRef = storage.ref(`images/${image.name}`);
              const uploadTask = storageRef.put(image);
      
              uploadTask.on(
                'state_changed',
                (snapshot) => {
                  const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  );
                  setUploadProgress(progress);
                },
                (error) => {
                  console.error(error);
                }
              );
      
              await uploadTask;
      
              const imageUrl = await storageRef.getDownloadURL();
              imageUrls.push(imageUrl);
            }
            var record = {
                header,
                category,
                description,
                date: date?.format('DD. MM. YYYY') ?? "",
                imageUrls
            }

            console.log("record to save: ", record)
            
            db.collection("News").add(record)
        }
        catch(e){
            console.log("adding error: ", e)
        }

        setImages([])
        setHeader("")
        setDate(null)
        setCategory("Ostatní")
        setDescription("")
        setModalOpen(false)
    }
    console.log("news Data : ", newsData)
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Novinky</h1>
                {currentUser != undefined &&
                    <Button variant="contained" onClick={() => setModalOpen(!modalOpen)}>Přidat novinku</Button>
                } 
            </div>          
            <div>
                {newsData.map(data => <NewCard data={data} />)}
            </div>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Přidat novinku
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField
                        label="Nadpis"
                        type="text"
                        fullWidth
                        margin="normal"
                        required
                        value={header}
                        onChange={(e) => setHeader(e.target.value)}
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Kategorie"
                        fullWidth
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        margin="normal"
                    >
                        <MenuItem value={"Soutěže"}>Soutěže</MenuItem>
                        <MenuItem value={"Soutěže jiné obce"}>Soutěže jiné obce</MenuItem>
                        <MenuItem value={"Plánovaná akce"}>Plánovaná akce</MenuItem>
                        <MenuItem value={"Zásah"}>Zásah</MenuItem>
                        <MenuItem value={"Schůze"}>Schůze</MenuItem>
                        <MenuItem value={"Ostatní"}>Ostatní</MenuItem>
                    </Select>
                    <TextField
                        label="Popis"
                        type="text"
                        fullWidth
                        margin="normal"
                        required
                        multiline
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <DatePicker label="Vyberte datum aktuality" value={date} onChange={(newValue) => setDate(newValue)}/>
                    <DropzoneArea 
                        filesLimit={999}
                        acceptedFiles={['image/*']}
                        onChange={(files) => setImages(files)} 
                    />
                    <div style={{display:"flex", justifyContent: "center", marginTop: "10px"}}>
                        <Button variant="contained" onClick={() => AddOrUpdateNew() }>Uložit</Button>
                        <Button variant="contained" onClick={() => setModalOpen(false)}>Zavřít</Button>
                    </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default News