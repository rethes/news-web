<template>
  <div class="posts-list">
    <div class="posts-list-header-row">
      <h1 class="posts-list-heading"> List Of {{ posts.length }} Articles </h1>
      <div class="action-buttons">
        <router-link :to="`/categories/${categoryId}/posts/new`">
          <button class="action-buttons__add">
            Add Article
          </button>
        </router-link>
      </div>
    </div>
    <div class="posts-list-content" v-if="posts.length > 0">
      <ul v-for="post in posts" :key="post.id">
        <router-link :to="`/posts/${post.id}`" class="posts-list-links">
         <div class="posts-list-content-items">
          <div class="create-img">
            <img src="../../assets/images/Album-create.svg"/>
          </div>
          <div class="posts-list-content-values">
            <div class="posts-list-content-header">{{ post.title }}</div>
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
            </div>
          </div>
        </div>
        </router-link>
      </ul>
    </div>
    <div v-else>
      <h3 class="posts-list-heading"> No Articles Found </h3>
    </div>

    <div class="posts-list-header-row">
      <h1 class="posts-list-heading"> Archived Articles </h1>
    </div>
    <div class="posts-list-content" v-if="bin.length > 0">
      <ul v-for="archivedPost in bin" :key="archivedPost.id">
        <div class="posts-list-content-items">
          <div class="create-img">
            <img src="../../assets/images/Album-create.svg"/>
          </div>
          <div class="posts-list-content-values">
            <div class="posts-list-content-header">{{ archivedPost.title }}</div>
            {{ archivedPost.description }}
          </div>
        </div>
      </ul>
    </div>
    <div v-else>
      <h3 class="posts-list-heading"> No Articles Found </h3>
    </div>
  </div>
</template>

<script>
// data
import fixtures from '../../data/fixtures';

export default {
  name: 'Posts',
  data() {
    return {
      posts: fixtures.posts,
      categories: fixtures.categories,
      categoryId: 1,
      bin: [],
    };
  },
};
</script>

<style lang="scss">
  @import "../../assets/scss/components/view-post.scss";
  @import "../../assets/scss/components/action-buttons.scss";
</style>
