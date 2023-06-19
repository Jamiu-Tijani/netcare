import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout, { PatientDashboardLayout } from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import SignUpPage from './pages/SignUpPage';
import EmailReset from './pages/EmailReset';
import OTP from './pages/OTP';
import VerifyEmail from './pages/VerifyEmail';
import Homepage from './pages/Homepage';
import PatientDashboard from './pages/PatientDashboard';
import PatientProfile from './pages/PatientProfile';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Homepage />,
      index: true,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
       {
      path: '/patientdashboard',
      element: <PatientDashboardLayout />,
      children: [
        { element: <Navigate to="/patientdashboard/app" />, index: true },
        { path: 'app', element: <PatientDashboard /> },
        { path: 'user', element: <UserPage /> },
        { path: 'profile', element: <PatientProfile /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignUpPage />,
    },
    {
      path: 'emailreset',
      element: <EmailReset />,
    },
    {
      path: 'otp',
      element: <OTP />,
    },
    {
      path: 'verifyemail',
      element: <VerifyEmail />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
