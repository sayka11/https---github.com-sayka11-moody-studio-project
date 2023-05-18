import { Header } from "./components/Header/Header";
import { HomePageDetails } from "./components/HomePageDetails/HomePageDetails";
import { HomePageFeatures } from "./components/HomePageFeatures/HomePageFeatures";
import { HomePageHero } from "./components/HomePageHero/HomePageHero";
import { HomePageProducts } from "./components/HomePageProducts/HomePageProducts";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomePageFeatures />
      <HomePageHero />
      <HomePageDetails />
      <HomePageProducts/>
    </>
  );
};
