import Drawer from "@mui/material/Drawer";
import Scrollbar from "../core/scrollbar";
import SettingsContent from "../settings";
import Close from "../icons/Close";
import styles from "./settings.module.scss";
import css from "./style.module.scss";

export default function Settings({ open, controller }) {
  return (
    <Drawer
      disableEnforceFocus
      anchor="left"
      open={open}
      onClose={controller(false)}
    >
      <Scrollbar className={`${css.sidenav} ${css.bg_r}`}>
        <div className={`${css.top} ${styles.top}`}>
          <span className={css.close} onClick={controller(false)}>
            <Close />
          </span>

          <div className={`${css.title} ${styles.title}`}>
            <h2>সেটিংস</h2>
            <h4>আপনার অ্যাপ সেটিং পরিবর্তন করুন</h4>
          </div>
        </div>

        <div className={styles.content}>
          <SettingsContent />
        </div>
      </Scrollbar>
    </Drawer>
  );
}
