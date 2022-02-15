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
import { DAO } from "../interfaces/schema";
import { createDAO } from "../helpers/database/mutations";
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
              <FormLabel mt={3}>Name</FormLabel>
              <Input
                variant="outline"
                onChange={(e) => {
                  setState({ ...state, NAME: e.currentTarget.value });
                }}
                placeContent="Name"
              />
            </FormControl>
            <FormControl>
              <FormLabel mt={3}>Website link</FormLabel>

              <Input
                onChange={(e) => {
                  setState({ ...state, WEBSITELINK: e.currentTarget.value });
                }}
                placeContent="Website link"
              />
            </FormControl>
            <FormControl>
              <FormLabel mt={3}>Discord link</FormLabel>

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
                  setIsLoading(true);
                  const dao = {
                    ID: crypto.randomBytes(36).toString("hex"),
                    NAME: state.NAME,
                    WEBSITELINK: state.WEBSITELINK,
                    DISCORDLINK: state.DISCORDLINK,
                  };
                  createDAO(dao, state.wallet).then((val) => {
                    setIsLoading(false);
                    return toast({
                      title: "Account created.",
                      description: "We've created your account for you.",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    });
                  });
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
