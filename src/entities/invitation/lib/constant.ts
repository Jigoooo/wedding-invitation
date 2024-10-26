import { CallInfo, MarriedPersons } from '@/entities/invitation';

export const getWeddingImageSrc = (imageName: string) => {
  return `${import.meta.env.VITE_INVITATION_SERVER_URL}/images/wedding-image/${imageName}`;
};

export const marriedPersons: MarriedPersons = {
  groom: {
    name: '김지우',
    subName: '',
    phoneNumber: '010-2355-7934',
    account: '',
  },
  groomsFather: {
    name: '김광태',
    subName: '',
    phoneNumber: '010-9800-7934',
    account: '',
  },
  groomsMother: {
    name: '최정남',
    subName: '',
    phoneNumber: '010-2634-7934',
    account: '',
  },
  bride: {
    name: '김지영',
    subName: '',
    phoneNumber: '010-2034-1618',
    account: '',
  },
  bridesFather: {
    name: '김상돈',
    subName: '',
    phoneNumber: '010-6404-1618',
    account: '',
  },
  bridesMother: {
    name: '박지효',
    subName: '경이',
    phoneNumber: '010-2856-3567',
    account: '',
  },
};

export const callInfoGroom: CallInfo[] = [
  {
    role: '신랑',
    name: marriedPersons.groom.name,
    subName: marriedPersons.groom.subName,
    phoneNumber: marriedPersons.groom.phoneNumber,
  },
  {
    role: '신랑 아버지',
    name: marriedPersons.groomsFather.name,
    subName: marriedPersons.groomsFather.subName,
    phoneNumber: marriedPersons.groomsFather.phoneNumber,
  },
  {
    role: '신랑 어머니',
    name: marriedPersons.groomsMother.name,
    subName: marriedPersons.groomsMother.subName,
    phoneNumber: marriedPersons.groomsMother.phoneNumber,
  },
];

export const callInfoBride: CallInfo[] = [
  {
    role: '신부',
    name: marriedPersons.bride.name,
    subName: marriedPersons.bride.subName,
    phoneNumber: marriedPersons.bride.phoneNumber,
  },
  {
    role: '신부 아버지',
    name: marriedPersons.bridesFather.name,
    subName: marriedPersons.bridesFather.subName,
    phoneNumber: marriedPersons.bridesFather.phoneNumber,
  },
  {
    role: '신부 어머니',
    name: marriedPersons.bridesMother.name,
    subName: marriedPersons.bridesMother.subName,
    phoneNumber: marriedPersons.bridesMother.phoneNumber,
  },
];
