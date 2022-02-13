import { Input, Button, Box, Center, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import loadContract from "../contracts/initialize";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const IndexPage = () => {
  const initialStateValues = {
    fullName: "",
    email: "",
    contract: null,
  };
  type StateTypes = {
    fullName: string;
    email: string;
    contract: any;
  };

  const [state, setState] = useState<StateTypes>(initialStateValues);

  useEffect(() => {
    loadContract(web3, state, setState);
  }, []);

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
      <Center bg="gray.500" flexDir="column">
        <Input
          w="50%"
          variant="filled"
          onChange={(e) => {
            setState({ ...state, fullName: e.currentTarget.value });
          }}
          placeContent="First Name"
        />
        <Input
          w="50%"
          onChange={(e) => {
            setState({ ...state, email: e.currentTarget.value });
          }}
          placeContent="Email"
        />
        <Button
          onClick={async () => {
            const userToAdd = { FULLNAME: state.fullName, EMAIL: state.email };

            // const wallet = await web3.eth.requestAccounts();
            const addUser = await state.contract.methods
              .createUser(userToAdd)
              .call();
            // const addUser = await state.contract.methods
            //   .createUser(userToAdd)
            //   .send({ from: wallet[0] });
            // const user = await state.contract.methods.Users(wallet[0]).call();

            // console.log(add);
          }}
        >
          Click me to add the data
        </Button>
      </Center>
    </>
  );
};
export default IndexPage;
