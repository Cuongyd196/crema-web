import React from 'react';

const Page1 = React.lazy(() => import('../../modules/home/Page1'));
const Page2 = React.lazy(() => import('../../modules/home/Page2'));

export const homePagesConfigs = [
  {
    path: '/home/index',
    element: <Page1 />,
  },
  {
    path: '/home/page-2',
    element: <Page2 />,
  },
];
