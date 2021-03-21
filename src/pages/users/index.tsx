import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil';

import Layout from '@/components/Layout'
import List from '@/components/List';
import { User } from '@/types/User';
import { userListState } from '@/atoms/userListState';
import { sampleUserList } from '@/utils/sampleUserList';

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => {
  console.log(useRecoilValue(userListState))
  const setUserList: SetterOrUpdater<User[]> = useSetRecoilState(
    userListState,
  );
  setUserList(sampleUserList);
  console.log(useRecoilValue(userListState))
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={items} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = sampleUserList;
  return { props: { items } }
}

export default WithStaticProps
