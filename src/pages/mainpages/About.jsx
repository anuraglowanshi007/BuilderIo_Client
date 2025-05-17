import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, Card, CardContent } from "@mui/material";
import { styled } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from "../../Assets/woman-working-laptop-about.jpg"; 
import teamMember1 from "../../Assets/team-member1.jpg"; 
import teamMember2 from "../../Assets/team-member2.webp";
import teamMember3 from "../../Assets/team-member3.webp";


const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #6B48FF 0%, #00DDEB 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  background: '#fff',
  borderRadius: '16px',
  textAlign: 'center',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#f9f9f9',
  },
  position: 'relative',
  overflow: 'hidden',
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center"
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  opacity: 1,
  '.FeatureCard:hover &': {
    opacity: 0.9,
    transform: 'translateY(-5px)',
  },
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  opacity: 1,
  '.FeatureCard:hover &': {
    opacity: 0.9,
    transform: 'translateY(-5px)',
  },
}));

const FeatureImage = styled('img')(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '.FeatureCard:hover &': {
    transform: 'scale(1.1)',
  },
}));
const TeamCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  "&:hover": {
    transform: "scale(1.05)",
  },
}));


const ChecklistItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: '0.5rem 1rem',
  marginBottom: '0.5rem',
}));

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: false,
      easing: 'ease-in-out',
      offset: 200,
      anchorPlacement: 'top-bottom',
      disable: window.innerWidth < 320,
    });
    AOS.refresh();
  }, []);

  const features = [
    { title: "Effortless Editing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." ,img:"https://img.icons8.com/fluency/48/cosmetic-brush.png" },
    { title: "Saving Automation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.", img:"https://img.icons8.com/doodle/48/opened-folder--v3.png" },
    { title: "Smart Enhancements", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper." , img:"https://img.icons8.com/external-kmg-design-flat-kmg-design/64/external-color-picker-graphic-design-kmg-design-flat-kmg-design.png"},
    { title: "High-Quality Output", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.", img:"https://img.icons8.com/fluency/48/imac-exit-1.png" },
  ];

  const teamMembers = [
    { name: "Oliver James", role: "AI Engineer", image: teamMember1 },
    { name: "Oliver James", role: "AI Engineer", image: teamMember2 },
    { name: "Oliver James", role: "AI Engineer", image: teamMember3 },
  ];

  return (
    <Box sx={{  minHeight: '100vh', color: 'black' }}>
      <Container maxWidth={false} sx={{ padding: { xs: '0 1rem', sm: '0 2rem', md: '0 3rem' } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: { xs: "27%", sm: "20%", md: "12%", lg:"7%" },
            px: { xs: 1, sm: 2, md: 6 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              mb: 2,
              color:'black'
            }}
            data-aos="fade-up"
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{   
              textAlign: "center",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              maxWidth: { xs: "95%", sm: "90%", md: "600px" },
              color:"black"
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 10, sm: 7, md: 6 },
            py: { xs: 1, sm: 4, md: 6 },
            px: { xs: 1, sm: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
            }}
            data-aos="fade-right"
          >
            <img
              src={heroImage}
              alt="Team working on photo editing"
              style={{ width: "100%", height: "50vh", display: "block" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
              display:"flex",
              flexDirection:"column",
              alignItems: { xs: "center", sm:"center", md: "baseline" },
            }}
            data-aos="fade-left"
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                mb: 2,
                lineHeight: 1.2,
                color:"black"
              }}
            >
              Revolutionizing Photo Editing, One Click at a Time
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                color: "black",
                mb: 3,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Box sx={{display:{ xs: "block", sm: "block", md: 'flex' }, width:"100%" ,}}>
            <Box sx={{ display: "flex", flexDirection: "column",width:{ xs: "100%", md: "50%" }, mb: 3 }}>
              <ChecklistItem>
                <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, color: "#black" ,padding:"3%", backgroundColor:"#00ff00", borderRadius:"25%" }}>
                  ✓
                </Typography>
                <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, color: "black" }}>
                  User-Friendly Interface
                </Typography>
              </ChecklistItem>
              <ChecklistItem>
                <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, color: "#black" ,padding:"3%", backgroundColor:"#00ff00", borderRadius:"25%" }}>
                  ✓
                </Typography>
                <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, color: "black" }}>
                  Seamless Creativity
                </Typography>
              </ChecklistItem>
              <ChecklistItem>
                <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, color: "#black" ,padding:"3%", backgroundColor:"#00ff00", borderRadius:"25%" }}>
                  ✓
                </Typography>
                <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, color: "black" }}>
                  Cloud-Based Convenience
                </Typography>
              </ChecklistItem>
            </Box>
            <Box sx={{ display: "flex", gap: 1,width:{ xs: "100%", md: "50%" }, justifyContent: { xs: "center", md: "flex-start" }, mb: 3, alignItems: "center",flexDirection:"column" }}>
              <Box
                sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: { xs: '0.5rem', sm: '0.75rem', md: '1rem' },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "3rem", sm: "2rem", md: "2.5rem" },
                    color: "#00FF00",
                    pt:{ xs: 1, sm: 3, md: 4},
                  }}
                >
                  10+
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.5rem", sm: "1rem", md: "1.5rem" },
                }}
              >
                Trusted Country
              </Typography>
            </Box>
            </Box>
            <Button
              sx={{
                backgroundColor: "#6B48FF",
                padding: { xs: "0.5rem 1rem", sm: "0.75rem 1.5rem" },
                color: "white",
                fontWeight: 600,
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#5436CC",
                },
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              aria-label="Learn more about our services"
            >
              Learn More
            </Button>
          </Box>
        </Box>
          <Box
          sx={{
            py: { xs: 2, sm: 4, md: 6 },
            px: { xs: 1, sm: 2, md: 4 },
            textAlign: "center",
          }}
        >
          <GradientText
            variant="h3"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              mb: 2,
            }}
            data-aos="zoom-in"
          >
            Smart Editing, Smarter Choice
          </GradientText>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              color: "black",
              maxWidth: { xs: "95%", sm: "90%", md: "600px" },
              mx: "auto",
              mb: 4,
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, sm: 3, md: 4 },
              justifyContent: "center",
            }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                sx={{
                  width: { xs: "100%", sm: "35%", md: "20%" },
                  height:"35vh",
                  padding: { xs: '2rem 1.5rem ', sm: '2rem 1.5rem', md: '2rem' },
                }}
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
                className="FeatureCard"
              >
                <Box>
                  <FeatureImage
                    src={feature.img}
                    alt={feature.title}
                    style={{ marginBottom: '1rem' }}
                    height={60}
                    width={60}
                  />
                </Box>
                <FeatureTitle
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2.2rem", md: "1.25rem" },
                    color: "#000",
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  {feature.title}
                </FeatureTitle>
                <FeatureDescription
                  variant="body2"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.3rem", md: "1rem" },
                    color: "#666",
                  }}
                >
                  {feature.description}
                </FeatureDescription>
              </FeatureCard>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            py: { xs: 2, sm: 4, md: 6 },
            px: { xs: 1, sm: 2, md: 4 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              mb: 2,
            }}
            data-aos="zoom-in"
          >
            The Team Powering AI Creativity
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              color: "black",
              maxWidth: { xs: "95%", sm: "90%", md: "600px" },
              mx: "auto",
              mb: 4,
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, sm: 3, md: 4 },
              justifyContent: "center",
            }}
          >
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                sx={{
                  width: { xs: "100%", sm: "45%", md: "30%" },
                }}
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: "400px", sm: "250px", md: "300px" },
                      borderRadius: '12px',
                      overflow: 'hidden',
                      mb: 2,
                      position:"relative" 
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", }}
                    />
                  </Box>
                  <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "1.3rem", sm: "1.3rem", md: "1.9rem" },
                      fontWeight: 600,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                      color: "black",
                      mb: 2,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                    <Box sx={{ width: "30px", height: "30px", borderRadius: "50%", bgcolor: "#3b5998", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Typography sx={{ color: "#fff" }}>f</Typography>
                    </Box>
                    <Box sx={{ width: "30px", height: "30px", borderRadius: "50%", bgcolor: "#1DA1F2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Typography sx={{ color: "#fff" }}>t</Typography>
                    </Box>
                    <Box sx={{ width: "30px", height: "30px", borderRadius: "50%", bgcolor: "#0077B5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Typography sx={{ color: "#fff" }}>in</Typography>
                    </Box>
                  </Box>
                  </Box>
                </CardContent>
              </TeamCard>
            ))}
          </Box>
          <Button
            sx={{
              backgroundColor: "#6B48FF",
              padding: { xs: "0.5rem 1rem", sm: "0.75rem 1.5rem" },
              mt: 4,
              color: "white",
              fontWeight: 600,
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#5436CC",
              },
            }}
            aria-label="See more team members"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            See More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;