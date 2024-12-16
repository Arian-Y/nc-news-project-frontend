// import { useState, useEffect } from "react";
// import { fetchTopics } from "../api";
// import TopicCard from "./TopicCard";

// export default function TopicsList() {
//   const [topics, setTopics] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(true);
//     fetchTopics().then((topics) => {
//       setTopics(topics);
//       setIsLoading(false);
//     }, []);
//   });

//   return (
//     <>
//       {topics.map((topic, index) => {
//         return (
//           <section>
//             <ul id="topic-list">
//               <TopicCard topic={topic} key={index}></TopicCard>
//             </ul>
//           </section>
//         );
//       })}
//     </>
//   );
// }
