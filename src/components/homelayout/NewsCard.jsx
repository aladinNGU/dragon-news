import React from "react";
import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, total_view, rating, author, details } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-xl max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="text-xl font-bold leading-snug text-gray-800">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="card-body pt-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          {details.length > 220 ? details.slice(0, 220) + "..." : details}
          <span className="text-primary font-semibold cursor-pointer">
            {" "}
            Read More
          </span>
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t">
          <div className="flex items-center gap-1 text-warning">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-1 font-semibold">
              {rating.number.toFixed(1)}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
