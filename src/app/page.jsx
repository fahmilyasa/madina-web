"use client";
import { Header } from "@/components/header/Header";
import { HomeContainer } from "@/components/home/HomeContainer";

export default function Home() {
  return (
    <section
      style={{
        backgroundImage: "url(/images/rumah-adat.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <section>
        <Header id={0} />
      </section>
      <section className="body">
        <HomeContainer />
      </section>
    </section>
  );
}
