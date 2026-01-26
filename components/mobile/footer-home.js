import { useState } from "react";
import { useRouter } from "next/router";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Container from "../core/container";
import GoToVerse from "./go-to-verse";
import MenuBookIcon from "../icons/MenuBook";
import NearMeIcon from "../icons/NearMe";
// import FavoriteIcon from '../icons/Favorite'
// import SubtitlesIcon from '../icons/Subtitles'
// import LinkIcon from '../icons/Link'
// import InfoIcon from "../icons/Info";
import BookmarkIcon from "../icons/BookmarkBorder";
import styles from "./footer.module.scss";

import SubjectIcon from "@mui/icons-material/Subject";

export default function FooterMobile({ chapters }) {
  const router = useRouter();

  const handleRouting = (href) => {
    router.push(href);
  };

  const [value, setValue] = useState(router.pathname);

  const handleChange = (event, newValue) => {
    if (newValue !== null) setValue(newValue);
  };

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

  return (
    <>
      <div className={styles.footer}>
        <Container>
          <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
            className={styles.inner}
          >
            <BottomNavigationAction
              label="সূরা"
              value="/"
              icon={<MenuBookIcon />}
              onClick={() => handleRouting("/")}
            />

            <BottomNavigationAction
              label="আয়াত"
              value={null}
              icon={<NearMeIcon />}
              onClick={handleGoToVerseModal(true)}
            />

            <BottomNavigationAction
              label="বুকমার্ক"
              value="/bookmarks"
              icon={<BookmarkIcon />}
              onClick={() => handleRouting("/bookmarks")}
            />

            <BottomNavigationAction
              label="বিষয়ভিত্তিক"
              value="/subjective"
              icon={<SubjectIcon />}
              onClick={() => handleRouting("/subjective")}
            />
          </BottomNavigation>
        </Container>
      </div>

      <GoToVerse
        open={goToVerseOpen}
        controller={handleGoToVerseModal}
        chapters={chapters}
      />
    </>
  );
}
