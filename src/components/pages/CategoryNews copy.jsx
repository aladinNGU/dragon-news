import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);
  // console.log(id, newsData);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(newsData);
      return;
    } else if (id == "1") {
      const filteredNews = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = newsData.filter((news) => news.category_id == id);
      console.log(filteredNews);
      setCategoryNews(filteredNews);
    }
  }, [newsData, id]);
  return <div>{<h3>Category News - {categoryNews.length} news found</h3>}</div>;
};

export default CategoryNews;
