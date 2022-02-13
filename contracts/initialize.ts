const loadContract = async (web3, state, setState) => {
  const CONTRACT_ADDRESS = "0x162096D40AD9002A1Cf438A8D971B66951D5B697";
  const contract = new web3.eth.Contract(
    [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "DAOs",
        outputs: [
          {
            internalType: "string",
            name: "NAME",
            type: "string",
          },
          {
            internalType: "string",
            name: "WEBSITELINK",
            type: "string",
          },
          {
            internalType: "string",
            name: "DISCORDLINK",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "Reviews",
        outputs: [
          {
            internalType: "string",
            name: "TITLE",
            type: "string",
          },
          {
            internalType: "string",
            name: "CONTENT",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "UserTableOfAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "Users",
        outputs: [
          {
            internalType: "string",
            name: "FULLNAME",
            type: "string",
          },
          {
            internalType: "string",
            name: "EMAIL",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "clearData",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "string",
                name: "NAME",
                type: "string",
              },
              {
                internalType: "string",
                name: "WEBSITELINK",
                type: "string",
              },
              {
                internalType: "string",
                name: "DISCORDLINK",
                type: "string",
              },
            ],
            internalType: "struct Database.DAO",
            name: "data",
            type: "tuple",
          },
        ],
        name: "createDAO",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "string",
                name: "TITLE",
                type: "string",
              },
              {
                internalType: "string",
                name: "CONTENT",
                type: "string",
              },
            ],
            internalType: "struct Database.Review",
            name: "data",
            type: "tuple",
          },
        ],
        name: "createReview",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "string",
                name: "FULLNAME",
                type: "string",
              },
              {
                internalType: "string",
                name: "EMAIL",
                type: "string",
              },
            ],
            internalType: "struct Database.User",
            name: "data",
            type: "tuple",
          },
        ],
        name: "createUser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "deleteUser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "string",
                name: "NAME",
                type: "string",
              },
              {
                internalType: "string",
                name: "WEBSITELINK",
                type: "string",
              },
              {
                internalType: "string",
                name: "DISCORDLINK",
                type: "string",
              },
            ],
            internalType: "struct Database.DAO",
            name: "data",
            type: "tuple",
          },
        ],
        name: "updateDAO",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "string",
                name: "TITLE",
                type: "string",
              },
              {
                internalType: "string",
                name: "CONTENT",
                type: "string",
              },
            ],
            internalType: "struct Database.Review",
            name: "data",
            type: "tuple",
          },
        ],
        name: "updateReview",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "string",
                name: "FULLNAME",
                type: "string",
              },
              {
                internalType: "string",
                name: "EMAIL",
                type: "string",
              },
            ],
            internalType: "struct Database.User",
            name: "data",
            type: "tuple",
          },
        ],
        name: "updateUser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    CONTRACT_ADDRESS
  );
  setState({ ...state, contract });
};
export default loadContract;
