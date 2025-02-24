import { HeaderLayout } from '@common/components/layout/HeaderLayout';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to app2!</title>
      </Head>
      <main className='app'>
        <HeaderLayout>
          <Component {...pageProps} />
        </HeaderLayout>
      </main>
    </>
  );
}

export default CustomApp;
