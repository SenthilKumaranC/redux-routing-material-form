import { Label } from "@mui/icons-material";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();

  const gotoDashboard = useCallback(() => {
    //route to dashboard
    navigate("./dashboard");
  }, [navigate]);

  return (
    <>
      <Paper sx={{ width: "500px", height: "max-content", p: 2 }}>
        <Stack spacing={2}>
          <Typography variant="h5" component="h5">
            Please enter Email and Password
          </Typography>
          ;
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <Button onClick={gotoDashboard} variant="contained">
            Login
          </Button>
        </Stack>
      </Paper>
    </>
  );
};

export default LoginForm;
