import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeAPI } from "../context/YoutubeAPIContext";
import VideoCard from "./VideoCard";

export default function ChannelPlaylist({ channelId }) {
  const { youtube } = useYoutubeAPI();
  const { data: videos } = useQuery({
    queryKey: ["playlist", channelId],
    queryFn: () => {
      console.log(channelId);
      return youtube.searchByChannelId(channelId);
    },
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {videos && (
        <div>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </>
  );
}
