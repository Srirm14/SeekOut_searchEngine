import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const ResultContext = createContext();

// const baseUrl = "https://google-search-json.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [imageResults, setImageResults] = useState([]);
  const [newsResults, setNewsResults] = useState([]);
  const [videosResult, setVideosResult] = useState([]);

  const getResults = async (searchKey) => {
    console.log(searchKey);
    setLoading(true);

    const options = {
        method: 'GET',
        url: 'https://api/', //use your api keys
        params: {
          query:`${searchKey}`,
          limit: '10',
          related_keywords: 'true'
        },
        headers: {
          'Key': 'API_KEY',
          'API-Host': 'API_KEY'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }

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
      url: "https://api/imagesearch",
      params: {
        q: `${searchKey}`,
        gl: "us",
        lr: "lang_en",
        num: "10",
        start: "0",
      },
      headers: {
        'Key': 'API_KEY',
        'API-Host': 'API_KEY'
      }
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
      url: "https://api/search",
      params: {
        query: `${searchKey}`,
        country: "US",
        lang: "en",
      },
      headers: {
        'Key': 'API_KEY',
        'API-Host': 'API_KEY'
      }
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
      url: "https://api/videosearch",
      headers: {
        'Key': 'API_KEY',
        'API-Host': 'API_KEY'
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
