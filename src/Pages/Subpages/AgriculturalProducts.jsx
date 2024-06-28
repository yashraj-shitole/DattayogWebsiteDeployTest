import { Card } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import productsData from "../../Data/AgriculturalProducts.json";
import { Fade } from "react-awesome-reveal";


const AgriculturalProducts = () => {
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
    <div >

    <Fade className="flex flex-col items-center">

      <h1 className="p-5 text-2xl md:text-3xl font-bold">
        Agricultural Products
      </h1>
      <div className="w-[80%] border border-[#C7C8CC] md:w-[60%] bg-secondary p-5 md:p-5 h-fit rounded-full">
        <h1 className="py-2 cursor-pointer">
          <Link to="/">Home</Link> / Agricultural Products
        </h1>
      </div>

      {/* Certifications */}
      <div className="p-10 md:p-20 flex flex-col items-center relative gap-10">
        <div className="flex flex-col items-center z-10 ">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold">
            Indian Agricultural Products Exporters
          </h1>
          <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
        </div>

        <div className="flex w-full flex-col lg:flex-row gap-10 lg:gap-0 items-center  ">
        <div className="lg:w-[50%]  lg:flex rounded-3xl overflow-hidden">
            <img className="h-full object-cover" src="https://images.unsplash.com/photo-1429991889170-afd56b2a1210?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Indian Agricultural Products Exporters" />
          </div>

          <div className=" lg:w-[80%] flex flex-col gap-5 ">
          <p className="text-lg lg:px-20  text-[#525252]">
            Dattayog Farmer Producer Company, founded in 2020, serves 615
            farmers in Shirol taluka. We support smallholders, focusing on
            tomato cultivation. After harvest, we process tomatoes into paste,
            ketchup, sauce, jaggery powder, and milk powder. Our efforts align
            with government schemes, aiming to uplift farmers and promote
            sustainable agricultural practices for their welfare.
          </p>
          <p className="text-lg lg:px-20  text-[#525252]">
            Dattayog Farmer Producer Company stands as a beacon of empowerment
            for farmers in the Shirol taluka area since its establishment on
            December 7, 2020. Our commitment to enhancing the welfare of
            smallholders is evident through our collaborative efforts and expert
            guidance in cultivating quality crops, particularly tomatoes. With a
            focus on value addition, we not only assist in the cultivation phase
            but also ensure the efficient processing of harvested produce into
            various high-demand products. By leveraging government schemes and
            resources, we strive to create a sustainable ecosystem that uplifts
            farmers and contributes to the economic development of the region.
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
        <div className=" transition-all delay-500 ease-in-out p-5 md:px-32 flex items-center justify-evenly gap-5 w-full flex-wrap">
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
                    alt={product.name}
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

export default AgriculturalProducts;
