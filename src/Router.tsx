import SuspenseLoader from 'components/SuspenseLoader';
import BaseLayout from 'layouts/BaseLayout';
import Navigation from 'layouts/Navigation';
import { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Landing Page
const ProjectInsight = Loader(lazy(() => import('views/insights')));
const LandingPage = Loader(lazy(() => import('views/landingPage')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      { path: '/', element: <ProjectInsight /> },
      { path: 'aboutme', element: <Navigate to="/" replace /> },
    ],
  },
  {
    path: 'projects',
    element: <Navigation />,
    // !This is a tempory one, change it to the appropriate one later on
    children: [
      { path: '', element: <Navigate to="aboutme" replace /> },
      { path: 'aboutme', element: <LandingPage /> },
    ],
  },
];

export default routes;
