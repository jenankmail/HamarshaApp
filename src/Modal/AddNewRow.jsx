import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { styled } from '@mui/material/styles';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    bgcolor: "green",
    transform: "translate(-50%, -50%)",
    width: 500,
    backgroundColor: "white",
  };
 
function AddNewRow({ open, handleClose, setPosts }) {
    const [description, setdescription] = useState("");
    const [id, setId] = useState("");
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [serialNumber, setSerialNumber] = useState("");

    const [image, setImage] = useState(null)
    const [imageCover, setImageCover] = useState(null);
   
    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
    });
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-description"
      aria-describedby="modal-modal-description"
    > 
      <Box  sx={style}><div className="modal-overlay" >
             
    <div style={{textAlign:"center",color:"black"}} >
                 <div className='HeaderTitle'>
             <h1 id="ModalTitle">Add new product</h1>
              <hr/></div>
             
               <br/>
               <div className='ModalId'>
               <label style={{textAlignLast:"right",paddingRight:"440px" ,color:"black",fontWeight:"bold"}}>ID</label>
               <br/>
               <input type="text" id='post' style={{width:"90%",height:"20px",borderRadius:"20px",backgroundColor:"#fff4eb",borderColor:"#FF5F1F"}} />
               
               </div>
               <br/>

               <div className='ModalProduct'>
               <label style={{textAlignLast:"right",paddingRight:"400px",color:"black",fontWeight:"bold"}}>Product</label>
               <br/>
               <input type="text" id='post' style={{width:"90%",height:"20px",borderRadius:"10px",backgroundColor:"#686262",backgroundColor:"#fff4eb",borderColor:"#FF5F1F"}} />
               
               </div>
               <br/>

               <div className='ModalSerialNumber'>
               <label style={{textAlignLast:"right",paddingRight:"350px",color:"black",fontWeight:"bold"}}>SerialNumber</label>
               <br/>
               <input type="text" id='post' style={{width:"90%",height:"20px",borderRadius:"10px",backgroundColor:"#686262",backgroundColor:"#fff4eb",borderColor:"#FF5F1F"}} />
               
               </div>
               <br/>

               <div className='ModalQuantity'>
               <label style={{textAlignLast:"right",paddingRight:"390px",color:"black",fontWeight:"bold"}}>Quantity</label>
               <br/>
               <input type="text" id='post' style={{width:"90%",height:"20px",borderRadius:"10px",backgroundColor:"#686262",backgroundColor:"#fff4eb",borderColor:"#FF5F1F"}} />
               
               </div>
               
             
               <br/>
               <div className='ModalDescription'>
               <label style={{textAlignLast:"right",paddingRight:"370px",color:"black",fontWeight:"bold"}}>description</label>
               <br/>
               <textarea id='post' name="body"rows="8" cols="73"  style={{width:"90%",height:"80px",borderRadius:"10px",backgroundColor:"#ffbf8b",backgroundColor:"#fff4eb",borderColor:"#FF5F1F"}} ></textarea>
              
               </div>
              <br/>
              {imageCover && (
            <img
              src={imageCover}
              alt="Uploaded"
              style={{ width: "450px",height:"250px", marginBottom: "1rem" }}
            />
          )}
              <Button component="label" variant="contained" style={{color: "#fff4eb", backgroundColor: "#FF5F1F" }} >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
<br/>
<br/>      
               <br/>
          
               <Button variant="contained" type="submit" sx={{ width: "90px", borderRadius: "50px", paddingBottom: "10px", color: "#fff4eb", backgroundColor: "#FF5F1F" }}>POST</Button>
             
             </div>
             
       
           </div>
           <br/>
           <br/>
           </Box >

        </Modal> );
}

export default AddNewRow