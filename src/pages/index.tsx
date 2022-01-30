import {
  Center,
  Flex,
  Text,
  Box,
  VStack,
  HStack,
  Link as ChakraLink,
  Spinner,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import CodeHero from "../components/CodeHero";
import { SiTypescript, SiJavascript, SiPython } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../redux/language";
import { useEffect, useRef } from "react";
import blurHash from "../../utils/blurHash";
import { GetStaticProps } from "next";

interface LanguageStateProps {
  language: {
    languageState: string;
  };
}

export default function Index() {
  const isMounted = useRef(false);
  console.log(isMounted);

  useEffect(() => {
    isMounted.current = true;
    console.log(isMounted);
    return () => {
      isMounted.current = false;
    };
  }, []);

  const language = useSelector<LanguageStateProps>(
    (state) => state.language.languageState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <Flex w="100vw" h="100vh" position="relative" overflow="hidden">
      {isMounted ? (
        <>
          <Flex h="7rem" overflow="hidden">
            <VStack h="100%" mt="4rem" spacing="1rem">
              <HStack w="100%" align="flex-start" ml="5rem" spacing="24">
                <Text
                  color="gray.200"
                  cursor="pointer"
                  _hover={{
                    color: "red.500",
                  }}
                  fontFamily="PlayFair Display"
                  fontSize="1.125rem"
                >
                  EMAIL ME
                </Text>
                <Text
                  color="gray.200"
                  cursor="pointer"
                  _hover={{
                    color: "red.500",
                    cursor: "pointer",
                  }}
                  fontFamily="PlayFair Display"
                  fontSize="1.125rem"
                >
                  INSTAGRAM
                </Text>
                <Text
                  color="gray.200"
                  cursor="pointer"
                  _hover={{
                    color: "red.500",
                    cursor: "pointer",
                  }}
                  fontFamily="PlayFair Display"
                  fontSize="1.125rem"
                >
                  GITHUB
                </Text>
                <Text
                  color="gray.200"
                  cursor="pointer"
                  _hover={{
                    color: "red.500",
                    cursor: "pointer",
                  }}
                  fontFamily="PlayFair Display"
                  fontSize="1.125rem"
                >
                  LINKEDIN
                </Text>
                <Text
                  color="gray.200"
                  cursor="pointer"
                  _hover={{
                    color: "red.500",
                    cursor: "pointer",
                  }}
                  fontFamily="PlayFair Display"
                  fontSize="1.125rem"
                >
                  UPWORK
                </Text>
                <Link href={`/projects`} passHref>
                  <ChakraLink style={{ textDecoration: "none" }}>
                    <Text
                      color="gray.200"
                      cursor="pointer"
                      _hover={{
                        color: "red.500",
                        cursor: "pointer",
                      }}
                      fontFamily="PlayFair Display"
                      fontSize="1.125rem"
                    >
                      PROJECTS
                    </Text>
                  </ChakraLink>
                </Link>
              </HStack>
              <Box
                alignSelf="flex-end"
                h="5px"
                w="100vw"
                bgColor="red.500"
              ></Box>
            </VStack>
            <Box position="absolute" top="3rem" right="1rem">
              <ReactCountryFlag
                onClick={() => dispatch(changeLanguage("pt-BR"))}
                onMouseOver={({ target }) => (target.style.opacity = 1)}
                onMouseLeave={({ target }) => (target.style.opacity = 0.4)}
                style={{
                  transition: "opacity .2s",
                  opacity: ".4",
                  cursor: "pointer",
                  marginRight: "2rem",
                  width: "40px",
                  objectFit: "cover",
                  borderRadius: "100%",
                  height: "40px",
                }}
                className="emojiBrFlag"
                countryCode="BR"
                svg
                aria-label="pt-BR"
              />
              <ReactCountryFlag
                onClick={() => dispatch(changeLanguage("en-US"))}
                onMouseOver={({ target }) => (target.style.opacity = 1)}
                onMouseLeave={({ target }) => (target.style.opacity = 0.4)}
                style={{
                  transition: "opacity .2s",
                  opacity: ".4",
                  cursor: "pointer",
                  marginRight: "2rem",
                  width: "40px",
                  objectFit: "cover",
                  borderRadius: "100%",
                  height: "40px",
                }}
                className="emojiFlag"
                countryCode="US"
                svg
                aria-label="en-US"
              />
            </Box>
          </Flex>

          <VStack position="absolute" zIndex="3" top="20vh" left="10vw">
            <HStack spacing="28">
              <Box w="760px" h="300px">
                <CodeHero />
              </Box>

              <Box w="340px" h="330px">
                <VStack spacing="4">
                  <Image
                    placeholder="blur"
                    blurDataURL={blurHash({
                      hash: "LND]o8D%_3xu~qRj?bt7?b%Mxuj[",
                    })}
                    src="/images/profile.png"
                    height="140px"
                    width="140px"
                  />

                  <Text
                    w="75%"
                    fontSize=".8rem"
                    textAlign="justify"
                    fontFamily="Playfair Display"
                    color="gray.200"
                  >
                    developing film since 2021, shoothing photography since
                    2012, developing software since 2020, mentally affected* by
                    journalism college since 2014
                    <br />
                    <br />
                    *in a good way
                  </Text>

                  <HStack spacing="10">
                    <SiTypescript color="#AAAAAA" size="35px" />
                    <SiJavascript color="#AAAAAA" size="35px" />
                    <SiPython color="#AAAAAA" size="35px" />
                  </HStack>
                </VStack>
              </Box>
            </HStack>
            <HStack spacing="0" w="1080px" h="285px">
              <Image
                placeholder="blur"
                blurDataURL={blurHash({ hash: "LWGSDhIU?bIU~qayj[Rj4nofD%xu" })}
                src="/images/home1.png"
                height="285px"
                width="270"
              />
              <Image
                placeholder="blur"
                blurDataURL={blurHash({ hash: "LkLXVzt7t7WB~qWBj[j[-;fQWBj[" })}
                src="/images/home2.png"
                height="285px"
                width="270"
              />
              <Image
                placeholder="blur"
                blurDataURL={blurHash({ hash: "LIG[[{9Fxuof%MRjt7of~qRjWBof" })}
                src="/images/home3.png"
                height="285px"
                width="270"
              />
              <Image
                placeholder="blur"
                blurDataURL={blurHash({ hash: "L?LXVzt7ayj[~qj[ayj[M{ayj[fQ" })}
                src="/images/home4.png"
                height="285px"
                width="270"
              />
            </HStack>
          </VStack>

          <Center zIndex="2" position="absolute" h="100vh" w="100vw" mt="5rem">
            <Box borderRadius="100%" h="38rem" w="38rem" bgColor="red.500" />
          </Center>
        </>
      ) : (
        <Center h="100%" w="100%">
          <Spinner color="red.500" size="md" />
        </Center>
      )}
    </Flex>
  );
}
