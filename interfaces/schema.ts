export interface DAO {
  ID: string;
  NAME: string;
  WEBSITELINK: string;
  DISCORDLINK: string;
}
export interface Review {
  ID: string;
  DAOID: string;
  TITLE: string;
  CONTENT: string;
}
export interface Upvote {
  ID: string;
  REVIEWID: string;
  TOTALVOTED: number;
  VOTER: string;
  VOTE: boolean;
}
