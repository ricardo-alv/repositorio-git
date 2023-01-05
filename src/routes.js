import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Main from './pages/Main';
import Repostorio from './pages/Repositorio';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/repositorio/:repositorio' element={<Repostorio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;