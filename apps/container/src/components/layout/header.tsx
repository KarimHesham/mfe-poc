import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Button } from "@suite-poc/ui-kit";
import { useAppContext } from "../../context/app.context";
import { useNavigate } from "@tanstack/react-router";

const Header = () => {
  const { appName } = useAppContext();
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{ backgroundColor: "#ffffff", color: "#1e293b", zIndex: 1201 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          {appName}
        </Typography>
        <Box>
          <Button
            buttonText="Sign In"
            backgroundColor="#6200ea"
            color="#fff"
            onClick={() => navigate({ to: "/auth" })}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
