<template>
  <div class="posts-list-content">
    <ul v-for="post in posts" :key="post.id">
      <router-link :to="`/posts/${post.id}`" class="posts-list-links">
        <div class="posts-list-content-items">
          <div class="create-img">
            <img src="../../assets/images/Album-create.svg"/>
          </div>
          <div class="posts-list-content-values">
            <div v-for="category in categories" :key="category.id">
              <div v-if="category.id === post.categoryId" class="posts-list-content-values__title">
                {{category.title}}
              </div>
            </div>
            <div class="posts-list-content-header">
              {{ post.title }}
            </div>
            <div class="posts-list-content-description">
              {{ post.description }}
            </div>
            <div class="posts-list-content-author">
              <div class="user-img">
                <img :src="post.author.image" />
              </div>
              <span class="user-name">
                {{ post.author.name }}
              </span>
              <span class="article-timestamps" >
              . {{ postTimestamp( post.updatedAt) }}
              </span>
            </div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// third party libraries
import moment from 'moment';

export default {
  props: { posts: Array, categories: Array },
  methods: {
    // return custom date format
    postTimestamp: postTime => moment(postTime).fromNow(),
  },
};
</script>

<style lang="scss">
  @import "../../assets/scss/components/view-post.scss";
</style>
