
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ProgramsPage = lazy(() => import('../pages/programs/page'));
const YouthServicesPage = lazy(() => import('../pages/youth-services/page'));
const FamilyServicesPage = lazy(() => import('../pages/family-services/page'));
const CommunityPage = lazy(() => import('../pages/community/page'));
const GetInvolvedPage = lazy(() => import('../pages/get-involved/page'));
const ResourcesPage = lazy(() => import('../pages/resources/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const GetSupportPage = lazy(() => import('../pages/get-support/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/programs',
    element: <ProgramsPage />,
  },
  {
    path: '/youth-services',
    element: <YouthServicesPage />,
  },
  {
    path: '/family-services',
    element: <FamilyServicesPage />,
  },
  {
    path: '/community',
    element: <CommunityPage />,
  },
  {
    path: '/get-involved',
    element: <GetInvolvedPage />,
  },
  {
    path: '/get-support',
    element: <GetSupportPage />,
  },
  {
    path: '/resources',
    element: <ResourcesPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
