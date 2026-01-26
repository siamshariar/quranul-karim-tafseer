import { useContext } from "react";
import { BookmarkContext } from "../../contexts/BookmarkContext";
import { Modal, Backdrop, Fade } from "@mui/material";
import CloseIcon from "../icons/Close";
import styles from "./modal.module.scss";

export default function RemoveBookmark({
  open,
  closer,
  chapter,
  verse,
  updateBookmarksData,
  bookmarkKey,
  isBookmarkPage,
}) {
  const { bookmarks, changeBookmarks } = useContext(BookmarkContext);

  const checkVerseBookmarked = (arr, chapter, verse) => {
    return arr.some((el) => {
      return el.chapter == chapter && el.verse == verse;
    });
  };

  const elementRemove = (arr, elem) => {
    return arr.filter(
      (item) => !(item.chapter == elem.chapter && item.verse == elem.verse)
    );
  };

  const handleRemoveBookmark = (e) => {
    let entry = bookmarks[bookmarkKey].entry;

    if (entry !== null && checkVerseBookmarked(entry, chapter, verse)) {
      let newBookmarks = bookmarks;
      entry = elementRemove(entry, { chapter: chapter, verse: verse });
      newBookmarks[bookmarkKey] = {
        name: bookmarks[bookmarkKey].name,
        entry: entry,
      };
      changeBookmarks(newBookmarks);

      if (typeof isBookmarkPage !== "undefined" && isBookmarkPage === true) {
        updateBookmarksData(chapter, verse);
      }

      closer(false)(e);
    }
  };

  return (
    <Modal
      open={open}
      onClose={closer(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open} timeout={250}>
        <div className={styles.content}>
          <button className={styles.close} onClick={closer(false)}>
            <CloseIcon />
          </button>

          <h2 className={styles.title}>বুকমার্ক বাদ দিন</h2>
          <div className={styles.title_desc}>
            আপনি কি বুকমার্ক থেকে আয়াতটি বাদ দিতে চান?
          </div>

          <div className={styles.buttons}>
            <button
              className={`${styles.btn} ${styles.btn_remove}`}
              onClick={handleRemoveBookmark}
            >
              বাদ দিন
            </button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
