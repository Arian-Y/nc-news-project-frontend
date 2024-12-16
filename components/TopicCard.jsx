export default function TopicCard({ topic, index }) {
  return (
    <ul id={index}>
      <h2>{topic.slug}</h2>
      <p>{topic.description}</p>
    </ul>
  );
}
