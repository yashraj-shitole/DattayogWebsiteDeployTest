import { Card } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import productsData from "../../Data/Tomatoprocessedproducts.json";
import { Fade } from "react-awesome-reveal";

const Tomatoprocessedproducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(productsData);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterProducts(e.target.value);
  };

  const filterProducts = (query) => {
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Fade className="flex flex-col items-center">
      <h1 className="p-5 text-2xl md:text-3xl font-bold">
        Tomato Processed Products
      </h1>
      <div className="w-[80%] border border-[#C7C8CC] md:w-[60%] bg-secondary p-5 md:p-5 h-fit rounded-full">
        <h1 className="py-2 cursor-pointer">
          <Link to="/">Home</Link> / Tomato Processed Products
        </h1>
      </div>

      {/* Certifications */}
      <div className="p-10 md:p-20 flex flex-col items-center relative gap-10">
        <div className="flex flex-col items-center z-10 ">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold">
            Indian Tomato Processed Products Exporters
          </h1>
          <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-10 lg:gap-0 items-center  ">
        <div className="lg:w-[50%]  lg:flex rounded-3xl overflow-hidden">
            <img className="h-full object-cover" src="https://images.unsplash.com/photo-1568581789190-ae90a7da930b?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        <div className=" lg:w-[80%] flex flex-col gap-5 ">
          <p className="text-lg lg:px-20  text-[#525252]">
            Dattayog Farmer Producer Company extends its expertise to the
            processing of tomatoes, benefiting farmers in the Shirol taluka
            area. With a focus on value addition, we collect the harvested
            tomatoes and process them into a range of high-quality products such
            as tomato paste, ketchup, sauce, and jaggery powder. Through our
            state-of-the-art manufacturing unit, we ensure that these processed
            products meet stringent quality standards, catering to the diverse
            needs of consumers. By adding value to the raw produce, we create
            new income streams for farmers and contribute to the growth of the
            agricultural sector in our region.
          </p>
          <p className="text-lg lg:px-20 text-[#525252]">
            Moreover, our commitment to sustainability drives our processing
            practices, where we minimize waste and optimize resource
            utilization. We employ eco-friendly techniques to reduce
            environmental impact, such as recycling water and utilizing
            renewable energy sources. By adopting these practices, we not only
            contribute to environmental conservation but also uphold our
            responsibility towards future generations. Through continuous
            innovation and adherence to ethical standards, we aim to establish
            Dattayog Farmer Producer Company as a beacon of excellence in the
            processing of tomato products, setting a precedent for sustainable
            agriculture in our community.
          </p>
        </div>

        </div>
      </div>

      <div className="px-5 py-10 gap-5 items-center flex flex-col">
        <div className="flex flex-col items-center z-10 pb-5 md:pb-20">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold">
            Our Product Range
          </h1>
          <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>

          <div className="p-5 bg-secondary flex items-center justify-center  md:p-5 h-fit rounded-full">
            <div className="flex items-center justify-center gap-5">
              <input
                id="id-01"
                type="text"
                name="id-01"
                placeholder="Search Product"
                value={searchQuery}
                onChange={handleSearchChange}
                className="h-[50px] p-5 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className=" transition-all  delay-500 ease-in-out p-5 md:px-32 flex items-center justify-evenly gap-5 w-full flex-wrap">
          {filteredProducts.map((product) => (
            <Link
              to={{
                pathname: `/products/agriculturalproducts/${product.name.toLowerCase()}`,
              }}
              key={product.id}
            >
              <Card
                hoverable
                className="w-[300px] h-[400px]"
                cover={
                  <img
                    className="object-cover w-[300px] h-[300px]"
                    alt="example"
                    src={product.image}
                  />
                }
              >
                <h1 className="text-lg font-bold text-center">
                  {product.name}
                </h1>
              </Card>
            </Link>
          ))}
        </div>
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

export default Tomatoprocessedproducts;
