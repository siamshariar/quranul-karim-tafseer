import { useContext, useEffect } from "react";
import { AudioPlayerContext } from "../../contexts/AudioPlayerContext";
import { BookmarkContext } from "../../contexts/BookmarkContext";
import { SettingsContext } from "../../contexts/SettingsContext";
import VerseCard from "../surah/verse-card";
import Skeleton from "react-loading-skeleton";
import styles from "../surah/content.module.scss";

export default function BookmarkContent({
  name,
  data,
  exist,
  isBookmarkPage,
  updateBookmarksData,
}) {
  const { bookmarks } = useContext(BookmarkContext);
  const { init } = useContext(SettingsContext);

  const {
    setPlaylist, //
    setChapterMp3Url,
    playing,
    play,
    pause,
    audioType,
  } = useContext(AudioPlayerContext);

  useEffect(() => {
    if (data) {
      let filtered = [];
      data.forEach((verse) => {
        filtered.push(verse.mp3Url);
      });
      setPlaylist(filtered);
      init();
    }

    //setChapterMp3Url(chapterMp3Url);
  }, [bookmarks, data]);

  const playingThisChapter = playing && audioType === "chapter";

  const controlPlay = () => {
    play(0, "chapter");
  };

  const controlPause = () => {
    pause();
  };

  return (
    <div className={styles.content}>
      <div className={styles.chapter}>
        <div className={styles.chapter_tab}>
          <div className={styles.title}>
            {name && <span className={styles.title_text}>{name}</span>}
            {name === null && <Skeleton height={29} width={`100%`} />}
          </div>

          {data && (
            <div className={styles.verses}>
              {data.length > 0 &&
                data.map((verse, index) => (
                  <VerseCard
                    key={index}
                    chapterName={verse.chapter.name}
                    index={index}
                    chapterNo={verse.chapter.chapterNo}
                    chapterSlug={verse.chapter.slug}
                    verse={{
                      verseNo: verse.verseNo,
                      arabic: verse.arabic,
                      translation: verse.translation,
                      footnote: verse.footnote,
                      mp3Url: verse.mp3Url,
                    }}
                    ayaArabic={verse.arabic}
                    updateBookmarksData={updateBookmarksData}
                    isBookmarkPage={isBookmarkPage}
                  />
                ))}
            </div>
          )}

          {!data && !exist && (
            <div className={styles.no_record}>কোন রেকর্ড পাওয়া যায়নি!</div>
          )}

          {!data && exist && <Skeleton height={150} width={`100%`} count={2} />}
        </div>
      </div>
    </div>
  );
}
