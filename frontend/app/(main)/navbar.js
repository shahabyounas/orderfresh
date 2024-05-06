"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
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
import LanguageSettings from '../Settings'


const pages = ["About", "Fresh", "Markets", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePath, setActivePath] =  React.useState('')
  const router = useRouter()


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuClick = (path = '') => {
    if(path != '' && activePath == path) {
      return
    }

    setActivePath(path)
    router.push(`/${path}`)
  }





  return (
    <AppBar position="static" sx={{ backgroundColor: "var(--primary-bg-color)" }}>
      <Container maxWidth="xl">
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
            href="/home"
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
                onClick={() => handleMenuClick(page.toLowerCase())}
                sx={{
                  my: 2,
                  mx: 3,
                  color: "inherit",
                  display: "block",
                  fontSize: "16px",
                  fontWeight: 600,
                  backgroundColor: page.toLowerCase() == activePath ? 'green' : '',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <LanguageSettings />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
