import { NextApiRequest, NextApiResponse } from 'next'
import { useRecoilValue } from 'recoil';
import { userListSelector } from '@/selectors/userListSelector';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const userList = useRecoilValue(userListSelector);
  try {
    if (!Array.isArray(userList)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(userList)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
