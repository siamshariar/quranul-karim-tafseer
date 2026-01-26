import { enToBn } from "../../lib/format";
import { useState } from "react";
import Audio from "./audio";
import styles from "./index.module.scss";

export default function AllahName({ names, contentTitle }) {
  const [namesList, setNamesList] = useState(names);

  const filterNames = (search) => {
    const filtered = names.filter((name) => {
      return name.name.toLowerCase().includes(search.toLowerCase());
    });
    setNamesList(filtered);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>{contentTitle}</h2>
        </div>

        <div className={styles.search}>
          <input
            type="text"
            name="search"
            placeholder="সার্চ করুন..."
            onChange={(e) => filterNames(e.target.value)}
          />
        </div>

        <div className={styles.list}>
          {namesList &&
            namesList.map((item) => (
              <div //
                id={"name-" + item.id}
                className={styles.item}
                key={item.id}
              >
                <span className={styles.number}>{enToBn(item.id)}</span>

                <div className={styles.left}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.meaning}>{item.meaning}</span>
                </div>

                <div className={styles.right}>{item.arabic}</div>
              </div>
            ))}
        </div>

        {(!namesList || !namesList.length) && (
          <h2 className={styles.empty}>কোন রেকর্ড পাওয়া যায়নি!</h2>
        )}

        <Audio names={names} />
      </div>
    </div>
  );
}
