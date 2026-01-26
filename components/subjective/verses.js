import { useContext, useEffect, useRef, useState } from "react";
import { AudioPlayerContext } from "../../contexts/AudioPlayerContext";
import VerseCard from "../surah/verse-card";
// import Pagination from "../surah/pagination";
// import QuranIcon from "../icons/Quran";
// import Bismillah from "../icons/Bismillah";
import styles from "../surah/content.module.scss";

export default function SubjectiveVerses({ contentTitle, verses }) {
  const printRef = useRef();

  const { setPlaylist, setChapterMp3Url, playing, play, pause, audioType } =
    useContext(AudioPlayerContext);

  useEffect(() => {
    let filtered = [];
    verses.forEach((verse) => {
      filtered.push(verse.mp3Url);
    });
    setPlaylist(filtered);

    //setChapterMp3Url(chapterMp3Url);
  }, []);

  // const [prev, setPrev] = useState(
  //   contentType === "chapter" && chapters[chapterNo - 2]
  //     ? {
  //         link: `/chapters/${chapters[chapterNo - 2].slug}`,
  //         name: chapters[chapterNo - 2].name,
  //       }
  //     : contentType === "verse" && verses[0].verseNo > 1
  //     ? {
  //         link: `/chapters/${chapters[chapterNo - 1].slug}/verses/${
  //           verses[0].verseNo - 1
  //         }`,
  //         name: "Prev verse",
  //       }
  //     : null
  // );

  // const [next, setNext] = useState(
  //   contentType === "chapter" && chapters[chapterNo]
  //     ? {
  //         link: `/chapters/${chapters[chapterNo].slug}`,
  //         name: chapters[chapterNo].name,
  //       }
  //     : contentType === "verse" &&
  //       verses[0].verseNo < chapters[chapterNo - 1].totalVerse
  //     ? {
  //         link: `/chapters/${chapters[chapterNo - 1].slug}/verses/${
  //           verses[0].verseNo + 1
  //         }`,
  //         name: "Next verse",
  //       }
  //     : null
  // );

  return (
    <div className={styles.content}>
      <div className={styles.chapter}>
        <div className={styles.chapter_tab} ref={printRef}>
          <div className={styles.title}>
            {/*<span className={styles.title_icon}><QuranIcon /></span>*/}
            <span className={styles.title_text}>{contentTitle}</span>
          </div>

          {/* <div className={styles.bismillah}>
            <Bismillah />
          </div> */}

          <div className={styles.verses}>
            {verses &&
              verses.map((verse, index) => (
                <VerseCard
                  key={verse.verseNo}
                  chapterName={verse.chapter.name}
                  index={index}
                  chapterNo={verse.chapter.chapterNo}
                  chapterSlug={verse.chapter.slug}
                  verse={verse}
                  ayaArabic={verse.arabic}
                  printRef={printRef.current}
                />
              ))}
          </div>
        </div>

        {/* <Pagination prev={prev} next={next} /> */}
      </div>
    </div>
  );
}
