import Layout from "@/layout/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "@/components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import "swiper/css";
import { useRouter } from "next/router";

export default function Home() {

  useEffect(() => {
    AOS.init({
    })
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    prevArrow: false,
  };

  const swiper1 = useRef(null);
  const swiper2 = useRef(null);
  const swiper3 = useRef(null);

  const handlePrev = (swiper) => {
    if (swiper && swiper.swiper) {
      swiper.swiper.slidePrev();
    }
  };
  const handleNext = (swiper) => {
    if (swiper && swiper.swiper) {
      swiper.swiper.slideNext();
    }
  };


  const router = useRouter();

  return (
    <Layout>
      <div
        className={
          eval(router.query.open)
            ? "opacity-40 duration-200"
            : "opacity-100 duration-200"
        }
      >
        {/* AD DIV */}
        <div data-aos="fade-down" data-aos-duration='1100' className="h-screen w-full grid grid-cols-2 gap-2 mob_display:flex mob_display:flex-col mob_display:justify-center">
          <div className="flex items-center flex-col w-full">
            <div className="font-semibold text-black text-5xl p-4 mt-40 mob_display:text-3xl mob_display:text-center mob_display:mt-16">
              <p>Shop with</p>
              <p>excellent discounts...</p>
            </div>
            <div>
              <button className="text-lg mt-8 rounded-2xl font-semibold text-black border border-black hover:cursor-pointer hover:bg-black hover:text-white duration-200 p-1 pl-4 pr-4">
                Shop now
              </button>
            </div>
          </div>
          {/* CAROUSEL DIV */}
          <div className="flex justify-center">
            <Slider
              className="flex justify-center items-center text-white p-6 w-[400px] h-[500px] mob_display:h-[400px] mt-24 mob_display:mt-10"
              {...settings}
            >
              <div className="">
                <img
                  className="h-[450px] w-[400px] mob_display:h-[300px] mob_display:w-[300px]"
                  src="/images/shirt.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-[450px] w-[400px] mob_display:h-[300px] mob_display:w-[300px]"
                  src="/images/perfume.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-[450px] w-[400px] mob_display:h-[300px] mob_display:w-[300px]"
                  src="/images/shirt.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-[450px] w-[400px] mob_display:h-[300px] mob_display:w-[300px]"
                  src="/images/perfume.jpg"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
        {/* TRENDING DIV */}
        <div data-aos='fade-down' className="flex justify-center mt-20 relative">
          <div>
            {/* CARD MAIN DIV */}
            <div className="flex justify-between items-center">
              <div className="text-3xl font-semibold">Trending</div>
              <div className="text-sm text-blue-500 hover:underline hover:cursor-pointer">
                <a href="/">View all</a>
              </div>
            </div>
            {/* CARDS */}
            <div className="flex justify-center w-[1200px] slider1:w-[800px] slider2:w-[600px] slider3:w-[300px] p-4 mt-8">
              <Swiper
                ref={swiper1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  1300: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1000: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  700: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <Card image={"/images/shirt.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/shoe.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/perfume.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/shirt.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/shoe.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/perfume.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/shirt.jpg"} />
                </SwiperSlide>
                ...
              </Swiper>
              <div className="flex justify-between w-[1300px] slider1:w-[1000px] slider2:w-[700px] slider3:w-[450px] items-center absolute top-1/2 z-10">
                <div>
                  <button onClick={() => handlePrev(swiper1.current)}>
                    <img
                      className="rotate-180"
                      src="/images/right-arrow.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </button>
                </div>
                <div>
                  <button onClick={()=>handleNext(swiper1.current)}>
                    <img
                      src="/images/right-arrow.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SHIRTS DIV */}
        <div data-aos='fade-down' className="flex justify-center mt-20 relative">
          <div>
            {/* CARD MAIN DIV */}
            <div className="flex justify-between items-center">
              <div className="text-3xl font-semibold">Clothing</div>
              <div className="text-sm text-blue-500 hover:underline hover:cursor-pointer">
                <a href="/">View all</a>
              </div>
            </div>
            {/* CARDS */}
            <div className="flex justify-between w-[1200px] slider1:w-[800px] slider2:w-[600px] slider3:w-[300px] p-4 mt-8 slider1:hidden">
              <div className="flex flex-wrap gap-10 w-full">
                <Card image={"/images/shirt.jpg"} />
                <Card image={"/images/shirt.jpg"} />
                <Card image={"/images/shirt.jpg"} />
              </div>
              <div className="flex justify-center items-center">
                <Slider
                  className="flex justify-center items-center text-white p-6 w-[300px] h-[400px] mob_display:h-[400px]"
                  {...settings}
                >
                  <div className="">
                    <img
                      className="carousel_img"
                      src="/images/shirt.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="carousel_img"
                      src="/images/shirt.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="carousel_img"
                      src="/images/shirt.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="carousel_img"
                      src="/images/shirt.jpg"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
            </div>
            {/* CARDS */}
            <div className="flex justify-center w-[1200px] slider1:w-[800px] slider2:w-[600px] slider3:w-[300px] p-4 mt-8 slider1_full:hidden">
              <Swiper
                ref={swiper2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  1300: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1000: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  700: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <Card image={"/images/shirt.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/shirt.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/shirt.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/shirt.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/shirt.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/shirt.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/shirt.jpg"} />
                </SwiperSlide>
                ...
              </Swiper>
              <div className="flex justify-between w-[1300px] slider1:w-[1000px] slider2:w-[700px] slider3:w-[450px] items-center absolute top-1/2 z-10">
                <div>
                  <button onClick={()=>handlePrev(swiper2.current)}>
                    <img
                      className="rotate-180"
                      src="/images/right-arrow.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </button>
                </div>
                <div>
                  <button onClick={()=>handleNext(swiper2.current)}>
                    <img
                      src="/images/right-arrow.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PERFUMES DIV */}
        <div  data-aos='fade-down' className="flex justify-center mt-20 relative">
          <div>
            {/* CARD MAIN DIV */}
            <div className="flex justify-between items-center">
              <div className="text-3xl font-semibold">Perfumes</div>
              <div className="text-sm text-blue-500 hover:underline hover:cursor-pointer">
                <a href="/">View all</a>
              </div>
            </div>
            {/* CARDS */}
            <div className="flex justify-between w-[1200px] slider1:w-[800px] slider2:w-[600px] slider3:w-[300px] p-4 mt-8 slider1:hidden">
              <div className="flex flex-wrap gap-10 w-full">
                <Card image={"/images/perfume.jpg"} />
                <Card image={"/images/perfume.jpg"} />
                <Card image={"/images/perfume.jpg"} />
              </div>
              <div className="flex justify-center items-center">
                <Slider
                  className="flex justify-center items-center text-white p-6 w-[300px] h-[400px] mob_display:h-[400px]"
                  {...settings}
                >
                  <div className="">
                    <img
                      className="carousel_img"
                      src="/images/perfume.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="carousel_img"
                      src="/images/perfume.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="carousel_img"
                      src="/images/perfume.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="carousel_img"
                      src="/images/perfume.jpg"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
            </div>
            {/* CARDS */}
            <div className="flex justify-center w-[1200px] slider1:w-[800px] slider2:w-[600px] slider3:w-[300px] p-4 mt-8 slider1_full:hidden">
              <Swiper
                ref={swiper3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  1300: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1000: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  700: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <Card image={"/images/perfume.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/perfume.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/perfume.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/perfume.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/perfume.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/perfume.jpg"} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card image={"/images/perfume.jpg"} />
                </SwiperSlide>
                ...
              </Swiper>
              <div className="flex justify-between w-[1300px] slider1:w-[1000px] slider2:w-[700px] slider3:w-[450px] items-center absolute top-1/2 z-10">
                <div>
                  <button onClick={()=>handlePrev(swiper3.current)}>
                    <img
                      className="rotate-180"
                      src="/images/right-arrow.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </button>
                </div>
                <div>
                  <button onClick={()=>handleNext(swiper3.current)}>
                    <img
                      src="/images/right-arrow.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
