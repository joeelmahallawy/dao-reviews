import { Input, Button, Box, Center, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import crypto from "crypto";
import Web3 from "web3";
import AddDAOForm from "../components/addDao";
import getContract from "../contracts/getContract";
const IndexPage = () => {
  // getContract();
  // new window.web3.eth.contract

  // console.log(getContract());
  // contract: null,
  // console.log(getContract());
  const initialStateValues = {
    NAME: "",
    WEBSITELINK: "",
    DISCORDLINK: "",
  };
  type StateTypes = {
    ID: string;
    NAME: string;
    WEBSITELINK: string;
    DISCORDLINK: string;
  };

  const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");

  const [state, setState] = useState<StateTypes>();

  useEffect(() => {
    // @ts-expect-error
    window?.ethereum.enable();
  }, []);
  // console.log(state);
  console.log(crypto.randomBytes(36).toString("hex"));

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
