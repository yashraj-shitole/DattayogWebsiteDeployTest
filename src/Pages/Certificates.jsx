import { useState } from "react";
import ImgsViewer from "react-images-viewer";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import ContactUsComponent from "../Components/ContactUsComponent";

import c1 from "../assets/Certificates/CERTIFICATE OF INCORPORATION_page-0001.jpg";
import c3 from "../assets/Certificates/GST.jpg";
import c2 from "../assets/Certificates/IEC CODE_page-0001.jpg";


const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="flex flex-col p-10 items-center">
      <h1 className="p-5 text-2xl  md:text-3xl font-bold">Certificates</h1>

      <div className="w-[80%] md:w-[60%] bg-secondary p-5 md:p-5 h-fit rounded-full">
        <h1 className="py-2">
          <Link to="/">Home</Link> /{" "}
          <Link to="/certificates">Certificates</Link>
        </h1>
      </div>

      {/* Certifications */}

      <div className=" py-10 md:py-20 lg:py-30 flex  flex-col items-center relative gap-5">
        <div className="flex flex-col items-center z-10 ">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold">
            Certifications
          </h1>
          <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
        </div>
        <div className=" z-10 flex flex-col gap-5 ">
          <p className="text-lg lg:px-40  text-[#525252]">
          In the realm of food handling and export, ensuring optimal levels of hygiene, quality, and safety is paramount. At Good, we prioritize meeting international standards by implementing thorough quality checks and adhering to strict protocols at every stage of the process. Consequently, we have earned accreditation across various quality and food safety certifications, underscoring our commitment to excellence.
          </p>
          <p className="text-lg lg:px-40  text-[#525252]">
          We ensure that every step adheres to the highest standards of quality and food safety. From food preparation, packaging, to processing, we meticulously follow rigorous protocols. Our company is certified by the Indian government as an exporter of food items.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className=" flex flex-wrap items-center justify-center gap-10">
          <div className="flex flex-col items-center">
            <img
              src={c1}
              alt="image"
              onClick={() => {
                setIsOpen(true);
                setCurrImg(0);
              }}
              className={"w-[200px]"}
            />
            <h1 className="font-bold">CERTIFICATE OF INCORPORATION</h1>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={c2}
              alt="image"
              onClick={() => {
                setIsOpen(true);
                setCurrImg(1);
              }}
              className={"w-[200px]"}
            />
            <h1 className="font-bold">IEC CODE</h1>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={c3}
              alt="image"
              onClick={() => {
                setIsOpen(true);
                setCurrImg(2);
              }}
              className={"w-[200px]"}
            />
            <h1 className="font-bold">GST</h1>
          </div>

          <ImgsViewer
            imgs={[
              {
                src: `${c1}`,
              },
              {
                src: `${c2}`,
              },
              {
                src: `${c3}`,
              },
            ]}
            currImg={currImg}
            showThumbnails={true}
            isOpen={isOpen}
            onClickPrev={() => setCurrImg(currImg - 1)}
            onClickNext={() => setCurrImg(currImg + 1)}
            onClickThumbnail={(index) => setCurrImg(index)}
            onClose={() => setIsOpen(false)}
          />
        </div>
      </div>

      <div>
        <ContactUsComponent />
      </div>
      <ScrollToTop
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
          background: "#38383840",
          margin: "10px",
        }}
        smooth
      />
    </div>
  );
};

export default Certificates;
