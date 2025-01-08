import { Alert , Button , Form , Row, Col, Stack } from "react-bootstrap";

const URegister = () => {
    return  (
    <>
      <Form className="login-form">
        <Row style={{
            height:"100vh",
            justifyContent :"right",
            paddingTop:"10%"
        }} >
        <Col xs={4}>
        <Stack gap ={3} style={{backgroundColor:"#f5f5f5",padding:"20px",borderRadius:"5px"}}>
            <h2>Đăng ký</h2>
            <Form.Control type="email" placeholder="Nhập email"/>
            <Form.Control type="text" placeholder="Nhập số điện thoại"/>
            <Form.Control type="password" placeholder="Nhập mật khẩu"/>
            <Form.Control type="password" placeholder="Nhập lại mật khẩu"/>
            <Form.Select>
                <option value="0">Chọn giới tính</option>
                <option value="1">Nam</option>
                <option value="2">Nữ</option>
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