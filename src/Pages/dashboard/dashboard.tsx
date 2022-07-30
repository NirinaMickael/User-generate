import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListUser, Loading, Sidebar } from "../../Components";
import { AuthService } from "../../services";
import { AppBar } from "@mui/material";
const token = localStorage.getItem("token") as string;
const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [row, setRow] = useState<Object[]>([{}]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const resp = await AuthService.allUser(token);
        if (resp.success) {
          console.log(resp);
          setRow(resp.data);
          setLoading(false);
        } else {
          navigate("login");
        }
      } catch (error) {
        navigate("login");
      }
    })();
  }, []);
  return (
    <Grid container>
      <Grid item xs={0} sm={3} md={3}>
        <Sidebar />
      </Grid>
      {!isLoading && (
        <Grid container item xs={0} sm={9} md={9}>
          <Grid item xs={0} sm={12} md={12}>
            <AppBar position="relative">
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  List User layout
                </Typography>
              </Toolbar>
            </AppBar>
            <ListUser rows={row}/>
          </Grid>
        </Grid>
      )}
      { isLoading && <Loading value={0}/>}
    </Grid>
  );
};
export default Dashboard;
