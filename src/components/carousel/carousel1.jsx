import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
// import { img7, img8, img9 } from "./img";
// import { img1, img2, img3, img4, img5, img6 } from "./img";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1800,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://www.alumni.cam.ac.uk/sites/www.alumni.cam.ac.uk/files/styles/flexslider_full/public/images/articles/main/cambridge_library.jpg?itok=eZIUHy9B",
    "https://i2-prod.cambridge-news.co.uk/news/cambridge-news/article24183175.ece/ALTERNATES/s1200d/0_JS238376993.jpg",
    "https://www.visitcambridge.org/app/uploads/2021/11/corpus-christi-1600x0-c-default.jpg",
  ];
//https://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/s3/field/field_image_main/b_AllSoulsquad.jpg?itok=tTcH-5ix
  return (
    <Box
      position={"relative"}
      height={"450px"}
      borderWidth="0x"
      overflow="hidden"
      margin={"auto"}
      mt={0}
      width={"100%"}
      // border={"1px solid red"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="white"
        color="black"
        backgroundColor="white"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="black"
        color="black"
        backgroundColor="white"
        padding="10px"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"450px"}
            padding="0"
            marginTop=""
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${url})`}
           
          />
        ))}
      </Slider>
    </Box>
  );
}