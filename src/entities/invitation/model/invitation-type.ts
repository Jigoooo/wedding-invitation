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

export type RGuestbook = {
  content: string;
};

export type InvitationStates = {
  weddingInfo: WeddingInfo;
  marriedPersons: MarriedPersons;
};

type WeddingInfo = {
  weddingDateTime: Date;
  weddingDateTimeString: string;
  weddingHallAddress: string;
  weddingHallName: string;
  weddingHallNameDetail: string;
};

export type TInvitation = {
  state: InvitationStates;
  actions: object;
};
