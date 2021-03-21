import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserList } from '@/utils/sampleUserList'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserList)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleUserList)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
