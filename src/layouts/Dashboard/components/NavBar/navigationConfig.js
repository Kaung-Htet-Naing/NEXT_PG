/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BugReportIcon from '@material-ui/icons/BugReport';
import { Label } from 'components';

export default [
  {
    title: 'Pages',
    pages: [
      {
        title: 'Overview',
        href: '/overview',
        icon: HomeIcon
      },
      {
        title: 'App',
        href: '/admin/app',
        icon: DashboardIcon,
        children: [
          {
            title: 'App List',
            href: '/admin/app/list'
          },
          {
            title: 'App Create',
            href: '/admin/app/create'
          }
        ]
      },
      {
        title: 'Transaction Management',
        href: '/admin/transaction',
        icon: CreditCardIcon,
        children: [
          {
            title: 'Transaction List',
            href: '/admin/transaction/list'
          }
        ]
      },
      {
        title: 'With-Draw Management',
        href: '/admin/with_draw',
        icon: MonetizationOnIcon,
        children: [
          {
            title: 'With-Draw List',
            href: '/admin/withdraw/list'
          }
        ]
      },
      {
        title: 'Issue Feed',
        href: '/admin/issue-feed',
        icon: BugReportIcon,
      }
    ]
  },
  {
    title: 'Support',
    pages: [
      {
        title: 'Changelog',
        href: '/changelog',
        icon: ViewModuleIcon,
        label: () => <Label color={colors.blue['500']}>v1.2.0</Label>
      }
    ]
  }
];
