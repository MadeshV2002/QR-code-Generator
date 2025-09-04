import React, { useState } from 'react'
import defaultImg from '../assets/image4.jpg'
const Qr = () => {
   const [img,setImg]=useState('')

  
  const[loading,setLoading]= useState(false)
  const[qrData,setQrData]= useState('https://www.youtube.com/@madesh7388')
const[qrsize,setQrSize]= useState(1500)

    async function generateQR() {
  try {
    // Ensure qrsize is a valid number
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

    {/* && React-ல் ஒரு shortcut for conditional rendering.

    Left side loading truthy ஆக இருந்தால், right side render ஆகும்.

    Left side loading falsy (false, 0, null, undefined) → right side render ஆகாது. */}

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

// import React, { useState } from 'react';
// import defaultImg from '../assets/image4.jpg'

// const Qr = () => {
//   const [img, setImg] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [qrData, setQrData] = useState('https://www.youtube.com/@Madesh');
//   const [qrSize, setQrSize] = useState('150');

//   // Generate QR Code
//   async function generateQR() {
//     try {
//       setLoading(true); // show "please wait..."
//       const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
//         qrData
//       )}`;
//       setImg(url);
//     } catch (error) {
//       console.error('Error generating QR code:', error);
//     } finally {
//       setLoading(false); // stop loading message
//     }
//   }

//   // Download QR Code
//   function downloadQR() {
//     if (!img) return;
//     fetch(img)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = 'QRCode.png'; // Corrected download name
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       })
//       .catch((error) => console.error('Error downloading QR code:', error));
//   }

//   return (
//     <div className="app-container">
//       <h1>QR Code Generator</h1>

//       {/* Display generated QR Code */}
//       {img && (
//         <img
//           src={img}
//           alt="Generated QR"
//           width="200px"
//           height="200px"
//           className="qr-code"
//         />
//       )}

//       {/* Loading Message */}
//       {loading && <p>Please wait...</p>}

//       <div>
//         <label htmlFor="dataInput" className="label">
//           Data for QR code:
//         </label>
//         <input
//           type="text"
//           id="dataInput"
//           value={qrData}
//           placeholder="Enter data for QR code"
//           onChange={(e) => setQrData(e.target.value)}
//         />

//         <label htmlFor="sizeInput" className="label">
//           Enter image size (e.g., 150):
//         </label>
//         <input
//           type="text"
//           id="sizeInput"
//           value={qrSize}
//           placeholder="Enter image size"
//           onChange={(e) => setQrSize(e.target.value)}
//         />

//         <button
//           className="Generate-button"
//           disabled={loading}
//           onClick={generateQR}
//         >
//           Generate QR Code
//         </button>
//         <button className="Download-button" onClick={downloadQR}>
//           Download QR Code
//         </button>
//       </div>

//       <p className="footer">Designed by Madesh</p>
//     </div>
//   );
// };

// export default Qr;
