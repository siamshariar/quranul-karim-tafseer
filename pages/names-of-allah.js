import { server } from "../lib/config";
import { getChaptersInfo, getNamesOfAllah } from "../lib/fetch";
import SettingsContextProvider from "../contexts/SettingsContext";
import AudioPlayerContextProvider from "../contexts/AudioPlayerContext";
import PinContextProvider from "../contexts/PinContext";
import BookmarkContextProvider from "../contexts/BookmarkContext";
import SidenavContextProvider from "../contexts/SidenavContext";
import Meta from "../components/core/meta";
//import SearchModal from '../../../components/core/search-modal'
import Sidenav from "../components/sidenav";
import HeaderWeb from "../components/web/header";
import HeaderMobile from "../components/mobile/header-content";
import FooterWeb from "../components/web/footer";
import FooterMobile from "../components/mobile/footer-home";
import NamesOfAllah from "../components/names-of-allah";
// import Audio from "../components/names-of-allah/audio";

export default function AllahName({ chapters, names }) {
  // const [searchModalOpen, updateSearchModalOpen] = useState(false)

  // const searchModalController = open => {
  //     updateSearchModalOpen(open)
  // }

  const pageTitle = "আল্লাহর 99টি নাম";

  return (
    <SettingsContextProvider>
      <PinContextProvider>
        <BookmarkContextProvider>
          <AudioPlayerContextProvider>
            <SidenavContextProvider>
              <Meta
                title={pageTitle}
                description={`99 Names of Allah. Quran application in Bangla.`}
                url={`${server}/names-of-allah`}
                image={`${server}/img/s_logo.png`}
                type="website"
              />

              {/* <SearchModal
                open={searchModalOpen}
                searchModalController={searchModalController}
            /> */}

              <Sidenav chapters={chapters} />

              <HeaderWeb
                page="surah"
                // chapters={chapters}
                // isChapterPage={true}
                // searchModalController={searchModalController}
              />

              <HeaderMobile //
                title={pageTitle}
              />

              <main id="viewport" className="viewport">
                <NamesOfAllah names={names} contentTitle={pageTitle} />
              </main>

              {/* <Audio names={names} /> */}

              <FooterWeb />
              <FooterMobile chapters={chapters} />
            </SidenavContextProvider>
          </AudioPlayerContextProvider>
        </BookmarkContextProvider>
      </PinContextProvider>
    </SettingsContextProvider>
  );
}

export async function getStaticProps() {
  const chaptersInfo = await getChaptersInfo();
  const namesOfAllah = await getNamesOfAllah();

  return {
    props: {
      names: namesOfAllah,
      chapters: chaptersInfo,
    },
  };
}
