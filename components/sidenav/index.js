import { useState } from "react";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import MenuBookIcon from "../icons/MenuBook";
import NearMeIcon from "../icons/NearMe";
import BookmarkIcon from "../icons/BookmarkBorder";
import PinIcon from "../icons/PinOutline";
import AutoStoriesIcon from "../icons/AutoStories";
import SubtitlesIcon from "../icons/Subtitles";
import DownloadIcon from "../icons/GetApp";
import SettingsIcon from "../icons/SettingsOutlined";
import FormatListBulletedIcon from "../icons/FormatListBulleted";
import SubjectIcon from "../icons/Subject";
import ChapterList from "./chapter-list";
import Bookmark from "./bookmark";
import Pin from "./pin";
import LastRead from "./last-read";
import GoToVerse from "./go-to-verse";
import Settings from "./settings";
import styles from "./index.module.scss";

export default function Sidenav({ chapters }) {
  const [chapterListOpen, updateChapterListOpen] = useState(false);
  const [bookmarkOpen, updateBookmarkOpen] = useState(false);
  const [pinOpen, updatePinOpen] = useState(false);
  const [lastReadOpen, updateLastReadOpen] = useState(false);
  const [settingsOpen, updateSettingsOpen] = useState(false);
  const [goToVerseNavOpen, updateGoToVerseNavOpen] = useState(false);

  const controlGoToVerseNav = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    updateGoToVerseNavOpen(open);
  };

  const controlChapterList = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    updateChapterListOpen(open);
  };

  const controlBookmark = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    updateBookmarkOpen(open);
  };

  const controlPin = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    updatePinOpen(open);
  };

  const controlLastRead = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    updateLastReadOpen(open);
  };

  const controlSettingsNav = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    updateSettingsOpen(open);
  };

  return (
    <>
      <ChapterList
        chapterList={chapters}
        open={chapterListOpen}
        controller={controlChapterList}
      />

      <Bookmark open={bookmarkOpen} controller={controlBookmark} />
      <Pin open={pinOpen} controller={controlPin} />
      <LastRead open={lastReadOpen} controller={controlLastRead} />

      <GoToVerse
        open={goToVerseNavOpen}
        controller={controlGoToVerseNav}
        chapters={chapters}
      />

      <Settings open={settingsOpen} controller={controlSettingsNav} />

      <div className={styles.side_nav}>
        <ul className={styles.side_menu}>
          <li>
            <Tooltip
              title="সূরা সমূহ"
              arrow
              placement="right"
              disableFocusListener={true}
            >
              <Button onClick={controlChapterList(true)} focusRipple={false}>
                <FormatListBulletedIcon />
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="বুকমার্ক"
              arrow
              placement="right"
              disableFocusListener={true}
            >
              <Button onClick={controlBookmark(true)} focusRipple={false}>
                <BookmarkIcon />
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="পিন"
              arrow
              placement="right"
              disableFocusListener={true}
            >
              <Button onClick={controlPin(true)} focusRipple={false}>
                <PinIcon />
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="সর্বশেষ পঠিত"
              arrow
              placement="right"
              disableFocusListener={true}
            >
              <Button onClick={controlLastRead(true)} focusRipple={false}>
                <AutoStoriesIcon />
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="আয়াতে যান"
              arrow
              placement="right"
              disableFocusListener={true}
            >
              <Button onClick={controlGoToVerseNav(true)} focusRipple={false}>
                <NearMeIcon />
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="বিষয়ভিত্তিক"
              arrow
              placement="right"
              disableFocusListener={true}
            >
              <Button focusRipple={false}>
                <Link href="/subjective" legacyBehavior>
                  <a>
                    <SubjectIcon />
                  </a>
                </Link>
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="ডাউনলোড"
              arrow
              placement="right"
              disableFocusListener={true}
            >
              <Button focusRipple={false}>
                <Link href="/download" legacyBehavior>
                  <a>
                    <DownloadIcon />
                  </a>
                </Link>
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="সেটিংস"
              arrow
              placement="right"
              disableFocusListener={true}
            >
              <Button onClick={controlSettingsNav(true)} focusRipple={false}>
                <SettingsIcon />
              </Button>
            </Tooltip>
          </li>
        </ul>
      </div>
    </>
  );
}
