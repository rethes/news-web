<template>
  <div class="posts-list">

    <div class="posts-list-header-row">
      <h1 class="posts-list-heading"> List Of {{  categoryPosts.length }} Articles </h1>
      <div class="action-buttons">
        <router-link :to="`/categories/${categoryId}/posts/new`">
          <button class="action-buttons__add">
            Add Article
          </button>
        </router-link>
      </div>
    </div>

    <Post-list-content :posts=" categoryPosts" v-if=" categoryPosts.length > 0"/>
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
    };
  },
  async created() {
    this.categoryId = this.$route.params.categoryId;
    this.categoryPosts = await this.getPosts();
  },
  methods: {
    // Get the posts for the particular category
    getPosts() {
      return this.posts.filter(post => Number(post.categoryId) === Number(this.categoryId));
    },
  },
};
</script>

<style lang="scss">
  @import "../../assets/scss/components/view-post.scss";
  @import "../../assets/scss/components/action-buttons.scss";
</style>
