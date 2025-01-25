/**py-3:
Đây là viết tắt của "padding-y-axis 3".
Thêm khoảng đệm (padding) vào trên và dưới phần tử.
Trong Tailwind CSS, giá trị 3 tương đương với 0.75rem (12px), dựa trên quy ước của Tailwind. 

className tương đương với thuộc tính class trong HTML thông thường nhưng được đổi tên thành className vì "class" là một từ khóa trong JavaScript.*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/Footer.css';
import { Link } from 'react-router-dom';
import visa from '../assets/ttoan_vchuyen/visa.png';
import mastercard from '../assets/ttoan_vchuyen/mtcard.png';
import jcb from '../assets/ttoan_vchuyen/jcb.png';
import amexpress from '../assets/ttoan_vchuyen/amexpress.png';
import cod from '../assets/ttoan_vchuyen/cod.png';
import zero from '../assets/ttoan_vchuyen/zero.png';
import spay from '../assets/ttoan_vchuyen/spay.png';
import spaylater from '../assets/ttoan_vchuyen/spaylater.png';
import spx from '../assets/ttoan_vchuyen/spx.png';
import ghn from '../assets/ttoan_vchuyen/ghn.png';
import vtpost from '../assets/ttoan_vchuyen/vtpost.png';
import vnpost from '../assets/ttoan_vchuyen/vnpost.png';
import jnt from '../assets/ttoan_vchuyen/jnt.png';
import grab from '../assets/ttoan_vchuyen/grab.png';
import ninja from '../assets/ttoan_vchuyen/ninja.png';
import be from '../assets/ttoan_vchuyen/be.png';
import ahamove from '../assets/ttoan_vchuyen/ahamove.png';

function Footer() {
    return (
        <footer>
        <div
            style={{
            backgroundColor: '#EE4D2D',
            height: '3.5px',
            marginTop: '10vh',
            }}
        />
        <Container style={{marginBottom: "20px"}}>
             <div className = "titlefooter">SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE</div>
             <p>Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở Đông Nam Á, có trụ sở chính ở Singapore, đã có mặt ở khắp các khu vực Singapore, Malaysia, Indonesia, Thái Lan, Philippines, Đài Loan, Brazil, México, Colombia, & Chile. Với sự đảm bảo của Shopee, bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!</p>
             <p className = "titledescription">MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN</p>
             <p>Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Shopee.vn là một sự lựa chọn tuyệt vời dành cho bạn. Shopee là trang thương mại điện tử cho phép người mua và người bán tương tác và trao đổi dễ dàng thông tin về sản phẩm và chương trình khuyến mãi của shop. Do đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, Shopee Mall chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm, Shopee Blog - trang blog thông tin chính thức của Shopee - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá tốt bất ngờ.

                <br/> Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể tự tạo chương trình khuyến mãi trên Shopee để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại Shopee Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.

                <br/>Bên cạnh đó, Shopee hợp tác với nhiều đơn vị vận chuyển uy tín trên thị trường như SPX,... nhằm cung cấp dịch vu giao nhận và vận chuyển tiện lợi cho cả khách hàng và người bán. Cùng với nhiều ưu đãi với chi phí giao hàng hợp lý, Shopee đảm bảo cho khách hàng trải nghiệm mua sắm thuận tiện nhất.</p>
            <p className = "titledescription">MUA HÀNG HIỆU CAO CẤP GIÁ TỐT TẠI SHOPEE</p>
            <p>Bên cạnh Shopee Premium, Shopee còn có rất nhiều khuyến mãi khủng cho hàng hiệu giảm đến 50%. Cộng với mã giao hàng miễn phí, Shopee cũng có các mã giảm giá được phân phối mỗi tháng từ rất nhiều gian hàng chính hãng tham gia chương trình khuyến mãi này. Bên cạnh đó, Shopee còn tập hợp rất nhiều thương hiệu đình đám được các nhà bán lẻ uy tín phân phối bán trên Shopee, top sản phẩm hot deal cho bạn săn sale luôn cập nhật mỗi giờ, mỗi ngày, đem đến cho bạn sự lựa chọn đa dạng, từ các hãng mỹ phẩm nổi tiếng hàng đầu như Kiehl's, MAC, Foreo, SK-II, Estee Lauder,... Đến những thương hiệu công nghệ nổi tiếng như: camera hành trình Gopro, máy ảnh Fuifilm, webcam Hikvision, máy đọc sách Kindle,... Tại Shopee, bạn có thể dễ dàng tìm thấy các thương hiệu giày thể thao phổ biến hiện nay như: New Balance, Nike, Vans, Crocs,...  
            </p>
            <p className = "titledescription">MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN VỚI SHOPEE</p>
            <p>Mua hàng trên Shopee luôn là một trải nghiệm ấn tượng. Dù bạn đang có nhu cầu mua bất kỳ mặt hàng thời trang nam, thời trang nữ, đồng hồ, điện thoại, máy tính & laptop,... thì Shopee cũng sẽ đảm bảo cung cấp cho bạn những sản phẩm ưng ý. Bên cạnh đó, Shopee cũng có sự tham gia của các thương hiệu hàng đầu thế giới ở đa dạng nhiều lĩnh vực khác nhau. Trong đó có thể kể đến Samsung, OPPO, Xiaomi, Innisfree, Unilever, P&G, Biti’s,...Các thương hiệu này hiện cũng đã có cửa hàng chính thức trên Shopee Mall với hàng trăm mặt hàng chính hãng, được cập nhập liên tục. Là một kênh bán hàng uy tín, Shopee luôn cam kết mang lại cho khách hàng những trải nghiệm mua sắm online giá rẻ, an toàn và tin cậy. Mọi thông tin về người bán và người mua đều được bảo mật tuyệt đối. Các hoạt động giao dịch thanh toán tại Shopee luôn được đảm bảo diễn ra nhanh chóng, an toàn. Một vấn đề nữa khiến cho các khách hàng luôn quan tâm đó chính là mua hàng trên Shopee có đảm bảo không.</p>
            <p>Shopee luôn cam kết mọi sản phẩm trên Shopee, đặc biệt là Shopee Mall đều là những sản phẩm chính hãng, đầy đủ tem nhãn, bảo hành từ nhà bán hàng. Ngoài ra, Shopee bảo vệ người mua và người bán bằng cách giữ số tiền giao dịch đến khi người mua xác nhận đồng ý với đơn hàng và không có yêu cầu khiếu nại, trả hàng hay hoàn tiền nào. Thanh toán sau đó sẽ được chuyển đến cho người bán. Đến với Shopee ngay hôm nay để mua hàng online giá rẻ và trải nghiệm dịch vụ chăm sóc khách hàng tuyệt vời tại đây. Đặc biệt khi mua sắm trên Shopee Mall, bạn sẽ được miễn phí vận chuyển, giao hàng tận nơi và 15 ngày miễn phí trả hàng. Ngoài ra, khách hàng có thể sử dụng Shopee Xu để đổi lấy mã giảm giá có giá trị cao và voucher dịch vụ hấp dẫn. Tiếp đến là Shopee Video, Shopee Live, Shopee Home Club, Shopee Mum Club, Shopee Beauty Club và Shopee Book Club với các ưu đãi độc quyền từ các thương hiệu lớn có những khách hàng đã đăng ký làm thành viên. Hãy truy cập ngay Shopee Việt Nam hoặc tải ngay ứng dụng Shopee về điện thoại ngay hôm nay!</p>
        </Container>
        <div
        style={{
          backgroundColor: '#E8E8E8',
          height: '1px',
          margin: '0 8vw',
        }}
      />
        <Container>
             <div className = "titlefooter">TOP THƯƠNG HIỆU NỔI BẬT</div>
        </Container>
        <Container>
             <div className = "titlefooter">TOP TỪ KHÓA XU HƯỚNG</div>
        </Container>
        <Container>
            <div className = "titlefooter">CÓ THỂ BẠN ĐANG TÌM KIẾM</div>
        </Container>
        <div
        style={{
          backgroundColor: '#E8E8E8',
          height: '1px',
          margin: '0 8vw',
        }}
      />
        <Container>
            <div className = "titlefooter">DANH MỤC</div>
            <Container>
                <Row>
                    <Col>THỜI TRANG NAM</Col>
                    <Col>THỜI TRANG NỮ</Col>
                    <Col>ĐIỆN THOẠI & PHỤ KIỆN</Col>
                    <Col>MÁY TÍNH & LAPTOP</Col>
                    <Col>ĐỒNG HỒ</Col>
                </Row>
                <Row>
                    <Col>NHÀ CỬA & ĐỜI SỐNG</Col>
                </Row>
            </Container>
        </Container>
        
            <Container className='servicefooter' style={{width: "100%"}}>
                <Row>
                    <Col style={{marginLeft: "10vw"}}>
                        <h6>DỊCH VỤ KHÁCH HÀNG</h6>
                        <p><Link to='' className="link-styles ">Trung tâm trợ giúp</Link></p>
                        <p><Link to='' className="link-styles ">Shopee Blog</Link></p>
                        <p><Link to='' className="link-styles ">Shopee Mall</Link></p>
                        <p><Link to='' className="link-styles ">Hướng dẫn mua hàng/ đặt hàng</Link></p>
                        <p><Link to='' className="link-styles ">Hướng dẫn bán hàng</Link></p>
                        <p><Link to='' className="link-styles ">Thanh toán</Link></p>
                        <p><Link to='' className="link-styles ">Shopee Xu</Link></p>
                        <p><Link to='' className="link-styles ">Đơn hàng</Link></p>
                        <p><Link to='' className="link-styles ">Trả hàng/ Hoàn tiền</Link></p>
                        <p><Link to="" className="link-styles ">Liên hệ Shoppee</Link></p>
                        <p><Link to="" className="link-styles ">Chính sách bảo hành</Link></p>
                    </Col>
                    <Col>
                        <h6>SHOPEE VIỆT NAM</h6>
                        <p><Link to="" className="link-styles ">Giới thiệu về Shopee Việt Nam</Link></p>
                        <p><Link to="" className="link-styles ">Tuyển dụng</Link></p>
                        <p><Link to="" className="link-styles ">Điều khoản Shopee</Link></p>
                        <p><Link to="" className="link-styles ">Chính sách bảo mật</Link></p>
                        <p><Link to="" className="link-styles ">Chính hãng</Link></p>
                        <p><Link to="/Sellerpage" className="link-styles ">Kênh người bán</Link></p>
                        <p><Link to="" className="link-styles ">Flash Sales</Link></p>
                        <p><Link to="" className="link-styles ">Chương trình Tiếp thị Liên kết Shopee</Link></p>
                        <p><Link to="" className="link-styles ">Liên doanh với Shopee</Link></p>
                    </Col>
                    <Col className="thanhtoan">
                        <Container>
                            <h6>THANH TOÁN</h6>
                            <Row className = "thanhtoanrow">
                                <Col className="text-center" ><img src={visa} alt="visa" /></Col>
                                <Col className="text-center" ><img src={mastercard} alt="mastercard" /></Col>
                                <Col className="text-center" ><img src={jcb} alt="jcb" /></Col>
                            </Row>
                            <Row className = "thanhtoanrow">
                                <Col className="text-center" ><img src={amexpress} alt="amexpress" /></Col>
                                <Col className="text-center" ><img src={cod} alt="cod" /></Col>
                                <Col className="text-center" ><img src={zero} alt="zeropercent" /></Col>
                            </Row>

                            <Row className = "thanhtoanrow">
                                <Col className="text-center" ><img src={spay} alt="spay" /></Col>
                                <Col className="text-center" ><img src={spaylater} alt="spaylater" /></Col>
                                <Col className="text-center" style={{boxShadow:"none"}} ></Col>
                            </Row>
                            
                            <h6>ĐƠN VỊ VẬN CHUYỂN</h6>
                            <Row className = "thanhtoanrow">
                                <Col className="text-center" ><img src={spx} alt="spx" /></Col>
                                <Col className="text-center" ><img src={ghn} alt="ghn" /></Col>
                                <Col className="text-center" ><img src={vtpost} alt="vtpost" /></Col>
                            </Row>
                            <Row className = "thanhtoanrow">
                                <Col className="text-center" ><img src={vnpost} alt="vnpost" /></Col>
                                <Col className="text-center" ><img src={jnt} alt="jnt" /></Col>
                                <Col className="text-center" ><img src={grab} alt="grab" /></Col>
                            </Row>
                            <Row className = "thanhtoanrow">
                                <Col className="text-center" ><img src={ninja} alt="ninja" /></Col>
                                <Col className="text-center" ><img src={be} alt="be" /></Col>
                                <Col className="text-center" ><img src={ahamove} alt="ahamove" /></Col>
                            </Row>
                        </Container>
                    </Col>
                    
                    <Col className='followfooter'>
                        <h6>THEO DÕI SHOPEE</h6>
                        <div><Link to = "facebook.com" className="link-styles">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    fill="currentColor"
                                    className="bi bi-facebook" 
                                    viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg> 
                            &nbsp; Facebook
                            </Link> 
                        </div>

                        <div><Link to = "facebook.com" className="link-styles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg> 
                            &nbsp; Instagram
                            </Link> 
                        </div>

                        <div><Link to = "facebook.com" className="link-styles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                            &nbsp; LinkedIn
                            </Link> 
                        </div>
                        
                    </Col>
                </Row>
            </Container>

            <Container className='infofooter'>
                <Row style={{justifyContent: "center", marginTop: "5vh"}}>
                    <Col className="text-center py-1" style={{maxWidth: "12vw", borderRight: "2px solid rgb(188, 188, 188)"}}>
                        <a className = "headfooter" href = "">CHÍNH SÁCH BẢO MẬT</a>
                    </Col>
                    
                    <Col className="text-center py-1" style={{maxWidth: "12vw", borderRight: "2px solid rgb(188, 188, 188)"}}>
                        <a className = "headfooter" href = "">QUY CHẾ HOẠT ĐỘNG</a>
                    </Col>
                    <Col className="text-center py-1" style={{maxWidth: "14vw", borderRight: "2px solid rgb(188, 188, 188)"}}>
                        <a className = "headfooter" href = "">CHÍNH SÁCH VẬN CHUYỂN</a>
                    </Col>
                    <Col className="text-center py-1" style={{maxWidth: "18vw"}}>
                        <a className = "headfooter" href = "">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</a>
                    </Col>
                </Row>
                <div className='endfooter'>
                    <p>Công ty TNHH Shopee</p>
                    <p>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</p>
                    <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn</p>
                    <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
                    <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
                </div>
            </Container>
            
        </footer>
    );
}

export default Footer;