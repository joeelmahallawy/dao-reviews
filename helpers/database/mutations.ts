import { DAO } from "../../interfaces/schema";
import crypto from "crypto";
import { contract } from "../../lib/web3";

const createDAO = async (Dao: DAO, wallet: string) => {
  const create = await contract?.methods
    .createDAO([Dao.ID, Dao.NAME, Dao.WEBSITELINK, Dao.DISCORDLINK])
    .send({ from: wallet });
  return create;
};

export { createDAO };
