import React from 'react';
import "./ImagePreview.css"
import DeleteIcon from '@mui/icons-material/Delete';


const ImagePreview = (props) => {
   
  let imageUrl = ""
  if (props.file instanceof File) {
    imageUrl = URL.createObjectURL(props.file);
  } else {
    imageUrl = props.file
  }

  const handleDeleteAtIndex = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newArray = [...props.images];
    newArray.splice(props.index, 1); // Remove 1 element at index
    props.setImages(newArray);
  };

  return (
    <div style={{maxWidth: '25%', maxHeight: '300px', display: "inline-flex", padding: "5px", position: "relative"}}>
      <img
        id="image-preview"
        alt="Image Preview"
        src={imageUrl}
        style={{ }}
      />
      <DeleteIcon style={{position: "absolute", top: "5px", right: "5px", fontSize: "30px", cursor: "pointer", stroke: "black"}} onClick={handleDeleteAtIndex}/>
    </div>
  );
};

export default ImagePreview;
