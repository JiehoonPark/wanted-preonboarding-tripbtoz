import React from 'react';
import { Route, Routes } from 'react-router';

import Layout from '@components/layout/Layout';
import Search from '@pages/Search';
import Detail from '@pages/Search';
import MyPage from '@pages/Search';

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/my_page" element={<MyPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
