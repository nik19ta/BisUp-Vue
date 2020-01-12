import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import instructionsOnEmail from '@/components/instructionsOnEmail'
import prof from '@/components/prof'
import testing from '@/components/testing'
import games from '@/components/games'
import championship from '@/components/championship'
import dialogue from '@/components/dialogue'
import partner from '@/components/partner'
import user from '@/components/user'
import contact from '@/components/contact'
import invite from '@/components/invite'
import videocomponent from '@/components/videocomponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'dialogue',
      component: dialogue
    },
    {
      path: '/user/:id',
      name: 'user',
      component: user,
      props: true
    },
    {
      path: '/partner',
      name: 'partner',
      component: partner
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/invite',
      name: 'invite',
      component: invite
    },
    {
      path: '/instructionsOnEmail',
      name: 'instructionsOnEmail',
      component: instructionsOnEmail
    },
    {
      path: '/',
      name: 'prof',
      component: prof
    },
    {
      path: '/testing',
      name: 'testing',
      component: testing
    },
    {
      path: '/video',
      name: 'videocomponent',
      component: videocomponent
    },
    {
      path: '/games',
      name: 'games',
      component: games
    },
    {
      path: '/championats',
      name: 'championship',
      component: championship,
    },

  ]
})
