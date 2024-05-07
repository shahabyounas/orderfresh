"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Inventory from "@mui/icons-material/Inventory";
import Park from "@mui/icons-material/Park";
import ShowChart from "@mui/icons-material/ShowChart";
import Storefront from "@mui/icons-material/Storefront";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const iconColor = { color: 'var(--basecolor-gray-200)' }

  const menuList = [
    {
      icon: <Storefront sx={iconColor}/>,
      title: "Market",
    },
    {
      icon: <ShowChart sx={iconColor} />,
      title: "Orders",
    },
    {
      icon: <Inventory sx={iconColor} />,
      title: "Inventory",
    },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 300,
        bgcolor: "var(--base-color-200)",
        height: "100vh",
        px: 5,
        borderRight: "1px solid var(--basecolor-gray-100)",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <Box sx={{ display: "fex", textAlign: "center", my: 3 }}>
          <Park sx={{ mx: 2, color: "var(--primary-bg-color)" }} />
          <Typography
            variant="h5"
            component="div"
            color="var(--primary-bg-color)"
            fontWeight="530"
          >
            Order Fresh
          </Typography>
        </Box>
      }
    >
      {menuList.map((menu) => {
        return (
          <ListItemButton>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText 
                sx={{ fontWeight: "bold" }}
                primary={<Typography color="var(--basecolor-gray-200)" fontWeight="600">{menu.title}</Typography>}
              />
          </ListItemButton>
        );
      })}
    </List>
  );
}
