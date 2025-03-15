import "./App.css";
import logo from "/ezlogo.png";
import Card from "./Card";
import Researchimg from "/research.png";
import AudioVisual from "/audiovisual.png";
import Translation from "/translational.png";
import Graphic from "/graphic.png";
import Research from "/cardfifth.png";
import Processingimg from "/processing.png";

// import Form from "./Form";
import Form from "./form";
//  error hai yahan rraha hai

function App() {
  return (
    <>
      <div className="flex items-center pl-10 pr-10 border-black ">
        <div className="left  rounded-md border-2 h-[450px] w-[1000px] mt-[100px]">
          <img
            src={logo}
            alt="image not loading"
            className="w-[410px] h-[90px] mt-4"
          />
          {/* <br /> */}
          <br />
          <div>
            <h2 className=" text-[#112949] text-3xl md:text-4xl">
              Suite Of Business Support Services
            </h2>
            <br />
            <br />
            <p className="text-gray-700 text-[20px] text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt...Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed
            </p>
          </div>
          <br />
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
            {/* <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 w-[275px] h-[37px]"
            />
            <button className="px-6 py-1 bg-[#EA7B2C] hover:bg-orange-600 text-white rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95  shadow-md hover:shadow-lg h-[37px]">
              Contact Me
            </button> */}
            <Form />
          </div>
        </div>

        <div className="right flex flex-wrap border-2 border-black mt-[100px]  h-[450px] w-[1000px]">
          <Card
            image={Researchimg}
            title="Presentation Design"
            description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          />
          <Card
            image={AudioVisual}
            title="Audio- Visual Production"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image={Translation}
            title="Translation Services"
            description=" Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image={Graphic}
            title="Graphic Design"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image={Research}
            title="Research & Analytics "
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image={Processingimg}
            title="Data Processing"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
        </div>
      </div>
    </>
  );
}
export default App;
