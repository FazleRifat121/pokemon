import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/Home/Banner/banner-1.jpg";
import img2 from "../../../assets/Home/Banner/banner-2.jpg";
import img3 from "../../../assets/Home/Banner/banner-3.jpg";
import img4 from "../../../assets/Home/Banner/banner-4.png";
const Banner = () => {
  return (
    <div>
      {" "}
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
      >
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>

        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
