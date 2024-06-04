import React from 'react';
import {Navigate} from 'react-router-dom';

import {authRouteConfig} from './AuthRoutes';
import Error403 from '../../modules/errorPages/Error403';
import {errorPagesConfigs} from './ErrorPagesRoutes';
import {accountPagesConfigs} from './AccountRoutes';
import {samplePagesConfigs} from './SampleRoutes';
import {homePagesConfigs} from './HomeRoutes';
import {userPagesConfigs} from './UserRoutes';
/* eslint-disable prettier/prettier */

export const authorizedStructure = (loginUrl) => {
  return {
    fallbackPath: loginUrl,
    unAuthorizedComponent: <Error403 />,
    routes: [...samplePagesConfigs,...accountPagesConfigs,...homePagesConfigs,...userPagesConfigs],
  };
};

export const unAuthorizedStructure = (initialUrl) => {
  return {
    fallbackPath: initialUrl,
    routes: [...authRouteConfig],
  };
};

export const anonymousStructure = (initialUrl) => {
  return {
    routes: errorPagesConfigs.concat([
      {
        path: '/',
        element: <Navigate to={initialUrl} />,
      },
      {
        path: '*',
        element: <Navigate to='/error-pages/error-404' />,
      },
    ]),
  };
};
