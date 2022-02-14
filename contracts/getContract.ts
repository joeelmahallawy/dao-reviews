import Web3 from "web3";
import databaseABI from "../build/contracts/Database.json";
const getContract = () => {
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
  // const CONTRACT_ADDRESS = "0xc19ff4359C3C75F8CC26b97a6E96fe3cA3e08783";
  const contract = new web3.eth.Contract(
    // @ts-ignore
    databaseABI.abi,
    databaseABI.networks[5777].address
  );
  return contract;
};
export default getContract;
