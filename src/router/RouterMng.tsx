import { FC } from "react";
import { Route, Routes } from 'react-router-dom'

import { Home } from '../components/pages/Home'
import { ProfileManagement } from '../components/pages/ProfileManagement'
import { Page404 } from '../components/pages/Page404'
import { Login } from "../components/pages/Login";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { ProfileProvider } from "../providers/ProfileProvider";
import { Setting } from "../components/pages/Setting";



export const RouterMng: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HeaderLayout><Home /></HeaderLayout>}></Route>
            <Route path="home" element={<HeaderLayout><Home /></HeaderLayout>}></Route>
            <Route path="profile_management/*" element={<ProfileProvider><HeaderLayout><ProfileManagement /></HeaderLayout></ProfileProvider>}></Route>
            <Route path="setting" element={<HeaderLayout><Setting /></HeaderLayout>}></Route>
            <Route path="*" element={<HeaderLayout>< Page404 /></HeaderLayout>}></Route>

        </Routes>
    )
}