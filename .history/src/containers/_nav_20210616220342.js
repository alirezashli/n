import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'داشبورد',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  }, 
  {
    _tag: 'CSidebarNavItem',
    name: 'نمودار',
    to: '/charts',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'نمودار',
    to: '/charts',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'کاربران',
  //   route: '/base',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'مشاهده همه',
  //       to: '/base/jobs',
  //     },
  //   ],
  // },
  //   {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'دسته بندی ها',
  //   route: '/base',
  //   icon: 'cil-playlist-add',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'مشاهده همه',
  //       to: '/base/categories',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'ثبت دسته جدید',
  //       to: '/base/insert-category',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'خدمات',
  //   route: '/buttons',
  //   icon: 'cil-cursor',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'مشاهده همه',
  //       to: '/base/services',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'ثبت خدمت جدید',
  //       to: '/base/insert-service',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'سرویس ها',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'مشاهده همه',
  //       to: '/base/facilities',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'ثبت سرویس جدید',
  //       to: '/base/insert-facilitie',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'نظرات',
  //   route: '/base/comments',
  //   icon: 'cil-bell',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'مشاهده نظرات',
  //       to: '/base/comments',
  //     },
  //   ]
  // },
]

export default _nav