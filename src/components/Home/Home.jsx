/** @format */

// import style from "./Home.module.css";
// import CategorySlider from "../CategorySlider/CategorySlider";
// import MainSlider from "../MainSlider/MainSlider";
import {Helmet} from "react-helmet";
import Featuredproducts from "../featuredproducts/featuredproducts";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Fresh Cart Home</title>
      </Helmet>
      <Featuredproducts />
    </>
  );
}
