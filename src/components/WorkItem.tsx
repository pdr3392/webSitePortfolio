import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface WorkItemProps {
  workName: string;
  workInfo: string;
}

export default function WorkItemTest({ workName, workInfo }: WorkItemProps) {
  const [visibleState, setVisibleState] = useState("hidden");

  return (
    <HStack spacing="20">
      <Box w="250px">
        <Text
          color="gray.200"
          cursor="pointer"
          fontFamily="PlayFair Display"
          fontSize="1.125rem"
          _hover={{
            color: "red.500",
          }}
          onMouseOver={() => setVisibleState("visible")}
          onMouseLeave={() => setVisibleState("hidden")}
        >
          {workName}
        </Text>
      </Box>

      <Box>
        <Text
          visibility={visibleState as VisibilityState}
          color="red.500"
          cursor="pointer"
          fontFamily="PlayFair Display"
          fontSize="1.125rem"
        >
          {workInfo}
        </Text>
      </Box>
    </HStack>
  );
}
