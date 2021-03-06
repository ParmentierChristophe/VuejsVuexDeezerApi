import Vue from 'vue';
import Router from 'vue-router';
import VueMoment from 'vue-moment';
import Home from './views/Home.vue';
import Playlist from './views/Playlist.vue';
import Album from './views/Album.vue';

Vue.use(Router);
Vue.use(VueMoment);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/playlist/:id',
      name: 'playlist',
      component: Playlist
    },
    {
      path: '/album/:id',
      name: 'album',
      component: Album
    }
  ]
});
