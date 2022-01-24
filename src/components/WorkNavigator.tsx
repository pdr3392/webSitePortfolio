import { Box, Flex, Text } from "@chakra-ui/react";
import IgniteFromScratch from "./IgniteFromScratch";

export default function WorkNavigator() {
  return (
    <Flex position="relative" h="100%" w="100%">
      <Box
        align="center"
        justify="center"
        fontSize="1.2rem"
        fontFamily="PlayFair Display"
        fontStyle="italic"
        h="100%"
        w="100%"
      >
        <IgniteFromScratch />
      </Box>
    </Flex>
  );
}
