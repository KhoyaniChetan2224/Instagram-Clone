import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LoginWthFaceBook from './pages/LoginWthFaceBook';
import UserSignup from './pages/UserSingup';
import ForgotPassword from './pages/ForgotPassword';
import EmailSignup from './pages/EmailSignup';
import RobotSecurityPage from './pages/RobotSecurityPage';
import OpenHomePage from './pages/OpenHomePage';
import Likebutton from './pages/header-menu/Likebutton';
import Massege from './pages/header-menu/Message';
import YourStory from './pages/YourStory';
import PlaySquare from './pages/footar-menu/PlaySquare';
import Reels from './pages/footar-menu/Reels';
import Scarch from './pages/footar-menu/Scarch';
import Profile from './pages/footar-menu/Profile';
import NewRequest from './pages/header-menu/NewRequest';
import ProfileMessage from './pages/footar-menu/ProfileMessage';
import NewRequestManage from './pages/header-menu/NewRequestManage';
import ChatBox from './pages/chetabox/ChatBox';
import EditProfile from './pages/Profile-Page/EditProfile';
import SettingAndActivity from './pages/Profile-Page/SettingAndActivity';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={< LoginPage />} />
        <Route path='/UserSignup' element={< UserSignup />} />
        <Route path='/LoginWthFaceBook' element={< LoginWthFaceBook />} />
        <Route path='/ForgotPassword' element={< ForgotPassword />} />
        <Route path='/EmailSignup' element={< EmailSignup />} />
        <Route path='/RobotSecurityPage' element={< RobotSecurityPage />} />
        <Route path='/OpenHomePage' element={< OpenHomePage />} />
        <Route path='/Likebutton' element={< Likebutton />} />
        <Route path='/Massege' element={< Massege />} />
        <Route path='/YourStory' element={< YourStory />} />
        <Route path='/Scarch' element={< Scarch />} />
        <Route path='/PlaySquare' element={< PlaySquare />} />
        <Route path='/Reels' element={< Reels />} />
        <Route path='/Profile' element={< Profile />} />
        <Route path='/NewRequest' element={< NewRequest />} />
        <Route path='/ProfileMessage' element={< ProfileMessage />} />
        <Route path='/NewRequestManage' element={< NewRequestManage />} />
        <Route path='/ChatBox' element={< ChatBox />} />
        <Route path='/EditProfile' element={< EditProfile />} />
        <Route path='/SettingAndActivity' element={< SettingAndActivity />} />
      </Routes>
    </div>
  )
}

export default App
