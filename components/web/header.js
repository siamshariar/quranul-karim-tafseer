import { useContext } from "react";
import { SettingsContext } from "../../contexts/SettingsContext";
import Link from "next/link";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Container from "../core/container";
import SearchIcon from "../icons/Search";
import Brightness4Icon from "../icons/Brightness4";
import Brightness7Icon from "../icons/Brightness7";
import GoToVerse from "../mobile/go-to-verse";
import { useState } from "react";
import styles from "./header.module.scss";

export default function HeaderWeb({ page, searchModalController, chapters }) {
  const { theme, changeTheme } = useContext(SettingsContext);

  const [goToVerseOpen, setGoToVerseOpen] = useState(false);

  const handleGoToVerseModal = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setGoToVerseOpen(open);
  };

  const modeSwitcher = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };
  return (
    <div className={`${styles.header} ${styles[page]}`}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.left}>
            {theme === "light" && (
              <Link href="/" legacyBehavior>
                <a className={styles.logo}>
                  <Image
                    src="/img/logo_light.png"
                    alt=""
                    width={165}
                    height={37}
                    loading="eager"
                  />
                </a>
              </Link>
            )}

            {theme !== "light" && (
              <Link href="/" legacyBehavior>
                <a className={styles.logo}>
                  <Image
                    src="/img/logo_dark.png"
                    alt=""
                    width={165}
                    height={37}
                    loading="eager"
                  />
                </a>
              </Link>
            )}
          </div>

          <div className={styles.right}>
            {/* <IconButton
              className={styles.btn}
              onClick={() => searchModalController(true)}
            >
              <SearchIcon />
            </IconButton> */}

            {page === "surah" && chapters && (
              <IconButton
                className={styles.btn}
                onClick={handleGoToVerseModal(true)}
              >
                <span style={{ fontSize: '14px', fontWeight: '500' }}>Go to Verse</span>
              </IconButton>
            )}

            <IconButton className={styles.btn} onClick={() => modeSwitcher()}>
              {theme === "light" && <Brightness4Icon />}
              {theme !== "light" && <Brightness7Icon />}
            </IconButton>
          </div>
        </div>
      </Container>

      {page === "surah" && chapters && (
        <GoToVerse
          open={goToVerseOpen}
          controller={handleGoToVerseModal}
          chapters={chapters}
        />
      )}
    </div>
  );
}
