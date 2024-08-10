import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";

const logoStyle = {
  width: "50px",
  height: "50px",
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
};

const AppAppBar = ({ mode, toggleColorMode }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const offset = 128;
      const targetScroll =
        sectionElement.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <img
              src={"images/memoji.png"}
              style={logoStyle}
              alt="logo"
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                <MenuItem
                  onClick={() => scrollToSection("about")}
                  sx={{
                    py: "6px",
                    px: "16px",
                    borderRadius: "8px",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(85, 166, 246, 0.2)",
                    },
                  }}
                >
                  <Typography variant="body2" color="text.primary">
                    Sobre mí
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("experience")}
                  sx={{
                    py: "6px",
                    px: "16px",
                    borderRadius: "8px",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(85, 166, 246, 0.2)",
                    },
                  }}
                >
                  <Typography variant="body2" color="text.primary">
                    Experiencia
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("projects")}
                  sx={{
                    py: "6px",
                    px: "16px",
                    borderRadius: "8px",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(85, 166, 246, 0.2)",
                    },
                  }}
                >
                  <Typography variant="body2" color="text.primary">
                    Proyectos
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("contact")}
                  sx={{
                    py: "6px",
                    px: "16px",
                    borderRadius: "8px",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(85, 166, 246, 0.2)",
                    },
                  }}
                >
                  <Typography variant="body2" color="text.primary">
                    Contacto
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                  <MenuItem onClick={() => scrollToSection("about")}>
                    Sobre mí
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("experience")}>
                    Experiencia
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("projects")}>
                    Proyectos
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => scrollToSection("contact")}>
                    Contacto
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
