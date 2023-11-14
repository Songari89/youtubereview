import React from "react";
import styles from "./VideoCard.module.css";
import { useNavigate } from "react-router-dom";


export default function VideoCard({ video }) {
  const { thumbnails, channelTitle, title, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  return (
    <li onClick={handleClick} className={styles.list}>
      <img src={thumbnails.medium.url} alt={title} />
      <p className={styles.title}>{title}</p>
      <p className={styles.channelid}>{channelTitle}</p>
      <p className={styles.publish}>{publishedAt}</p>
    </li>
  );
}
