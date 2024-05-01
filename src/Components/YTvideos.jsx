
import { Carousel } from "antd";
import videos from "../Data/videos.json";

const YTvideos = () => {
  return (
    <div className="px-5 py-5 md:py-10 gap-5 items-center justify-center">
      <Carousel
        className="w-full h-fit flex items-center justify-center"
        dotPosition="right"
      >
        {videos.reverse().map((video, index) => (
          <div key={index}>
            <iframe
              id={`ytb-${index}`}
              className="m-auto w-[80%] h-[200px] md:h-[600px]"
              src={video.url}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h1 className="text-white">{index + 1}</h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default YTvideos;
