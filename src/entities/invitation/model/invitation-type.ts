export type MarriedPersons = {
  groom: MarriedPersonsInfo;
  groomsFather: MarriedPersonsInfo;
  groomsMother: MarriedPersonsInfo;
  bride: MarriedPersonsInfo;
  bridesFather: MarriedPersonsInfo;
  bridesMother: MarriedPersonsInfo;
};

type MarriedPersonsInfo = {
  name: string;
  subName: string;
  phoneNumber: string;
  account: string;
};

export type CallInfo = {
  role: string;
  name: string;
  subName: string;
  phoneNumber: string;
};
