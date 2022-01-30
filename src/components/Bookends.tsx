import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import blurHash from "../../utils/blurHash";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Bookends() {
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
              blurDataURL={blurHash({ hash: "LAD[nO0L~oMx03?E4;%L^wNL={R," })}
              quality="40"
              src="/images/bookends/bookends1.jpg"
              height="500px"
              width="300px"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LCC$yfIdM{x[T5%O-pRj00-:tRRj" })}
              quality="40"
              src="/images/bookends/bookends2.jpg"
              height="500px"
              width="300px"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LD9GUI}]r@IUOGSikXX89YM{%1-p" })}
              quality="40"
              src="/images/bookends/bookends3.jpg"
              height="500px"
              width="300px"
              priority
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
}
