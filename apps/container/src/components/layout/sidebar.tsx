import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link, useRouter } from "@tanstack/react-router";

const drawerWidth = 240;

const Sidebar = () => {
  const router = useRouter();
  const activePath = router.state.location.pathname;

  const navItems = [
    { label: "CRM", path: "/crm" },
    { label: "CMS", path: "/cms" },
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
              selected={activePath === item.path}
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
