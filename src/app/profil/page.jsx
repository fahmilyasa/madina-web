"use client";
import { Header } from "@/components/header/Header";
import Image from "next/image";
import styles from "../page.module.css";

export default function ProfilePage() {
  function buttonSubmit() {}

  return (
    <main className={styles.main}>
      <h1>Hello this is profile page</h1>
      <button onClick={buttonSubmit()}>click</button>
    </main>
  );
}
