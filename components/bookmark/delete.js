import { useContext } from "react";
import { BookmarkContext } from "../../contexts/BookmarkContext";
import { Modal, Backdrop, Fade } from "@mui/material";
import CloseIcon from "../icons/Close";
import styles from "./modal.module.scss";

export default function DeleteBookmark({ open, closer, bookmarkKey }) {
  const { bookmarks, changeBookmarks } = useContext(BookmarkContext);

  const checkKeyExists = (obj, key) => {
    return Object.keys(obj).some((el) => {
      return el === key;
    });
  };

  const elementRemove = (obj, key) => {
    delete obj[key];
    return obj;
  };

  const handleDeleteBookmark = (e) => {
    if (checkKeyExists(bookmarks, bookmarkKey)) {
      let newBookmarks = bookmarks;
      newBookmarks = elementRemove(newBookmarks, bookmarkKey);
      changeBookmarks(newBookmarks);
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

          <h2 className={styles.title}>ডিলিট বুকমার্ক?</h2>
          <div className={styles.title_desc}>
            আপনি কি নিশ্চিত আপনি বুকমার্ক মুছে দিতে চান?
          </div>

          <div className={styles.buttons}>
            <button
              className={`${styles.btn} ${styles.btn_remove}`}
              onClick={handleDeleteBookmark}
            >
              মুছে ফেলুন
            </button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
