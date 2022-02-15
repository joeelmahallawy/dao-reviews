import { Input, Button, Box, Center, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { contract, web3 } from "../lib/web3";
import AddDAOForm from "../components/addDao";
import { getAllDaos, getMyDao } from "../helpers/database/queries";
import databaseABI from "../build/contracts/Database.json";
import { DAO } from "../interfaces/schema";
const IndexPage = () => {
  const initialStateValues = {
    NAME: "",
    WEBSITELINK: "",
    DISCORDLINK: "",
    wallet: null,
    allDaos: null,
  };
  const [state, setState] = useState(initialStateValues);

  useEffect(() => {
    (async () => {
      // @ts-expect-error
      window?.ethereum.enable();
      const wallet = await web3.eth.requestAccounts();
      const allDaos = await getAllDaos();
      setState({ ...state, wallet: wallet[0], allDaos });
    })();
  }, []);

  console.log(state);

  return (
    <>
      <Center p={7} bg="gray.200" justifyContent="space-around">
        <Heading>
          Dao<span style={{ color: "red" }}>Reviews</span>
        </Heading>
        <Button
          p={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
          fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
          colorScheme="linkedin"
        >
          Home
        </Button>
      </Center>

      <Center bg="gray.500">
        <AddDAOForm state={state} setState={setState} />
      </Center>
    </>
  );
};
export default IndexPage;
