// components
import Container from "../components/sideContainer/Container";
import Sidebar from "../components/sideContainer/Sidebar";

const Main = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Container />
    </div>
  );
};

export default Main;
