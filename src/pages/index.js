import FabVitamin from "@/components/FabVitamin";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NaturalSkin from "@/components/NaturalSkin";
import Navebar from "@/components/Navebar";
import NewSletter from "@/components/NewSletter";
import ShopCategories from "@/components/ShopCategories";
import Slory from "@/components/Slory";
import React from "react";

function index() {
  return (
    <div>
      <Header />
      <Navebar />
      <Hero />
      <NaturalSkin />
      <FabVitamin />
      <Feature />
      <Slory />
      <NewSletter />
      <ShopCategories />
      <Footer />
    </div>
  );
}

export default index;
