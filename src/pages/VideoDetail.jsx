import React from "react";
import { useLocation } from "react-router-dom";
import styles from './VideoDetail.module.css';
import ChannelInfo from "../components/ChannelInfo";

export default function VideoDetail() {
  const { state : {video}} = useLocation();
  const { title,channelId, channelTitle, } = video.snippet;
  return (
    <div>
      <iframe
        id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
      />
      <p>{title}</p>
      <ChannelInfo id={channelId} name={channelTitle}/>
    </div>
  );
}
