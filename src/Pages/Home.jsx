/* eslint-disable react/no-unescaped-entities */
import { Card, Carousel } from "antd";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import ScrollToTop from "react-scroll-to-top";
import ContactUsComponent from "../Components/ContactUsComponent";
import ProductCarousel from "../Components/ProductCarousel";
import products from "../Data/products.json";
import videodata from "../Data/videos.json";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * 1;
  const paginatedData = videodata.slice(offset, offset + 1);

  return (
    <div>
      <Fade className="flex  flex-col items-center  scroll-smooth ">
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
          className=" bg-fixed bg-right transition-all  rounded-t-3xl overflow-hidden  w-full "
        >
          <div className="relative bg-[#000] bg-opacity-50 h-[40vh]">
            <h1 className=" text-3xl md:text-6xl text-center text-[#f6f6f6] font-bold absolute z-50 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Dattayog Farmer Producer Company
            </h1>
            <h1 className="text-xl md:text-3xl text-center text-[#f6f6f6] font-semibold absolute z-50 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Nurturing Farms, Nourishing Futures.
            </h1>
          </div>

          {/* Global quality food export */}

          <div className="bg-[#000]  bg-opacity-50">
            <div className=" flex px-5  bg-white py-10 md:py-29 lg:py-32 rounded-t-3xl flex-col items-center relative ">
              <img
                className="object-cover top-1/2 md:top-1/3 w-[80vw] md:w-[40vw]  absolute opacity-20 md:opacity-20 z-0 right-0"
                src="src\assets\plant.png"
                alt=""
              />
              <div className="flex flex-col items-center z-10 ">
                <h1 className=" text-2xl md:text-4xl text-center font-semibold">
                  Global Food Importers & Exporters
                </h1>
                <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
              </div>
              <div className="flex w-full items-center justify-center flex-col md:flex-row ">
                {/* <div className="w-full h-40 md:h-auto md:w-[30%] rounded-3xl bg-right-top bg-hero bg-fixed ">
              
            </div> */}

                <div className="w-full  lg:w-[70%] p-5 z-10 flex flex-col gap-5 ">
                  <p className="text-lg  ">
                    Dattayog Farmer Producer Company is dedicated to enhancing
                    the welfare of farmers in the Shirol taluka area.
                    Established on December 7, 2020, and registered under the
                    Government of India - Ministry of Corporate Affairs, our
                    company unites 615 farmers, predominantly those with small
                    farmland holdings.
                  </p>
                  <p className="text-lg  ">
                    Since our inception, we've been actively guiding farmers in
                    cultivating quality crops, particularly tomatoes, with
                    expert assistance. Upon harvest, we collect the produce and
                    process it in our manufacturing unit to create tomato paste,
                    ketchup, sauce, jaggery powder, and milk powder. Committed
                    to serving farmers to the best of our ability, we leverage
                    government schemes for their welfare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Products */}
        <div className="flex px-5 md:pb-10 w-full  flex-col items-center relative md:gap-10">
          <div className="flex flex-col items-center z-10 ">
            <h1 className=" text-2xl md:text-4xl text-center font-semibold">
              Popular Products
            </h1>
            <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
          </div>

          <div className="p-5 md:pb-10 flex gap-5 w-full overflow-x-scroll">
            <ProductCarousel />
          </div>
        </div>

        {/* Why choose us */}

        <div className="bg-secondary rounded-3xl p-10 h-fit ">
          <div className="flex flex-col gap-5 mx-auto pt-12 pb-20">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
              Why Choose Us
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {" "}
                  Farmer Empowerment
                </h2>
                <p className="text-gray-700">
                  Dattayog Farmer Producer Company Limited empowers small
                  farmers in Shirol, guiding them with expertise for
                  high-quality crops and ensuring fair prices, thereby uplifting
                  rural livelihoods.
                </p>
              </div>
              <div className="bg-white rounded-3xl  shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Ethical Sourcing
                </h2>
                <p className="text-gray-700">
                  We prioritize fair treatment and sustainable practices
                  throughout our supply chain, promoting ethical sourcing and
                  environmental responsibility.{" "}
                </p>
              </div>
              <div className="bg-white rounded-3xl  shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Transparent Processes
                </h2>
                <p className="text-gray-700">
                  We maintain open communication and clear processes in all
                  business dealings, fostering trust and accountability with our
                  stakeholders.{" "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl  shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {" "}
                  Strong Relationships
                </h2>
                <p className="text-gray-700">
                  Dattayog values strong connections with suppliers and
                  partners, promoting collaboration for mutual success in the
                  food trading industry.{" "}
                </p>
              </div>
              <div className="bg-white rounded-3xl  shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Resilience
                </h2>
                <p className="text-gray-700">
                  We adapt to changing regulations and overcome challenges,
                  ensuring consistent product quality and supply even during
                  disruptions like pandemics.{" "}
                </p>
              </div>
              <div className="bg-white rounded-3xl  shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Innovation
                </h2>
                <p className="text-gray-700">
                  Leveraging technology for efficient operations and continuous
                  improvement, we strive to remain at the forefront of
                  agricultural product manufacturing and trading.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Product range */}

        <div className=" py-10 md:py-29 lg:py-32  gap-5 items-center flex flex-col">
          <div className="flex flex-col items-center z-10 pb-5 ">
            <h1 className=" text-2xl md:text-4xl text-center font-semibold">
              Our Product Range
            </h1>
            <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
          </div>

          <div
            style={showMore ? {} : { height: "50vh", overflowX: "scroll" }}
            className=" shadow-inner drop-shadow-xl transition-all delay-500 ease-in-out p-5 lg:px-32 flex items-center justify-evenly gap-5 w-full flex-wrap"
          >
            {products.map((product) => (
              <Card
                key={product.id}
                hoverable
                className="w-[300px] h-[400px]"
                cover={
                  <img
                    className="object-cover h-[300px]"
                    alt="example"
                    src={product.image}
                  />
                }
              >
                <h1 className="text-lg font-bold text-center">
                  {product.name}
                </h1>
              </Card>
            ))}
          </div>

          <button
            className="bg-secondary border border-grey  w-fit px-4 p-2 rounded-3xl"
            onClick={() => {
              showMore ? setShowMore(false) : setShowMore(true);
            }}
          >
            {showMore ? (
              <h1 className=" text-xl font-extrabold">Show Less</h1>
            ) : (
              <h1 className=" text-xl font-extrabold">Show More</h1>
            )}
          </button>
        </div>

        {/* Video */}

        <div className="flex flex-col items-center w-full ">
          <div className="w-full flex flex-col gap-10 md:p-10 items-center">
            {paginatedData.map((video, index) => (
              <iframe
                key={index}
                className="w-[80%] h-[200px] md:h-[600px]"
                src={video.url}
                title="Global Quality Food Exporter from India_Good Food Services Pvt Ltd"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ))}
          </div>
          <ReactPaginate
            className="m-5 px-5 w-fit py-3 rounded-full bg-secondary flex gap-5 border border-[#38383820]"
            pageCount={Math.ceil(videodata.length / 1)}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
            initialPage={currentPage}
          />
          <style>{`
        .active {
          background-color: #383838;
          padding:0px 10px 0 10px ;
          border-radius:100px;
          color: white;
          
        }
      `}</style>
        </div>

        {/* What Our Clients Say! */}

        <div className="px-5 py-20 md:py-20 gap-5 h-fit w-full items-center flex flex-col">
          <div className="flex flex-col items-center z-10 ">
            <h1 className=" text-2xl md:text-4xl text-center font-semibold">
              What Our Clients Say!
            </h1>
            <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
          </div>

          <div className="w-full h-fit rounded-3xl ">
            <Carousel
              className="m-auto  h-fit w-full lg:w-[70%] rounded-3xl"
              autoplay
            >
              <div className="p-4  h-full md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <h1 className="text-lg mb-6">
                    Through expert guidance, they empower farmers with knowledge
                    and techniques to enhance crop yields, particularly in
                    tomato cultivation. Moreover, their integrated approach,
                    which includes processing units for tomato-based products
                    like paste, ketchup, sauce, as well as jaggery and milk
                    powder, showcases their dedication to value addition and
                    sustainable farming practices. Dattayog Farmer Producer
                    Company Limited's unwavering promise to leverage government
                    schemes for the betterment of farmers underscores their
                    commitment to the agricultural community.
                  </h1>
                  {/* <img alt="testimonial" src="" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Jon doe</span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span> */}
                </div>
              </div>

              <div className="p-4 h-full  md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <h1 className="text-lg mb-6">
                    Delivering premium-quality goods and services to its
                    clientele. With a robust infrastructure and a dedicated
                    team, they have established themselves as a reliable source
                    for a wide range of agricultural products. Their commitment
                    to excellence, coupled with a customer-centric approach,
                    ensures utmost satisfaction across their diverse customer
                    base.
                  </h1>
                </div>
              </div>

              <div className="p-4 h-full  md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <h1 className="text-lg mb-6">
                    Through expert advice and leveraging government schemes,
                    they empower farmers to enhance milk production and quality.
                    Furthermore, their investment in processing facilities for
                    dairy products such as milk powder signifies a dedication to
                    value addition and sustainability. Dattayog Farmer Producer
                    Company Limited's holistic approach to dairy farming
                    underscores their role as a catalyst for the prosperity of
                    farmers in the region.
                  </h1>
                </div>
              </div>

              <div className="p-4 h-full  md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <h1 className="text-lg mb-6">
                    Jaggery Powder Manufacturing Unit at Dattayog Farmer
                    Producer Company Limited exemplifies excellence in
                    agricultural value addition. By harnessing traditional
                    methods and modern technology, they produce high-quality
                    jaggery powder. This initiative not only adds value to farm
                    produce but also provides a sustainable income source for
                    local farmers, contributing significantly to rural economic
                    development.
                  </h1>
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        {/* Why the Indian market is Best? */}

        <div className="flex flex-col items-center  p-10 md:py-10 md:px-40 py-20">
          <div className="flex flex-col items-center z-10 pb-5 md:pb-20">
            <h1 className=" text-2xl md:text-4xl text-center font-semibold">
              Why the Indian market is Best?
            </h1>
            <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
          </div>

          <div className=" flex gap-10">
            <div className="w-[40%] hidden lg:flex rounded-3xl overflow-hidden">
              <img
                className="h-full object-cover"
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>

            <div className="flex flex-col  items-center gap-10">
              <Fade
                className="flex flex-col  items-center gap-10 w-full"
                damping={1}
              >
                {/* 1 */}
                <div className="flex w-full lg:w-[100%] gap-5 p-5 rounded-2xl bg-secondary">
                  <div>
                    <div className="border b flex items-center justify-center w-[50px] h-[50px] bg-primary rounded-full">
                      <h1 className="text-white font-extrabold text-xl">01</h1>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-5">
                    <h1 className="text-xl font-bold">AGRICULTURE BASE</h1>
                    <p>
                      India's agricultural sector, employing over half its
                      workforce, positions it as a major global exporter in
                      agriculture.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex w-full lg:w-[100%] gap-5 p-5 rounded-2xl bg-secondary">
                  <div>
                    <div className="border b flex items-center justify-center w-[50px] h-[50px] bg-primary rounded-full">
                      <h1 className="text-white font-extrabold text-xl">03</h1>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-5">
                    <h1 className="text-xl font-bold">AFFORDABLE RATES</h1>
                    <p>
                      India leverages inexpensive labor and raw materials to
                      produce spices, oils, and other food items at competitive
                      prices.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex w-full lg:w-[100%] gap-5 p-5 rounded-2xl bg-secondary">
                  <div>
                    <div className="border b flex items-center justify-center w-[50px] h-[50px] bg-primary rounded-full">
                      <h1 className="text-white font-extrabold text-xl">03</h1>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-5">
                    <h1 className="text-xl font-bold">
                      BEST QUALITY FOOD PRODUCTS
                    </h1>
                    <p>
                      Rigorous quality assurance processes ensure high standards
                      for all Indian food products.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex w-full lg:w-[100%] gap-5 p-5 rounded-2xl bg-secondary">
                  <div>
                    <div className="border b flex items-center justify-center w-[50px] h-[50px] bg-primary rounded-full">
                      <h1 className="text-white font-extrabold text-xl">04</h1>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-5">
                    <h1 className="text-xl font-bold">VARIETY OF TASTES</h1>
                    <p>
                      India is celebrated for its diverse array of flavors,
                      showcasing a rich tapestry of tastes.{" "}
                    </p>
                  </div>
                </div>

                {/* 5 */}
                <div className="flex w-full lg:w-[100%] gap-5 p-5 rounded-2xl bg-secondary">
                  <div>
                    <div className="border b flex items-center justify-center w-[50px] h-[50px] bg-primary rounded-full">
                      <h1 className="text-white font-extrabold text-xl">05</h1>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-5">
                    <h1 className="text-xl font-bold">
                      DIVERSITY OF INDIA AND INDIAN CULTURE
                    </h1>
                    <p>
                      India's diverse cultures contribute to a wide range of
                      food products, each region offering unique blends and
                      tastes.
                    </p>
                  </div>
                </div>

                {/* 6 */}
                <div className="flex w-full lg:w-[100%] gap-5 p-5 rounded-2xl bg-secondary">
                  <div>
                    <div className="border b flex items-center justify-center w-[50px] h-[50px] bg-primary rounded-full">
                      <h1 className="text-white font-extrabold text-xl">06</h1>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-5">
                    <h1 className="text-xl font-bold">
                      TECHNOLOGY AND INNOVATION
                    </h1>
                    <p>
                      India's technological prowess and innovative approaches
                      streamline manufacturing.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        {/* <div className="px-5 py-20  gap-5 items-center flex flex-col">
        <div className="flex flex-col items-center z-10 ">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold">
            Our Clients
          </h1>
          <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 w-[100%]  justify-evenly">
          <img src="https://Goodfoods.com/img/logo/BOX%208.jpg" alt="" />
          <img src="https://Goodfoods.com/img/logo/cii-foundation.png" alt="" />
          <img src="https://Goodfoods.com/img/logo/cyda.png" alt="" />
        </div>
      </div> */}

        <div className="flex items-cente justify-center p-5">
          <ContactUsComponent />
        </div>
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

export default Home;
