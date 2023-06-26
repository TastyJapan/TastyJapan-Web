// style
import styled from "styled-components";

// icons
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";

// data
import mockData from "../../data/container.json";

// images
import mockImg from "../../assets/images/main/pick_test.jpg";

const cities = [
  {
    en: "tokyo",
    ko: "도쿄",
  },
  {
    en: "osaka",
    ko: "오사카",
  },
  {
    en: "fukuoka",
    ko: "후쿠오카",
  },
  {
    en: "okinawa",
    ko: "오키나와",
  },
  {
    en: "nagoya",
    ko: "나고야",
  },
  {
    en: "sapporo",
    ko: "삿포로",
  },
];

const menus = [
  {
    en: "ramen",
    ko: "라멘",
  },
  {
    en: "sushi",
    ko: "스시",
  },
  {
    en: "okonomiyaki",
    ko: "오코노미야끼",
  },
  {
    en: "takoyaki",
    ko: "타코야끼",
  },
  {
    en: "yakitori",
    ko: "야키토리",
  },
  {
    en: "yakiniku",
    ko: "야키니꾸",
  },
];

const Container = () => {
  return (
    <ContainerWrapper>
      {/* 검색 */}
      <div className="flex basis-1/12 justify-center items-center w-full">
        <div className="w-4/5 m-4">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SearchIcon />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-sky-600 rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"
              placeholder="식당을 검색하세요."
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>

      {/* 오늘의 pick */}
      <div className="basis-5/12 md:basis-4/12">
        <Title>오늘의 PICK!</Title>
        <div className="flex justify-center items-center mx-8">
          <img
            src={mockImg}
            alt={`${mockData.name} 이미지`}
            className="w-4/5 h-[150px] object-cover rounded-md"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-evenly text-sm mt-2">
          <div className="w-[110px] text-right flex justify-center items-center">
            {mockData.name}
          </div>
          <div className="w-[90px] text-neutral-400 text-xs flex justify-center items-center">
            {mockData.introduction}
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around text-sm my-4">
          <div className="flex flex-row">
            <StyledStarIcon />
            {mockData.rating}/5
          </div>
          <div>리뷰 {mockData.reviewCount}</div>
          <div>블로그 리뷰 {mockData.blogReviewCount}</div>
        </div>
      </div>

      {/* Hot City */}
      <Title>
        Hot City
        <hr />
      </Title>
      <div className="flex justify-center items-center mt-2 mb-3">
        <div className="grid grid-cols-3 gap-7">
          {cities.map((city) => (
            <div key={city.en} className="flex flex-col items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/city/${city.en}.jpg`}
                alt={`${city.ko} 이미지`}
                className="w-[50px]"
              />
              <div className="text-sm">{city.ko}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hot Menu */}
      <Title>
        Hot Menu
        <hr />
      </Title>
      <div className="flex justify-center items-center mt-2 mb-3">
        <div className="grid grid-cols-3 gap-2">
          {menus.map((menu) => (
            <div key={menu.en} className="flex flex-col items-center mb-2">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/menu/${menu.en}.jpg`}
                alt={`${menu.ko} 이미지`}
                className="w-[50px]"
              />
              <div className="text-sm">{menu.ko}</div>
            </div>
          ))}
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Container;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  height: 100vh;
  border-top: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    border: none;
    overflow: scroll;
  }
`;

const Title = styled.div`
  margin: 0.4rem 2rem;
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    margin: 1rem 2rem;
  }
`;

const StyledStarIcon = styled(StarIcon)`
  && {
    color: #ffe641;
    font-size: 1.2rem;
  }
`;
