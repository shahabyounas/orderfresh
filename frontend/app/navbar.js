"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { APP_SUPPORTED_LANGUAGES } from "./constants";
import { Language } from "@mui/icons-material";
import LanguageSettings from './Settings'

const pages = ["About", "Fresh", "Markets", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isOpen, setIOpen] = React.useState(false);
  const [language, setLanguage] = React.useState("en");
  const languages = APP_SUPPORTED_LANGUAGES;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function handleClose() {
    setIOpen(prevState => !prevState)
  }

  function openLanguageSelection(){
    setIOpen(true)
  }

  function handleChangeLanguage(language){
    setIOpen(false)
    setLanguage(language)
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "var(--bg-color-10)" }}>
      <Container maxWidth="xl" sx={{ boxShadow: 4, color: "black" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#home/page"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 600,
            }}
          >
            Order Fresh
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#home/page"
            sx={{
              mx: 8,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontWeight: 600,
            }}
          >
            Order Fresh
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              mx: 8,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 3,
                  color: "inherit",
                  display: "block",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <IconButton onClick={openLanguageSelection} title="changeLang">
            <Language />
            <Typography>{language}</Typography>
          </IconButton>
          <LanguageSettings />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
