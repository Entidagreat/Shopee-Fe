import { Alert , Button , Form , Row, Col, Stack } from "react-bootstrap";
const ULogin = () => {
    return ( <>
    <Form className="login-form">
        <Row style={{
            justifyContent :"right",
            paddingTop:"10%",
        }} >
        <Col xs={4}>
        <Stack gap ={3} style={{backgroundColor:"#f5f5f5",padding:"20px",borderRadius:"5px"}}>
            <h2>Đăng nhập</h2>
            <Form.Control type="email" placeholder="Nhập email"/>
            <Form.Control type="password" placeholder="Nhập mật khẩu"/>
            <Button variant="primary" type="submit" style={{backgroundColor:"#ee4d2d"}}>
                Đăng nhập
            </Button>
            <Alert variant="danger">
                <p>
                    Chưa có tài khoản? <a href="/URegister">Đăng ký</a>
                </p>
            </Alert>
        </Stack>
        </Col>
        </Row>
    </Form>
    </> );
};
 
export default ULogin;