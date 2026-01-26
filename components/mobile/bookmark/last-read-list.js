import { enToBn, formatDate } from "../../../lib/format";
import { useContext } from "react";
import { PinContext } from "../../../contexts/PinContext";
import { SettingsContext } from "../../../contexts/SettingsContext";
import Link from "next/link";
import AutoStoriesIcon from "../../icons/AutoStories";
import styles from "../../bookmark/list.module.scss";

export default function LastReadList() {
  const { lastRead } = useContext(PinContext);
  const { verseMode } = useContext(SettingsContext);

  return (
    <div className={styles.content}>
      <div className={styles.lists}>
        {lastRead &&
          lastRead.length > 0 &&
          lastRead.map((item) => (
            <div key={item.chapter} className={styles.item}>
              <Link
                href={
                  verseMode === "scroll"
                    ? `/chapters/${item.slug}#verse-${item.verse}`
                    : verseMode === "slide"
                    ? `/chapters/${item.slug}/verses/${item.verse}`
                    : `/chapters/${item.slug}#verse-${item.verse}`
                }
                legacyBehavior>
                <a className={styles.link}>
                  <span className={styles.left}>
                    <span className={styles.icon}>
                      <AutoStoriesIcon />
                    </span>
                    <span className={styles.desc}>
                      <span>{item.name}</span>
                      <span>আয়াত নং {enToBn(item.verse)}</span>
                    </span>
                  </span>
                  <span className={styles.right}>
                    <span className={styles.time}>{formatDate(item.date)}</span>
                  </span>
                </a>
              </Link>
            </div>
          ))}
      </div>

      {lastRead && lastRead.length == 0 && (
        <h2 className={styles.no_record}>কোন রেকর্ড পাওয়া যায়নি!</h2>
      )}
    </div>
  );
}
