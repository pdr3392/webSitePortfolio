import { Box, Button, Center, Flex, HStack } from "@chakra-ui/react";
import Image from "next/image";

export default function RsbWebsite() {
  return (
    <Flex h="100%" w="100%" overflow="hidden">
      <Center w="100%">
        <HStack spacing="14" zIndex="3" position="absolute" top="-3.5rem">
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
        <Image
          layout="fill"
          objectPosition="top"
          objectFit="cover"
          src="/images/igNews.png"
        />
      </Box>
    </Flex>
  );
}
