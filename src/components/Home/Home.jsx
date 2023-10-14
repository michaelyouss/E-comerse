/** @format */

// import style from "./Home.module.css";
// import CategorySlider from "../CategorySlider/CategorySlider";
// import MainSlider from "../MainSlider/MainSlider";
import {Helmet} from "react-helmet";
import Featuredproducts from "../featuredproducts/featuredproducts";
import useNetwork from "../Hooke/useNetwork";


export default function Home() {

  let x = useNetwork()

  return (
    <>
      <Helmet>
        <title>Fresh Cart Home</title>
      </Helmet>
      {x}
      <Featuredproducts />
    </>
  );
}
