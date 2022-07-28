import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LoginImg } from "../../Utilis";
import { Controller, useForm } from "react-hook-form";
import { LoginService } from "../../services";
import { LoadingCircular } from "../index";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
const theme = createTheme();
const Form = () => {
  const { handleSubmit, reset, control } = useForm();
  const [loadingState, setLoading] = useState(false);
  const [test, setTest] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    setLoading(true);
    const resp = await LoginService.loginUser(data);
    if (resp.success) {
      navigate("../dashboard", { replace: true });
      setLoading(false);
    } else {
      setLoading(true);
      setTimeout(() => {
        setTest(true);
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        {/* <CssBaseline /> */}
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
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Controller
                name={"email"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address or username"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                name={"password"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label={"Password"}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={onChange}
                  />
                )}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {test && (
                <Alert severity="error">
                  User not Found.Do you want create a new account?
                </Alert>
              )}
              <LoadingCircular
                action={handleSubmit(onSubmit)}
                name="Sign In"
                isLoading={loadingState}
              />
              <Grid container>
                <Grid item xs>
                  <Link to="#">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link to="../register">Don't have an account? Sign Up</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Form;
