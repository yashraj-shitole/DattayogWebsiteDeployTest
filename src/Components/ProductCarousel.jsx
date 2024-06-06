import Glide from "@glidejs/glide";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import CardExpandable from "./CardExpandable";


export default function ProductCarousel() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 5000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1300: {
          perView: 3,
        },
        980: {
          perView: 2,
        },
        700: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with controls inside --> */}
      <div className="glide-01 relative  w-full">
        {/*    <!-- Slides --> */}
        <div
          className=" overflow-x-hidden h-fit py-5 flex items-center"
          data-glide-el="track"
        >
          <ul className=" h-fit whitespace-no-wrap flex-no-wrap  [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full  p-0">
            <li className="">
              <CardExpandable image="https://5.imimg.com/data5/SELLER/Default/2021/4/QA/IY/OW/80800295/brown-jaggery-powder-500x500.png" title="Jaggery powder" tableData={{  
                  "Color": "Brown",
                  "Fat": "0.12 g/100g",
                  "Protein": "0.47g/100g",
                  "Carbohydrate": "95.32g/100g",
                  "Energy": "383.32 Kcal/100g",
                  "Sugar": "94.87g/100g",
                  "Moisture": "5.47g/100g",
                  "Packaging sizes":"250 gms, 500 gms, 1 kg, 5 kg, 10kg, 30kg",
                  "Health values": "Gluten-Free, High in Protein, No Artificial Flavour, No Preservatives, Natural and Organic",
                  "Production Capacity": "25000 kgs",
                  "Shelf Life": "18 Months",
                  "Delivery Time" : "India:4-7 days, Other countries: 10-20 days"}} />
                        </li>


                        <li>
                        <CardExpandable image="https://t4.ftcdn.net/jpg/01/81/89/57/360_F_181895708_TBjyYljnfHiWfcdzk1kafqCNWnqcmd26.jpg" title="Dry red chilly" tableData={{  
                          "Color": "Deep red to bright red",
                          "Moisture": "10% maximum",
                          "Foreign Material": "Less than 2%",
                          "Broken/Damaged Pods": "Around 3% allowance",
                          "Capsaicin Content": "5,000 - 100,000 SHU",
                          "Loose seeds":"Maximum 2%",
                          "Packing":"Typically comes in 5, 10, 15, 20, 25 & 40 kg cartons, jute bags or polypropylene (PP) bags, or as per customer requirement."
                        }} />
            </li>
            <li>
            <CardExpandable image="https://erb.codeblazar.com/wp-content/uploads/2019/03/Wheat-Flour.jpg" title="Wheat flour" tableData={{  
                           "Moisture": "11-14%",
                           "Ash Content": "0.5-0.65%",
                           "Granularity": "As per customer requirements",
                           "Color": "Whiter generally preferred",
                           "Extraneous Matter": "Absent",
                           "Microbiological": "Meets importing country's safety standards"
                            }} />
            </li>
            <li>
            <CardExpandable image="https://images.herzindagi.info/image/2022/Aug/milk-powder-storing-tips.jpg" title="Milk powder" tableData={{  
                          "Type": "Whole, Skim, Instant",
                          "Moisture": "Low",
                          "Microbiology": "Meets importing country's safety standards",
                          "Packaging": "Multi-layer bags, drums, or as specified",
                          "Labeling": "Follows importing country's regulations",
                          "Certification": "May require HACCP, Kosher, etc."
                           }} />
            </li>
            <li>
            <CardExpandable image="https://img.freepik.com/premium-photo/bottle-tomato-sauce-closeup_181303-1018.jpg?size=626&ext=jpg&ga=GA1.1.375099208.1717667132&semt=ais_user" title="Tomato Paste" tableData={{  
                          "Color": "Deep red",
                          "pH": "4.2 to 4.6",
                          "Consistency": "Thick and concentrated",
                          "Flavor": "Sweet or tart",
                          "Packaging": "Cans or tubes",
                          "Natural Tomato Soluble Solids (NTSS)":"At least 24%"
                          
                        }} />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="  flex  w-full items-center justify-center gap-5 px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex w-28 font-bold p-2 bg-secondary  items-center justify-center rounded-full border border-[#38383820] text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <FaArrowLeft />

          </button>
          <button
            className="inline-flex w-28 font-bold p-2 bg-secondary  items-center justify-center rounded-full border border-[#38383820] text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <FaArrowRight />

          </button>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
    </>
  );
}




