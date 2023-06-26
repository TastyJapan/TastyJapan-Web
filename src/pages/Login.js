// components
import GoogleOAuth from "../components/user/GoogleOAuth";

// style
import styled from "styled-components";

// images
import logo from "../assets/images/user/logo.jpg";
import background from "../assets/images/user/background.jpg";

const Welcome = () => {
  return (
    <Container>
      <Background src={background} />
      <div className="flex flex-col h-full">
        <div className="flex justify-center items-center basis-2/4">
          <Logo
            className="rounded-2xl shadow-lg"
            src={logo}
            alt="로고 이미지"
          />
        </div>
        <div className="flex flex-col justify-center items-center basis-1/4 mb-40">
          <GoogleOAuth />
          {/* <div className="pt-20 text-sm">
            계정이 없으신가요?{" "}
            <span className="text-blue-600 font-bold hover:underline cursor-pointer">
              가입하기
            </span>
          </div> */}
        </div>
        <div className="flex flex-col justify-center items-center basis-1/4">
          <div className="pt-3 text-base md:text-gray-400">
            개인정보이용약관
          </div>
          <div className="pt-3 text-base md:text-gray-400 font-bold hover:underline">
            <a
              href="https://github.com/TastyJapan"
              target="_blank"
              rel="noreferrer"
            >
              by Team TastyJapan
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Background = styled.img`
  height: 100%;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
    z-index: -1;
  }
`;

const Logo = styled.img`
  width: 35%;

  @media (max-width: 768px) {
    width: 20%;
  }

  @media (max-width: 600px) {
    width: 30%;
  }
`;
