import React, { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./Mpc.css";
import HomeIcon from '@mui/icons-material/Home';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from "react-router-dom";
export default function Mpc()
{   
    const content_items = [
    'Hospitals',
    'Doctor',
    'Physiotherapy',
    'Diagnostics',
    'Pharmacy',
    'Hotels',
    'Restaurant',
    'Cafe & Ice Cream Parlour',
    'Bakery',
    'Salon-Parlour & Cosmetics Store',
    'Sports Academy',
    'Jewellery',
    'Yoga & Gym',
    'Event Management & Sound',
    'Apparel & Home Decore',
    'Hardware & Electronics',
    'Automobiles',
    'Consultancy',
    'E-Commerce & Supports',
    'Foreign Travel & Exchanges',
    'E-Mitra',
    'Insurance & Finance',
    'Grocery & General Items',
    'Marbles & Granite & Tiles',
    'Industry'];
    const [showBanner, setShowBanner] = useState(false);
      const [isExpanded, setIsExpanded] = useState(false);
    
      const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
      };
    
      const text = `The Maheshwari Power Card is designed to offer significant discounts and favorable rates across various sectors, including businesses and professions, to all members of the Maheshwari community. Its primary goal is to help Maheshwari families save money while encouraging increased transactions within the community. The discounts provided through the card are valid for a specified period, but the exact duration of these discounts does not need to be mentioned. Overall, the card aims to strengthen community ties by promoting mutual support and engagement among its members.`;
    
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
                   <span><span style={{verticalAlign:"top"}}><Link to="/"><HomeIcon fontSize='small'/></Link></span><span style={{verticalAlign:"top"}}><KeyboardDoubleArrowRightIcon style={{color:"#36454F"}}/></span><span style={{verticalAlign:"top"}}><b>Maheshwari Power Card</b></span></span>
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
                    <div
                    className="body-header-content"
      style={{
        marginLeft: "35vw",
        marginRight: "10vw",
        lineHeight: "1.8",
        fontSize: "2vh",
        color: "grey",
        textAlign: "justify",
      }}
    >
      {isExpanded ? text : `${text.substring(0, 100)}...`}
      <span
        onClick={toggleReadMore}
        style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </span>
    </div>
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
          image={require(`./Images/` + content_items[i] +`.JPG`)}
          title={content_items[i]}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {content_items[i]}
          </Typography>
            </CardContent>
        </Card>
        </Link>
        <div style={{height:"2vh"}}/>  
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