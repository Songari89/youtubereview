import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([{ //배열 형식으로 전달하는 이유는?❓
  path: '/',
  element: <App/>,
  errorElement: <NotFound/>,
  children: [
    {index: true, element: <Videos/>},
    {path: 'videos/:keyword', element: <Videos/>},
    {path: 'videos/watch/:id', element: <VideoDetail/>}
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
