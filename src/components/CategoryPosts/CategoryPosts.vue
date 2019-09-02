<template>
  <div class="posts-list">
    <div class="header-row">
      <h1 class="h1-heading"> {{categoryTitle}} ({{categoryPosts.length}}) </h1>
      <div class="action-buttons">
        <router-link :to="`/categories/${categoryId}/posts/new`">
          <button class="action-buttons__add">
            Add Article
          </button>
        </router-link>
      </div>
    </div>
    <Post-list-content
      :posts="categoryPosts"
      :categories="null"
      v-if=" categoryPosts.length > 0"/>
    <div v-else>
      <h3 class="h3-heading"> No Articles Found </h3>
    </div>
  </div>
</template>

<script>
import PostListContent from '../common/postListContent.vue';
// data
import fixtures from '../../data/fixtures';

export default {
  name: 'categoryPosts',
  components: {
    PostListContent,
  },
  data() {
    return {
      posts: fixtures.posts,
      categories: fixtures.categories,
      categoryId: '',
      categoryPosts: [],
      categoryTitle: '',
    };
  },
  async created() {
    this.categoryId = this.$route.params.categoryId;
    this.categoryPosts = await this.getPosts();
    this.categoryTitle = this.getACategory().title;
  },
  methods: {
    // Get the posts for the particular category
    getPosts() {
      const categoryPosts = this.posts.filter(
        post => post.categoryId === this.categoryId,
      );
      return categoryPosts.sort(
        (a, b) => (new Date(a.updatedAt) < new Date(b.updatedAt) ? 1 : -1),
      );
    },

    getACategory() {
      return this.categories.find(category => category.id === this.categoryId);
    },
  },
};
</script>

<style lang="scss">
  @import "../../assets/scss/components/common/global.scss";
  @import "../../assets/scss/components/view-post.scss";
  @import "../../assets/scss/components/common/action-buttons";
</style>
