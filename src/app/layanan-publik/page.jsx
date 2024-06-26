"use client";
import { Header } from "@/components/header/Header";
import classes from "./page.module.css";
import Image from "next/image";
import tentangmadina from "@/images/tentangmadina2.png";
import pengumuman from "@/images/pengumuman.png";
import pemerintahan from "@/images/pemerintahan.png";
import informasi from "@/images/informasi.png";
import laporan from "@/images/laporan.png";
import email from "@/images/email.png";
import lhkpn from "@/images/lhkpn.png";
import jdih from "@/images/jdih.png";
import spbe from "@/images/spbe.png";
import satudata from "@/images/satudata.png";

const services = [
  {
    title: "Tentang Madina",
    image: tentangmadina,
    link: "https://info.madina.go.id/gambaram-umum-kondisi-daerah/",
  },
  {
    title: "Pengumuman",
    image: pengumuman,
    link: "https://info.madina.go.id/category/pengumuman/",
  },
  {
    title: "Pemerintahan",
    image: pemerintahan,
    link: "https://info.madina.go.id/daftar-alamat-website-dan-email-kecamatan-di-kab-mandailing-natal/",
  },
  {
    title: "Informasi",
    image: informasi,
    link: "https://info.madina.go.id/",
  },
  {
    title: "Laporan",
    image: laporan,
    link: "https://www.lapor.go.id/instansi/pemerintah-kabupaten-mandailing-natal/",
  },
  {
    title: "E-Mail",
    image: email,
    link: "https://madina.go.id/webmail/",
  },
  {
    title: "LHKPN",
    image: lhkpn,
    link: "https://elhkpn.kpk.go.id/portal/user/pengumuman_lhkpn/WmpWbFFVMUxkemRETDFaaFkzSnRWbFo1VVhjdlZFUk1URmg1U1RCaGFUaDNlazR2TlZGRlQyVnFVRGt6TUV0NmJFdHhWbE53Ukd4TFFYcEJkMnBLU0E9PQ==",
  },
  {
    title: "JDIH",
    image: jdih,
    link: "https://jdih.madina.go.id/",
  },
  {
    title: "SPBE",
    image: spbe,
    link: "https://spbe.madina.go.id/",
  },
  {
    title: "Satu Data",
    image: satudata,
    link: "https://sdi.madina.go.id/",
  },
];

export default function LayananPublikPage() {
  return (
    <section className={classes.body}>
      <section>
        <Header id={2} />
      </section>
      <section className={classes.title}>
        <h1>Layanan dan Inovasi</h1>
      </section>
      <section className={classes.catalog}>
        {services.map((service, index) => (
          <a key={index} href={service.link} className={classes.card}>
            <Image
              src={service.image}
              alt={service.title}
              width={100}
              height={100}
            />
            <h2>{service.title}</h2>
          </a>
        ))}
      </section>
    </section>
  );
}
