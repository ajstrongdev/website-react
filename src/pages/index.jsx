import React from 'react';
import Header from '../components/header';
import Content from '../components/content';
import Quote from '../components/quote';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Content />
      <Quote />
      <Footer />
    </main>
  );
}
