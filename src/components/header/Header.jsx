import { useState } from "react";
import { Container, Group, Burger, Title, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import Image from "next/image";
import logo from "@/images/logo.png";
import { useRouter } from "next/navigation";

const links = [
  { link: "/berita", label: "Berita" },
  { link: "/profil", label: "Profil" },
  { link: "/layanan-publik", label: "Layanan Publik" },
  { link: "/ppid", label: "PPID" },
  { link: "/gallery", label: "Gallery" },
];

export function Header() {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

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
      <Container size="md" className={classes.inner}>
        <div style={{ display: "flex" }}>
          <Image src={logo} width={25}></Image>
          <Title
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "inherit",
              marginLeft: 0,
              paddingLeft: 10,
            }}
          >
            KABUPATEN MANDAILING NATAL
          </Title>
        </div>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
