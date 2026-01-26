import Drawer from "@mui/material/Drawer";
import Scrollbar from "../core/scrollbar";
import LastReadList from "../last-read/list";
import Close from "../icons/Close";
import styles from "./last-read.module.scss";
import css from "./style.module.scss";

export default function LastRead({ open, controller }) {
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
            <h2>সর্বশেষ পঠিত</h2>
          </div>
        </div>

        <Scrollbar className={styles.lists}>
          <LastReadList controller={controller} />
        </Scrollbar>
      </div>
    </Drawer>
  );
}
