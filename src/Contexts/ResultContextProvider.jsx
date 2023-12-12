// ResultContext.js

import React, { createContext, useContext, useState } from "react";
import axios from "axios";


const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [imageResults, setImageResults] = useState([]);
  const [newsResults, setNewsResults] = useState([]);
  const [videosResult, setVideosResult] = useState([]);

  const rapidAPIKey = import.meta.env.VITE_RAPIDAPI_KEY;
  const rapidAPIHost = import.meta.env.VITE_RAPIDAPI_HOST;

  const getResults = async (searchKey) => {
    setLoading(true);

    const options = {
      method: 'GET',
      url: 'https://google-search74.p.rapidapi.com/',
      params: {
        query: `${searchKey}`,
        limit: '10',
        related_keywords: 'true'
      },
      headers: {
        'X-RapidAPI-Key': rapidAPIKey,
        'X-RapidAPI-Host': rapidAPIHost
      }
    };

    try {
      const response = await axios.request(options);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const getImages = async (searchKey) => {
    setLoading(true);
    console.log(searchKey);
    const options = {
      method: "GET",
      url: "https://google-search72.p.rapidapi.com/imagesearch",
      params: {
        q: `${searchKey}`,
        gl: "us",
        lr: "lang_en",
        num: "10",
        start: "0",
      },
      headers: {
        "X-RapidAPI-Key": rapidAPIKey,
        "X-RapidAPI-Host": rapidAPIHost,
      },
    };
    try {
      const imageResponse = await axios.request(options);
      setImageResults(imageResponse);
      console.log("images response", imageResponse.data);
    } catch (error) {
      console.error("web", error);
    }

    setLoading(false);
  };

  const getNews = async (searchKey) => {
    setLoading(true);

    const options = {
      method: "GET",
      url: "https://real-time-news-data.p.rapidapi.com/search",
      params: {
        query: `${searchKey}`,
        country: "US",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": rapidAPIKey,
        "X-RapidAPI-Host": rapidAPIHost,
      },
    };

    try {
      const response = await axios.request(options);
      setNewsResults(response.data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const getVideos = async (searchKey) => {
    setLoading(true);

    const options = {
      method: "POST",
      url: "https://google-api31.p.rapidapi.com/videosearch",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": rapidAPIKey,
        "X-RapidAPI-Host": rapidAPIHost,
      },
      data: {
        text: `${searchKey}`,
        safesearch: "off",
        timelimit: "",
        duration: "",
        resolution: "",
        region: "wt-wt",
        max_results: 50,
      },
    };

    try {
      const response = await axios.request(options);
      setVideosResult(response.data);
      console.log("vodeperror", response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{
        getResults,
        getImages,
        getNews,
        getVideos,
        videosResult,
        newsResults,
        imageResults,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
