import { Box, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import IgNews from "./IgNews";
import IgniteFromScratch from "./IgniteFromScratch";
import RsbWebsite from "./RsbWebsite";

interface WorkStateProps {
  work: {
    navState: string;
  };
}

export default function WorkNavigator() {
  const work = useSelector<WorkStateProps>((state) => state.work.navState);

  function renderSwitch(currentState: string) {
    switch (currentState) {
      case "intro":
        return (
          <Text
            maxW="100%"
            maxH="100%"
            fontFamily="PlayFair Display"
            fontWeight="500"
            fontSize="4.5em"
            overflow="hidden"
            textAlign="right"
          >
            use the navigator by the left to choose a work and take a look at
            what I've been doing
          </Text>
        );
      case "igniteFromScratch":
        return <IgniteFromScratch />;
      case "igNews":
        return <IgNews />;
      case "rsbinvestimentos.com.br":
        return <RsbWebsite />;
    }
  }

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
        {renderSwitch(work as string)}
      </Box>
    </Flex>
  );
}
