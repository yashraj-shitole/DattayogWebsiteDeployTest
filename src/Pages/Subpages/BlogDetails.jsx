import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { useParams } from "react-router-dom";
import Data from "../../Data/blogs.json";

const BlogDetails = () => {
  const { blogid } = useParams();

  const blog = Data.find((item) => item.id == blogid);

  if (!blog) {
    return <div>Blog Not Found</div>;
  }

  const renderTextWithBoldColon = (text) => {
    const parts = text.split(":");
    if (parts.length > 1) {
      return (
        <div className="py-2 md:py-5">
          <h1 className="text-xl font-bold">{parts[0]}:</h1>{" "}
          {parts.slice(1).join(":")}
          <div className="h-[2px] w-[50px] md:w-[100px] bg-primary"></div>
        </div>
      );
    } else {
      return text;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="p-5 text-2xl text-center md:text-3xl font-bold">
        {blog.title}
      </h1>
      <div className="w-[80%] md:w-[60%] bg-secondary p-5 md:p-5 h-fit rounded-full">
        <h1 className="py-2 cursor-pointer">
          <Link to="/">Home</Link> / <Link to="/blogs">Blogs</Link> /{" "}
          {blog.title}
        </h1>
      </div>
      <div className="md:m-10 m-5  justify-center flex items-center  rounded-3xl  ">
        <img className="w-[60vw] md:h-[60vh] rounded-3xl object-contain"  src={blog.image} alt="" />
      </div>
      <div className="p-10 md:p-20 flex flex-col items-center relative gap-10">
        <div className="flex flex-col items-center z-10 ">
          <h1 className=" text-2xl md:text-4xl text-center font-semibold">
            Introduction
          </h1>
          <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
        </div>
        {blog.intro &&
          blog.intro.map((introData, index) => (
            <p
              className="text-xl font-medium lg:px-40 text-[#525252]"
              key={index}
            >
              {introData.para1 || introData.para2}
            </p>
          ))}
      </div>
      <div>
        {blog.sections &&
          blog.sections.map((section, index) => (
            <div
              className="px-10 py-5 md:p-10 flex flex-col items-center relative gap-10"
              key={index}
            >
              {Object.entries(section).map(([sectionKey, sectionData]) => (
                <div className="w-full" key={sectionKey}>
                  {sectionData[0].title && (
                    <div className="flex flex-col items-center z-10 ">
                      <h1 className="text-2xl md:text-4xl text-center font-semibold">
                        {sectionData[0].title}
                      </h1>
                      <div className="m-5 h-[2px] w-[100px] md:w-[200px] bg-primary"></div>
                    </div>
                  )}
                  {sectionData[0].info && (
                    <p className="text-lg lg:px-40 text-[#525252]">
                      {sectionData[0].info}
                    </p>
                  )}
                  {sectionData[0].details &&
                    sectionData[0].details.length > 0 && (
                      <ul className="p-2 md:p-5">
                        {sectionData[0].details.map((detail, idx) => (
                          <li
                            className="text-base lg:px-40 p-1 text-[#525252]"
                            key={idx}
                          >
                            {renderTextWithBoldColon(Object.values(detail)[0])}
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              ))}
            </div>
          ))}
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

export default BlogDetails;
