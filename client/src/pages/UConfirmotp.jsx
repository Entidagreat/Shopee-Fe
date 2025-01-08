import { Alert , Button , Form , Row, Col, Stack } from "react-bootstrap";

const UConfirmotp = () => {
return ( <div main className="login-form">
        <Form className="login-form">
            <Row style={{
                justifyContent :"center",
                paddingTop:"10%",
            }} >
            <Col xs={4}>
            <Stack gap ={3} style={{backgroundColor:"#f5f5f5",padding:"20px",borderRadius:"5px"}}>
                <h2>Hãy kiểm tra email </h2>
                    <Form.Control 
                        type="text" 
                        placeholder="Nhập mã OTP" 
                        maxLength={6} 
                        pattern="\d{6}" 
                    />
                <Button variant="primary" type="submit" style={{backgroundColor:"#ee4d2d"}}>
                    Xác nhận
                </Button>
                <Alert variant="danger">
                    <p>
                        Chưa có mã otp ? <a href="/khongbietghigi ">Gửi lại mã</a>
                    </p>
                </Alert>
            </Stack>
            </Col>
            </Row>
        </Form>
        </div> );
    };
 
export default UConfirmotp;