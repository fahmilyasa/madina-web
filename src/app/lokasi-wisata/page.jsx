"use client";
import { Header } from "@/components/header/Header";
import classes from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import wisata1 from "@/images/wisata1.jpg";
import wisata2 from "@/images/wisata2.jpg";
import wisata3 from "@/images/wisata3.jpg";
import wisata4 from "@/images/wisata4.jpg";

const places = [
  {
    image: wisata1,
    title: "Gordang Sambilan",
    link: "https://ksdae.menlhk.go.id/artikel/9435/gordang-sambilan-budaya-mandailing.html",
  },
  {
    image: wisata2,
    title: "Payabulan",
    link: "https://www.travelingmedan.com/2020/07/payabulan-destinasi-wisata-lembah-sorik-marapi.html",
  },
  {
    image: wisata3,
    title: "Aek Batu Bontar",
    link: "https://sumut.bulat.co.id/madin/wisata-aek-batu-bontar-panyabungan-timur-butuh-perhatian-pemerintahnbsp/",
  },
  {
    image: wisata4,
    title: "Aek Sijorni",
    link: "https://www.detik.com/sumut/wisata/d-7292661/wisata-aek-sijorni-lokasi-jam-buka-htm-wahana-dan-fasilitas",
  },
];

export default function LokasiWisataPage() {
  const router = useRouter();

  return (
    <section className={classes.body}>
      <section>
        <Header id={3} />
      </section>
      <section className={classes.title}>
        <h1>Lokasi Wisata</h1>
      </section>
      <section className={classes.placesContainer}>
        <div className={classes.gridContainer}>
          {places.map((place, index) => (
            <div key={index} className={classes.place}>
              <a href={place.link} className={classes.placeLink}>
                <div className={classes.imageContainer}>
                  <Image
                    src={place.image}
                    alt={place.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className={classes.overlay}></div>
                  <div className={classes.overlayContent}>
                    <h2>{place.title}</h2>
                    <p>Selengkapnya →</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
