import { Header } from "./components/Header/Header";
import { HomePageDetails } from "./components/HomePageDetails/HomePageDetails";
import { HomePageFeatures } from "./components/HomePageFeatures/HomePageFeatures";
import { HomePageHero } from "./components/HomePageHero/HomePageHero";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomePageFeatures />
      <HomePageHero />
      <HomePageDetails />
    </>
  );
};
