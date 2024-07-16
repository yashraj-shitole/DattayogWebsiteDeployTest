import { Card } from "antd";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import blogData from "../Data/blogs.json";
import { Fade } from "react-awesome-reveal";


const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const offset = currentPage * 3;
  const paginatedData = blogData.slice(offset, offset + 3);

  return (
    <div>


      <Fade  className=" flex flex-col items-center">

      <h1 className="p-5 text-2xl  md:text-3xl font-bold">Blogs</h1>

      <div className="w-[80%] md:w-[60%] bg-secondary p-5 md:p-5 h-fit rounded-full">
        <h1 className="py-2 cursor-pointer">
          <Link to="/">Home</Link> / Blogs
        </h1>
      </div>

      <div >
        <Fade  className="flex flex-col gap-10 p-10 items-center">
        {paginatedData.map((blog) => (
          <Link
            to={{
              pathname: `/blogs/${blog.id}`,
            }}
            key={blog.id}
            className="md:w-[80%] lg:w-[50%] "
          >
            <Card
              hoverable
              className="flex flex-col "
              cover={
                <img
                  className="object-contain md:p-5 w-100% rounded-3xl md:h-[400px]  "
                  alt={blog.id}
                  src={blog.image}
                />
              }
            >
              <h1 className="text-lg font-bold text-center">{blog.title}</h1>
              <p>{blog.content}</p>
              <div className="flex justify-end w-full">
                <button className="border border-grey p-2 rounded-full bg-secondary hover:bg-primary m-2 font-bold">
                  Read more...
                </button>
              </div>
            </Card>
          </Link>
        ))}
        </Fade>
      </div>
      <ReactPaginate
        className="m-5 px-5 py-3 rounded-full bg-secondary flex gap-5 border border-[#38383820]"
        pageCount={Math.ceil(blogData.length / 3)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        initialPage={currentPage}
      />
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

      <style>{`
        .active {
          background-color: #383838;
          padding:0px 10px 0 10px ;
          border-radius:100px;
          color: white;
        }
      `}</style>

    </div>
  );
};

export default Blogs;
