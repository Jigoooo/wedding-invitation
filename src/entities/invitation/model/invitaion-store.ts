import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

import { InvitationStates } from '@/entities/invitation';
import { TInvitation } from '@/entities/invitation/model/invitation-type.ts';
import { parse } from 'date-fns';

const invitationInitialState: InvitationStates = {
  weddingInfo: {
    weddingDateTime: parse('2024.12.14 13:00:00', 'yyyy.MM.dd HH:mm:ss', new Date()),
    weddingDateTimeString: '2024.12.14 13:00:00',
    weddingHallAddress: '충남 천안시 서북구 천안대로 1198-30',
    weddingHallName: '천안 비렌티',
    weddingHallNameDetail: '천안 비렌티 신관 3F, 루체오홀',
  },
  marriedPersons: {
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
        bank: '농협',
        accountHolder: '최정남',
        accountNumber: '510-01-005666',
      },
    },
    bride: {
      role: '신부',
      name: '김지영',
      subName: '',
      phoneNumber: '010-2034-1618',
      account: {
        bank: '카카오뱅크',
        accountHolder: '김지영',
        accountNumber: '3333-03-7546413',
      },
    },
    bridesFather: {
      role: '신부 아버지',
      name: '김상돈',
      subName: '',
      phoneNumber: '010-6404-1618',
      account: {
        bank: '농협',
        accountHolder: '김상돈',
        accountNumber: '485818-52-018192',
      },
    },
    bridesMother: {
      role: '신랑 어머니',
      name: '박지효',
      subName: '경이',
      phoneNumber: '010-2856-3567',
      account: {
        bank: '농협',
        accountHolder: '박지효',
        accountNumber: '469-12-149806',
      },
    },
  },
};

const useInvitationStore = create<TInvitation>()(() => {
  return {
    state: {
      ...structuredClone(invitationInitialState),
    },
    actions: {},
  };
});

export const useWeddingInfo = () =>
  useInvitationStore(useShallow((state) => state.state.weddingInfo));
export const useMarriedPersons = () =>
  useInvitationStore(useShallow((state) => state.state.marriedPersons));
export const invitationActions = useInvitationStore.getState().actions;
