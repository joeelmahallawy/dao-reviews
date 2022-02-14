import crypto from "crypto";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { contract, web3 } from "../lib/web3";
// import { web3, contract } from "../lib/web3";
const AddDAOForm = ({ state, setState }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                variant="outline"
                onChange={(e) => {
                  setState({ ...state, NAME: e.currentTarget.value });
                }}
                placeContent="Name"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Website link</FormLabel>
              <Input
                onChange={(e) => {
                  setState({ ...state, WEBSITELINK: e.currentTarget.value });
                }}
                placeContent="Website link"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Discord link</FormLabel>
              <Input
                onChange={(e) => {
                  setState({ ...state, DISCORDLINK: e.currentTarget.value });
                }}
                placeContent="Discord link"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Center gap={3}>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                isLoading={isLoading}
                colorScheme="linkedin"
                onClick={async () => {
                  //     const getDAO = async () => {
                  //   const wallet = await web3.eth.requestAccounts();
                  //   return await contract.methods
                  //     .DAOs("0xd6Cc820A4B713443b57C2545df54F1d75334380f")
                  //     .call();
                  //     };
                  //   const myDAO = await contract.methods.DAOs(wallet[0]).call();

                  //   setIsLoading(true);
                  console.log(contract.methods.daoOwners(0).call());
                  //   const wallet = await web3.eth.requestAccounts();
                  //   await contract?.methods
                  //     .createDAO([
                  //       crypto.randomBytes(36).toString("hex"),
                  //       state.NAME,
                  //       state.WEBSITELINK,
                  //       state.DISCORDLINK,
                  //     ])
                  //     .send({ from: wallet[0] })
                  //     .then((val) => {
                  //       setIsLoading(false);
                  //       return toast({
                  //         title: "Account created.",
                  //         description: "We've created your account for you.",
                  //         status: "success",
                  //         duration: 9000,
                  //         isClosable: true,
                  //       });
                  //     });
                }}
              >
                Submit
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddDAOForm;

// <ModalContent>

//   </ModalContent>
