import Drawer from "@mui/material/Drawer";
import Scrollbar from "../core/scrollbar";
import PinList from "../pin/list";
import Close from "../icons/Close";
import styles from "./pin.module.scss";
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
            <h2>পিন লিস্ট</h2>
          </div>
        </div>

        <Scrollbar className={styles.lists}>
          <PinList controller={controller} />
        </Scrollbar>
      </div>
    </Drawer>
  );
}
