import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    // categories
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/CategoryList.vue'),
    },
    {
      path: '/categories/new',
      name: 'createCategories',
      component: () => import('../views/CreateCategory.vue'),
    },
    {
      path: '/categories/:id/edit',
      name: 'editCategories',
      component: () => import('../views/CreateCategory.vue'),
    },
    // posts
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostList.vue'),
    },
    {
      path: '/categories/:categoryId/posts',
      name: 'categoryPosts',
      component: () => import('../views/CategoryPosts.vue'),
    },
    {
      path: '/categories/:categoryId/posts/new',
      name: 'createPosts',
      component: () => import('../views/CreatePost.vue'),
    },
    {
      path: '/categories/:categoryId/posts/:postId/edit',
      name: 'editPosts',
      component: () => import('../views/CreatePost.vue'),
    },
    {
      path: '/posts/:postId',
      name: 'postView',
      component: () => import('../views/PostView.vue'),
    },
  ],
});
