import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import SocialMedia from "../Components/SocialMedia";

const ContactUs = () => {
  const [state, setState] = useState({
    Name: "",
    "E-mail": "",
    Number: "",
    Company: "",
    Message: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-secondary items-center">
      <h1 className="p-5 text-2xl  md:text-3xl font-bold">Contact Us</h1>

      <div className="w-[80%] md:w-[60%] bg-secondary p-5 md:p-5 h-fit rounded-full">
        <h1 className="py-2">
          <Link to="/">Home</Link> / <Link to="/contact">Contact Us</Link>
        </h1>
      </div>

      <div className="flex flex-col justify-evenly md:w-full md:flex-row gap-10 md:gap-20 p-10 md:p-20">
        <div className="flex flex-col justify-start ">
          <h1 className="py-2 flex items-center text-xl font-bold transition-all delay-100 ease-in-out ">
            Registered address:
          </h1>

          <div className="flex">
            <div className="flex p-2">
              <img
                className="h-[30px] brightness-0"
                src="src\assets\location.svg"
                alt=""
              />
            </div>
            <div>
              <h1 className=" flex items-center text-sm  transition-all delay-100 ease-in-out ">
                Dattayog Farmer Producer Company Limited
                <br /> Kurundwad <br /> Tal: Shirol Dist : Kolhapur
              </h1>
            </div>
          </div>

          <div className="flex ">
            <div className="flex   p-2">
              <img
                className="h-[30px] brightness-0"
                src="src\assets\email.svg"
                alt=""
              />
            </div>
            <div>
              <h1 className="py-2 flex items-center transition-all delay-100 ease-in-out ">
                Email:
              </h1>
              <h1 className=" flex items-center text-sm  transition-all delay-100 ease-in-out ">
                dattyog.farmer@gmail.com
              </h1>
            </div>
          </div>

          <div className="flex">
            <div className="flex   p-2">
              <img
                className="h-[30px] brightness-0"
                src="src\assets\phone.svg"
                alt=""
              />
            </div>
            <div>
              <h1 className="py-2 flex items-center transition-all delay-100 ease-in-out ">
                Phone Number:
              </h1>
              <h1 className=" flex items-center text-sm    transition-all delay-100 ease-in-out ">
               8623901776 / 7709611776
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <SocialMedia />
          </div>

          <div className="flex items-center justify-center">
             <Link to='https://maps.app.goo.gl/tTPV1mApV9x9xnW5A' className="bg-white rounded-full w-fit px-5 py-2  flex gap-5 items-center justify-center">
            <h1 className="text-lg font-bold ">Google Business</h1>
          <img  src="https://img.icons8.com/?size=256&amp;id=4y5FyfJdxJ3h&amp;format=png" width="50" height="50" alt="My Business icon" />
          </Link>
          </div>
         

        </div>

        <form
          action="https://formspree.io/f/mpwaaear"
          method="POST"
          className="flex flex-col"
        >
          <div className="flex flex-col md:flex-row  md:gap-10">
            <div className="relative my-4">
              <input
                id="id-01"
                type="text"
                name="Name"
                placeholder="your Name"
                value={state["name"]}
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-primary focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={handleChange}
              />
              <label
                htmlFor="id-01"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-primary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your full name
              </label>
            </div>

            <div className="relative my-4">
              <input
                id="id-02"
                type="E-mail"
                name="E-mail"
                placeholder="your name"
                value={state["E-mail"]}
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all invalid:border-pink-500 invalid:text-pink-500 focus:border-primary focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={handleChange}
              />
              <label
                htmlFor="id-02"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs  transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-primary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your email
              </label>
            </div>
          </div>

          <div className="relative my-4">
            <input
              id="id-03"
              type="text"
              name="Number"
              placeholder="your name"
              value={state["Number"]}
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-primary focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              onChange={handleChange}
            />
            <label
              htmlFor="id-03"
              className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs  transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-primary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Phone number
            </label>
          </div>

          <div className="relative my-4">
            <input
              id="id-04"
              type="text"
              name="Company"
              placeholder="your name"
              value={state["Company"]}
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-primary focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              onChange={handleChange}
            />
            <label
              htmlFor="id-04"
              className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs  transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-primary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Company name
            </label>
          </div>

          <div className="relative">
            <textarea
              id="id-05"
              type="text"
              name="Message"
              placeholder="Write your message"
              rows="3"
              className="peer relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-primary focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            ></textarea>
            <label
              htmlFor="id-5"
              className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs  transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-primary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Write your message
            </label>
          </div>

          <button
            type="submit"
            className="bg-primary w-fit px-4 my-2 p-2 rounded-3xl"
          >
            <h1 className="text-white text-xl font-extrabold">Enquire Now</h1>
          </button>
        </form>
      </div>

      {/* <div className="flex flex-col md:flex-row p-10 md:p-20  gap-10 justify-center ">
        <div className="flex items-start  flex-col md:w-[30%]  gap-5">
          <h1 className="text-xl font-bold px-5">PUNE</h1>
          <div className="flex gap-2">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
              <img
                className="w-[30px] hover:w-[45px] transition-all ease-in-out brightness-0"
                src="src\assets\location.svg"
                alt=""
              />
            </div>
            <div className=" flex flex-col  md:text-start md:w-[80%] justify-sta gap-2  ">
              <p>
                {" "}
                33/15, Prashant Bunglow, Opp.Garware College, Karve Road Pune
                411004 India.
              </p>
            </div>
          </div>
        </div>

        <div className="flex iitems-start  flex-col md:w-[30%]  gap-5">
          <h1 className="text-xl font-bold px-5">MUMBAI</h1>
          <div className="flex gap-2">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
              <img
                className="w-[30px] hover:w-[45px] transition-all ease-in-out brightness-0"
                src="src\assets\location.svg"
                alt=""
              />
            </div>
            <div className=" flex flex-col  md:text-start md:w-[80%] justify-sta gap-2  ">
              <p>
                282, Khandke Building, Office No. 21, 2nd floor, Shahid Bhagat
                Singh Road, Fort Market, Near Sher-e-Punjab Hotel, Mumbai- 400
                001
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start  flex-col md:w-[30%]  gap-5">
          <h1 className="text-xl font-bold px-5">BANGALORE</h1>
          <div className="flex gap-2">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
              <img
                className="w-[30px] hover:w-[45px] transition-all ease-in-out brightness-0"
                src="src\assets\location.svg"
                alt=""
              />
            </div>
            <div className=" flex flex-col  md:text-start md:w-[80%] justify-sta gap-2  ">
              <p>
                No. 121, First Floor, Brigade Gardens, No. 19, Church Street,
                Brigade Road, Bangalore 560001
              </p>
            </div>
          </div>
        </div>
      </div> */}

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

export default ContactUs;
