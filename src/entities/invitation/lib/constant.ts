import { CallInfo, MarriedPersons } from '@/entities/invitation';

export const getWeddingImageSrc = (imageName: string) => {
  return `${import.meta.env.VITE_INVITATION_SERVER_URL}/images/wedding-image/${imageName}`;
};

export const marriedPersons: MarriedPersons = {
  groom: {
    role: '신랑',
    name: '김지우',
    subName: '',
    phoneNumber: '010-2355-7934',
    account: {
      bank: '국민은행',
      accountHolder: '김지우',
      accountNumber: '231402-04-312031',
    },
  },
  groomsFather: {
    role: '신랑 아버지',
    name: '김광태',
    subName: '',
    phoneNumber: '010-9800-7934',
    account: {
      bank: '국민은행',
      accountHolder: '김광태',
      accountNumber: '123-123-123',
    },
  },
  groomsMother: {
    role: '신랑 어머니',
    name: '최정남',
    subName: '',
    phoneNumber: '010-2634-7934',
    account: {
      bank: '국민은행',
      accountHolder: '최정남',
      accountNumber: '123-123-123',
    },
  },
  bride: {
    role: '신부',
    name: '김지영',
    subName: '',
    phoneNumber: '010-2034-1618',
    account: {
      bank: '국민은행',
      accountHolder: '김지영',
      accountNumber: '123-123-123',
    },
  },
  bridesFather: {
    role: '신부 아버지',
    name: '김상돈',
    subName: '',
    phoneNumber: '010-6404-1618',
    account: {
      bank: '국민은행',
      accountHolder: '김상돈',
      accountNumber: '123-123-123',
    },
  },
  bridesMother: {
    role: '신랑 어머니',
    name: '박지효',
    subName: '경이',
    phoneNumber: '010-2856-3567',
    account: {
      bank: '국민은행',
      accountHolder: '박지효',
      accountNumber: '123-123-123',
    },
  },
};

export const callInfoGroom: CallInfo[] = [
  {
    role: marriedPersons.groom.role,
    name: marriedPersons.groom.name,
    subName: marriedPersons.groom.subName,
    phoneNumber: marriedPersons.groom.phoneNumber,
  },
  {
    role: marriedPersons.groomsFather.role,
    name: marriedPersons.groomsFather.name,
    subName: marriedPersons.groomsFather.subName,
    phoneNumber: marriedPersons.groomsFather.phoneNumber,
  },
  {
    role: marriedPersons.groomsMother.role,
    name: marriedPersons.groomsMother.name,
    subName: marriedPersons.groomsMother.subName,
    phoneNumber: marriedPersons.groomsMother.phoneNumber,
  },
];

export const callInfoBride: CallInfo[] = [
  {
    role: marriedPersons.bride.role,
    name: marriedPersons.bride.name,
    subName: marriedPersons.bride.subName,
    phoneNumber: marriedPersons.bride.phoneNumber,
  },
  {
    role: marriedPersons.bridesFather.role,
    name: marriedPersons.bridesFather.name,
    subName: marriedPersons.bridesFather.subName,
    phoneNumber: marriedPersons.bridesFather.phoneNumber,
  },
  {
    role: marriedPersons.bridesMother.role,
    name: marriedPersons.bridesMother.name,
    subName: marriedPersons.bridesMother.subName,
    phoneNumber: marriedPersons.bridesMother.phoneNumber,
  },
];
