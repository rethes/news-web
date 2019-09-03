import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    // categories
    {
      path: '/',
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
    {
      path: '/trash',
      name: 'trashPosts',
      component: () => import('../views/ArchivedPosts.vue'),
    },
  ],
});
