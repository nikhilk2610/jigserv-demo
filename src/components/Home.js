import React from "react";
import Navbar from "./../components/Navbar";
import Banner from "./../components/banner/Banner";
import SearchBox from "./../components/search-box/SearchBox";
import Footer from "./../components/footer/Footer";
import ProgramsCategory from "./../components/programs-category/ProgramsCategory";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <SearchBox />
      <ProgramsCategory />
      <Footer />
    </div>
  );
}
