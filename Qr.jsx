import React, { useState } from 'react'
import defaultImg from '../assets/image4.jpg'
const Qr = () => {
   const [img,setImg]=useState('')

  
  const[loading,setLoading]= useState(false)
  const[qrData,setQrData]= useState('https://www.youtube.com/@madesh7388')
const[qrsize,setQrSize]= useState(1500)

    async function generateQR() {
  try {
 
    const size = qrsize && !isNaN(qrsize) ? qrsize : 1500;

    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`;
    console.log('Generated URL:', url); // Debugging
    setImg(url);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setLoading(false);
  }
}

  
   function downloadQR() {
    if (!img) return;
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'QRCode.png'; // Corrected download name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error('Error downloading QR code:', error));
  }

    
  return (
    <div className='app-container'>
     <h1>Qr Code Generator</h1>

     {img &&(<img src={img} alt="empty" className='qr-code' />)}

   

     {loading&&<p> please wait...</p>}

    <div>
        <label htmlFor="dataInput" className='label'>Data  for Qr code:</label>
        <input type="text" value={qrData}id='dataInput' placeholder='Enter data Qr code' onChange={(e)=>setQrData(e.target.value)}/>
    
        <label htmlFor="SizeInput" className='label'>Enter image Size(e.g,150): </label>
        <input type="text" value={qrsize}id='SizeInput' onChange={(e)=>setQrSize(e.target.value)}placeholder='Enter image Size'/>
        
        <button className='Generate-button'  disabled={loading} onClick ={generateQR}>Generate Qr Code</button>
        <button className='Download-button'onClick={downloadQR}>Download Qr Code</button>

    </div>
    <p className='footer'>Designed by Madesh</p>
    </div>
  )
}

export default Qr;

