"use client";
import { Header } from "@/components/header/Header";
import classes from "./page.module.css";
import Image from "next/image";

import beritaUtama from "@/images/beritautama.jpg";
import berita1 from "@/images/berita1.jpeg";
import berita2 from "@/images/berita2.jpg";

const mainNewsLink =
  "https://sumut.bulat.co.id/madin/dua-kali-berturutturut-raih-opini-wtp-atika-ini-hasil-kerja-keras-kita-semua/#google_vignette";
const additionalNews = [
  {
    title: "Gelombang ke Tiga, 60 Jamaah Asal Madina Diberangkatkan",
    link: "https://rri.co.id/sibolga/daerah/734665/jemaah-calon-haji-asal-madina-gelombang-3-diberangkatkan",
    description: "3 Juni 2024 By Admin",
    image: berita1,
  },
  {
    title: "Kapolres Madina Inspektur Upacara Hari Lahir Pancasila",
    link: "https://example.com/berita-2",
    description: "1 Juni 2024 By Admin",
    image: berita2,
  },
];

export default function BeritaPage() {
  return (
    <section className={classes.body}>
      <section>
        <Header id={1} />
      </section>
      <section className={classes.title}>
        <h1>Berita Madina</h1>
      </section>
      <section className={classes.newsContainer}>
        <a href={mainNewsLink} className={classes.mainNews}>
          <div className={classes.mainImage}>
            <Image
              src={beritaUtama}
              alt="Berita Utama"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={classes.darkOverlay}>
            <h2>
              Madina Kembali Raih Opini WTP, Atika: Ini Hasil Kerja Keras Kita
              Semua
            </h2>
            <p>28 Mei 2024</p>
            <p>Upload by Admin</p>
            <span className={classes.readMore}>Selengkapnya →</span>
          </div>
        </a>
        <div className={classes.additionalNews}>
          {additionalNews.map((news, index) => (
            <a key={index} href={news.link} className={classes.newsCard}>
              <div className={classes.newsImage}>
                <Image
                  src={news.image}
                  alt={news.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={classes.newsDetails}>
                <span className={classes.category}>Berita Madina</span>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}
