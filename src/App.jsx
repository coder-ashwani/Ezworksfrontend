import "./App.css";
import logo from "/ezlogo.png";
import Card from "./Card";
import Researching from "/research.png";
import AudioVisual from "/audiovisual.png";
import Translation from "/translational.png";
import Graphic from "/graphic.png";
import Research from "/cardfifth.png";
import Processingimg from "/processing.png";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="container flex flex-col lg:flex-row items-center pl-10 pr-10">
        <div className="left rounded-md  h-auto lg:h-[450px] w-full lg:w-[1000px] mt-[100px]">
          <img
            src={logo}
            alt="image not loading"
            className="w-[375px] h-[90px] mt-4 mx-auto lg:mx-0"
          />
          <br />
          <div>
            <h2 className="text-[#112949] text-3xl md:text-4xl text-center lg:text-left">
              Suite Of Business Support Services
            </h2>
            <br />
            <br />
            <p className="text-gray-700 text-[20px] text-lg text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt...Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed
            </p>
          </div>
          <br />
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto lg:mx-0">
            <Form />
          </div>
        </div>

        <div className="right flex flex-col lg:flex-row flex-wrap justify-center items-center mt-[100px] h-auto lg:h-[450px] w-full lg:w-[1000px]">
          <Card
            image={Researching}
            title="Presentation Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          />
          <Card
            image={AudioVisual}
            title="Audio- Visual Production"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image={Translation}
            title="Translation Services"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image={Graphic}
            title="Graphic Design"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image={Research}
            title="Research & Analytics"
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
