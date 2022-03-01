import { table } from 'console'
import Head from 'next/head'
import BasicTable from '../components/table'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden ">
      <Head>
        <title>OMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        { BasicTable }
      </main>

      <div>  </div>



    </div>
  )
}
