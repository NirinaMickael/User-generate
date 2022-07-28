import loginImg from '../Assets/Images/login.svg';

const LoginImg = ({width}:{width?:number}) => <img src={loginImg} alt={"Login"} height={"100%"} width={width+"%"||700}/>;

export default LoginImg;