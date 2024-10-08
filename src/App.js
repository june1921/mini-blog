import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// Pages
import MainPage from './component/page/page/MainPage';
import PostWritePage from './component/page/page/PostWritePage';
import PostViewPage from './component/page/page/PostViewPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`

function App(props) {
    return (
        <BrowserRouter><MainTitleText>준형의 미니 블로그</MainTitleText>
            <Routes>
            <Route index element={<MainPage/>}/>
            <Route path="post-write" element={<PostWritePage/>}/>
            <Route path="post/:postId" element={<PostViewPage/>}/>
        </Routes>
        </BrowserRouter>
    );
}   

export default App;