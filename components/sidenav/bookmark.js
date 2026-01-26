import Drawer from "@mui/material/Drawer";
import Scrollbar from "../core/scrollbar";
import BookmarkList from "../bookmark/list";
import Close from "../icons/Close";
import styles from "./bookmark.module.scss";
import css from "./style.module.scss";

export default function Bookmark({ open, controller }) {
  return (
    <Drawer
      disableEnforceFocus
      anchor="left"
      open={open}
      onClose={controller(false)}
    >
      <div className={`${css.sidenav}`}>
        <div className={css.top}>
          <span className={css.close} onClick={controller(false)}>
            <Close />
          </span>

          <div className={css.title}>
            <h2>বুকমার্ক</h2>
          </div>
        </div>

        <Scrollbar className={styles.lists}>
          <BookmarkList controller={controller} />
        </Scrollbar>
      </div>
    </Drawer>
  );
}
