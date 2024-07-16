import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { useParams } from "react-router-dom";
import Data from "../../Data/products.json";
import { Fade } from "react-awesome-reveal";


const ProductDetails = () => {
  const { productname } = useParams();

  if (!productname) {
    return <div>Product Not Found ..</div>;
  }

  const product = Data.find(
    (item) => item.name.toLowerCase() === productname.toLowerCase()
  );

  if (!product) {
    return <div>Product Not Found ..</div>;
  }

  return (
    <div>

      <Fade className="flex flex-col items-center">
      <h1 className="p-5 text-2xl md:text-3xl font-bold">{product.name}</h1>
      <div className="w-[80%] md:w-[60%] bg-secondary p-5 md:p-5 h-fit rounded-full">
        <h1 className="py-2 cursor-pointer">
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> /{" "}
          {product.name}
        </h1>
      </div>
      <div className="md:m-10 m-5  justify-center flex items-center  rounded-3xl  ">
        <img className="w-[60vw] md:h-[60vh] rounded-3xl object-contain" src={product.image} alt={product.name} />
      </div>

      <div className="p-10 md:p-20 flex flex-col items-center relative gap-10">
        <div className="flex flex-col items-center ">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold">
            Indian {product.name} Exporters
          </h1>
          <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
        </div>
        <div className=" flex flex-col gap-5 ">
          <p className="text-lg lg:px-40  text-[#525252]">
            {product.description}
          </p>
        </div>
      </div>

      {product.variety && (
        <div className="bg-secondary w-full flex flex-col items-center  p-10 md:py-10 md:px-20 py-20">
          <div className="flex flex-col items-center z-10 pb-5 md:pb-20">
            <h1 className=" text-2xl md:text-4xl text-center font-semibold">
              VARIETY
            </h1>
            <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
          </div>

          <div className=" w-full flex flex-col items-center gap-10">
            {product.variety &&
              product.variety.map((variety, index) => (
                <div
                  key={index}
                  className="flex border border-primary w-full md:w-[80%] gap-5 p-5 rounded-2xl bg-secondary"
                >
                  <div>
                    <div className="border border-primary flex items-center justify-center w-[50px] h-[50px] bg-primary rounded-full">
                      <h1 className="text-white font-extrabold text-xl">
                        0{index + 1}
                      </h1>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-5">
                    <h1 className="text-xl font-bold">{variety.title}</h1>
                    <p>{variety.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/*  */}
      <div className="p-10 md:p-20 w-full flex flex-col items-center relative gap-10">
        <div className="flex flex-col items-center ">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold">
            Specifications
          </h1>
          <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
        </div>

        <table className="w-[80%] md:w-[60%]  border-collapse border border-gray-200">
          <tbody>
            {Object.entries(product.specification).map(([key, value]) => (
              <tr className=" hover:bg-gray-100 " key={key}>
                <td className="px-4 py-2  text-left  border-b">{key}</td>
                <td className="px-4 py-2 text-left border-b">
                  {typeof value === "object" ? (
                    <ul>
                      {Object.entries(value).map(([country, time]) => (
                        <li key={country}>
                          {country}: {time}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {product.benefits && (
        <div className="bg-secondary w-full flex flex-col items-center  p-10 md:py-10 md:px-20 py-20">
          <div className="flex flex-col items-center z-10 pb-5 md:pb-20">
            <h1 className=" text-2xl md:text-4xl text-center font-semibold">
              BENIFITS
            </h1>
            <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
          </div>

          <div className=" w-full flex flex-col items-center gap-10">
            {product.benefits &&
              product.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex border border-primary w-full md:w-[80%] gap-5 p-5 rounded-2xl bg-secondary"
                >
                  <div>
                    <div className="border border-primary flex items-center justify-center w-[50px] h-[50px] bg-primary rounded-full">
                      <h1 className="text-white font-extrabold text-xl">
                        0{index + 1}
                      </h1>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-5">
                    <h1 className="text-xl font-bold">{benefit.title}</h1>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
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

export default ProductDetails;
