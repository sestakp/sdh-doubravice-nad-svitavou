import { Box, Button, Card, Checkbox, FormControlLabel, FormGroup, Grid, LinearProgress, MenuItem, Modal, Paper, Select, TextField, Typography } from "@mui/material"
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
import * as uuid from "uuid"
import 'moment/locale/cs';
import MyImageUploader from "../../components/MyImageUploader/MyImageUploader";
import extractFileName from "../../utils/extractFileName";
import dateSort from "../../utils/dateSort";

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
    const [defaultImages, setDefaultImages] = useState([])
    const [uploadProgress, setUploadProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const dateFormat = 'DD. MM. YYYY';
    const classes = useStyles();

    async function getImageAsFile(url) {
      try {
        console.log("name: ", extractFileName(url))
        const response = await fetch(url);
        const blob = await response.blob();
        return new File([blob], extractFileName(url), { type: blob.type });
      } catch (error) {
        console.error(`Error fetching ${url}:`, error);
        return null;
      }
    }
    
    // Convert image URLs to an array of File objects
    async function convertUrlsToFiles(urls) {
      if(Array.isArray(urls)){
        const filePromises = urls?.map(getImageAsFile);
        return Promise.all(filePromises);
      }
      return []
    }

    const normalise = (value) => ((value) * 100) / (images.length);

    function checkBoxOnChange(e, label){
      if(e.nativeEvent.target.checked){
        setCategoryFilter([...categoryFilter, label])
      }
      else{
        setCategoryFilter(categoryFilter.filter(x => x !== label))
      }
    }


    useEffect(() => {
        if( ! modalOpen) return;
        if( id == null){
            setImages([])
            setHeader("")
            setDate(null)
            setCategory("Ostatní")
            setDescription("")
            setDefaultImages([])
            return;
        } 
        var record = newsData.filter(x => x.id == id)[0]
        if(record == undefined) return;
        console.log("record: ", record);
        setHeader(record.header);
        setDate(moment(record.date, dateFormat))
        setCategory(record.category)
        setDescription(record.description)
        setDefaultImages(record.imageUrls)
        convertUrlsToFiles(record.imageUrls).then(files => setImages(files))
      //setImages(record.imageUrls)
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
            setLoading(true);
            var record = {
                header,
                category,
                description,
                date: date?.format(dateFormat) ?? "",
                //imageUrls
            }

            let recordId = id;
            if(id != null){
              db.collection("News").doc(id).update(record)
            }
            else{
                const docRef = await db.collection("News").add(record)
                recordId = docRef.id;
            }

            console.log("record id : ", recordId)


            const imageUrls = []

            let defaultImageNames = defaultImages?.map(url => extractFileName(url))

            console.log("default images: ", defaultImageNames)
            for (const image of images) {

              const storageRef = storage.ref(`images/${image.name}_${recordId}`);
              

              if( ! defaultImageNames.includes(image.name)){
                
                const uploadTask = storageRef.put(image);
                
                uploadTask.on(
                  'state_changed',
                  (snapshot) => {
                    /*console.log("bytesTransferred: ", snapshot.bytesTransferred)
                    console.log("totalBytes: ", snapshot.totalBytes)
                    const progress = Math.round(
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );*/

                      if(snapshot.bytesTransferred == snapshot.totalBytes){
                        setUploadProgress((prevUploadProgress) => prevUploadProgress + 1)
                      }

                  },
                  (error) => {
                    console.error(error);
                  }
                );
        
                await uploadTask;
              }
              
              const imageUrl = await storageRef.getDownloadURL();
              imageUrls.push(imageUrl);
            }

            if(Array.isArray(defaultImages)){
              for(const image of defaultImages){
                //console.log("image: ", image)
                if( ! imageUrls.includes(image)){
                  console.log("default image not included: ", extractFileName(image))
  
  
                  const storageRef = storage.ref(`images/${extractFileName(image)}_${recordId}`);
                  storageRef.delete()
                }
              }
            }

            record.imageUrls = imageUrls
            db.collection("News").doc(recordId).update(record)

            
        }
        catch(e){
            console.log("adding error: ", e)
        }
        finally{
          setLoading(false);
        }

        setImages([])
        setHeader("")
        setDate(null)
        setCategory("Ostatní")
        setDescription("")
        setId(null)
        setModalOpen(false)
        setUploadProgress(0)
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
                        className={classes.label + " select select-mobile "}
                    >
                        <MenuItem value={"Soutěže"}>Soutěže</MenuItem>
                        <MenuItem value={"Soutěže jiné obce"}>Soutěže jiné obce</MenuItem>
                        <MenuItem value={"Plánovaná akce"}>Plánované akce</MenuItem>
                        <MenuItem value={"Zásah"}>Zásahy</MenuItem>
                        <MenuItem value={"Schůze"}>Schůze</MenuItem>
                        <MenuItem value={"Ostatní"}>Ostatní</MenuItem>
                </Select>

                <div className="select-checkbox">
                  <FormControlLabel control={<Checkbox onChange={(e) => checkBoxOnChange(e, "Soutěže")} />} label="Soutěže" />
                  <FormControlLabel control={<Checkbox onChange={(e) => checkBoxOnChange(e, "Soutěže jiné obce")} />} label="Soutěže jiné obce" />
                  <FormControlLabel control={<Checkbox onChange={(e) => checkBoxOnChange(e, "Plánované akce")} />} label="Plánované akce" />
                  <FormControlLabel control={<Checkbox onChange={(e) => checkBoxOnChange(e, "Zásahy")} />} label="Zásahy" />
                  <FormControlLabel control={<Checkbox onChange={(e) => checkBoxOnChange(e, "Schůze")} />} label="Schůze" />
                  <FormControlLabel control={<Checkbox onChange={(e) => checkBoxOnChange(e, "Ostatní")} />} label="Ostatní" />
                </div>

                {currentUser != undefined &&
                    <Button variant="contained" style={{minWidth: "100px"}} onClick={() => setModalOpen(!modalOpen)}>Přidat novinku</Button>
                } 
                
                </div>
            </div>          
            <div>
                {newsData.filter(d => categoryFilter.length <= 0 || categoryFilter.includes(d.category))
                .sort((a, b) => dateSort(a,b))
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
                        <MenuItem value={"Plánované akce"}>Plánované akce</MenuItem>
                        <MenuItem value={"Zásahy"}>Zásahy</MenuItem>
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

                    <MyImageUploader images={images} setImages={setImages}/>


                    {loading &&
                    <>                      
                      <LinearProgress style={{paddingTop: "20px", marginTop: "25px"}} variant="determinate" value={normalise(uploadProgress)} />
                      </>
                    }
                    <div style={{display:"flex", justifyContent: "center", marginTop: "10px"}}>
                        <Button variant="contained" onClick={() => AddOrUpdateNew() } disabled={loading}>Uložit</Button>
                        <Button variant="contained" onClick={() => {setModalOpen(false); setId(null);}} disabled={loading}>Zavřít</Button>
                    </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default News