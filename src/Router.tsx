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

// Portfolio Insights
const ProjectInsight = Loader(lazy(() => import('views/Insights')));
const LandingPage = Loader(lazy(() => import('views/LandingPage')));

// Error Views
const PageNotFound = Loader(
  lazy(() => import('components/Errors/PageNotFound')),
);
const InternalServerError = Loader(
  lazy(() => import('components/Errors/InternalServerError')),
);
const ComingSoon = Loader(lazy(() => import('components/Errors/ComingSoon')));
const UnderMaintenance = Loader(
  lazy(() => import('components/Errors/UnderMaintenance')),
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      { path: '/', element: <ProjectInsight /> },
      { path: 'aboutme', element: <Navigate to="/" replace /> },
      {
        path: 'error',
        children: [
          { path: '', element: <Navigate to="404" replace /> },
          { path: '404', element: <PageNotFound /> },
          { path: '500', element: <InternalServerError /> },
          { path: 'under-maintenance', element: <ComingSoon /> },
          { path: 'coming-soon', element: <UnderMaintenance /> },
        ],
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    path: 'portfolio',
    element: <Navigation />,
    children: [
      { path: '', element: <Navigate to="aboutme" replace /> },
      { path: 'aboutme', element: <LandingPage /> },
      { path: 'dogbreeds', element: <UnderMaintenance /> },
      { path: 'catbreeds', element: <UnderMaintenance /> },
    ],
  },
];

export default routes;
