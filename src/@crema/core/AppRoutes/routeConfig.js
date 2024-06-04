import React from 'react';
import {BiAlignLeft} from 'react-icons/bi';
/* eslint-disable prettier/prettier */

const routesConfig = [
  {
    id: 'home',
    title: 'Trang chủ',
    messageId: 'sidebar.home',
    type: 'item',
    icon: <BiAlignLeft />,
    path: '/home/index',
  }
  // {
  //   id: 'app',
  //   title: 'Sample',
  //   messageId: 'sidebar.sample',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'page-1',
  //       title: 'Page 1',
  //       messageId: 'sidebar.sample.page1',
  //       type: 'item',
  //       icon: <BiAlignLeft />,
  //       path: '/sample/page-1',
  //     },
  //     {
  //       id: 'page-2',
  //       title: 'Page 2',
  //       messageId: 'sidebar.sample.page2',
  //       type: 'item',
  //       icon: <BiAlignLeft />,
  //       path: '/sample/page-2',
  //     },
  //   ],
  // },
];
export default routesConfig;
