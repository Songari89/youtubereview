import "./App.css";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchHeader from "./components/SearchHeader";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <SearchHeader/>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}

export default App;
