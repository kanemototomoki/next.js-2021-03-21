import { atom } from 'recoil';
import { User } from '@/types/User';

export const userListState = atom<User[]>({
  key: 'userList',
  default: []
});
