import React, { useEffect, useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();

  // Use useMemo to compute the filtered news without state
  // const categoryNews = useMemo(() => {
  //   if (!newsData) return [];

  //   if (id == "0") {
  //     return newsData;
  //   } else if (id == "1") {
  //     return newsData.filter((news) => news.others.is_today_pick == true);
  //   } else {
  //     return newsData.filter((news) => news.category_id == id);
  //   }
  // }, [newsData, id]);

  // Alternative: If you need state for some reason, use this approach
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (!newsData) return;

    let filteredNews;
    if (id == "0") {
      filteredNews = newsData;
    } else if (id == "1") {
      filteredNews = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
    } else {
      filteredNews = newsData.filter((news) => news.category_id == id);
    }

    // Only update state if the filtered result actually changed
    setCategoryNews((prev) => {
      if (JSON.stringify(prev) == JSON.stringify(filteredNews)) {
        return prev;
      }
      return filteredNews;
    });
  }, [newsData, id]);

  return (
    <div>
      <h3>Category News - {categoryNews.length} news found</h3>
    </div>
  );
};

export default CategoryNews;
