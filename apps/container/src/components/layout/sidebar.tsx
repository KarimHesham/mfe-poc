import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "@tanstack/react-router";
import { useAppContext } from "../../context/app.context";
import { useEffect } from "react";

const drawerWidth = 240;

const Sidebar = () => {
  const { activeApp } = useAppContext();

  useEffect(() => {
    console.log("sidebar activeApp", activeApp);
  }, [activeApp]);

  const navItems = [
    { label: "CRM", path: "/crm", icon: <HomeIcon />, app: "crm" },
    { label: "CMS", path: "/cms", icon: <HomeIcon />, app: "cms" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1e293b",
          color: "#fff",
        },
      }}
    >
      <Toolbar />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={activeApp === item.app}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#334155",
                  color: "#fff",
                },
                "&:hover": {
                  backgroundColor: "#475569",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
