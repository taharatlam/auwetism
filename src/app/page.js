import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Sec2 from "@/components/Sec2";
import Sec3 from "@/components/Sec3";
import Gain from "@/components/Gain";
import Footer from "@/components/Footer";
import CtaSec from "@/components/CtaSec";
export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Sec2 />
      <Sec3 />
      <Gain />
      <CtaSec />
      <Footer />
    </>
  );
}
