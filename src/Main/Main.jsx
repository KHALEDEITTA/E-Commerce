import Footer from "../Footer/Footer";
import NavBarButton from "../Navbar Button/NavBarButton";
import Navbar from "../Navbar/Navbar";
import AllProduct from "../ProductSection/AllProduct";
import Slider from "../Slider/Slider";


export default function Main() {
  return (
    <>
    <Navbar></Navbar>
    <Slider></Slider>
    <NavBarButton></NavBarButton>
    <AllProduct />
    <Footer />
    </>
  )
}
