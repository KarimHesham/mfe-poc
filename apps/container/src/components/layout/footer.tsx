import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        bgcolor: "grey.100",
        textAlign: "center",
        mt: "auto",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Tech Suite
      </Typography>
    </Box>
  );
};

export default Footer;
