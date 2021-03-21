import { selector } from 'recoil';
import { userListState } from '@/atoms/userListState';
import { User } from '@/types/User';


export const userListSelector = selector<User[]>({
  key: 'userListSelector',
  get: ({ get }) => {
    const userList: User[] = get(userListState);
    return userList;
  }
});
