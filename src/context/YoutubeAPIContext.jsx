import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeAPI from "../api/YoutubeAPI";

const YoutubeAPIContenxt = createContext();


const client = new YoutubeAPI();

const youtube = new Youtube(client);
export function YoutubeAPIProvider({children}) {
  return(
    <YoutubeAPIContenxt.Provider value={{youtube}}> 
      {children}
    </YoutubeAPIContenxt.Provider>
  )
}

export function useYoutubeAPI(){
  return useContext(YoutubeAPIContenxt);
}
