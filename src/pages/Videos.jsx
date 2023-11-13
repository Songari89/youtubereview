import React from "react";
import styles from "./Videos.module.css";
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import VideoCard from "../components/VideoCard";
import { Youtube } from "../api/youtube";


export default function Videos() {
  const { keyword } = useParams();
  const {
    error,
    isLoading,
    data: videos
  } = useQuery({
    queryKey:["videos", keyword],  //videos라는 API키
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.search(keyword)
    }
  })
  return (
  <div className={styles.container}>
    {error && <p>something is wrong</p>}
    {isLoading && <p>Loading...</p>}
    {videos && (
      <ul className={styles.list}>
        {videos.map((video) => ( //자바스크립트 안에 jsx 문법을 넣기 위해 () 사용
          <VideoCard key={video.id} video={video}/>
        ))}
      </ul>
    )}
  </div>); 
}
