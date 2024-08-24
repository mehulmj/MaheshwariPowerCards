import React, { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import logo_2 from "./Logo.png";
import logo from './unmys.png'
import mayankmundraImage from "./mayankmundra.JPG"
import architpalodImage from "./architpalod.jpg"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from '@mui/material/CardActionArea'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./HomePage.css";
export default function HomePage() {
  const [isVisible_1, setIsVisible_1] = useState(false);
  const [isVisible_2, setIsVisible_2] = useState(false);
  const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {  // Adjust this value as needed
          setIsVisible_1(true);
      }
      else{
        setIsVisible_1(false);
      }
      if (scrollTop > 600) {  // Adjust this value as needed
        setIsVisible_2(true);
      }
      else{
        setIsVisible_2(false);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden'; // Disable background scroll

  };

  const closePopup = () => {
      setIsOpen(false);
      document.body.style.overflow = 'auto'; // Disable background scroll

  };
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <div className={`header-banner ${isVisible_1 ? 'visible' : ''}`}>
        <img src={logo_2} className="header-banner-logo"></img>
        <h4>UDAIPUR NAGAR MAHESHWARI YUVA SANGATHAN</h4>
        
        </div>
    <div style={{marginTop :"35vh"}}>
      <img src={logo} className="HeaderImage" />
      <br />
      <div className={`floating-box ${isVisible_1 ? 'visible' : ''}`}>
        <div style={{height: "10vh"}} />
        <h2 style={{paddingLeft: "10vw",textAlign:"center"}}>About Maheshwari Samaj</h2>
          <p>The Maheshwari Samaj is a culturally rich community with roots in Rajasthan,
              known for its strong traditions in business, trade, and philanthropy.
              Embracing unity and heritage, the Maheshwari community plays an active role
              in both preserving its distinct culture and contributing to societal welfare.</p>
        <div style={{height: "8vh"}} />
      </div>
      <br/>
      <img src={logo_2} className="HeaderImage" />
      <br />
      <div className={`floating-box-u ${isVisible_2 ? 'visible' : ''}`}>
        <div style={{height: "10vh"}} />
        <h3 style = {{lineHeight: "1",textAlign:"center"}}>UDAIPUR NAGAR MAHESHWARI YUVA SANGATHAN</h3>
          <p>The UNMYS is a prominent organization representing the Maheshwari yuva community on a udaipur level,
            fostering unity and cultural preservation. Committed to the welfare of its members, it plays a pivotal role 
            in connecting and empowering the Maheshwari community across udaipur.</p>
        <div style={{height: "8vh"}} />
      </div>
      <div style={{height: "8vh"}} />
      <Card sx={{ marginLeft: "5vw", maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 250, objectFit: "cover" }}
          image={mayankmundraImage}
          title="Mayank Mundra"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Mayank Mundra 
          </Typography>
          <Typography variant="body2" color="text.secondary">
           President
          </Typography>
          <div>
            <div style={{
              textAlign :"justify"
            }}>
            <p>Namaste!</p>
            <p>It’s a great honor to speak to you as the President of the UDAIPUR NAGAR MAHESHWARI YUVA SANGATHAN. As we explore our shared heritage, I am truly inspired by the unity and strength that bring us together.</p>
            </div>             
            <button className="open-popup-button" onClick={openPopup}>
                Read More ....
            </button>

            {isOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-popup-button" onClick={closePopup}>
                            &times;
                        </button>
                        <div className="letter">
                            <p>Namaste!</p>
                            <p>It’s a great honor to speak to you as the President of the UDAIPUR NAGAR MAHESHWARI YUVA SANGATHAN. As we explore our shared heritage, I am truly inspired by the unity and strength that bring us together.</p>
                            <p>The Maheshwari community, with its deep connections to Mewar (Rajasthan), stands as a symbol of resilience and rich cultural traditions. Our heritage includes a blend of vibrant culture, strong business skills, and a commitment to giving back. This mix of tradition and progress has shaped who we are and helps us succeed.</p>
                            <p>Our culture, with its colorful festivals, traditional arts, and beautiful craftsmanship, reflects Rajasthan's royal history. The grand palaces and heroic stories of Mewar are part of our rich background, guiding our community's values and goals.</p>
                            <p>Looking ahead, I am committed to working with each of you to help our community grow and thrive. We will work together to improve the well-being and success of every member, keeping our ancestors’ ideals alive in today’s world. Your ideas and participation are vital for our progress, and I encourage everyone to get involved with enthusiasm.</p>
                            <p>I want to thank all our members, volunteers, and leaders who have worked hard for the betterment of our community. Your dedication is the key to our achievements, and I believe we can reach even greater milestones together.</p>
                            <p>Communication is important for our success. I welcome your thoughts and suggestions to help us move forward with clear goals. Let’s continue to work together, united in our purpose and guided by our core principles.</p>
                            <p>Wishing you all success, prosperity, and fulfillment.</p>
                            <p>Warm regards,</p>
                            <p>MAYANK MUNDRA<br/>President <br/>UDAIPUR NAGAR MAHESHWARI YUVA SANGATHAN</p>
                        </div>
                    </div>
                </div>
            )}
        </div>

        </CardContent>
      </Card>
      <br/>
      <Card sx={{ marginLeft: "5vw", maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 250, objectFit: "cover" }}
          image={architpalodImage}
          title="Archit Palod"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Archit Palod
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Secretary
          </Typography>
        </CardContent>
      </Card>
      <br/>
      <div className='Footer'>
            <Link to = "/MaheshwariPowerCards"><h3 style={{color: "white", paddingTop: "8vh"}}>Maheshwari Card</h3></Link>
      </div>
    </div>
    </div>
  );
}
