import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading =(
  props: CircularProgressProps & { value: number },
) =>{
  const navigation = useNavigate();
  useEffect(()=>{
     (()=>{
      const token = localStorage.getItem("token");
      if(token){
        navigation('../dashboard',{replace:true});
      }else{
        navigation('../signin',{replace:true});
      }
     })();
  },[]);
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default Loading;