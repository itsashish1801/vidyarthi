import Head from 'next/head';

import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vidyarthi - Empowering education with innovation</title>
        <meta
          name='description'
          content='Vidyarthi - Empowering education with innovation'
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
