<template>
  <div class="posts-list">
    <div class="header-row">
      <h1 class="h1-heading"> List Of {{ posts.length }} Articles </h1>
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
      :categories="categories"
      v-if="posts.length > 0"/>
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
      bin: fixtures.articleTrash,
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
  @import "../../assets/scss/components/common/global.scss";
  @import "../../assets/scss/components/common/action-buttons";
</style>
