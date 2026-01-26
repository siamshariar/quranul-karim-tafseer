import { enToBn } from "../../lib/format";
import { useState, useContext } from "react";
import { SettingsContext } from "../../contexts/SettingsContext";
import { useRouter } from "next/router";
// import Link from 'next/link'
import { Modal, Backdrop, Fade } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
// import Loader from '../core/loader'
import SendIcon from "../icons/Send";
import styles from "./go-to-verse.module.scss";

export default function GoToVerse({ open, controller, chapters }) {
  const { verseMode } = useContext(SettingsContext);

  const [chapterNumber, setChapterNumber] = useState(1);
  const [numberOfVerses, setNumberOfVerses] = useState(7);
  const [verseNumber, setVerseNumber] = useState(1);

  const getVerseNumberList = (numberOfVerses) => {
    let list = [];
    for (let i = 0; i < numberOfVerses; i++) {
      list.push(
        <MenuItem key={i} value={i + 1}>
          আয়াত {enToBn(i + 1)}
        </MenuItem>
      );
    }
    return list;
  };

  const [verseNumberList, setVerseNumberList] = useState(
    getVerseNumberList(numberOfVerses)
  );

  const handleChapterChange = (event) => {
    let totalVerse = chapters[event.target.value - 1].totalVerse;

    setChapterNumber(event.target.value);
    setNumberOfVerses(totalVerse);
    setVerseNumber(1);
    setVerseNumberList(getVerseNumberList(totalVerse));
  };

  const handleVerseChange = (event) => {
    setVerseNumber(event.target.value);
  };

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    // const href =
    //   verseMode === "scroll"
    //     ? `/chapters/${chapters[chapterNumber - 1].slug}#verse-${verseNumber}`
    //     : verseMode === "slide"
    //     ? `/chapters/${chapters[chapterNumber - 1].slug}/verses/${verseNumber}`
    //     : `/chapters/${chapters[chapterNumber - 1].slug}#verse-${verseNumber}`;

    const href = `/chapters/${chapters[chapterNumber - 1].slug}#verse-${verseNumber}`;

    controller(false)(e);
    router.push(href);
  };

  return (
    <Modal
      open={open}
      onClose={controller(false)}
      className={styles.root}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={styles.modal}>
          <div className={styles.title}>
            <h2>নির্দিষ্ট আয়াতে যান</h2>
            <h4>সূরা এবং আয়াত নির্বাচন করুন</h4>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.item}>
                {chapters && (
                  <Select
                    className={styles.inner}
                    value={chapterNumber}
                    onChange={handleChapterChange}
                    MenuProps={{
                      classes: {
                        paper: styles.custom_select,
                      },
                    }}
                  >
                    {chapters &&
                      chapters.map((chapter) => (
                        <MenuItem key={chapter.chapterNo} value={chapter.chapterNo}>
                          {enToBn(chapter.chapterNo)}. {chapter.name}
                        </MenuItem>
                      ))}
                  </Select>
                )}
              </div>

              <div className={styles.item}>
                {chapters && (
                  <Select
                    className={styles.inner}
                    value={verseNumber}
                    onChange={handleVerseChange}
                    MenuProps={{
                      classes: {
                        paper: styles.custom_select,
                      },
                    }}
                  >
                    {verseNumberList}
                  </Select>
                )}
              </div>

              <Button
                className={styles.btn}
                variant="contained"
                focusRipple={false}
                endIcon={<SendIcon />}
                disableElevation
                onClick={(e) => handleClick(e)}
              >
                আয়াতে যান
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
