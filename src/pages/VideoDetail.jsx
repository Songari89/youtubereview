import React from "react";
import { useLocation } from "react-router-dom";
import styles from './VideoDetail.module.css';
import ChannelInfo from "../components/ChannelInfo";
import ChannelPlaylist from "../components/ChannelPlaylist";

export default function VideoDetail() {
  const { state : {video}} = useLocation();
  const { title,channelId, channelTitle, description } = video.snippet;
  return (
    <div className={styles.container}>
      <div className={styles.videobox}>
        <iframe
          id="player"
          type="text/html"
          src={`http://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <p className={styles.title}>{title}</p>
        <ChannelInfo id={channelId} name={channelTitle} />
        <p>{description}</p>
      </div>
      <div className={styles.playlistbox}>
        <ChannelPlaylist channelId={channelId} />
      </div>
    </div>
  );
}
