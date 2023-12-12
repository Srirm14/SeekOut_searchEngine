import React, { useEffect } from "react";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../Contexts/ResultContextProvider";
import moment from "moment";

const Results = () => {
  const {
    results,
    isLoading,
    getImages,
    imageResults,
    searchTerm,
    getResults,
    getNews,
    newsResults,
    getVideos,
    videosResult,
  } = useResultContext();

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/search":
        getResults(searchTerm);
        break;
      case "/images":
        getImages(searchTerm);
        break;
      case "/news":
        getNews(searchTerm);
        break;
      case "/videos":
        getVideos(searchTerm);
        break;
      default:
        console.log("erorr!");
        break;
    }
  }, [location.pathname, searchTerm]);

  if (isLoading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-col min-h-screen dark:bg-dark-800 p-10 mt-[150px] gap-8 pb-[40px] mb-[80px] scroll-smooth">
          {results.results?.map((data, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <span>
                <a href={data.url}>
                  <p className="hover:underline text-teal-700 font-medium ">
                    {data.url.length > 30
                      ? data.url.substring(0, 30)
                      : data.url}
                  </p>
                </a>
              </span>
              <span>
                <p className="text-gray-500 font-normal ">{data.title}</p>
                <p className="font-normal text-sm text-gray-400">
                  {data.description}
                </p>
              </span>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex justify-start min-h-screen dark:bg-dark-800 p-10  mt-[150px]  mx-[50px] gap-8 pb-[40px] mb-[100px] scroll-smooth w-full flex-wrap space-y-10 content-around  h-full min-w-[908px] relative">
          {imageResults?.data?.items?.map((data, index) => (
            <div
              className="w-[260px] h-fit  rounded-md"
              key={index}
            >
              <div className="flex flex-col gap-2">
                <span>
                  <img
                    src={data.originalImageUrl}
                    alt={data.title}
                    className=" object-cover w-full rounded-md"
                  />
                </span>
                <span>
                  <p className="text-teal-600 font-normal">{data.title}</p>
                  <a href={data.contextLink} className="hover:underline">
                  <p className="font-light text-gray-500 text-sm ">
                    {data.contextLink.length > 30
                      ? data.contextLink.substring(0, 30)
                      : data.contextLink}
                  </p>
                  </a>
                 
                </span>
              </div>
            </div>
          ))}
        </div>
      );

    case "/news":
      return (
        <div className="flex  flex-col  gap-4 w-full h-fit mt-[150px]">
          {newsResults?.data?.map((news, index) => (
            <div
              className="news-box flex justify-start    gap-4  h-fit px-[54px]  pt-[20px]"
              key={index}
            >
              <div className="head-sub flex flex-col gap-2  w-[600px]">
                <span>
                  <a className="hover:underline" href={news.link}>
                    <p className="text-teal-600  hover:text-teal-900  text-xl font-Poppins">
                      {news.title}
                    </p>
                  </a>
                </span>
                <span>
                  <p className="text-gray-600 text-m font-Poppins max-w-lg">
                    {news.link.length > 30
                      ? news.link.substring(0 / 30).concat("...")
                      : news.link}
                  </p>
                </span>
                <span>
                  <p className="text-gray-600 text-md font-Poppins">
                    {" "}
                    {moment(news.published_datetime_utc).format("DD MMM YYYY")}
                  </p>
                </span>
              </div>
              <div className="news-image flex flex-col gap-2 ">
                <span>
                  <img
                    src={news.photo_url}
                    alt={news.photo_url}
                    className="object-cover w-[200px] h-[120px] rounded-md shadow-sm"
                  ></img>
                </span>
              </div>
            </div>
          ))}
        </div>
      );

    case "/videos":
      return (
        <div className=" flex justify-start  flex-col  ml-[70px] mt-[150px] gap-4">
          {videosResult?.result?.map((data, index) => (
            <div className="videoResults flex flex-col" key={index}>
              <div className="title ">
                <span>
                  <p className="text-md font-Poppins text-gray-400 ">
                    {data.content}
                  </p>
                  <p className="text-xl font-Poppins text-teal-700 ">
                    {data.title}
                  </p>
                </span>
              </div>
              <div className="video-content flex justify-start gap-4 ">
                <span className="  bg-teal-500  h-[120px]   rounded-md">
                  <iframe
                    className="w-[250px] h-full rounded-lg "
                    src={`${data.embed_url}?mute=1`}
                    title="YouTube Video"
                    allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </span>
                <span className="w-[600px] text-gray-500">
                  <p>
                    {data.description.length > 180
                      ? data.description.substring(0, 180).concat("...")
                      : data.description}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      );

    default:
      return (
        <div className="w-screen bg-pink-400 h-screen mt ml-[70px] mt-[140px]">
          <div className="w-screen bg-pink-800 h-[20px] p-[200px]" />
          <div className="w-screen bg-yellow-200 h-[20px] p-[200px]" />
          <div className="w-screen bg-pink-800 h-[20px] p-[200px]" />
        </div>
      );
  }
};

export default Results;
