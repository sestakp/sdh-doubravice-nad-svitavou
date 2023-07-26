import { Box, Button, Card, Grid, MenuItem, Modal, Paper, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { DropzoneArea } from 'material-ui-dropzone'
import "./News.css";
import { storage, db } from '../../firebase';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import NewCard from "../../components/NewCard/NewCard";
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment";
import 'moment/locale/cs';

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

  const useStyles = makeStyles((theme) => ({
    label: {
      color: theme.palette.common.white, // Or any other light color
    },
  }));

const News = (props) => {
    
    const [newsData, setNewsData] = useState([]);
    const { currentUser } = useAuth()

    const [modalOpen, setModalOpen] = useState(false)
    const [id, setId] = useState(null)
    const [images, setImages] = useState([])
    const [header, setHeader] = useState("")
    const [date, setDate] = useState(null)
    const [category, setCategory] = useState("Ostatní")
    const [categoryFilter, setCategoryFilter] = useState([])
    const [description, setDescription] = useState("")
    const [uploadProgress, setUploadProgress] = useState(0);
    const dateFormat = 'DD. MM. YYYY';
    const classes = useStyles();
    useEffect(() => {
        console.log("modal use effect ", id)
        if( ! modalOpen) return;
        if( id == null){
            setImages([])
            setHeader("")
            setDate(null)
            setCategory("Ostatní")
            setDescription("")
            return;
        } 

        var record = newsData.filter(x => x.id == id)[0]
        if(record == undefined) return;
        console.log("record: ", record);
        setHeader(record.header);
        setDate(moment(record.date, dateFormat))
        setCategory(record.category)
        setDescription(record.description)
        setImages(record.imageUrls)
    },[modalOpen])

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
                date: date?.format(dateFormat) ?? "",
                imageUrls
            }
            
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
        setId(null)
        setModalOpen(false)
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Novinky</h1>
                <div style={{display: "flex", justifyContent: "flex-end", width: "25%"}}>
                <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Kategorie"
                        style={{width: "70%", paddingRight: "10px"}}
                        multiple
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        margin="normal"
                        className={classes.label + ", select"}
                    >
                        <MenuItem value={"Soutěže"}>Soutěže</MenuItem>
                        <MenuItem value={"Soutěže jiné obce"}>Soutěže jiné obce</MenuItem>
                        <MenuItem value={"Plánovaná akce"}>Plánovaná akce</MenuItem>
                        <MenuItem value={"Zásah"}>Zásah</MenuItem>
                        <MenuItem value={"Schůze"}>Schůze</MenuItem>
                        <MenuItem value={"Ostatní"}>Ostatní</MenuItem>
                </Select>
                {currentUser != undefined &&
                    <Button variant="contained" onClick={() => setModalOpen(!modalOpen)}>Přidat novinku</Button>
                } 
                
                </div>
            </div>          
            <div>
                {newsData.filter(d => categoryFilter.length <= 0 || categoryFilter.includes(d.category))
                .sort((a, b) => {
                  // Sort logic here based on the date field
                  const dateA = new Date(
                    parseInt(a.date.split(".")[2]), // Year
                    parseInt(a.date.split(".")[1]) - 1, // Month (Note: Months in Date objects are zero-indexed)
                    parseInt(a.date.split(".")[0]) // Day
                  );
                  const dateB = new Date(
                    parseInt(b.date.split(".")[2]), // Year
                    parseInt(b.date.split(".")[1]) - 1, // Month (Note: Months in Date objects are zero-indexed)
                    parseInt(b.date.split(".")[0]) // Day
                  );
                  return dateB - dateA;
                })
                .map(data => <NewCard data={data} setModalOpen={setModalOpen} setId={setId}/>)}
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
                        className={classes.label + ", select"}
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
                    <DatePicker label="Vyberte datum aktuality" value={date} onChange={(newValue) => setDate(newValue)} format="DD. MM. YYYY"/>
                    <DropzoneArea 
                        filesLimit={999}
                        acceptedFiles={['image/*']}
                        files={images}
                        onChange={(files) => setImages(files)} 
                    />
                    {id != null && newsData.filter(x => x.id == id)[0]?.imageUrls?.map((url, index) => (
                        <img key={index} src={url} alt={`Default Image ${index + 1}`} />
                    ))}
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

export default News