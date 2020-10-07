/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from '../layouts/Auth';
import ErrorLayout from '../layouts/Error';
import DashboardLayout from '../layouts/Dashboard';
import OverviewView from '../views/Overview';
import HomeLayout from '../layouts/Home';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomeLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => lazy(() => import('../layouts/Home'))
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('../views/Login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('../views/Register'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('../views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('../views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('../views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '/admin',
    component: DashboardLayout,
    routes: [
      {
        path: '/admin',
        exact: true,
        component: OverviewView
      },
      {
        path: '/admin/app/list',
        exact: true,
        component: lazy(() => import('../views/admin/app/applist/applist'))
      },
      {
        path: '/admin/app/create',
        exact: true,
        component: lazy(() => import('../views/admin/app/appcreate'))
      },
      {
        path: '/admin/app/:app_id/detail',
        exact: true,
        component: lazy(() => import('../views/admin/app/appdetail/appdetail'))
      },
      {
        path: '/admin/app/:app_id/update',
        exact: true,
        component: lazy(() => import('../views/admin/app/appedit/appedit'))
      },
      {
        path: '/admin/transaction/list',
        exact: true,
        component: lazy(() => import('../views/admin/transactions/transactionslist/transactionslist'))
      },
      {
        path: '/admin/transaction/:invoice_no/detail',
        exact: true,
        component: lazy(() => import('../views/admin/transactions/transactionsdetail/transationsdetail'))
      },
      {
        path: '/admin/withdraw/list',
        exact: true,
        component: lazy(() => import('../views/admin/withdraw/withdrawlist/withdrawlist'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
