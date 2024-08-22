import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useLocation,Link} from 'react-router-dom'; 
import HomeIcon from '@mui/icons-material/Home';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './ContentPage.css';
export default function ContentPage()
{

    const hospitalArray = ['ASG EYES HOSPITALS' ,'SHREE KRISHNA CHILDREN HOSPITAL','PARAS HEALTHCARE PVT LTD', 'GEETANJALI HOPITAL'
    ,'GBH AMERICAN HOSPITAL','GOVINDAM HOSPITAL','ANANTA HOSPITAL','PACIFIC HOSPITAL'];
    const hospitalData = {'ASG EYES HOSPITALS' : {
        "address" : "7C-2 ,Meera marg near mira girls college, Madhuban Udaipur Rajasthan-313001",
        "offers" : `First OPD  Consulattion Free charges for every member in the card#
            50 % Discount From Second OPD Consulation#
            10 % Discount on IPD procedures excluding consumables,minors or investigations, optical`
        },
        'SHREE KRISHNA CHILDREN HOSPITAL': {
            "address": "3 Madhav vihar, 100 feet road, near roots opp. Nayra petrol pump shobhagpura, udaipur rajasthan 313001",
            "offers":  `15% Discount on IPD & investigation (Laboratory)#
                        10% Discount on pharmecy#
                        20% Discount on OPD` 
        },
        'PARAS HEALTHCARE PVT LTD': {
            "address": "1 SHOBHAGPURA CIRCLE UDAIPUR",
            "offers": `Offer I- OPD Services#
                Free UHID generation (Registration)#
            15% Dis. on doctor consultation#
            10% Dis. on Pharmacy, Physiotherapy, Radiology & Laboratory (Excluding OutsourceLab/Radiology service)#
            One Free consulation with Physicain and Dietician#
            
            Offer II- Preventive Health Checkup Packages#
            One comlimentary health checkup of INR 3500/- (One person one card per year)#
            
            Offer III- Hospitilazion Services#
            10% Dis. On hospital bill (Excluding medicines, consumables, implants & outsource services)#
            (only applicable for cash cases) maximum ceiling for discount is not more than INR 20,000/- in one bill
             `
        },
        'GEETANJALI HOPITAL': {
            "address": "Geetanjali medicity, hiran magri extn, eklingpura chouraha, udaipur, rajasthan",
            "offers": `10% Dis. On hospital bill (Excluding medicines, consumables, implants & outsource services)#
            15% Dis. on OPD base service like consultaion, athology and Radiology ` 
        },
        'GBH AMERICAN HOSPITAL': {
            "address": "3 Madhav vihar, 100 feet road, near roots opp. Nayra petrol pump shobhagpura, udaipur rajasthan 313001101, kothi bagh, bhatt ji ki bari, udaipur, rajasthan ",
            "offers": `10% Discount on OPD#
            15% Discount on OPD in house lab# 
            5% Discount on OPD pharmecy long term medicine#
            10% Discount on IPD excluding pharmecy, implant and consumable`
        },
        'GOVINDAM HOSPITAL': {
            "address": "Indraprastha Complex, Govindam hospital, opposite ICAI Bhawan Road, Sector 14, Hiran Magri, Udaipur, Gordhan Vilas Rural, Rajasthan 313002",
            "offers": `20% Discount on OPD consultancy #
            10% Discount on pharmacy, physiotherapy#
            20% Discount on blood test and Xray`
        },
        'ANANTA HOSPITAL': {
            "address": "Tehsil Siyol, Village Kaliwas, National Highway - 8, Distt, Nathdwara, Rajasthan 313002",
            "offers":  `20% Discount on IPD and OPD excluding medicines, implant and consumable and any packages rates if any.#
            Free normal delivery and cesarean section (excluding ICU charges, Blood transfusion charges, private room and any high end investigations which are not included in delivery package)#
            20% Discount on pathology service accept outsource test, xray, USG#
            10% Discount on city scan and MRI`
        },
        'PACIFIC HOSPITAL': {
            "address" : "Bhilon ka Bedla, N.H. 27, Pratap Pura, Girwa, Udaipur, Rajasthan 313001",
            "offers" : `30% Discount on IPD and OPD excluding medicines, implant and consumable and any packages rates if any.`
        }              
    }

    const location = useLocation();
    const {state} = location;
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({});
    const [showBanner, setShowBanner] = useState(false);
    const [showFooterBanner,setShowFooterBanner] = useState(false);
    const [hospitalHeader,setHospitalHeader] = useState("")
    const openPopup = (header) => {
      setHospitalHeader(header);
      setPopupContent(hospitalData[header]["offers"].split("#"));
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
           <span><span style={{verticalAlign:"top"}}><Link to="/"><HomeIcon fontSize='small'/></Link></span><span style={{verticalAlign:"top"}}><KeyboardDoubleArrowRightIcon style={{color:"#36454F"}}/></span><span style={{verticalAlign:"top"}}><b>{state.contentHeader}</b></span></span>
        </div>
        </div>
        {/* Content */}
        <div style={{backgroundColor:"#ebebea",marginTop:"3vh"}}>
            <br/>
            <br/>
            {(function() {
        const elements = [];
        for (let i = 0; i < hospitalArray.length; i++) {
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
              <h3 onClick={() => openPopup(hospitalArray[i])} style={{maxWidth:"80%",margin: "0 auto",textAlign: "center", wordWrap: "break-word",overflowWrap: "break-word"}}>{hospitalArray[i]}</h3>
              <div><h4 style={{color:"grey"}}><span>Address :-</span>{hospitalData[hospitalArray[i]]["address"].split(",")[1]?hospitalData[hospitalArray[i]]["address"].split(",")[1]:hospitalData[hospitalArray[i]]["address"].split(",")[0]}</h4></div>
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
               <h3 style={{maxWidth:"80%",margin: "0 auto",textAlign: "center", wordWrap: "break-word",overflowWrap: "break-word"}}> {hospitalArray[i]}</h3>
               <div><h4 style={{color:"grey"}}><span>Address :-</span>{hospitalData[hospitalArray[i]]["address"].split(",")[1]?hospitalData[hospitalArray[i]]["address"].split(",")[1]:hospitalData[hospitalArray[i]]["address"].split(",")[0]}</h4></div>
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
           <h4 style={{color: "white", paddingTop: "1vh"}}>Maheshwari Card</h4>
        </div>
        {/*Fixed Footer*/}
      { showFooterBanner &&
        <div className='fixed-footer'>
        </div>
      }
        </div>

    );
}