import React from 'react';
import {RoutePermittedRole} from '@crema/constants/AppEnums';

const User = React.lazy(() => import('../../modules/user/user'));
const Role = React.lazy(() => import('../../modules/user/role'));

export const userPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/user',
    element: <User />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/role',
    element: <Role />,
  },
];
