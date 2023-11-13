import React, { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { CardMedia, Card, CardContent, Typography, Grid } from '@mui/material';
import "./MyImageUploader.css"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImagePreview from './Components/ImagePreview/ImagePreview';
import Compressor from 'compressorjs';


const MyImageUploader = (props) => {
    /*
    const onDrop = useCallback((acceptedFiles) => {
        //const filesToAdd = [];
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
            const arrayBuffer = reader.result;
            const blob = new Blob([arrayBuffer]);
            const newFile = new File([blob], file.name, { type: file.type });
            //console.log("new file: ", newFile)
            //filesToAdd.push(newFile);
            


              const options = {
                quality: 0.7, // Adjust the quality as needed
                maxWidth: 1920, // Adjust the maximum width as needed
                maxHeight: 1080, // Adjust the maximum height as needed

                success(result){
                    var compressedImage = new File([result], file.name, { type: file.type })
                    props.setImages((prevImages) => [...prevImages, compressedImage]);
                },

                error(err){
                    console.error(err.message)
                }
              };

              new Compressor(newFile, options)

          }
          reader.readAsArrayBuffer(file)
        })

        //console.log("adding images: ", filesToAdd)
        //props.setImages((prevImages) => [...prevImages, ...filesToAdd]);

      }, [props.setImages])*/


      const onDrop = useCallback(async (acceptedFiles) => {
        try {
          const compressedImages = await Promise.all(
            acceptedFiles.map(async (file) => {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
      
                reader.onabort = () => reject('file reading was aborted');
                reader.onerror = () => reject('file reading has failed');
                reader.onload = async () => {
                  const arrayBuffer = reader.result;
                  const blob = new Blob([arrayBuffer]);
                  const newFile = new File([blob], file.name, { type: file.type });
      
                  const options = {
                    quality: 0.7,
                    maxWidth: 1920,
                    maxHeight: 1080,
                    success(result) {
                      const compressedImage = new File([result], file.name, { type: file.type });
                      resolve(compressedImage);
                    },
                    error(err) {
                      reject(err);
                    },
                  };
      
                  new Compressor(newFile, options);
                };
                reader.readAsArrayBuffer(file);
              });
            })
          );
      
          props.setImages((prevImages) => [...prevImages, ...compressedImages]);
        } catch (error) {
          console.error('Error compressing images:', error);
        }
      }, [props.setImages]);
      


      const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*', // Accept only image files
        maxSize: 10000000, // Max file size is 5 MB
        multiple: true,

      });
    
      return (
        <div {...getRootProps()} className='dropZone'>
          <input {...getInputProps()} />
            <div className='dropZone-text'>
                <CloudUploadIcon />
                <p>Přetáhněte sem některé soubory nebo kliknutím vyberte soubory</p>
                {props.images.map((image, index) => 
                    <ImagePreview file={image} index={index} setImages={props.setImages} images={props.images}/> 
                )}
            </div>
        </div>
      )
};

export default MyImageUploader;
