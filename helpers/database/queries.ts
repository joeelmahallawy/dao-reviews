import { DAO } from "../../interfaces/schema";
import { contract } from "../../lib/web3";

const getMyDao = async (wallet: string) => {
  const myDao = await contract.methods.DAOs(wallet).call();
  return myDao;
};

const getAllDaos = async () => {
  const myDAO: DAO[] = await contract.methods.readAllDaos().call();
  const allDaos = myDAO.map((dao) => {
    return {
      ID: dao.ID,
      NAME: dao.NAME,
      WEBSITELINK: dao.WEBSITELINK,
      DISCORDLINK: dao.DISCORDLINK,
    };
  });
  return allDaos;
};

export { getMyDao, getAllDaos };
