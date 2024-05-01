import { Card } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import productsData from "../Data/productRange.json";
import { Fade } from "react-awesome-reveal";

const Products = () => {
  // productsData = productsData.concat(fruits);

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
        <h1 className="p-5 text-2xl md:text-3xl font-bold">Products</h1>
        <div className="w-[80%] md:w-[60%] bg-secondary p-5 md:p-5 h-fit rounded-full">
          <h1 className="py-2 cursor-pointer">
            <Link to="/">Home</Link> / Products
          </h1>
        </div>

        <div className="flex w-full p-10 md:p-20 flex-col lg:flex-row gap-10 lg:gap-0 items-center  ">
          <div className="lg:w-[50%]  lg:flex rounded-3xl overflow-hidden">
            <img
              className="h-full  object-cover"
              src="https://scontent.fklh1-1.fna.fbcdn.net/v/t39.30808-6/437561408_122118491138256135_3919475560939788018_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ad8iEAMzHysQ7kNvgHMuFxM&_nc_ht=scontent.fklh1-1.fna&oh=00_AfCv4OpsIQHM96TFZfNQPfaUS0dr_xrJ7d_KIQrxDxoNwA&oe=6636D6CA"
              alt=""
            />
          </div>
          <div className="  lg:w-[100%] flex flex-col gap-5">
            <p className="text-lg lg:px-20  text-[#525252]">
              Dattayog Farmer Producer Company Limited processes farmer&apos;s
              produce into various high-demand products, such as tomato paste,
              ketchup, and sauce, catering to consumer preferences.
              Additionally, they produce jaggery powder and milk powder,
              diversifying their offerings and enhancing market competitiveness.
              This supports small farmers in Shirol taluka by providing
              additional income opportunities and contributing to rural economic
              development.
            </p>
            <p className="text-lg lg:px-20  text-[#525252]">
              Furthermore, Dattayog Farmer Producer Company Limited&apos;s
              commitment to the welfare of farmers extends beyond just
              processing their produce. By providing guidance and expertise on
              crop cultivation techniques, especially focusing on tomatoes, they
              empower farmers to enhance the quality and yield of their crops.
              This holistic approach ensures that farmers receive comprehensive
              support throughout the farming process, from cultivation to
              processing, ultimately leading to improved livelihoods and
              sustainable agricultural practices in the Shirol taluka area.
            </p>
          </div>
        </div>

        <div className="px-5 py-10 gap-5 items-center flex flex-col">
          <div className="flex flex-col items-center z-10 pb-5 md:pb-20">
            <h1 className=" text-2xl md:text-4xl text-center font-semibold">
              Our Product Categories
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
                  pathname: `/products/${product.link.toLowerCase()}`,
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

export default Products;
