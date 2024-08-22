import React, { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import hospitalback from "./hospitalback.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./Mpc.css";
import { Link } from "react-router-dom";
export default function Mpc()
{   
    const content_items = ['Hospitals','Diagnostic Center','Doctors','Pharmacy','Physiotherapy','Restaruant','Hotels','GYM','Bakery',
'Sports Academy','Apparels','Hardware','Grocery','Jewellary','Automobile','Tution Center','Consultancy','Others'];
    const content_images = ['Doctor.jpeg','Daignostics centre.JPG','Doctor.jpeg',''];
    const [showBanner, setShowBanner] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150) {  // Change this value based on when you want the banner to appear
          setShowBanner(true);
      } else {
          setShowBanner(false);
      }
    };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
                  {/* Banner Area */}
            {showBanner && (
            <div className="fixed-banner">
              
            </div>
            )}
            <div className="header">
                <div className="header-content">
                   <h3> Maheshwari Power Card</h3>
                </div>
            </div>
            <div className="body">
                <div className="bodyHeader">
                    <h3 style={{ display: "flex", alignItems: "baseline", marginLeft:"10vw" }}>
                        <b style={{ fontSize: "5vh", color: "gold", lineHeight: "1" }}>
                            &mdash;&mdash;&mdash;
                        </b>
                        <div style={{ display: "inline-block", flexDirection: "column", justifyContent: "center", fontSize:"4vh"}}>
                            <span>&nbsp;&nbsp;Power</span>
                            <span style={{ color: "red" }}>&nbsp;cards</span>
                        </div>
                    </h3>
                    <div className="body-header-content" style={{marginLeft:"35vw",marginRight:"10vw",lineHeight:"1.8",fontSize: "2vh",color:"grey",textAlign:"justify"}}>We offer various discount coupons to our clients. These coupons are valid for a period of time and of course not to mention</div>
                    <br/>
                    <div className="body-content">
      {(function() {
        const elements = [];
        for (let i = 0; i < content_items.length; i++) {
          elements.push(<div key={i}>
            <Link to = "/Content" state = {{contentHeader : content_items[i]}}>
            <Card sx={{ marginLeft: "5vw", maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 200, objectFit: "cover" }}
          image={hospitalback}
          title={content_items[i]}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {content_items[i]}
          </Typography>
            </CardContent>
        </Card>
        </Link>
          </div>);
        }
        return elements;
      })()}
    </div>      
    <div style={{height:"10vh"}}/>  
                    </div>
                </div>
            {/*Footer*/}
            { showBanner &&
        <div className='fixed-footer'>
        </div>
      }
            </div>
    );
}