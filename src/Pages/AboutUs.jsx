import { Link } from "react-router-dom";
import ContactUsComponent from "../Components/ContactUsComponent";
import ScrollToTop from "react-scroll-to-top";
import mission from "../assets/mission.png";
import vision from "../assets/vision.svg";
import quality from "../assets/quality.svg";
import experience from "../assets/experience.svg";
import trust from "../assets/trust.svg";
import time from "../assets/time.svg";
import inovation from "../assets/inovation.svg";
import transparency from '../assets/transperency.svg'
import { Fade } from "react-awesome-reveal";


const AboutUs = () => {
  return (
    <div >

      <Fade className="flex flex-col    items-center">
      
      <h1 className="p-5 text-2xl  md:text-3xl font-bold">About Us</h1>

      <div className="w-[80%] md:w-[60%] bg-secondary p-5 md:p-5 h-fit rounded-full">
        <h1 className="py-2">
          <Link to="/">Home</Link> / <Link to="/about">About Us</Link>
        </h1>
      </div>

      <div className="flex flex-col h-fit lg:flex-row py-10 md:py-29 lg:py-20 gap-5 lg:gap-20 items-center justify-center">
        <div className="w-[80%] lg:w-[30%] h-full rounded-3xl overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="w-[80%] lg:w-[30%] h-fit">
          <h1 className="p-5 text-center text-xl  md:text-3xl  font-bold">
            WELCOME TO DATTAYOG
          </h1>
          <p className=" text-[#525252]">
            Dattayog Farmer Producer Company Limited Kurundwad Tal: Shirol Dist
            : Kolhapur is our company working for welfare of farmers in Shirol
            taluka area. Our company is established on 7th December 2020. Our
            company is registered to Government of India - Ministry of Corporate
            Affairs under Company’s Act, 2013. We have united 615 farmers which
            mostly include farmers having a very small farmland. Since the
            establishment of the company, we have been guiding the farmers about
            how to develop good crop specially tomato on the farm. We are
            providing guidance with the help of experts to famers to do so. Afte
            the crop is ready; we collect it and use it in our processing unit
            for tomato paste, ketchup ,sauce Jaggery powder,milk powder
            manufacturing unit . We are promised to serve farmers as much
            possible as we can with the help of government schemes for the
            welfare of farmers.
          </p>
        </div>
      </div>

      {/* mission vision */}

      <div className="flex flex-col md:flex-row  py-10 md:py-29 lg:py-32  justify-center  ">
        <div className="flex items-center lg:items-start gap-5 flex-col lg:flex-row md:w-[50%] lg:w-[30%]">
          <div className="w-[110px] h-[110px] flex items-center justify-center">
            <img
              className="w-[100px] hover:w-[105px] transition-all ease-in-out"
              src={mission}
              alt=""
            />
          </div>
          <div className=" flex flex-col text-center lg:text-start md:w-[80%] justify-sta gap-2 px-10 ">
            <h1 className="text-xl font-bold">OUR MISSION</h1>
            <p>
              Dattayog empowers small farmers in Shirol. We guide them with
              expertise for high-quality crops and ensure fair prices. We
              collect their produce and create value-added products like tomato
              paste, boosting farmer income and promoting sustainable
              agriculture.
            </p>
          </div>
        </div>

        <div className="flex items-center lg:items-start gap-5 flex-col lg:flex-row md:w-[50%] lg:w-[30%]">
          <div className="w-[110px] h-[110px] flex items-center justify-center">
            <img
              className="w-[100px] hover:w-[105px] transition-all ease-in-out"
              src={vision}
              alt=""
            />
          </div>
          <div className=" flex flex-col text-center lg:text-start md:w-[80%] justify-sta gap-2 px-10">
            <h1 className="text-xl font-bold">OUR VISION</h1>
            <p>
              Dattayog&apos;s vision is to be a leading exporter of high-quality
              agricultural products by leveraging technology, ethical sourcing,
              and strong relationships to navigate industry challenges and
              become a trusted leader in the food trading industry
            </p>
          </div>
        </div>
      </div>

      {/* Values */}

      <div className="py-20 md:py-29 lg:py-32 w-full bg-secondary flex  flex-col items-center  relative gap-10">
        <div className="flex flex-col items-center z-10 ">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold">
            Values
          </h1>
          <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
        </div>

        <div className=" z-10 flex flex-col items-center gap-10 md:gap-10 ">
          <div className="flex w-full items-center gap-10 md:gap-2 flex-col md:flex-row justify-evenly">
            <div className="flex items-center gap-5 flex-col md:w-[40%]">
              <div className="w-[110px] h-[110px] flex items-center justify-center">
                <img
                  className="w-[100px] hover:w-[105px] transition-all ease-in-out"
                  src={quality}
                  alt=""
                />
              </div>
              <div className=" flex flex-col text-center  justify-center gap-2 px-10 ">
                <h1 className="text-xl font-bold">Best Quality Services</h1>
                <p>A commitment to providing premium agricultural products.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 flex-col md:w-[40%]">
              <div className="w-[110px] h-[110px] flex items-center justify-center">
                <img
                  className="w-[100px] hover:w-[105px] transition-all ease-in-out"
                  src={experience}
                  alt=""
                />
              </div>
              <div className=" flex flex-col text-center  justify-center gap-2 px-10 ">
                <h1 className="text-xl font-bold">Ethical Sourcing</h1>
                <p>
                  Ensuring fair treatment and sustainable practices throughout
                  the supply chain.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center gap-10 md:gap-2 flex-col md:flex-row justify-evenly">
            <div className="flex items-center gap-5 flex-col md:w-[40%]">
              <div className="w-[110px] h-[110px] flex items-center justify-center">
                <img
                  className="w-[100px] hover:w-[105px] transition-all ease-in-out"
                  src={transparency}
                  alt=""
                />
              </div>
              <div className=" flex flex-col text-center  justify-center gap-2  ">
                <h1 className="text-xl font-bold">Transparency</h1>
                <p>
                  Open communication and clear processes in all business
                  dealings.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 flex-col md:w-[40%]">
              <div className="w-[110px] h-[110px] flex items-center justify-center">
                <img
                  className="w-[100px] hover:w-[105px] transition-all ease-in-out"
                  src={trust}
                  alt=""
                />
              </div>
              <div className=" flex flex-col text-center  justify-center gap-2  ">
                <h1 className="text-xl font-bold">Relationship-Building</h1>
                <p>
                  Fostering strong connections with suppliers and partners for a
                  collaborative and successful food trading industry.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center gap-10 md:gap-2 flex-col md:flex-row justify-evenly  ">
            <div className="flex items-center gap-5 flex-col md:w-[40%]">
              <div className="w-[110px] h-[110px] flex items-center justify-center">
                <img
                  className="w-[100px] hover:w-[105px] transition-all ease-in-out"
                  src={time}
                  alt=""
                />
              </div>
              <div className=" flex flex-col text-center  justify-center gap-2  ">
                <h1 className="text-xl font-bold">Resilience</h1>
                <p>
                  Adapting to changing regulations and overcoming challenges
                  like ingredient financing and pandemic disruptions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 flex-col md:w-[40%]">
              <div className="w-[110px] h-[110px] flex items-center justify-center">
                <img
                  className="w-[100px] hover:w-[105px] transition-all ease-in-out"
                  src={inovation}
                  alt=""
                />
              </div>
              <div className=" flex flex-col text-center  justify-center gap-2  ">
                <h1 className="text-xl font-bold">Innovation</h1>
                <p>
                  Leveraging technology for efficient operations and continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who we are */}

      <div className="p-10 md:px-20 lg:pt-20 flex  flex-col items-center relative gap-10">
        <div className="flex flex-col items-center z-10 ">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold">
            Who We Are?
          </h1>
          <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
        </div>
        <div className=" z-10 flex flex-col gap-5 ">
          <p className="text-lg lg:px-40  text-[#525252]">
            Dattayog Farmer Producer Company Limited, founded on December 7,
            2020, is a registered entity under Indias Ministry of Corporate
            Affairs. We operate in Kurundwad Tal: Shirol Dist : Kolhapur,
            dedicated to uplifting small-scale farmers in the region.
          </p>
        </div>
      </div>

      {/* What we do */}

      <div className="p-10 md:px-20 lg:p-20 flex  flex-col items-center relative gap-10">
        <div className="flex flex-col items-center z-10 ">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold">
            What We Do?
          </h1>
          <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
        </div>
        <div className=" z-10 flex flex-col gap-5 ">
          <p className="text-lg lg:px-40  text-[#525252]">
            Our mission revolves around empowering farmers by providing them
            with guidance and support in cultivating high-quality crops,
            especially tomatoes. Through collaboration with agricultural
            experts, we offer valuable insights and techniques for crop
            development. Additionally, we facilitate the collection of
            farmer&apos;s produce, which is then utilized in our processing
            unit. Here, we manufacture various products such as tomato paste,
            ketchup, sauce, jaggery powder, and milk powder. By leveraging
            government schemes and initiatives, we strive to maximize our
            assistance to farmers, ensuring their overall welfare and
            prosperity.
          </p>
        </div>
      </div>

      <ContactUsComponent />
            </Fade>

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

export default AboutUs;
