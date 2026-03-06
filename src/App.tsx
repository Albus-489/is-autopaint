/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import './i18n/config';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { Gallery } from './components/sections/Gallery';
import { Contact } from './components/sections/Contact';
import { Location } from './components/sections/Location';
import { Footer } from './components/layout/Footer';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language.split('-')[0];
  }, [i18n.language]);

  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Ladataan...</div>}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <About />
          <BeforeAfter />
          <Gallery />
          <Contact />
          <Location />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
