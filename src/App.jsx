import "./index.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import ShopCollection from "./components/ShopCollection";
import Footer from "./components/Footer";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The main application component.
 *
 * This component renders a full-width and height div with a blue background,
 * and a child div with a white background, some margin and padding.
 * The child div contains a Navbar and a HeroSection component.
 *
 * @returns {React.ReactElement} the main application component.
/*******  468e0c8e-fe63-4484-b121-686a13ed3381  *******/
function App() {
  return (
    <div className="h-fit w-full bg-[#FFB4A3] flex items-center justify-center">
      {/* VERTICAL LINES */}
      {/* <div className="absolute top-0 bottom-0 left-10 w-[4px] bg-white opacity-70"></div>
      <div className="absolute top-0 bottom-0 left-11 w-[4px] bg-white opacity-70"></div>

      {/* HORIZONTAL LINES */}
      {/* <div className="absolute left-0 right-0 top-15 h-[4px] bg-white opacity-70"></div>
      <div className="absolute left-0 right-0 top-16 h-[4px] bg-white opacity-70"></div>  */}
      <div className="h-fit w-full bg-[#FFF4DF] ml-10 mt-15">
        <Navbar />
        <HeroSection />
        <ShopCollection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
