import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeAPI } from "../context/YoutubeAPIContext";
import styles from "./ChannelInfo.module.css";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeAPI();
  const {
    error,
    isLoading,
    data: url,
  } = useQuery(
    {
      queryKey: ["channel", id],
      queryFn: () => {
        return youtube.channelImageURL(id);
      },
      staleTime: 1000 * 60 * 5,
    },
  );
  return (
    <div className={styles.channelinfo}>
      {error && subImage(name)}
      {isLoading && subImage(name)}
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}

const subImage = (name) => {
  return (
    <div className={styles.subimage}>
      <p>{name[0]}</p>
    </div>
  );
};
