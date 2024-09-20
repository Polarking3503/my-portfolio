import React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
              fontFamily: "sans-serif",
              color: (theme) =>
                theme.palette.mode === "light" ? "info.dark" : "primary.light",
            }}
          >
            Jorge Reynaga
          </Typography>
          <Typography
            textAlign="center"
            color="text.primary"
            fontFamily={"-apple-system"}
            fontSize={{ xs: "h5.fontSize", sm: "h5.fontSize" }}
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Desarrollador FullStack
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ pt: 2 }}
          >
            <IconButton
              aria-label="GitHub"
              component="a"
              href="https://github.com/Polarking3503"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "text.primary" }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/luis-jorge-reynaga-56b257235/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "text.primary" }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="CV"
              component="a"
              href="/files/cv-luis-jorge.pdf"
              download
              rel="noopener noreferrer"
              sx={{ color: "text.primary" }}
            >
              <ContactPageIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
