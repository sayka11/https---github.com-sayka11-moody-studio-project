import { Bedsheet } from './components/HomePageBedsheet/Bedsheet';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePageDetails } from './components/HomePageDetails/HomePageDetails';
import { HomePageFeatures } from './components/HomePageFeatures/HomePageFeatures';
import { HomePageHero } from './components/HomePageHero/HomePageHero';
import { HomePageProducts } from './components/HomePageProducts/HomePageProducts';
import { LoadMore } from './components/LoadMorePart/LoadMore';

export const HomePage = () => (
  <>
    <Header />
    <HomePageFeatures />
    <HomePageHero />
    <HomePageDetails />
    <HomePageProducts />
    <Bedsheet />
    <LoadMore />
    <Footer />
  </>
);
