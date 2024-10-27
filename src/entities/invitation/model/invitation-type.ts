export type MarriedPersons = {
  groom: MarriedPersonsInfo;
  groomsFather: MarriedPersonsInfo;
  groomsMother: MarriedPersonsInfo;
  bride: MarriedPersonsInfo;
  bridesFather: MarriedPersonsInfo;
  bridesMother: MarriedPersonsInfo;
};

type MarriedPersonsInfo = {
  role: string;
  name: string;
  subName: string;
  phoneNumber: string;
  account: {
    bank: string;
    accountHolder: string;
    accountNumber: string;
  };
};

export type CallInfo = {
  role: string;
  name: string;
  subName: string;
  phoneNumber: string;
};
