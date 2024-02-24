import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Main from "./pages/Main";

import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import WritePost from "./pages/WritePost";
import EditPost from "./pages/EditPost";
import CategoryMain from "./pages/CategoryMain";
import MyPosts from "./components/MyPosts";
import Following from "./pages/Following";
import Follower from "./pages/Follower";
import Setting from "./pages/Setting";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          {/* localhost:3000**으로 페이지가 바뀔 때 마다 보이는 것을 확인할 수 있다. 즉, 페이지 이동을 만들어준거임 */}
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/post/:postId" element={<Detail />} />
          <Route path="/edit/:postId" element={<EditPost />} />
          <Route path="/writepost" element={<WritePost />} />
          <Route path="/category/:category" element={<CategoryMain />} />
          <Route path="/memberpost/:memberId" element={<MyPosts />} />
          <Route path="/:memberId/followers" element={<Follower />} />
          <Route path="/:memberId/followings" element={<Following />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
