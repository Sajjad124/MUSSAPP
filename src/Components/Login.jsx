import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { VolunteerActivismRounded } from "@mui/icons-material";

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "20px",
});

const Login = () => {
  return (
    <Box
      p={2}
      sx={{
        bgcolor: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Card
        sx={{
          padding: "10px",
          boxShadow: "1px 1px 3px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <UserBox>
            <VolunteerActivismRounded
              color="blue"
              sx={{ width: "70px", height: "70px", color: "#4267B2" }}
            />
          </UserBox>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            color="#4267B2"
            fontWeight={400}
          >
            Login here
          </Typography>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            type="text"
            sx={{ width: "100%" }}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            sx={{
              width: "100%",
              marginTop: "20px",
            }}
          />
        </CardContent>
        <CardActions>
          <Button sx={{ textAlign: "center", width: "100%" }}>Login</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Login;
