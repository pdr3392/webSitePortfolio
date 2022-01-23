import { Box, HStack, Text } from "@chakra-ui/react";
import WorkItemTest from "./WorkItem";

export default function WorkList() {
  return (
    <Box>
      <WorkItemTest workName="na perifa tem" workInfo="filmmaking" />
      <WorkItemTest workName="alice gorete - foco" workInfo="filmmaking" />
      <br />
      <WorkItemTest
        workName="rsbinvestimentos.com.br"
        workInfo="front-end dev"
      />
      <WorkItemTest workName="dashgo" workInfo="front-end dev" />
      <WorkItemTest workName="igniteFromScratch" workInfo="front-end dev" />
      <WorkItemTest workName="worldTrip" workInfo="front-end dev" />
      <WorkItemTest workName="igNews" workInfo="front-end dev" />
      <WorkItemTest workName="igniteFood" workInfo="front-end dev" />
      <WorkItemTest workName="igniteCart" workInfo="front-end dev" />
      <WorkItemTest workName="igniteDtMoney" workInfo="front-end dev" />
      <br />
      <WorkItemTest workName="crypto scanning" workInfo="automation dev" />
      <WorkItemTest workName="leads mining" workInfo="automation dev" />
      <WorkItemTest workName="fundamentosGet" workInfo="automation dev" />
      <WorkItemTest workName="CS50" workInfo="misc dev" />
      <br />
      <WorkItemTest workName="8/12/2021" workInfo="photography" />
      <WorkItemTest workName="mcz na rua" workInfo="photography" />
      <WorkItemTest workName="first roll" workInfo="photography" />
      <WorkItemTest workName="second roll" workInfo="photography" />
      <WorkItemTest workName="third roll" workInfo="photography" />
      <WorkItemTest workName="bookends" workInfo="photography" />
      <br />
      <WorkItemTest workName="collages" workInfo="visual arts" />
    </Box>
  );
}
