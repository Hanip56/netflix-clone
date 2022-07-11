import { useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import useHttp from "../hooks/use-http";
import requests from "../utils/request";

function Home() {
  const { data: netflixOriginals } = useHttp(requests.fetchNetflixOriginals);
  const { data: trendingNow } = useHttp(requests.fetchTrending);
  const { data: topRated } = useHttp(requests.fetchTopRated);
  const { data: action } = useHttp(requests.fetchActionMovies);
  const { data: comedies } = useHttp(requests.fetchComedyMovies);
  const { data: horror } = useHttp(requests.fetchHorrorMovies);
  const { data: romance } = useHttp(requests.fetchRomanceMovies);
  const { data: documentary } = useHttp(requests.fetchDocumentaries);

  console.log(documentary.results);

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals.results} />

        <Row title="Trending Now" movies={trendingNow.results} />
        <Row title="Top Rated" movies={topRated.results} />
        <Row title="Action Thrillers" movies={action.results} />
        <Row title="Comedies" movies={comedies.results} />
        <Row title="Scary Movies" movies={horror.results} />
        <Row title="Romance Movies" movies={romance.results} />
        <Row title="Documentary" movies={documentary.results} />
      </main>
    </div>
  );
}

export default Home;
