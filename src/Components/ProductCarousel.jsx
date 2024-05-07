import Glide from "@glidejs/glide";
import { Card } from "antd";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


export default function ProductCarousel() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      autoplay: 3000,
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
      <div className="glide-01 relative w-full">
        {/*    <!-- Slides --> */}
        <div
          className=" overflow-hidden py-5 flex items-center"
          data-glide-el="track"
        >
          <ul className=" whitespace-no-wrap flex-no-wrap  [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full  p-0">
            <li>
              <Card
                hoverable
                className="md:w-[300px] h-[400px]"
                cover={
                  <img
                    className="object-contain h-[300px] "
                    alt="example"
                    src="https://images.unsplash.com/photo-1565498971161-42ae3dbcca75?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                  />
                }
              >
                <h1 className="text-lg font-bold text-center">
                  Jaggery powder
                </h1>
              </Card>
            </li>
            <li>
              <Card
                hoverable
                className="md:w-[300px]  h-[400px]"
                cover={
                  <img
                    className="object-contain h-[300px] "
                    alt="example"
                    src="https://static.toiimg.com/thumb/74984743.cms?width=680&height=512&imgsize=963844"
                  />
                }
              >
                <h1 className="text-lg font-bold text-center">Milk Powder</h1>
              </Card>
            </li>
            <li>
              <Card
                hoverable
                className="md:w-[300px]  h-[400px]"
                cover={
                  <img
                    className="object-contain h-[300px] "
                    alt="example"
                    src="https://images.unsplash.com/photo-1602237514002-c2d8ae2da393?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                }
              >
                <h1 className="text-lg font-bold text-center">
                  Red Dry Chilly
                </h1>
              </Card>
            </li>
            <li>
              <Card
                hoverable
                className="md:w-[300px]  h-[400px]"
                cover={
                  <img
                    className="object-contain h-[300px] "
                    alt="example"
                    src="https://images.unsplash.com/photo-1627735483792-233bf632619b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                }
              >
                <h1 className="text-lg font-bold text-center">Wheat Flour</h1>
              </Card>
            </li>
            <li>
              <Card
                hoverable
                className="md:w-[300px]  h-[400px]"
                cover={
                  <img
                    className="object-contain h-[300px] "
                    alt="example"
                    src="https://img.freepik.com/free-photo/bottom-view-red-pepper-powder-wooden-spoon-black-surface_140725-102773.jpg?t=st=1714109853~exp=1714113453~hmac=b321602ae728075ed2ac9734ffec901c429b4fae6986a096f4fa38edaa3398fb&w=740"
                  />
                }
              >
                <h1 className="text-lg font-bold text-center">
                  Red chilly powder
                </h1>
              </Card>
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
      {/*<!-- End Carousel with controls inside --> */}
    </>
  );
}
