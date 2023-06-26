import { Link } from "react-router-dom";

// style
import styled from "styled-components";

// images
import home from "../../assets/images/main/home.jpg";

// icons
import StarIcon from "@mui/icons-material/Star";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col w-20 h-screen border">
      <IconWrap className="border-b">
        <img src={home} className="w-14" />
      </IconWrap>
      <IconWrap>
        <StarIcon />
        <IconText>저장</IconText>
      </IconWrap>
      <IconWrap>
        <Link to="/login">
          <LoginIcon />
          <IconText>로그인</IconText>
        </Link>
      </IconWrap>
      <IconWrap>
        <LogoutIcon />
        <IconText>로그아웃</IconText>
      </IconWrap>
      <IconWrap>
        <MenuIcon />
        <IconText>더보기</IconText>
      </IconWrap>
    </div>
  );
};

export default Sidebar;

const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const IconText = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
`;
