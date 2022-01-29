import { Box, Button, Center, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export default function IgniteDtMoney() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Flex h="100%" w="100%" overflow="hidden">
      <Center w="100%">
        <HStack spacing="14" zIndex="3" position="absolute" top="-3.5rem">
          <Button
            onClick={() => setShowInfo(!showInfo)}
            _hover={{
              bgColor: "red.500",
              outline: "1px solid white",
              outlineOffset: "-1px",
              color: "white",
            }}
            fontFamily=" PlayFair Display"
            fontStyle="italic"
            fontWeight="400"
            colorScheme="gray"
            variant="solid"
          >
            info
          </Button>
          <Button
            _hover={{
              bgColor: "red.500",
              outline: "1px solid white",
              outlineOffset: "-1px",
              color: "white",
            }}
            fontFamily=" PlayFair Display"
            fontStyle="italic"
            fontWeight="400"
            colorScheme="gray"
            variant="solid"
          >
            live view
          </Button>
        </HStack>
      </Center>

      <Box
        w="100%"
        h="100%"
        position="absolute"
        zIndex="2"
        overflow="hidden"
        borderRadius="20px"
      >
        {showInfo && (
          <Flex
            align="center"
            justify="center"
            position="absolute"
            zIndex="5"
            color="gray.200"
            bgColor="black"
            h="30%"
            w="100%"
          >
            <Box>
              <Text>
                project developed for Rocketseat's Ignite training program
                <br />
                <br />
                Tools used:
                <br />- NextJS
                <br />- ChakraUI
              </Text>
            </Box>
          </Flex>
        )}
        <Image
          layout="fill"
          objectPosition="top"
          objectFit="cover"
          src="/images/igniteFromScratch.png"
        />
      </Box>
    </Flex>
  );
}
