import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useLocation,Link} from 'react-router-dom'; 
import HomeIcon from '@mui/icons-material/Home';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './ContentPage.css';
async function fetch_data(sheet_name)
{
    const encodedCategory = encodeURIComponent(sheet_name);
    return await fetch(`http://51.20.171.186:5000/?category=${encodedCategory}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok'); 
      }
      return response.json();
    })
    .then(data => {
      return data;  // Return the fetched data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      return {};  // Return an empty object or handle the error as needed
    });
}
export default function ContentPage()
{
    const [data, setData] = useState([]);
    const location = useLocation();
    const {state} = location;
    useEffect(() => {
      const fetchData = async () => {
          const result = await fetch_data(state.contentHeader);
          setData(result[state.contentHeader]);
      };

      fetchData();
  }, []);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({});
    const [showBanner, setShowBanner] = useState(false);
    const [showFooterBanner,setShowFooterBanner] = useState(false);
    const [hospitalHeader,setHospitalHeader] = useState("")
    const openPopup = (index) => {
      setHospitalHeader(data[index]["Name"]);
      const arr = data[index]["Offers"].split(".");
      const filtered_array = arr.filter(item => item !== undefined && item !== null && item !== '' && item !== ' ')
      setPopupContent(filtered_array);
      setIsPopupOpen(true);
      setShowBanner(false);
      setShowFooterBanner(false);
    };
  
    const closePopup = () => {
      setShowBanner(true);
      setShowFooterBanner(true);
      setIsPopupOpen(false);
      setHospitalHeader(" ");
      setPopupContent({});
    };
    useEffect(() => {
      const handleScroll = () => {
          var scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
          const offset = window.scrollY;
          if (offset > 150 && (window.scrollY < scrollableHeight-100)) {  // Change this value based on when you want the banner to appear
              setShowBanner(true);
              setShowFooterBanner(true);
          } else {
              setShowBanner(false);
              setShowFooterBanner(false);
          }

      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
        <div className={`content-page ${isPopupOpen ? 'blur-background' : ''}`} style={{marginTop:"0vw"}}>
                      {/* Banner Area */}
                      {showBanner && (
                <div className="fixed-banner">
                    
                </div>
            )}
        {/* Header Area */}
        <div className="header">
        <div className="header-content">
           <h3>{state.contentHeader}</h3>
           <span><span style={{verticalAlign:"top"}}><Link to="/"><HomeIcon fontSize='small'/></Link></span><span style={{verticalAlign:"top"}}><KeyboardDoubleArrowRightIcon style={{color:"#36454F"}}/></span><Link to="/MaheshwariPowerCards"  style={{textDecoration:"None",verticalAlign:"top"}}><span><b>Maheshwari Power Card</b></span></Link><span style={{verticalAlign:"top"}}><KeyboardDoubleArrowRightIcon style={{color:"#36454F"}}/></span><span style={{verticalAlign:"top"}}><b>{state.contentHeader}</b></span></span>
        </div>
        </div>
        {/* Content */}
        <div style={{backgroundColor:"#ebebea",marginTop:"3vh"}}>
            <br/>
            <br/>
            {(function() {
        const elements = [];
        for (let i = 0; i < data.length; i++) {
          elements.push(<div key={i}>
          {i%2==0 && 
          <Box
          my={-1.4}
          display="flex"
          p={2}
          sx={{  backgroundColor: "lightgray", 
          marginLeft: "8vw", 
          height: "30vh", 
          width: "75vw",
          flexDirection: "column", // Stack items vertically
          justifyContent: "center", // Center items vertically within the Box
          alignItems: "center", // Center items horizontally within the Box
          textAlign: "center" }}>
              <h3 onClick={() => openPopup(i)} style={{maxWidth:"80%",margin: "0 auto",textAlign: "center", wordWrap: "break-word",overflowWrap: "break-word"}}>{data[i]["Name"]}</h3>
              <div><h4 style={{color:"grey"}}><span>Address :-</span>{data[i]["Address"]}</h4></div>
            </Box>}  
            {i%2!=0 && 
          <Box
          my={-1.4}
          display="flex"
          p={2}
          sx={{  backgroundColor: "white", 
          marginLeft: "8vw", 
          height: "30vh", 
          width: "75vw",
          flexDirection: "column", // Stack items vertically
          justifyContent: "center", // Center items vertically within the Box
          alignItems: "center", // Center items horizontally within the Box
          textAlign: "center" }}>
               <h3 onClick={() => openPopup(i)} style={{maxWidth:"80%",margin: "0 auto",textAlign: "center", wordWrap: "break-word",overflowWrap: "break-word"}}> {data[i]["Name"]}</h3>
               <div><h4 style={{color:"grey"}}><span>Address :-</span>{data[i]["Address"]}</h4></div>
            </Box>}

        <br/>
          </div>);
        }
        return elements;
      })()}
        </div>
       {/* Popup */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <Box
            p={3}
            sx={{
              width: '80vw',
              maxHeight: '60vh', // Set a maximum height for the popup
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflowY: 'scroll', // Enable vertical scrolling
              overflowX: 'hidden'
            }}
          >
            <h1>{hospitalHeader}</h1>
            <ul>
            {popupContent.map((offer, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                {offer.trim()} {/* Trim to remove any leading or trailing spaces */}
              </li>
          ))}
      </ul>
            <br/>
            <br/>
            <Button variant="contained" onClick={closePopup}>
              Close
            </Button>
          </Box>
        </div>
      )}
        {/* footer */}
        <div className='footer'>
          <Link to = "/MaheshwariPowerCards"> <h4 style={{color: "white", paddingTop: "1vh"}}>Maheshwari Power Card</h4></Link>
        </div>
        {/*Fixed Footer*/}
      { showFooterBanner &&
        <div className='fixed-footer'>
        </div>
      }
        </div>

    );
}