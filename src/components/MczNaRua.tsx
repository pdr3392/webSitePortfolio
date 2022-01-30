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

export default function mcznarua() {
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
              blurDataURL={blurHash({ hash: "LRCi~;xuIUof~qt7Rjj[Rjj[xufQ" })}
              quality="40"
              src="/images/mcznarua/tiff317.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LUCZbE?bxuM{~q-;t7Rjxuj[ayj[" })}
              quality="40"
              src="/images/mcznarua/tiff321.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LAAwF=~qM{-;-;-;%MayD%RjofIU" })}
              quality="40"
              src="/images/mcznarua/tiff330.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "L88;V?%MD%M{~qxuM{Rj%Mt7t7ay" })}
              quality="40"
              src="/images/mcznarua/tiff345.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LDHoB-?Gsl-;-n~qxuWB%gR*WAt7" })}
              quality="40"
              src="/images/mcznarua/expo3.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LKIg}zx^R*rp~WVsIqjEVsIAI=o0" })}
              quality="40"
              src="/images/mcznarua/expo1.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LJKm?@?b00~U9F4:D+ocM{WBkCj[" })}
              quality="40"
              src="/images/mcznarua/expo2.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LHI;ePTN02n19EE2%Lxu~AWC4;R*" })}
              quality="40"
              src="/images/mcznarua/expo4.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              placeholder="blur"
              blurDataURL={blurHash({ hash: "LKGIZS~p?at7xtt7ofNGD$M{RjM{" })}
              quality="40"
              src="/images/mcznarua/expo5.jpg"
              layout="fill"
              priority
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
}
