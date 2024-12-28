import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Sec2 from "@/components/Sec2";
export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Sec2 />
    </>
  );
}
