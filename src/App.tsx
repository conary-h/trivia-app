import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'features/Home';
import Layout from 'components/Layout';
import Spinner from 'components/Spinner';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
