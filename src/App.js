import "./tailwind.css";
import "./App.css";
import SocialIcons from "./social-icons";
import AboutMe from "./aboutme";
import GetInTouch from "./getintouch";
import Footer from "./footer";
import InfoBanner from "./infobanner";

function App() {
  return (
    <div className="overflow-hidden bg-dark-gray">
      <div className="w-screen h-screen overflow-hidden relative border-b border-goth-orange">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/media/skulls-header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute flex flex-col items-center gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-goth-orange font-canterbury text-[58px] lg:text-title pb-14 underline-slide">
            joelbeevors.com
          </h1>
          <p className="text-goth-orange font-canterbury text-[28px] lg:text-body text-center">
            At the heart of alternative creativity
          </p>
          <SocialIcons />
        </div>
      </div>
      <InfoBanner />
      <AboutMe />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
