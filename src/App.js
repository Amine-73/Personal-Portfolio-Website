import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CardActions from "@mui/material/CardActions";
// Define a custom theme for Material-UI
const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#2196F3", // Blue
    },
    secondary: {
      main: "#9C27B0", // Purple
    },
    background: {
      default: "#f5f5f5", // Light grey
      paper: "#ffffff", // White
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999, // Full rounded corners
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Rounded corners for cards
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.03)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: "0 0 16px 16px", // Rounded bottom corners
        },
      },
    },
  },
});

// Main App component
const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides a consistent baseline for styling */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* Google Fonts - Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Header/Navigation */}
        <AppBar
          position="fixed"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: "white",
            boxShadow: 3,
          }}
        >
          <Toolbar
            sx={{ justifyContent: "space-between", paddingX: { xs: 2, md: 6 } }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            >
              Amine Channa
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              <Button
                color="inherit"
                onClick={() => scrollToSection("home")}
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: theme.palette.primary.main },
                }}
                startIcon={<HomeIcon />}
              >
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => scrollToSection("about")}
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: theme.palette.primary.main },
                }}
                startIcon={<PersonIcon />}
              >
                About
              </Button>
              <Button
                color="inherit"
                onClick={() => scrollToSection("projects")}
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: theme.palette.primary.main },
                }}
                startIcon={<WorkIcon />}
              >
                Projects
              </Button>
              <Button
                color="inherit"
                onClick={() => scrollToSection("contact")}
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: theme.palette.primary.main },
                }}
                startIcon={<MailIcon />}
              >
                Contact
              </Button>
            </Box>
            {/* Mobile menu button */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="menu"
                sx={{ color: "text.secondary" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          id="home"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to bottom right, #2196F3, #9C27B0)", // Blue to Purple gradient
            color: "white",
            paddingTop: { xs: "64px", md: 0 }, // Account for fixed header on small screens
          }}
        >
          <Box sx={{ textAlign: "center", padding: 3, maxWidth: "md" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", md: "4.5rem" },
                marginBottom: 2,
                lineHeight: 1.2,
              }}
            >
              Hi, I'm{" "}
              <Box component="span" sx={{ color: "#FFEB3B" }}>
                Amine Channa
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                marginBottom: 4,
                opacity: 0.9,
              }}
            >
              A passionate Web Developer building awesome web experiences.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: theme.palette.primary.main,
                fontWeight: "semibold",
                padding: "12px 32px",
                boxShadow: 3,
                "&:hover": {
                  backgroundColor: theme.palette.grey[100],
                  transform: "scale(1.05)",
                },
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
          </Box>
        </Box>

        {/* About Section */}
        <Container
          id="about"
          maxWidth="md"
          sx={{
            py: 8,
            my: 4,
            backgroundColor: "background.paper",
            borderRadius: 4,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{ marginBottom: 6, color: theme.palette.primary.dark }}
          >
            About Me
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  color: "text.primary",
                  marginBottom: 2,
                }}
              >
                I am a results-driven Fullstack Developer and Software
                Engineering student with a focus on the MERN stack (MongoDB,
                Express.js, React, Node.js). My passion lies in bridging the gap
                between elegant front-end design and robust back-end
                architecture to create high-performance web applications.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  color: "text.primary",
                  marginBottom: 2,
                }}
              >
                With a foundational background in Computer Science (BTS/DSI) and
                a Licence Professionnelle, I am currently advancing my technical
                expertise at ENSI, where I focus on software architecture and
                enterprise-level systems. I thrive on solving complex problems
                and optimizing code for speed and scalability.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  color: "text.primary",
                }}
              >
                🛠️ Technical Toolkit: Frontend: React.js, JavaScript (ES6+),
                TypeScript, HTML5, CSS3, Tailwind CSS, Material-UI, Bootstrap.
                Backend: Node.js, Express.js, RESTful APIs, JWT Authentication.
                Database: MongoDB, Mongoose, SQL. Tools: Git, GitHub, Postman,
                Netlify.
              </Typography>
            </Grid>
          </Grid>
        </Container>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 bg-gray-50 px-6 md:px-12 rounded-lg shadow-md mx-4 md:mx-auto my-8 max-w-4xl"
        >
          <Container>
            <Grid
              container
              spacing={2}
              rowSpacing={2}
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid size={6}>
                <Card sx={{ maxWidth: 545 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MStPl7J2AdDB_Hntbo1_fG9K1vU-AyDbmA&s"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Travel Agency
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Welcome to the repository for my Travel Agency Website!
                      This project is a static website built using HTML and CSS,
                      designed to showcase the services and offerings of a
                      travel agency. The website features a clean and responsive
                      layout, making it easy for users to explore travel
                      destinations, view packages, and get in touch with the
                      agency.
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        marginBottom: 1,
                        marginTop: 2,
                      }}
                    >
                      <Chip label="HTML" color="error" size="small" />
                      <Chip label="CSS" color="warning" size="small" />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      href="https://actravelagency.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mt: "auto", marginLeft: "8px" }}
                    >
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid size={6}>
                <Card sx={{ maxWidth: 545 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image="https://i.pinimg.com/736x/6d/3e/a2/6d3ea2c070a6bc28c83a2e15959f22b5.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Bergers Menu
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      A responsive restaurant menu website built using HTML,
                      CSS, and Bootstrap. This project showcases a clean and
                      modern design for a burger restaurant, featuring a
                      visually appealing layout, smooth navigation, and full
                      responsiveness for both desktop and mobile devices.
                      Perfect for demonstrating frontend development skills and
                      Bootstrap expertise.
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        marginBottom: 1,
                        marginTop: 2,
                      }}
                    >
                      <Chip label="HTML" color="error" size="small" />
                      <Chip label="Bootsrap" color="success" size="small" />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      href="https://berger-s-menu.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mt: "auto", marginLeft: "8px" }}
                    >
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid size={6}>
                <Card sx={{ maxWidth: 545 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHAgDL31Y_5ZsIei5KIclB5kp60wAtVSF0A&s"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Small Card Weather
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      A dynamic and responsive Weather Application built with
                      React and styled using Material-UI. This project leverages
                      modern React hooks (useState, useEffect, useMemo) for
                      efficient state management and performance. It integrates
                      with a weather API using axios to fetch real-time weather
                      data and utilizes the moment package for elegant date and
                      time handling, providing users with up-to-date forecasts
                      in a clean and intuitive interface.
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        marginBottom: 1,
                        marginTop: 2,
                      }}
                    >
                      <Chip label="React" color="primary" size="small" />
                      <Chip
                        label="Material-UI"
                        color="secondary"
                        size="small"
                      />
                      <Chip label="API" color="danger" size="small" />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      href="https://guileless-jelly-232353.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mt: "auto", marginLeft: "8px" }}
                    >
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid size={6}>
                <Card sx={{ maxWidth: 545 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFb0b4D0QjeeepuAa1nmcksjmNSC0dfRijA&s"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      TodoList
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      A responsive To-Do List web application built with React,
                      featuring a clean and intuitive user interface designed
                      with Material-UI. This project demonstrates the effective
                      use of React hooks such as useState for managing
                      application state, useEffect for side effects (like data
                      persistence), and useMemo for performance optimization,
                      providing a smooth and efficient task management
                      experience."
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        marginBottom: 1,
                        marginTop: 2,
                      }}
                    >
                      <Chip label="React" color="primary" size="small" />
                      <Chip
                        label="Material-UI"
                        color="secondary"
                        size="small"
                      />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      href="https://getion-des-tache.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mt: "auto", marginLeft: "8px" }}
                    >
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>
        {/*======== Projects Section============ */}

        {/* Contact Section */}
        <Container
          id="contact"
          maxWidth="sm"
          sx={{
            py: 8,
            my: 4,
            backgroundColor: "background.paper",
            borderRadius: 4,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{ marginBottom: 6, color: theme.palette.primary.dark }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "text.primary",
              marginBottom: 2,
            }}
          >
            I am always open to collaborating on innovative projects or
            discussing the latest trends in web development. Whether it’s a
            freelance opportunity or a technical challenge, let’s connect and
            build something impactful!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "text.primary",
              marginBottom: 4,
            }}
          >
            Email me at:{" "}
            <Link
              href="mailto:your.email@example.com"
              color="primary"
              sx={{
                fontWeight: "medium",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              aminchana.business@gmail.com
            </Link>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "text.primary",
              marginBottom: 4,
            }}
          >
            You can also find me on:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
            <IconButton
              href="https://www.linkedin.com/in/amine-channa-96a447348/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{
                "&:hover": {
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              href="https://github.com/Amine-73"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{
                color: "text.primary",
                "&:hover": {
                  color: "black",
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: 40 }} />
            </IconButton>
            {/* Add more social links as needed */}
          </Box>
        </Container>
        {/* ==============Contact Section ========= */}

        {/* Footer */}
        <Box
          sx={{
            backgroundColor: theme.palette.grey[800],
            color: "white",
            py: 3,
            textAlign: "center",
            borderRadius: "16px 16px 0 0",
          }}
        >
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            &copy; {new Date().getFullYear()} Amine Channa. All rights reserved.
          </Typography>
          <Typography variant="body2">
            Built with React and Material-UI
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

// Dummy Chip and Link components for the self-contained example
// In a real Material-UI project, you would import these from '@mui/material'
const Chip = ({ label, color, size }) => (
  <Box
    sx={{
      display: "inline-block",
      padding: "4px 10px",
      borderRadius: 999,
      fontSize: "0.75rem",
      fontWeight: "medium",
      backgroundColor: (theme) => {
        switch (color) {
          case "primary":
            return theme.palette.primary.light;
          case "secondary":
            return theme.palette.secondary.light;
          case "error":
            return theme.palette.error.light;
          case "warning":
            return theme.palette.warning.light;
          case "info":
            return theme.palette.info.light;
          case "success":
            return theme.palette.success.light;
          default:
            return theme.palette.grey[300];
        }
      },
      color: (theme) => {
        switch (color) {
          case "primary":
            return theme.palette.primary.dark;
          case "secondary":
            return theme.palette.secondary.dark;
          case "error":
            return theme.palette.error.dark;
          case "warning":
            return theme.palette.warning.dark;
          case "info":
            return theme.palette.info.dark;
          case "success":
            return theme.palette.success.dark;
          default:
            return theme.palette.grey[800];
        }
      },
    }}
  >
    {label}
  </Box>
);

const Link = ({ children, href, color, sx }) => (
  <a
    href={href}
    style={{
      textDecoration: "none",
      color: color === "primary" ? theme.palette.primary.main : "inherit",
      ...sx,
    }}
  >
    {children}
  </a>
);

export default App;
