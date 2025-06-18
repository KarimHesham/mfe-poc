import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const SignIn = () => {
  return (
    <Box
      maxWidth={400}
      mx="auto"
      mt={8}
      p={4}
      boxShadow={3}
      borderRadius={2}
      bgcolor="background.paper"
    >
      <Typography variant="h5" mb={3} textAlign="center">
        Sign In
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign In
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          startIcon={<GoogleIcon />}
        >
          Sign In with Google
        </Button>
      </Stack>
    </Box>
  );
};

export default SignIn;
