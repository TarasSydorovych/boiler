// "use client";
// import css from "../../components/product/product.module.css";
// import { PhotoProvider, PhotoView } from "react-photo-view";
// import "react-photo-view/dist/react-photo-view.css";
// import { useRef, useState } from "react";
// import Image from "next/image";
// import { MdArrowBackIosNew } from "react-icons/md";
// import { MdArrowForwardIos } from "react-icons/md";

// const PictureBlock = ({ productData }) => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const containerRef = useRef(null);
//   const [mainPhoto, setMainPhoto] = useState(productData?.photos[0]);

//   const handleScroll = (direction) => {
//     const container = containerRef.current;
//     const containerHeight = container.clientHeight;
//     const maxScroll = container.scrollHeight - containerHeight;
//     let newPosition;

//     if (direction === "up") {
//       newPosition = Math.max(0, scrollPosition - 100);
//     } else {
//       newPosition = Math.min(maxScroll, scrollPosition + 100);
//     }

//     container.scrollTo({ top: newPosition, behavior: "smooth" });
//     setScrollPosition(newPosition);
//   };

//   const changePhotoUrl = (clickedPhoto) => {
//     setMainPhoto(clickedPhoto);
//   };

//   return (
//     <div className={css.pictureBlockWrap}>
//       <div className={css.wrapAllPhoto}>
//         <button className={css.buttonUp} onClick={() => handleScroll("up")}>
//           <MdArrowBackIosNew className={css.arrowInButton} />
//         </button>
//         <div className={css.allPicWrap} ref={containerRef}>
//           {productData &&
//             productData.photos.map((el, index) => (
//               <div
//                 className={css.pictureWrap}
//                 key={index}
//                 onClick={() => changePhotoUrl(el)}
//               >
//                 <div className={css.imageContainer}>
//                   <Image
//                     src={el}
//                     alt={`Image ${index}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className={css.imageSmall}
//                   />
//                 </div>
//               </div>
//             ))}
//         </div>
//         <button className={css.buttonDown} onClick={() => handleScroll("down")}>
//           <MdArrowForwardIos className={css.arrowInButton} />
//         </button>
//       </div>
//       <div className={css.wrapOnePhoto}>
//         <div className={css.imageContainer}>
//           {/* <img
//             src={mainPhoto}
//             alt="Main photo"
//             // layout="fill"
//             // objectFit="cover"
//             className={css.imgBigA}
//           /> */}
//           <PhotoProvider>
//             <PhotoView src={mainPhoto}>
//               <img
//                 src={mainPhoto}
//                 alt="Main photo"
//                 // layout="fill"
//                 // objectFit="cover"
//                 className={css.imgBigA}
//               />
//             </PhotoView>
//           </PhotoProvider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PictureBlock;
"use client";
import css from "../../components/blog/newst.module.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const baseUrl = "https://zp-boyler.zp.ua";
// Кастомна стрілка "Назад"
const PrevArrow = ({ onClick }) => {
  return (
    <button className={css.customArrowPrev} onClick={onClick}>
      <MdArrowBackIosNew />
    </button>
  );
};

// Кастомна стрілка "Вперед"
const NextArrow = ({ onClick }) => {
  return (
    <button className={css.customArrowNext} onClick={onClick}>
      <MdArrowForwardIos />
    </button>
  );
};

const PictureBlock = ({ productData }) => {
  const settings = {
    dots: true,
    infinite: productData.photos.length > 1,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: productData.photos.length > 1, // ховаємо стрілки при одному фото
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className={css.pictureBlockWrap}>
      <div className={css.wrapOnePhoto}>
        <PhotoProvider>
          <Slider {...settings}>
            {productData &&
              productData.photos.map((el, index) => (
                <div key={index}>
                  <PhotoView src={`${baseUrl}${el}`}>
                    <img
                      src={`${baseUrl}${el}`}
                      alt={`Image ${index}`}
                      className={css.imgBigA}
                    />
                  </PhotoView>
                </div>
              ))}
          </Slider>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default PictureBlock;
