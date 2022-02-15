import crypto from "crypto";
const generateHash = () => crypto.randomBytes(36).toString("hex");
export { generateHash };
