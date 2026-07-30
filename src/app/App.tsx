import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Schedule } from './components/Schedule';
import { PastEditions } from './components/PastEditions';
import { Sponsors } from './components/Sponsors';
import { ForCompanies } from './components/ForCompanies';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Schedule />
      <PastEditions />
      <Sponsors />
      <ForCompanies />
      <Registration />
      <Footer />
    </div>
  );
}