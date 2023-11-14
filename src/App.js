import "./App.css";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchHeader from "./components/SearchHeader";
import { YoutubeAPIProvider } from "./context/YoutubeAPIContext";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="app">
      <YoutubeAPIProvider>
        <QueryClientProvider client={queryClient}>
          <SearchHeader />
          <Outlet />
        </QueryClientProvider>
      </YoutubeAPIProvider>
    </div>
  );
}

export default App;
