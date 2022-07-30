import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LoginImg } from "../../Utilis";
import { Controller, useForm } from "react-hook-form";
import { LoadingCircular } from "../index";
import { useState } from "react";
import { AuthService } from "../../services";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
const theme = createTheme();
const Register = () => {
  const { handleSubmit, control } = useForm();
  const [loadingState, setLoading] = useState(false);
  const [testError, setTestError] = useState(false);
  const navigation = useNavigate();
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response =  await AuthService.registerUser(data);
      if(response.success){
        navigation("../login",{replace:true});
      }else{
        setTestError(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={false} sm={5} md={7}>
          <LoginImg width={100} />
        </Grid>
        <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main", width: 100, height: 100 }}
            ></Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={6}>
                  <Controller
                    name={"username"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                  <Controller
                    name={"name"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label={"name"}
                        type="name"
                        id="name"
                        autoComplete="current-name"
                        onChange={onChange}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <Controller
                    name={"email"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={onChange}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={6}>
                  <Controller
                    name={"password"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={"password"}
                        type="password"
                        id="name"
                        autoComplete="current-name"
                        onChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                  <Controller
                    name={"repassword"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="repassord"
                        label={"repassword"}
                        type="password"
                        id="repassword"
                        autoComplete="current-name"
                        onChange={onChange}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <LoadingCircular
                action={handleSubmit(onSubmit)}
                name="Register"
                isLoading={loadingState}
              />
                {testError && (
                <Alert severity="error">
                  This email is already taken..
                </Alert>
              )}
              <Grid container>
                <Grid item>
                  <Link to="../">Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;
