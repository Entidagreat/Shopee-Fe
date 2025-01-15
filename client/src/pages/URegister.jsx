import { Alert , Button , Form , Row, Col, Stack } from "react-bootstrap";
import bglogin from "../assets/login_signup.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const URegister = () => {

   const { registerInfo ,updateRegisterInfo } = useContext(AuthContext);

    return  (
    <>
      <Form className="login-form">
        <Row style={{
            height:"100vh",
            justifyContent: "right",
            paddingTop:"5%",
            backgroundImage: `url(${bglogin})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundColor: "#ef532a",
        }} >
        <Col xs={4}>
        <Stack gap ={3} style={{backgroundColor:"#f5f5f5",padding:"20px",borderRadius:"5px" ,borderWidth:"6px",borderColor:"red",right:"22px",position:"relative" ,}}>
            <h3>Đăng ký</h3>
            <Form.Control type="email" placeholder="Nhập email" onChange={(e)=> updateRegisterInfo ({...registerInfo,email: e.target.value })}/>
            <Form.Control type="phoneNumber" placeholder="Nhập số điện thoại" onChange={(e)=> updateRegisterInfo ({...registerInfo,phoneNumber: e.target.value })}/>
            <Form.Control type="password" placeholder="Nhập mật khẩu" onChange={(e)=> updateRegisterInfo ({...registerInfo,password: e.target.value })}/>
            <Form.Control type="password" placeholder="Nhập lại mật khẩu" onChange={(e)=> updateRegisterInfo ({...registerInfo,password: e.target.value })}/>
            <Form.Select onChange={(e)=> updateRegisterInfo ({...registerInfo,gender: e.target.value })}>
                <option value="">Giới tính</option>
                <option value="male" >Nam</option>
                <option value="female">Nữ</option>
            </Form.Select>
        {/* dang build form dang ky chua avt */}
                        {/* <Form.Group>
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control 
                            type="file" 
                            accept="image/jpeg,image/png,image/gif"
                            onChange={handleFileChange}
                            name="image"  // Thêm thuộc tính name="image"
                        />
                            {fileError && <Alert variant="danger" className="mt-2">{fileError}</Alert>}
                        </Form.Group> */}

            <Button variant="primary" type="submit" style={{backgroundColor:"#ee4d2d", fontWeight:"bold", border:"none"}}>
                ĐĂNG KÝ
            </Button>
            <Alert variant="danger" style={{paddingBottom:'0px'}}>
                <p>
                    Đã có tài khoản? <a href="/ULogin" style={{textDecoration:"none", color:"#ef532a", fontWeight:'bold'}}>Đăng nhập</a>
                </p>
            </Alert>
        </Stack>
        </Col>
        </Row>
    </Form>
    </> 
    );
};
 
export default URegister;