import React, { useEffect, useState } from "react";
import ModalMUI from "@mui/material/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import {
  HiCheck,
  HiThumbUp,
  HiVolumeOff,
  HiVolumeUp,
  HiX,
} from "react-icons/hi";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState([]);
  const [muted, setMuted] = useState(true);
  console.log({ trailer, genres });

  useEffect(() => {
    if (!movie) return;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&append_to_response=videos`
      );
      const data = await res.json();

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (e) => e.type === "Trailer"
        );

        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    };

    fetchData();
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <ModalMUI
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-40 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          className="modalButton absolute right-5 top-5 !z-50 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={handleClose}
        >
          <HiX className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" />
                Play
              </button>
              {/* <button className="modalButton" onClick={handleList}>
                {addedToList ? (
                  <HiCheck className="h-7 w-7" />
                ) : (
                  <HiPlus className="h-7 w-7" />
                )}
              </button> */}
              <button className="modalButton">
                <HiThumbUp className="h-6 w-6" />
              </button>
            </div>
            <button
              className="modalButton"
              onClick={() => setMuted((prev) => !prev)}
            >
              {muted ? (
                <HiVolumeOff className="h-6 w-6" />
              ) : (
                <HiVolumeUp className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie?.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres:</span>{" "}
                  {genres.map((genre) => genre.name).join(", ")}
                </div>

                <div>
                  <span className="text-[gray]">Original language:</span>{" "}
                  {movie?.original_language}
                </div>

                <div>
                  <span className="text-[gray]">Total votes:</span>{" "}
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </ModalMUI>
  );
};

export default Modal;
