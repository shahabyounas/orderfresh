"use client";
import * as React from "react";
import Link from 'next/link'
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
import Product from "@mui/icons-material/ProductionQuantityLimits";
import Cloud from "@mui/icons-material/CloudQueue";
import AdminIcon from "@mui/icons-material/AdminPanelSettings";
import UserAccountMenu from '../UserAccountMenu'
import { usePathname } from 'next/navigation'

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const [activePath, setActivePath] = React.useState('')
  const pathname = usePathname()

  const iconColor = { color: "var(--basecolor-gray-200)" };

  const menuList = [
    {
      icon: <Storefront sx={iconColor} />,
      title: "Market",
      path: '/market'
    },
    {
      icon: <ShowChart sx={iconColor} />,
      title: "Orders",
      path: '/orders'
    },
    {
      icon: <Inventory sx={iconColor} />,
      title: "Inventory",
      path: '/inventory'
    },
    {
      icon: <Product sx={iconColor} />,
      title: "Products",
      path: '/products'
    },
    {
      icon: <Cloud sx={iconColor} />,
      title: "Data",
      path: '/data'
    },
    {
      icon: <AdminIcon sx={iconColor} />,
      title: "Admin",
      path: '/admin'
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
          <Link href={menu.path} key={menu.path}>
          <ListItemButton>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText
              sx={{ fontWeight: "bold" }}
              primary={
                <Typography color="var(--basecolor-gray-200)" fontWeight="600">
                  {menu.title}
                </Typography>
              }
            />
          </ListItemButton>
          </Link>
        );
      })}
      

      <ListItemButton sx={{ position: "fixed", bottom: 20 }}>
        <ListItemText
          sx={{ fontWeight: "bold" }}
          primary={
            <Typography color="var(--basecolor-gray-200)" fontWeight="600">
              Shahab Shahab
            </Typography>
          }
        />
      <UserAccountMenu />

      </ListItemButton>

    </List>
  );
}
