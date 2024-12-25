import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { TopicsList } from "./components/TopicsList";
import { ArticleList } from "./components/ArticleList";
import { ArticleDetails } from "./components/ArticleDetails";
import { CommentPage } from "./components/CommentPage";

function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/articles" element={<ArticleList />}></Route>
        <Route
          path="/articles/:article_id"
          element={<ArticleDetails />}
        ></Route>
        <Route
          path="/articles/:article_id/comments"
          element={<CommentPage />}
        ></Route>
        <Route path="/topics" element={<TopicsList />}></Route>
        <Route path="/articles/:topics" element={<ArticleList />}></Route>
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
