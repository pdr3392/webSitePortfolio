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

export default function Collages() {
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
              blurDataURL={blurHash({ hash: "LNHn{U9ZFx=|-UIVyWwz~VnjRja$" })}
              quality="40"
              src="/images/collages/collage1.jpg"
              height="530px"
              width="300px"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LCJREnHX4TJ%^,IU?b?H_No}D%wc" })}
              quality="40"
              src="/images/collages/collage2.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LNIXHpNFX8=J_NMxaiI;aKE1RiW." })}
              quality="40"
              src="/images/collages/collage3.jpg"
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
