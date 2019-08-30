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

    <Post-list-content
      :posts="posts"
      :categoryTitle="categoryTitle"
      v-if="posts.length > 0"/>
    <div v-else>
      <h3 class="posts-list-heading"> No Articles Found </h3>
    </div>

    <div class="posts-list-header-row">
      <h1 class="posts-list-heading"> Archived Articles </h1>
    </div>
    <div class="posts-list-content" v-if="bin.length > 0">
      <ul v-for="archivedPost in bin" :key="archivedPost.id">
        <li class="posts-list-content-items">
          <div class="create-img">
            <img src="../../assets/images/Album-create.svg"/>
          </div>
          <div class="posts-list-content-values">
            <div class="posts-list-content-header">{{ archivedPost.title }}</div>
            {{ archivedPost.description }}
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <h3 class="posts-list-heading"> No Articles Found </h3>
    </div>
  </div>
</template>

<script>
import PostListContent from '../common/postListContent.vue';
// data
import fixtures from '../../data/fixtures';

export default {
  name: 'Posts',
  components: {
    PostListContent,
  },
  data() {
    return {
      posts: [],
      categories: fixtures.categories,
      categoryId: 1,
      categoryTitle: 'Category Title',
      bin: [],
    };
  },
  async created() {
    this.posts = fixtures.posts.sort(
      (a, b) => (new Date(a.updatedAt) < new Date(b.updatedAt) ? 1 : -1),
    );
  },

};
</script>

<style lang="scss">
  @import "../../assets/scss/components/view-post.scss";
  @import "../../assets/scss/components/common/action-buttons";
</style>
