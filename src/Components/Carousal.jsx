import { Carousel } from "antd";

const Carousal = () => {
  return (
    <Carousel className="h-[50vh]  overflow-hidden" autoplaySpeed={5000} speed={2000} autoplay>
      <div className="h-[50vh] relative w-full ">
        <img
          className="brightness-50 h-[50vh] w-full object-cover"
          src="https://images.unsplash.com/photo-1632776350300-11016768b521?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="h-[50vh] w-full ">
        <img
          className="brightness-50 h-[50vh] w-full object-cover"
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="h-[50vh] w-full ">
        <img
          className="brightness-50 h-[50vh] w-full object-cover"
          src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=2265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="h-[50vh] w-full ">
        <img
          className="brightness-50 h-[50vh] w-full object-cover"
          src="https://images.unsplash.com/photo-1537817347545-6cbc2fd55943?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="h-[50vh] w-full ">
        <img
          className="brightness-50 h-[50vh] w-full object-cover"
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="h-[50vh] w-full ">
        <img
          className="brightness-50 h-[50vh] w-full object-cover"
          src="https://images.unsplash.com/photo-1705475388190-775066fd69a5?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default Carousal;
