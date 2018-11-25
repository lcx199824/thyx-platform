import Vue from 'vue';

import VueRouter from 'vue-router';

import Index from '../pages/index';
import Case from '../pages/case/case';
import CaseDetail from '../pages/case/caseDetail';
import Designer from '../pages/designer/designer';
import DesignerDetail from '../pages/designer/designerDetail';
import Activities from '../pages/activities/activities';
import Review from '../pages/activities/review';
import New from '../pages/activities/new';
import ActivityDetail from '../pages/activities/activityDetail';
import Process from '../pages/process/process';
import ProcessDetail from '../pages/process/detail';
import Envmaterial from '../pages/process/envmaterial';
import StrictAccept from '../pages/process/strictAccept';
import FineSite from '../pages/process/fineSite';
import Construct from '../pages/process/construct';
import Introduce from '../pages/products/introduce';
import Advantage from '../pages/products/advantage';
import ServiceTeam from '../pages/products/serviceTeam';
import ServiceFlow from '../pages/products/serviceFlow';
import Quotation from '../pages/quotation';
import guide from '../pages/guide/guide';
import guideDetail from '../pages/guide/guideDetail';
import Prepare from '../pages/guide/prepare';
import Design from '../pages/guide/design';
import Material from '../pages/guide/material';
import Construction from '../pages/guide/construction';
import Acceptance from '../pages/guide/acceptance';
import Decoration from '../pages/guide/decoration';
import Raiders from '../pages/guide/raiders';
import Envprotect from '../pages/guide/envprotect';
import About from '../pages/about/about';
import AboutUs from '../pages/about/aboutUs';
import DevePath from '../pages/about/devePath';
import News from '../pages/about/news';
import Culture from '../pages/about/culture';
import aboutDetail from '../pages/about/aboutDetail';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/',
    routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        title: '泰和印象装修设计首页',
      },
    },
    {
      path: '/case',
      name: 'Case',
      component: Case,
      meta: {
        title: '泰和印象案例页',
      }
    },
    {
      path: '/designer',
      name: 'Designer',
      component: Designer
    },
    {
      path: '/caseDetail/:id',
      name: 'CaseDetail',
      component: CaseDetail
    },

    {
      path: '/designerDetail/:id',
      name: 'DesignerDetail',
      component: DesignerDetail
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities,
      children: [{
        path: 'review',
        name: 'Review',
        component: Review
      },

      {
        path: 'new',
        name: 'New',
        component: New
      },
      {
        path: '/activityDetail/:id',
        name: 'ActivityDetail',
        component: ActivityDetail
      },
      ]
    },

    {
      path: '/process',
      name: 'Process',
      redirect: '/process/envmaterial',
      component: Process,
      children: [{
        path: 'envmaterial',
        name: 'Envmaterial',
        component: Envmaterial,
      },
      {
        path: 'construct',
        name: 'Construct',
        component: Construct,

      },
      {
        path: 'strictAccept',
        name: 'StrictAccept',
        component: StrictAccept,

      },
      {
        path: 'fineSite',
        name: 'FineSite',
        component: FineSite,

      },
      {
        path: '/detail/:id',
        name: 'ProcessDetail',
        component: ProcessDetail,
      }
      ]
    },

    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/advantage',
      name: 'Advantage',
      component: Advantage
    },
    {
      path: '/serviceTeam',
      name: 'ServiceTeam',
      component: ServiceTeam
    },
    {
      path: '/serviceFlow',
      name: 'ServiceFlow',
      component: ServiceFlow
    },
    {
      path: '/quotation',
      name: 'Quotation',
      component: Quotation
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide,
    },
    {
      path: '/guideDetail/:id',
      name: 'guideDetail',
      component: guideDetail,
    },

    {
      path: '/about',
      name: 'About',
      component: About,
      children: [{
        path: 'aboutUs',
        name: AboutUs,
        component: AboutUs
      },
      {
        path: 'devePath',
        name: DevePath,
        component: DevePath
      },
      {
        path: 'news',
        name: News,
        component: News
      },
      {
        path: 'culture',
        name: Culture,
        component: Culture
      }]
    },
    {
      path: '/aboutDetail/:id',
      name: aboutDetail,
      component: aboutDetail
    }
    ]
  });
}

