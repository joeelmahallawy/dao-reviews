import getContract from "../contracts/getContract";
import Web3 from "web3";

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
let contract = getContract();
// @ts-ignore
if (!global.contract) {
  // @ts-ignore
  global.contract = contract;
}
// @ts-ignore
if (!global.web3) {
  // @ts-ignore
  global.web3 = web3;
}
// @ts-ignore
// contract = global.contract;
// @ts-ignore
// web3 = global.web3;
// }
export { contract, web3 };
