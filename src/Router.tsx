import SuspenseLoader from 'components/SuspenseLoader';
import BaseLayout from 'layouts/BaseLayout';
import { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Landing Page
const LandingPage = Loader(lazy(() => import('views/landingPage')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: 'introductions', element: <Navigate to="/" replace /> },
    ],
  },
];

export default routes;
