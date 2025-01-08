import { Alert , Button , Form , Row, Col, Stack } from "react-bootstrap";
import bglogin from "../assets/bglogin.jpg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const URegister = () => {

   const { registerInfo ,updateRegisterInfo } = useContext(AuthContext);

    return  (
    <>
      <Form className="login-form">
        <Row style={{
            height:"100vh",
            justifyContent :"right",
            paddingTop:"10%",
            backgroundImage: `url(${bglogin})`,
        }} >
        <Col xs={4}>
        <Stack gap ={3} style={{backgroundColor:"#f5f5f5",padding:"20px",borderRadius:"5px" ,borderWidth:"6px",borderColor:"red",right:"22px",position:"relative" ,}}>
            <h2>Đăng ký</h2>
            <Form.Control type="email" placeholder="Nhập email" onChange={(e)=> updateRegisterInfo ({...registerInfo,email: e.target.value })}/>
            <Form.Control type="phoneNumber" placeholder="Nhập số điện thoại" onChange={(e)=> updateRegisterInfo ({...registerInfo,phoneNumber: e.target.value })}/>
            <Form.Control type="password" placeholder="Nhập mật khẩu" onChange={(e)=> updateRegisterInfo ({...registerInfo,password: e.target.value })}/>
            <Form.Control type="password" placeholder="Nhập lại mật khẩu" onChange={(e)=> updateRegisterInfo ({...registerInfo,password: e.target.value })}/>
            <Form.Select onChange={(e)=> updateRegisterInfo ({...registerInfo,gender: e.target.value })}>
                <option value="">Chọn giới tính</option>
                <option value="male" >Nam</option>
                <option value="female">Nữ</option>
            </Form.Select>
//dang build form dang ky chua avt
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

            <Button variant="primary" type="submit" style={{backgroundColor:"#ee4d2d"}}>
                Đăng ký
            </Button>
            <Alert variant="danger">
                <p>
                    Đã có tài khoản? <a href="/ULogin">Đăng nhập</a>
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