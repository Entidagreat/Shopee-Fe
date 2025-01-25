import { Alert , Button , Form , Row, Col, Stack } from "react-bootstrap";
import bglogin from "../assets/login_signup.png";
const ULogin = () => {
    return ( 
        <div style={{ backgroundColor: 'rgb(239, 83, 42)' }}>
        <div className="login-form"  
            style={{
                backgroundImage: `url(${bglogin})`,
                backgroundRepeat: "no-repeat",
                height: "100vh",
                backgroundSize: "100%",
                marginTop: "-60px",
    }}
    >
    <Form className="login-form">
        <Row style={{
            justifyContent :"right",
            paddingTop:"10%",
        }} >
        <Col xs={4}>
        <Stack gap ={3} style={{backgroundColor:"#f5f5f5",padding:"20px",borderRadius:"5px" ,borderWidth:"6px",borderColor:"red",right:"22px",position:"relative" ,}}>
            <h2>Đăng nhập</h2>
            <Form.Control type="email" placeholder="Email"/>
            <Form.Control type="password" placeholder="Mật khẩu"/>
            <Button variant="primary" type="submit" style={{backgroundColor:"#ee4d2d",border:"none",fontWeight:"bold"}}>
                ĐĂNG NHẬP
            </Button>
            <Alert variant="danger" style={{paddingBottom:'0px'}}>
                <p>
                    Chưa có tài khoản? <a href="/URegister" style={{textDecoration:'none',color:"#ef532a", fontWeight:'bold'}}>Đăng ký</a>
                </p>
            </Alert>
        </Stack>
        </Col>
        </Row>
    </Form>
    </div>
    </div> );
};
 
export default ULogin;