// import "../CSS/Loader.css";
// import "../CSS/ArticleList.css";
// import { useState, useEffect } from "react";
// import { useParams, useSearchParams } from "react-router-dom";
// import { fetchArticles } from "../../api";
// import ArticleCard from "./ArticleCard";

// export function ArticleList() {
//   const { topic } = useParams();
//   const [articles, setArticles] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sortBy, setSortBy] = useState("created_at");
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [orderBy, setOrderBy] = useState("ASC");

//   useEffect(() => {
//     setIsLoading(true);
//     fetchArticles(topic, sortBy, orderBy)
//       .then((articles) => {
//         setArticles(articles);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching articles:", err);
//         setIsLoading(false);
//       });
//   }, [topic, searchParams]);

//   function changeSortBy(event) {
//     const { name, value } = event.target;
//     setSortBy(value);
//     setSearchParams((prevParams) => {
//       return { ...Object.fromEntries(prevParams), [name]: value };
//     });
//   }
//   const handleSortOrderChange = (event) => {
//     const { name, value } = event.target;
//     setOrderBy(value);
//     setSearchParams((prevParams) => {
//       return { ...Object.fromEntries(prevParams), [name]: value };
//     });
//   };

//   if (!articles) return <p>No articles to be found</p>;

//   return isLoading ? (
//     <section className="loading">
//       <div class="loader"></div>
//     </section>
//   ) : (
//     <>
//       <form>
//         <label className="label">SORT BY : </label>
//         <select onChange={changeSortBy} name="sort_by" value={sortBy}>
//           <option value="created_at">Date</option>
//           <option value="author">Author</option>
//           <option value="votes">Votes</option>
//         </select>
//         <label className="label">ORDER BY : </label>
//         <select
//           id="sort-order-dropdown"
//           onChange={handleSortOrderChange}
//           name="order"
//           value={orderBy}
//         >
//           <option value="ASC">Ascending</option>
//           <option value="DESC">Descending</option>
//         </select>
//       </form>

//       <div className="article-list">
//         {articles.map((article) => {
//           return (
//             <section key={article.article_id}>
//               <ul id="topic-list">
//                 <ArticleCard articles={article}></ArticleCard>
//               </ul>
//             </section>
//           );
//         })}
//       </div>
//     </>
//   );
// }

import "../CSS/Loader.css";
import "../CSS/ArticleList.css";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchArticles } from "../../api";
import ArticleCard from "./ArticleCard";

export function ArticleList() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  const [searchParams, setSearchParams] = useSearchParams();
  const [orderBy, setOrderBy] = useState("ASC");

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic, sortBy, orderBy)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setIsLoading(false);
      });
  }, [topic, searchParams]);

  const handleSortChange = (value) => {
    setSortBy(value);
    setSearchParams({ ...Object.fromEntries(searchParams), sort_by: value });
  };

  const handleOrderChange = (value) => {
    setOrderBy(value);
    setSearchParams({ ...Object.fromEntries(searchParams), order: value });
  };

  if (!articles) return <p>No articles to be found</p>;

  return isLoading ? (
    <section className="loading">
      <div className="loader"></div>
    </section>
  ) : (
    <>
      <div
        className="select"
        data-default="Sort By"
        data-one="Date"
        data-two="Author"
        data-three="Votes"
      >
        <div className="selected">
          <span>Sort By</span>
          <svg className="arrow" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        </div>
        <div className="options">
          <input
            type="radio"
            name="sort"
            id="option-1"
            onClick={() => handleSortChange("created_at")}
          />
          <label htmlFor="option-1" data-txt="Date"></label>
          <input
            type="radio"
            name="sort"
            id="option-2"
            onClick={() => handleSortChange("author")}
          />
          <label htmlFor="option-2" data-txt="Author"></label>
          <input
            type="radio"
            name="sort"
            id="option-3"
            onClick={() => handleSortChange("votes")}
          />
          <label htmlFor="option-3" data-txt="Votes"></label>
        </div>
      </div>

      <div
        className="select"
        data-default="Order By"
        data-one="Ascending"
        data-two="Descending"
      >
        <div className="selected">
          <span>Order By</span>
          <svg className="arrow" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        </div>
        <div className="options">
          <input
            type="radio"
            name="order"
            id="option-1"
            onClick={() => handleOrderChange("ASC")}
          />
          <label htmlFor="option-1" data-txt="Ascending"></label>
          <input
            type="radio"
            name="order"
            id="option-2"
            onClick={() => handleOrderChange("DESC")}
          />
          <label htmlFor="option-2" data-txt="Descending"></label>
        </div>
      </div>

      <div className="article-list">
        {articles.map((article) => {
          return (
            <section key={article.article_id}>
              <ul id="topic-list">
                <ArticleCard articles={article}></ArticleCard>
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
