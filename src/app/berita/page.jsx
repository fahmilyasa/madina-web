"use client";
import { Header } from "@/components/header/Header";

export default function BeritaPage() {
  return (
    <section>
      <section>
        <Header id={1} />
      </section>
      <section className="body">
        <h1 style={{ paddingLeft: 40 }}>Berita Madina</h1>
      </section>
      <section className="footer"></section>
    </section>
  );
}
