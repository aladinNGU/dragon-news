import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import NewsCard from "../homelayout/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    // Early return if no data
    if (!newsData || !Array.isArray(newsData)) return;

    let filteredNews;
    if (id == "0") {
      filteredNews = newsData;
    } else if (id == "1") {
      filteredNews = newsData.filter(
        (news) => news.others?.is_today_pick == true
      );
    } else {
      filteredNews = newsData.filter((news) => news.category_id == id);
    }

    // Prevent unnecessary updates by checking if data actually changed
    setCategoryNews((prev) => {
      // Simple comparison - for better performance, use a deep comparison library
      if (JSON.stringify(prev) === JSON.stringify(filteredNews)) {
        return prev;
      }
      return filteredNews;
    });
  }, [newsData, id]);

  return (
    <div>
      <h3 className="text-xl font-bold">
        Category News - {categoryNews.length} news found
      </h3>

      <div className="grid grid-cols-1 gap-5 mt-6">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
