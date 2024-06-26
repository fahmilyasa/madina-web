import { Title } from "@mantine/core";
import React from "react";
import { Seaweed_Script } from "next/font/google";

const seaweedScript = Seaweed_Script({ subsets: ["latin"], weight: "400" });

export const HomeContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "0 20px",
        marginTop: "140px",
      }}
    >
      <Title>WEB RESMI KABUPATEN MANDALING NATAL</Title>
      <p
        className={seaweedScript.className}
        style={{
          fontSize: 27,
          marginBottom: "1.5rem",
          fontFamily: seaweedScript,
        }}
      >
        Negeri Beradat Taat Beribadat
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "5px",
          padding: "10px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="Apa yang anda cari..."
          style={{
            border: "none",
            outline: "none",
            padding: "10px",
            flex: 1,
          }}
        />
        <button
          style={{
            backgroundColor: "#1a3b64",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("Tombol diklik!");
          }}
        >
          Cari
        </button>
      </div>
    </div>
  );
};
