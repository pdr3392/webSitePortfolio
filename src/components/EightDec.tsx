import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import tiff288 from "../../public/images/eightdec/tiff288.jpg";
import tiff280 from "../../public/images/eightdec/tiff280.jpg";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import useNextBlurhash from "use-next-blurhash";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function EightDec() {
  const [blurData] = useNextBlurhash("LjHLl1t7j[j[~qRjj[j[WBM{t7of");

  return (
    <Flex>
      <Box h="100%" w="100%">
        <Text mt="2rem">test</Text>
        <Swiper
          style={{
            width: "100%",
            position: "absolute",
            bottom: "1rem",
            marginTop: "5rem",
          }}
          pagination={{
            clickable: true,
          }}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurData}
              src={tiff280}
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/eightdec/tiff283.jpg" layout="fill" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/eightdec/tiff285.jpg" layout="fill" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/eightdec/tiff287.jpg" layout="fill" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image placeholder="blur" src={tiff288} layout="fill" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/eightdec/tiff289.jpg" layout="fill" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/eightdec/tiff290.jpg" layout="fill" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/eightdec/tiff296.jpg" layout="fill" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/eightdec/tiff307.jpg"
              height="500px"
              width="300px"
              layout="intrinsic"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/eightdec/tiff308.jpg"
              height="500px"
              width="300px"
              layout="intrinsic"
              priority
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
}