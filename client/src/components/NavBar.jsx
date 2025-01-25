import { Container , Nav ,Navbar , Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import logonav1 from "../assets/logonav1.png";

const NavBar = () => {
    return  (
    <Navbar  className="navbar" style={{ height:"120px" , backgroundColor: "#ee4d2d"}}>
        <Container >
                <Link to ="/" className="link-light text-decoration-none">
                    <Link to ="/Sellerpage" className="link-light text-decoration-none">
                     <div className="navtrai">Kênh người bán</div>
                     </Link>
                <img className="bg-img" src={logonav1}  style={{}}/>
                </Link>
                <form className="d-flex" style={{ flex: 1, justifyContent: "center" ,top:"12px",position:"relative",left:"28px",}} >
                    <input 
                        type="search" 
                        placeholder="Tìm kiếm sản phẩm" 
                        className="form-control me-2" 
                        aria-label="Search" 
                        style={{ width: "835px",
                            height: "40px",
                         }}
                    />
                <button className="btn btn-outline-light" type="submit" style={{backgroundColor:"#ee4d2d",position:"relative",right:"70px",minWidth:"60px",maxHeight:"36px",top:"2px",borderRadius:"5px"}}>
                <svg xmlns="http://www.w3.org/2000/svg"
                        width="18" 
                        height="18" 
                        fill="currentColor" 
                        className="bi bi-search-heart-fill" 
                        viewBox="0 0 16 16">
                <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
                </svg>
                    </button>
                </form>
                <button style={{background: "none", border: "none", padding: 0, cursor: "pointer"}}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        style={{position:"relative",top:"16px",left:"3px"}}
                        width="28" 
                        height="28" 
                        fill="white" 
                        className="bi bi-cart" 
                        viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </button>
            <Nav>
            </Nav>
                <Stack 
                direction="horizontal" 
                gap={3}
                style={{position:"relative",bottom:"44px",right:"80px",minWidth:"300px"}}
                >
                    <Link to ="/URegister" className="link-light text-decoration-none">
                     Đăng ký
                    </Link>
                    <Link to ="/ULogin" className="link-light text-decoration-none">
                     Đăng nhập
                    </Link>

            <span className="wellcome-us" style={{color:"white"}}>Ten User </span>
                </Stack>
        </Container>
    </Navbar>  
    );
};
 
export default NavBar;