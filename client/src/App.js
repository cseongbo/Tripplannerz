import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartPage from "./components/StartPage/StartPage";
import MainPage from "./components/MainPage/MainPage";
import LoginCallbackpage from "./components/StartPage/Kakao/LoginCallbackpage";
import Chat from "./components/Chat/Chat";
import Search from "./components/SearchPage/SearchPage";
import SearchResult from "./components/SearchPage/SearchResultPage";
import Find from "./components/FindPage/FindPage";
import MyPage from "./components/MyPage/MyPage";
import Review from "./components/ReviewPage/ReviewPage";
import MyResult from "./components/MyPage/MyResultPage";
import Notice from "./components/NoticePage/Notice";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/main/:postId" element={<MyPage />} />
          <Route path="/logincallback" element={<MainPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/search" element={<Search />} />
          <Route path="/my/:postId" element={<MyResult />} />
          <Route path="/search/:postId" element={<SearchResult />} />
          <Route path="/find" element={<Find />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/review" element={<Review />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
