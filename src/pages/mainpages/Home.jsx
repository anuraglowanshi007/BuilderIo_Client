import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Rating, List, ListItem, ListItemIcon, ListItemText, Checkbox } from "@mui/material";
import { styled } from '@mui/system';
import dragimg from "../../assets/dragimg.png";
import typographyimg from "../../assets/typography.png";
import themimg from "../../assets/themimg.png";
import background from "../../assets/background.jpg";
import webcardping1 from "../../assets/webcardping1.png";
import webcardping2 from "../../assets/webcardping2.png";
import webcardping3 from "../../assets/webcardping3.png";
import Homebg from "../../assets/Homebg.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const GradientBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  flexDirection: { xs: 'column', md: 'row' },
  gap: 2,
  width: '100%',
  boxSizing: 'border-box',
  padding: { xs: '1rem', sm: '2rem', md: '3rem' },
}));

const MockupImage = styled('img')({
  width: '100%',
  height: 'auto',
  maxHeight: '70vh',
  boxShadow: 'none',
  borderRadius: '10px',
  objectFit: 'contain',
});

const Home = () => {
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

  const checklistItems = [
    'Clean UI Design',
    'Modern & Minimalistic Style',
    'Organized Layers',
  ];

  const mockups = [
    { top: '0%', left: '0%', rotate: 0, src: webcardping1 },
  ];

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
      <Container maxWidth={false} sx={{ padding: { xs: '0 1rem', sm: '0 2rem', md: '0 3rem' } }}>
        <GradientBox sx={{ bgcolor: '#f5f7f3', minHeight: '70vh', py: { xs: 4, md: 6 }, background: 'linear-gradient(to bottom, #f5f7f3, #e6f0fa)' }} data-aos="fade-up">
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
              <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  Create a professional, free
                   website in minutes
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    mb: 4,
                    maxWidth: '500px',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque tellus nec sagittis, mauris rhoncus placerat et.
                </Typography>
                <Link
                to="/login">
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#6B48FF',
                    color: 'white',
                    textTransform: 'none',
                    padding: { xs: '0.5rem 1rem', md: '0.75rem 2rem' },
                    '&:hover': { bgcolor: '#5438CC' },
                  }}
                >
                  Start Free
                </Button>
                </Link>
              </Box>
              <Box sx={{ flex: 1 }}>
                <MockupImage src={Homebg} alt="Hero Illustration" />
              </Box>
            </Box>
          </Container>
        </GradientBox>

        <Box
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, sm: 6, md: 8 },
            alignItems: "center",
            py: { xs: 2, sm: 4, md: 6 },
            px: { xs: 1, sm: 2, md: 4 },
          }}
        >
          <Typography
            component={"span"}
            variant="h4"
            sx={{
              marginTop: "2%",
              borderBottom: "4px solid black",
              width: "fit-content",
              fontWeight: 600,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
            data-aos="zoom-in"
          >
            Tools
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 8, sm: 6, md: 4 },
              alignItems: "center",
              width: { xs: "100%", md: "90%", lg: "80%" },
              mx: "auto",
            }}
          >
            <Box
              component={"div"}
              sx={{
                maxHeight: { xs: "300px", sm: "350px", md: "400px" },
                width: { xs: "100%", sm: "50%" },
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: { xs: "6px", sm: "8px" },
                justifyContent: "center",
                px: { xs: 1, sm: 2 },
                order: { xs: 1, sm: 1 },
              }}
              data-aos="fade-left"
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                  paddingTop: { xs: "0.5rem", sm: "1rem" },
                }}
              >
                Drag and Drop Builder
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  color: "text.secondary",
                }}
              >
                to create professional websites
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  maxWidth: { xs: "95%", sm: "90%", md: "500px" },
                }}
              >
                Choose a template to design your website by dragging and dropping elements onto the page.
              </Typography>
              <Button
                sx={{
                  backgroundColor: "black",
                  padding: { xs: "0.5rem 1rem", sm: "0.75rem 1.5rem" },
                  width: { xs: "60%", sm: "40%", md: "30%" },
                  minWidth: { xs: "120px", sm: "150px" },
                  mt: { xs: 1, sm: 2 },
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
                aria-label="Learn more about Drag and Drop Builder"
              >
                learn more
              </Button>
            </Box>
            <Box
              component={"div"}
              sx={{
                maxHeight: { xs: "300px", sm: "350px", md: "400px" },
                width: { xs: "100%", sm: "50%" },
                overflow: "hidden",
                order: { xs: 2, sm: 2 },
              }}
              data-aos="zoom-in"
            >
              <img
                src={dragimg}
                alt="dragimg"
                style={{ height: "100%", width: "100%", objectFit: "cover", display: "block" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 8, sm: 6, md: 4 },
              alignItems: "center",
              width: { xs: "100%", md: "90%", lg: "80%" },
              mx: "auto",
            }}
          >
            <Box
              component={"div"}
              sx={{
                maxHeight: { xs: "300px", sm: "350px", md: "400px" },
                width: { xs: "100%", sm: "50%" },
                overflow: "hidden",
                order: { xs: 2, sm: 1 },
              }}
              data-aos="fade-right"
            >
              <img
                src={typographyimg}
                alt="typographyimg"
                style={{ height: "100%", width: "100%", objectFit: "cover", display: "block" }}
              />
            </Box>
            <Box
              component={"div"}
              sx={{
                maxHeight: { xs: "300px", sm: "350px", md: "400px" },
                width: { xs: "100%", sm: "50%" },
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: { xs: "6px", sm: "8px" },
                justifyContent: "center",
                px: { xs: 1, sm: 2 },
                order: { xs: 1, sm: 2 },
              }}
              data-aos="fade-up"
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                  paddingTop: { xs: "0.5rem", sm: "1rem" },
                }}
              >
                Typography
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  maxWidth: { xs: "95%", sm: "90%", md: "500px" },
                }}
              >
                Choose the best font for reading on screen by using typography which describes the creative design of text on your web pages.
              </Typography>
              <Button
                sx={{
                  backgroundColor: "black",
                  padding: { xs: "0.5rem 1rem", sm: "0.75rem 1.5rem" },
                  width: { xs: "60%", sm: "40%", md: "30%" },
                  minWidth: { xs: "120px", sm: "150px" },
                  mt: { xs: 1, sm: 2 },
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
                aria-label="Learn more about Typography"
              >
                learn more
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 8, sm: 6, md: 4 },
              alignItems: "center",
              width: { xs: "100%", md: "90%", lg: "80%" },
              mx: "auto",
            }}
          >
            <Box
              component={"div"}
              sx={{
                maxHeight: { xs: "300px", sm: "350px", md: "400px" },
                width: { xs: "100%", sm: "50%" },
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: { xs: "6px", sm: "8px" },
                justifyContent: "center",
                px: { xs: 1, sm: 2 },
                order: { xs: 1, sm: 1 },
              }}
              data-aos="fade-right"
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                  paddingTop: { xs: "0.5rem", sm: "1rem" },
                }}
              >
                Theme
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  maxWidth: { xs: "95%", sm: "90%", md: "500px" },
                }}
              >
                Use a widget for your website interface that allows you to provide functionality such as chat, a newsletter, or a blog feed.
              </Typography>
              <Button
                sx={{
                  backgroundColor: "black",
                  padding: { xs: "0.5rem 1rem", sm: "0.75rem 1.5rem" },
                  width: { xs: "60%", sm: "40%", md: "30%" },
                  minWidth: { xs: "120px", sm: "150px" },
                  mt: { xs: 1, sm: 2 },
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
                aria-label="Learn more about Theme"
              >
                learn more
              </Button>
            </Box>
            <Box
              component={"div"}
              sx={{
                maxHeight: { xs: "300px", sm: "350px", md: "400px" },
                width: { xs: "100%", sm: "50%" },
                overflow: "hidden",
                order: { xs: 2, sm: 2 },
              }}
              data-aos="zoom-in"
            >
              <img
                src={themimg}
                alt="themimg"
                style={{ height: "100%", width: "100%", objectFit: "cover", display: "block" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              width: "100%",
              height: { xs: "300px", sm: "400px", md: "500px" },
              borderRadius: 2,
              overflow: 'hidden',
              mx: "auto",
            }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={background}
              alt="Builder"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(60%)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
                px: { sm: 2, md: 4 },
                flexDirection: "column",
                gap: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                  paddingTop: { xs: "0.5rem", sm: "1rem" },
                  maxWidth: { xs: "95%", sm: "90%", md: "800px" },
                }}
              >
                You can create a website using a builder
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  maxWidth: { xs: "95%", sm: "90%", md: "600px" },
                }}
              >
                It is a tool that allows users to create their website without writing any code. Users can also add multiple features, and the platform provides hosting services as well.
              </Typography>
              <Button
                sx={{
                  backgroundColor: "black",
                  padding: { xs: "0.5rem 1rem", sm: "0.75rem 1.5rem" },
                  width: { xs: "60%", sm: "40%", md: "25%" },
                  minWidth: { xs: "120px", sm: "150px" },
                  mt: { xs: 1, sm: 2 },
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
                aria-label="Learn more about website builder"
              >
                learn more
              </Button>
            </Box>
          </Box>

          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 3, sm: 4, md: 6 },
              alignItems: "center",
              py: { xs: 2, sm: 4, md: 6 },
              px: { xs: 1, sm: 2, md: 4 },
            }}
          >
            <Typography
              component={"span"}
              variant="h4"
              sx={{
                marginTop: "2%",
                borderBottom: "4px solid black",
                width: "fit-content",
                fontWeight: 600,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              }}
              data-aos="zoom-in"
            >
              What Our Users Say
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, sm: 3, md: 4 },
                width: { xs: "100%", md: "90%", lg: "80%" },
                mx: "auto",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: { xs: "100%", sm: "33%" },
                  minHeight: "180px",
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <CardContent sx={{ textAlign: "center", p: { xs: 2, sm: 3 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                    John Doe
                  </Typography>
                  <Rating value={5} readOnly sx={{ mb: 1 }} />
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
                  >
                    "Builder made it so easy to build my website! I had a professional site up in minutes with their drag-and-drop builder."
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: { xs: "100%", sm: "33%" },
                  minHeight: "180px",
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <CardContent sx={{ textAlign: "center", p: { xs: 2, sm: 3 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                    Sarah Smith
                  </Typography>
                  <Rating value={4.5} readOnly sx={{ mb: 1 }} />
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
                  >
                    "The typography options are fantastic! My website looks clean and professional, thanks to builder."
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: { xs: "100%", sm: "33%" },
                  minHeight: "180px",
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <CardContent sx={{ textAlign: "center", p: { xs: 2, sm: 3 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                    Mike Johnson
                  </Typography>
                  <Rating value={5} readOnly sx={{ mb: 1 }} />
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
                  >
                    "I love the themes! Adding widgets like a chat feature was a game-changer for my business."
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>

 <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 3, md: 4 },
            position: 'relative',
          }}
        >
          <GradientBox
            sx={{ 
              zIndex: 1, 
              background: 'linear-gradient(135deg, #6B48FF 0%, #00DDEB 100%)', 
              height: { xs: "auto", sm: "70vh", md: "80vh" },
              minHeight: { xs: "600px", sm: "700px" },
            }}
            data-aos="fade-up"
          >
            <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: 'center', md: 'left' }, px: { xs: 1, sm: 2, md: 4 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                  lineHeight: 1.2,
                  mb: { xs: 2, sm: 3, md: 4 },
                }}
              >
                UI/UX Designer For Modern Websites & Apps
              </Typography>
              <List>
                {checklistItems.map((item, index) => (
                  <ListItem key={index} sx={{ padding: 0, mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <ListItemIcon>
                      <Checkbox
                        checked
                        sx={{
                          color: '#fff',
                          '&.Mui-checked': { color: '#fff' },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                        fontWeight: 'medium',
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box sx={{ flex: 1, position: 'relative', height: '100%', width: { xs: '100%', md: '50%' }, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {mockups.map((mockup, index) => (
                <MockupImage
                  key={index}
                  src={mockup.src}
                  alt={`Mockup ${index + 1}`}
                  sx={{
                    top: mockup.top,
                    left: mockup.left,
                    transform: `rotate(${mockup.rotate}deg)`,
                    maxWidth: { xs: '90%', sm: '80%', md: '70%' },
                  }}
                />
              ))}
            </Box>
          </GradientBox>
          <GradientBox
            sx={{
              zIndex: 2,
              background: '#FFE8E1',
              height: { xs: "auto", sm: "70vh", md: "80vh" },
              minHeight: { xs: "600px", sm: "700px" },
              py: { xs: 2, sm: 3, md: 4 },
              borderRadius: { xs: "0 50px 0 50px", sm: "0 100px 0 100px" },
            }}
            data-aos="fade-up"
          >
            <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: 'center', md: 'left' }, px: { xs: 1, sm: 2, md: 4 } }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                  lineHeight: 1.2,
                  color: '#D4A017',
                  mb: 1,
                }}
              >
                Furniture
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                  lineHeight: 1.2,
                  color: '#D4A017',
                  mb: 2,
                }}
              >
                Landing Page
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                  color: '#666',
                  maxWidth: { xs: '95%', sm: '90%', md: '500px' },
                  mb: 3,
                }}
              >
                The e-commerce website design template is easy to customize, making it even easier for you to design your next website or project, and speed up your design workflow.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, position: 'relative', height: '100%', width: { xs: '100%', md: '50%' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MockupImage
                src={webcardping2}
                alt="Furniture Landing Page Mockup"
                sx={{
                  width: { xs: '90%', sm: '80%', md: '70%' },
                  height: 'auto',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #ddd',
                }}
              />
            </Box>
          </GradientBox>
          <GradientBox
            sx={{
              zIndex: 3,
              background: '#cbc6a3',
              height: { xs: "auto", sm: "70vh", md: "80vh" },
              minHeight: { xs: "600px", sm: "700px" },
              py: { xs: 2, sm: 3, md: 4 },
              borderRadius: { xs: "50px 0 50px 0", sm: "100px 0 100px 0" },
            }}
            data-aos="fade-up"
          >
            <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: 'center', md: 'left' }, px: { xs: 1, sm: 2, md: 4 } }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                  lineHeight: 1.2,
                  color: '#000',
                  mb: 1,
                }}
              >
                SKIN CARE
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                  lineHeight: 1.2,
                  color: '#000',
                  mb: 2,
                }}
              >
                MADE SIMPLE & AFFORDABLE
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                  color: '#666',
                  maxWidth: { xs: '95%', sm: '90%', md: '500px' },
                  mb: 3,
                }}
              >
                Fauci elit, vulputate metus lacus vulputate sed, facilisis nec sagittis, mauris suspendisse nec sagittis, mauris rhoncus placerat et tincidunt et rhoncus placerat et fusce.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    fontWeight: 'bold',
                    color: '#FF0000',
                  }}
                >
                  100% SAFE
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    fontWeight: 'bold',
                    color: '#000',
                  }}
                >
                  NATURAL
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    fontWeight: 'bold',
                    color: '#000',
                  }}
                >
                  ORGANIC
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    fontWeight: 'bold',
                    color: '#000',
                  }}
                >
                  MILD AND HEALTHY
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 1, position: 'relative', height: '100%', width: { xs: '100%', md: '50%' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MockupImage
                src={webcardping3}
                alt="Beauty Shop Landing Page Mockup"
                sx={{
                  width: { xs: '90%', sm: '80%', md: '70%' },
                  height: 'auto',
                }}
              />
            </Box>
          </GradientBox>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;