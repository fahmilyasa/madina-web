"use client";
import { Header } from "@/components/header/Header";
import styles from "../page.module.css";

export default function ProfilePage() {
  function buttonSubmit() {}

  return (
    <section>
      <section>
        <Header id={2} />
      </section>
      <h1>Hello this is profile page</h1>
      <button onClick={buttonSubmit()}>click</button>
    </section>
  );
}
