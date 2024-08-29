import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import BlueNavbar from "../../components/BlueNavBar/BlueNav";
import WirelessPrinterSetup from "../../components/PrinterSetup/PrinterSetup";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <BlueNavbar />
      <Banner />
      <Sale />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
        <WirelessPrinterSetup />
      </div>
    </div>
  );
};

export default Home;
