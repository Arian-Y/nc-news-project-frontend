import "./App.css";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
//import TopicsList from "../components/TopicsList";
import ArticleList from "../components/ArticleList";

function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/articles" element={<ArticleList />}></Route>
        <Route path="/articles/:article_id" element={<ArticleList />}></Route>
        {/* <Route path="/topics" element={<TopicsList />}></Route> */}
      </Routes>
    </section>
  );
}

export default App;
