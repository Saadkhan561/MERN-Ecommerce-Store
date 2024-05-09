import Layout from "@/layout/layout";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/router";

import Card from "@/components/card";
import { useFetchProductById } from "@/hooks/query";

const ProductDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, isLoading } = useFetchProductById(id);
  data && console.log(data);

  // SETTINGS FOR CAROUSEL
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
  const { query } = useRouter();
  const BASE_URL = "http://localhost:4000";

  return (
    <Layout>
      <div
        className={
          eval(router.query.open)
            ? "flex flex-col items-center mt-14 opacity-40 duration-200"
            : "flex flex-col items-center mt-14 opacity-100 duration-200"
        }
      >
        <div className="flex gap-2 text-sm text-slate-500 mb-6 font-semibold">
          <a className="hover:underline cursor-pointer" href="/">
            Home
          </a>
          <p>/</p>
          <a className="hover:underline cursor-pointer" href="/product_details">
            Product Details
          </a>
        </div>
        {/* DETAILS DIV */}
        <div className="w-4/5 flex items-center gap-10 mob_display_product:flex-col mob_display_product:gap-6">
          {/* CAROUSEL DIV */}
          <div className="flex justify-center border border-black h-[300px] w-[400px]">
            {data && (
              <img
                className="h-[250px] w-[300px] mob_display:h-[300px] mob_display:w-[300px]"
                src={`${BASE_URL}/images/${data.imageUrl}`}
                alt=""
              />
            )}
          </div>
          {/* PRODUCT DETAILS DIV */}
          {data && (
            <div className="p-4 flex flex-col gap-3 w-[600px]">
              <div className="flex justify-between items-center flex-wrap">
                <p className="text-2xl font-semibold">{data.name}</p>
                <p className="text-lg ">{data.price}</p>
              </div>
              <div>
                <p className="text-xl font-semibold">Description</p>
                <p>
{data.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi architecto reiciendis accusamus tempore aliquam dolorum dolor cum cupiditate est laudantium, a, magni quis! Unde impedit provident aspernatur ipsam laboriosam suscipit saepe fugit. Libero necessitatibus architecto quidem deleniti, ea illo soluta dolore at nobis eos sunt repellat praesentium quas dolorum sint.
                </p>
              </div>
              <div>
                <p className="text-md">Colors available</p>
                <div className="flex gap-5 items-center">
                  <div className="flex gap-2 items-center">
                    <input
                      className="appearance-none w-4 h-4 cursor-pointer border-gray-500 border rounded-lg checked:border-transparent checked:bg-black hover:border-black duration-100"
                      type="radio"
                      name="color"
                    />
                    <label className="text-sm" htmlFor="checkBox">
                      Red
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      className="appearance-none w-4 h-4 cursor-pointer border-gray-500 border rounded-lg checked:border-transparent checked:bg-black hover:border-black duration-100"
                      type="radio"
                      name="color"
                    />
                    <label className="text-sm" htmlFor="checkBox">
                      Black
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      className="appearance-none w-4 h-4 cursor-pointer border-gray-500 border rounded-lg checked:border-transparent checked:bg-black hover:border-black duration-100"
                      type="radio"
                      name="color"
                    />
                    <label className="text-sm" htmlFor="checkBox">
                      White
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-md">Size available</p>
                <div className="flex gap-2">
                  <div className="flex justify-center">
                    <input
                      type="radio"
                      id="option1"
                      name="size"
                      className="hidden peer"
                    />
                    <label
                      className="text-black peer-checked:bg-black text-center pb-6 rounded-md duration-200 peer-checked:text-white border border-black cursor-pointer w-[70px] h-[20px]"
                      htmlFor="option1"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <input
                      type="radio"
                      id="option2"
                      name="size"
                      className="hidden peer"
                    />
                    <label
                      className="text-black peer-checked:bg-black text-center pb-6 rounded-md duration-200 peer-checked:text-white border border-black cursor-pointer w-[70px] h-[20px]"
                      htmlFor="option2"
                    >
                      M
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <input
                      type="radio"
                      id="option3"
                      name="size"
                      className="hidden peer"
                    />
                    <label
                      className="text-black peer-checked:bg-black text-center pb-6 rounded-md duration-200 peer-checked:text-white border border-black cursor-pointer w-[70px] h-[20px]"
                      htmlFor="option3"
                    >
                      L{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4 font-semibold text-md">
                <button className="bg-black text-white w-[200px] rounded-sm p-1 cursor-pointer hover:bg-white hover:text-black border hover:border-black duration-200">
                  Add to cart
                </button>
              </div>
            </div>
          )}
        </div>
        {/* RECOMMENDATIONS DIV */}
        <div className="flex justify-center mt-20 relative">
          <div>
            {/* CARD MAIN DIV */}
            <div className="flex justify-between items-center">
              <div className="text-3xl font-semibold">More Recommendations</div>
            </div>
            {/* CARDS */}
            <div className="flex justify-center w-[1200px] slider1:w-[800px] slider2:w-[600px] slider3:w-[300px] p-4 mt-8">
              <Swiper
                ref={swiper1}
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
                  <button onClick={() => handleNext(swiper1.current)}>
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
};

export default ProductDetails;
