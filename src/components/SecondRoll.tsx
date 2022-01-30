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

export default function SecondRoll() {
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
              blurDataURL={blurHash({ hash: "LEBM_P~qxuIU4n9FM{t7ofxuxut7" })}
              quality="40"
              src="/images/secondroll/tiff020.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LTG+UM9F-;M{~qRjWBWB00xuIUt7" })}
              quality="40"
              src="/images/secondroll/tiff025.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LJFr;XD%IUM{~qM{of%M00%Mt7t7" })}
              quality="40"
              src="/images/secondroll/tiff030.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "L,K-qPxuRjj[~qofWBj[M{ayj[j[" })}
              quality="40"
              src="/images/secondroll/tiff033.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LFHC1R4nRj%M-;M{j[t7~qofM{j[" })}
              quality="40"
              src="/images/secondroll/tiff062.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
}
