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
import { Link, useLocation } from "react-router-dom";
import "./HomePage.css";
export default function HomePage() {
  const [isVisible_1, setIsVisible_1] = useState(false);
  const [isVisible_2, setIsVisible_2] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 120);
  }, []);

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
  const [isUNMYSOpen, setIsUNMYSOpen] = useState(false);
  const openPopup = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden'; // Disable background scroll
  };
  
  const openUNMYSPopup = () => {
    setIsUNMYSOpen(true);
    document.body.style.overflow = 'hidden'; // Disable background scroll
};
  
const closeUNMYSPopup = () => {
  setIsUNMYSOpen(false);
  document.body.style.overflow = 'auto'; // Enable background scroll
};

  const closePopup = () => {
      setIsOpen(false);
      document.body.style.overflow = 'auto'; // Enable background scroll

  };
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <div className={`header-banner ${isVisible_1 ? 'visible' : ''}`}>
        <img src={logo_2} className="header-banner-logo"></img>
        <h2>UDAIPUR NAGAR MAHESHWARI YUVA SANGATHAN</h2>
        </div>
        <div className={`header-menu ${isVisible_1 ? 'visible' : ''}`}>
        <Link to = "/MaheshwariPowerCards"><Button color='primary' sx={{color : 'white'}}
        >Maheshwari Power Card Info</Button></Link>
        </div>
    <div style={{marginTop :"35vh"}}>
      <img src={logo} className="HeaderImage" />
      <br />
      <div className={`floating-box ${isVisible_1 ? 'visible' : ''}`}>
        <div style={{height: "10vh"}} />
        <h2 style={{paddingLeft: "10vw",textAlign:"center"}}>About Maheshwari Samaj</h2>
          <p style={{textAlign:"center"}}>The Maheshwari Samaj is a culturally rich community with roots in Rajasthan,
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
        <h3 style = {{lineHeight: "1",textAlign:"center"}}>ABOUT UNMYS</h3>
          <p style={{textAlign:"center"}}>The Udaipur nagar maheshwari yuva sangthan (UNMYS) is a leading organization dedicated to representing and supporting the Maheshwari  community in Udaipur district. As a prominent entity within the region, UNMYS is at the forefront of fostering unity, development and upliftment of community</p>
            <button className="open-popup-button" onClick={openUNMYSPopup}>
                Read More ....
            </button>
            {isUNMYSOpen && (
                <div className="popup-overlay_1">
                    <div className="popup-content_1">
                        <button className="close-popup-button" onClick={closeUNMYSPopup}>
                            &times;
                        </button>
                        <div className="letter">
                          <p></p>
                        <p>The Udaipur Nagar Maheshwari Yuva Sangthan (UNMYS) is a leading organization dedicated to representing and supporting the Maheshwari community in Udaipur district. As a prominent entity within the region, UNMYS is at the forefront of fostering unity, development, and upliftment of the community.</p>

<p><strong>Mission and Vision</strong></p>

<p>UNMYS is committed to the development and upliftment of the community and celebrating the rich heritage of the Maheshwari community. Its mission is to strengthen the bonds among members, promote cultural awareness, and support the personal and professional growth of youth within the community. The organization's vision is to create a vibrant, cohesive, and forward-looking Maheshwari community in Udaipur, grounded in its traditions yet responsive to contemporary challenges.</p>

<p><strong>Cultural Development</strong></p>

<p>Central to UNMYS's activities is the development and promotion of Maheshwari culture. The organization actively organizes cultural events, festivals, and workshops that highlight the community’s traditions, arts, and crafts. These initiatives not only celebrate the community's rich history but also pass on these traditions to younger generations, ensuring that cultural values remain a vital part of our daily life.</p>

<p><strong>Community Welfare</strong></p>

<p>UNMYS plays a crucial role in the welfare of its members by providing support and resources to address various needs. This includes organizing educational programs, career development workshops, and health awareness campaigns. The organization is dedicated to enhancing the overall quality of life for its members, offering assistance in areas such as education, employment, and social well-being.</p>

<p><strong>Networking</strong></p>

<p>A significant aspect of UNMYS's work is to empower its members through networking opportunities and leadership development. The organization facilitates events and platforms that allow members to connect with one another, share ideas, and collaborate on community projects. By fostering a sense of belonging and mutual support, UNMYS helps individuals leverage their skills and talents for personal and social growth.</p>

<p><strong>Social Engagement</strong></p>

<p>UNMYS actively engages with the broader Udaipur community to build alliances and partnerships that benefit its members. The organization collaborates with other local groups, institutions, and businesses to create opportunities for community involvement and impact. Through these partnerships, UNMYS aims to contribute positively to the social and economic development of Maheshwari families and aid in the development of Udaipur.</p>

<p><strong>Conclusion</strong></p>

<p>In summary, the Udaipur Nagar Maheshwari Yuva Sangathan (UNMYS) is a dynamic organization that plays a vital role in uniting, developing, and empowering the Maheshwari community in Udaipur. Its focus on cultural development, community welfare, empowerment, and engagement ensures that it remains a center point of support and growth for its members. By embracing its rich heritage and addressing contemporary needs, UNMYS continues to make a significant impact on the lives of Maheshwari youth and the Maheshwari community.</p>
<p></p>
                        </div>
                    </div>
                </div>
            )}
        <div style={{height: "8vh"}} />
      </div>
      <div style={{height: "8vh"}} />
      <Card sx={{ marginLeft: "5vw", maxWidth: 345, backgroundColor:"#FAF9F6",color:"" }}>
        <CardMedia
          sx={{ height: 250, objectFit: "cover",boxShadow:"2px 2px 5px gray",backgroundColor:"#FAF9F6" }}
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
      <Card sx={{ marginLeft: "5vw", maxWidth: 345, backgroundColor:"#FAF9F6" }}>
        <CardMedia
          sx={{ height: 250, objectFit: "cover", boxShadow:"2px 2px 5px gray" }}
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
            <Link to = "https://forms.gle/p1K5EP3nzJSD9qv49"><h3 style={{color: "white", paddingTop: "8vh"}}>Apply for Maheshwari Power Card</h3></Link>
      </div>
    </div>
    </div>
  );
}
