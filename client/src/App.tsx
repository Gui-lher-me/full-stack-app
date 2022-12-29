import Login from '@auth/pages/Login';
import Signup from '@auth/pages/Signup';
import { PrivateRoute } from '@auth/PrivateRoute';
import ErrorBoundary from '@components/ErrorBoundary';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
const Home = React.lazy(() => import('@pages/Home'));

export default function App() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="login"
            element={<Login />}
          />

          <Route
            path="signup"
            element={<Signup />}
          />

          <Route
            path="/"
            element={<PrivateRoute />}
          >
            <Route
              path="home"
              element={<Home />}
            />
          </Route>

          <Route
            path="*"
            element={<div>Not Found</div>}
          />
        </Routes>
      </React.Suspense>
    </ErrorBoundary>
  );
}
