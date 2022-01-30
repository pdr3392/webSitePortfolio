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

export default function EightDec() {
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
              blurDataURL={blurHash({ hash: "LjHLl1t7j[j[~qRjj[j[WBM{t7of" })}
              quality="40"
              src="/images/eightdec/tiff280.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "L9K-qPof00~q009FD%_3-;-;D%-;" })}
              quality="40"
              src="/images/eightdec/tiff283.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LfK1%fM{Rjj[~qWBayof?bWBRjt7" })}
              quality="40"
              src="/images/eightdec/tiff285.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LoK-qPt7ofxu~qWBRjWBt7ayfQj[" })}
              quality="40"
              src="/images/eightdec/tiff287.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LiLN.4of-;of~qt7M{of_3M{ayRj" })}
              quality="40"
              src="/images/eightdec/tiff288.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LnL;meof-;of~qayM{WB?bRjofRj" })}
              quality="40"
              src="/images/eightdec/tiff289.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LwNdO8ofxuof~qWBM{Rjt7WBt7j[" })}
              quality="40"
              src="/images/eightdec/tiff290.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LCJb2500?bM{~q%M9FIU~q4nay9F" })}
              quality="40"
              src="/images/eightdec/tiff296.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              quality="40"
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LyLN.4oft7ay~qayj[fQxuj[ayj[" })}
              src="/images/eightdec/tiff307.jpg"
              height="500px"
              width="300px"
              layout="intrinsic"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              quality="40"
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LwMj?oofofWB~qWBj[j[t7fQj[of" })}
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
