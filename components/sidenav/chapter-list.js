import { enToBn } from "../../lib/format";
import { useState, useRef, useContext, useEffect } from "react";
import { SettingsContext } from "../../contexts/SettingsContext";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import Scrollbar from "../core/scrollbar";
import Close from "../icons/Close";
import Search from "../icons/Search";

import styles from "./chapter-list.module.scss";
import css from "./style.module.scss";

export default function ChapterList({ chapterList, open, controller }) {
  const { verseMode } = useContext(SettingsContext);

  const [chapters, setChapters] = useState(chapterList);

  const filterChapters = (search) => {
    const filtered = chapterList.filter((chapter) => {
      return (
        chapter.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        enToBn(chapter.chapterNo.toString()).includes(search)
      );
    });
    setChapters(filtered);
  };

  useEffect(() => {
    if (open) {
      setChapters(chapterList);
    }
  }, [open]);

  return (
    <Drawer
      disableEnforceFocus
      anchor="left"
      open={open}
      onClose={controller(false)}
    >
      <div className={css.sidenav}>
        <div className={css.top}>
          <span className={css.close} onClick={controller(false)}>
            <Close />
          </span>

          <div className={css.title}>
            <h2>সকল সূরা</h2>
          </div>

          <form className={styles.search}>
            <input
              type="text"
              name="chapter-search"
              placeholder="সূরা সার্চ করুন..."
              onChange={(e) => filterChapters(e.target.value)}
            />
            <Search />
          </form>
        </div>

        <Scrollbar className={styles.lists}>
          {chapters.map((chapter) => (
            <div key={chapter.chapterNo} className={styles.list}>
              {/* To Do: update link with verse mode */}
              <Link
                href={
                  // verseMode === "scroll"
                  //   ? `/chapters/${chapter.slug}`
                  //   : verseMode === "slide"
                  //   ? `/chapters/${chapter.slug}/verses/1`
                  //   : `/chapters/${chapter.slug}`
                  `/chapters/${chapter.slug}`
                }
                legacyBehavior>
                <a onClick={controller(false)}>
                  <span className={styles.number}>
                    {enToBn(chapter.chapterNo)}
                  </span>

                  <div className={styles.name}>
                    <span>{chapter.name}</span>
                    <span>{chapter.meaning}</span>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </Scrollbar>
      </div>
    </Drawer>
  );
}
