"use client";
import { Header } from "@/components/header/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import classes from "./page.module.css";

import { getPlaces } from "@/libs/api";
import { useEffect, useState } from "react";

export default function LokasiWisataPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const queryPlaces = await getPlaces();
      setPlaces(queryPlaces);
      console.log("🚀 ~ LokasiWisataPage ~ places:", queryPlaces);
    };

    fetchPlaces();
  }, []);
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
          {places?.map((place, index) => (
            <div key={index} className={classes.place}>
              <a href={place?.link} className={classes.placeLink}>
                <div className={classes.imageContainer}>
                  <Image
                    src={place?.image}
                    alt={place?.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className={classes.overlay}></div>
                  <div className={classes.overlayContent}>
                    <h2>{place?.name}</h2>
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
