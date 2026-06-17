/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import ActionGrid from './components/ActionGrid';
import Sponsors from './components/Sponsors';
import Gallery from './components/Gallery';
import News from './components/News';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import BackgroundBlobs from './components/BackgroundBlobs';

export default function App() {
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden">
      <BackgroundBlobs />
      <Navbar />
      <Hero />
      <Countdown />
      <ActionGrid />
      <Sponsors />
      <Gallery />
      <News />
      <MapSection />
      <Footer />
    </div>
  );
}
