import { Box, Flex, Text } from "@chakra-ui/react";

export default function WorkNavigator() {
  return (
    <Flex position="relative" h="100%" w="100%">
      <Box
        align="center"
        justify="center"
        fontSize="1.2rem"
        bgColor="gray.200"
        fontFamily="PlayFair Display"
        fontStyle="italic"
        opacity=".6"
        h="100%"
        w="100%"
      >
        <Text>Select an option to start!</Text>
      </Box>
    </Flex>
  );
}
