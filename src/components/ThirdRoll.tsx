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

export default function ThirdRoll() {
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
              blurDataURL={blurHash({ hash: "LeI}|-IAM{of~pI]t7s.NHNH%Mxu" })}
              quality="40"
              src="/images/thirdroll/tiff391.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "L#FR0TwaxvtlK-kWRjRjt2S5ocoI" })}
              quality="40"
              src="/images/thirdroll/tiff397.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LnH2sK_4M{D%D%M|RjoMbIfkofRj" })}
              quality="40"
              src="/images/thirdroll/tiff398.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LsIPe~MzaKf5pfM{aeazVYs+t7j]" })}
              quality="40"
              src="/images/thirdroll/tiff405.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
}
