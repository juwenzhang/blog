import { type RouteObject, Navigate } from 'react-router-dom';
import React, { lazy, type LazyExoticComponent } from 'react';

const HomePage: LazyExoticComponent<React.FC> = 
  lazy(() => import('@/pages/HomePage/HomePage'));
const WritePage: LazyExoticComponent<React.FC> = 
  lazy(() => import('@/pages/WritePage/WritePage'));
const LoginPage: LazyExoticComponent<React.FC> = 
  lazy(() => import('@/pages/LoginPage/LoginPage'));
const SignupPage: LazyExoticComponent<React.FC> = 
  lazy(() => import('@/pages/SignupPage/SignupPage'));
const CategoriesPage: LazyExoticComponent<React.FC> = 
  lazy(() => import('@/pages/CategoriesPage/CategoriesPage'));
const BlogDetailPage: LazyExoticComponent<React.FC> = 
  lazy(() => import('@/pages/BlogDetailPage/BlogDetailPage'));
const NotFoundPage: LazyExoticComponent<React.FC> = 
  lazy(() => import('@/pages/NotFound/NotFoundPage'));
const ErrorPage: LazyExoticComponent<React.FC> = 
  lazy(() => import('@/pages/ErrorPage/ErrorPage'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/write',
    element: <WritePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/categories',
    element: <CategoriesPage />,
  },
  {
    path: '/blog/:id',
    element: <BlogDetailPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
    children: [
      {
        path: '/error/401',
        element: <ErrorPage />,
      },
      {
        path: '/error/403',
        element: <ErrorPage />,
      },
      {
        path: '/error/404',
        element: <ErrorPage />,
      },
      {
        path: '/error/413',
        element: <ErrorPage />,
      },
      {
        path: '/error/500',
        element: <ErrorPage />,
      },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
