import Grid from "@mui/material/Grid";
import { ListUser, Sidebar } from "../../Components";

const Dashboard = ()=>{
    return <Grid container>
        <Grid item xs={0} sm={3} md={3}>
            <Sidebar/>
        </Grid>
        <Grid item xs={0} sm={9} md={9}>
            <ListUser/>
        </Grid>
    </Grid>
}
export default Dashboard;