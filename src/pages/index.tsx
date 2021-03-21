import Link from 'next/link'
import Layout from '@/components/Layout'
import { RecoilRoot } from 'recoil';

const IndexPage = () => (
  <RecoilRoot>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  </RecoilRoot>
)

export default IndexPage
