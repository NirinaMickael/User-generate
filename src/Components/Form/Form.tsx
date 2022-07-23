import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LoginImg } from "../../Utilis";
import { Controller, useForm } from "react-hook-form";
import { LoginService } from "../../services";
const theme = createTheme();
const Form = () => {
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data: any) => {
    console.log(LoginService.loginUser().read()); 
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} />
        <LoginImg />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit(onSubmit)}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
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
function useState<T>(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}

