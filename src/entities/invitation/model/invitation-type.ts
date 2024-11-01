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
  userIdx: number;
  userName: string;
  content: string;
  delYn: string;
  insertDt: string;
  updateDt: string;
};

export type PRegisterGuestbook = {
  userName: string;
  password: string;
  content: string;
};

export type PVerifyGuestbookPassword = {
  userIdx: number;
  password: string;
};

export type RVerifyGuestbookPassword = {
  success: boolean;
  message: string;
};

export type PDeleteGuestbook = {
  userIdx: number;
  password: string;
};

export type PRegisterWeddingAttendance = {
  isAttending: number;
  guestSide: 'groom' | 'bride';
  attendanceName: string;
  headCount: number;
  mealStatus: 'planned' | 'not_planned' | 'undecided';
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
