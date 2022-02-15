import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name='hogehogenyannyan' content='created by かめちゃん' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-cyan-500 text-4xl text-center m-40'>aboutです</h1>
        <h1 className='text-center m-40'>
          <Link href='/'>
            <a className='text-cyan-500 text-4xl'>Topへ</a>
          </Link>
        </h1>
      </main>
    </div>
  );
};

export default Home;
