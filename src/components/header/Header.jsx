import { useState } from "react";
import { Container, Group, Burger, Title, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import Image from "next/image";
import logo from "@/images/logo.png";
import { useRouter } from "next/navigation";

const links = [
  { link: "/", label: "Beranda" },
  { link: "/berita", label: "Berita" },
  { link: "/layanan-publik", label: "Layanan Publik" },
  { link: "/lokasi-wisata", label: "Lokasi Wisata" },
];

export function Header({ id }) {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[id].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        router.push(link.link);
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <a href="/" className={classes.logoLink}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image src={logo} width={25} height={25} />
            <Title
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "inherit",
                marginLeft: 0,
                paddingLeft: 10,
                cursor: "pointer",
              }}
            >
              KABUPATEN MANDAILING NATAL
            </Title>
          </div>
        </a>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </div>
    </header>
  );
}
