<template>
  <div id="post-view-container">
    <div class="post-container-header-row">
      <div class="post-container-action-buttons action-buttons">
        <router-link :to="`/categories/1/posts/new`">
          <button class="action-buttons__add">
            New Article
          </button>
        </router-link>
        <router-link :to="`/categories/${categoryId}/posts/${postId}/edit`">
          <button class="action-buttons__edit"> Edit </button>
        </router-link>
        <button @click="archive(selectedPost)" class="action-buttons__archive">
          Archive
        </button>
        <button @click="remove(selectedPost)" class="action-buttons__delete">
          Delete
        </button>
      </div>
    </div>
    <div class="post-container-grid">
      <div class="post-container-grid-main" v-if="selectedPost && selectedPost.author">
        <header class="post-article-header">
          <div class="post-article-breadcrumbs">
            <router-link class="posts-list-links" :to="`/categories/${categoryId}/posts`">
              {{ categoryTitle }}
            </router-link>
          </div>
          <h1 class="posts-article-heading"> {{ selectedPost.title }} </h1>
          <div class="post-article-author">
            <img class="post-article-author__user-img" :src="selectedPost.author.image"/>
            <div class="post-article-author-info">
              <span class="post-article-author-info__user-name">
                  {{ selectedPost.author.name }}
              </span>
              <span class="post-article-author-info__user-role">
                BuzzFeed News Reporter
              </span>
            </div>
          </div>
          <div class="post-article-header__timestamps">
            <p class="post-article-header__timestamps-posted">
              Posted on {{ postTimestamp( selectedPost.createdAt) }}
            </p>
          </div>
          <div class="posts-article-share-buttons share-buttons">
            <router-link :to="`/categories`">
              <button class="share-buttons__copy"> Copy</button>
            </router-link>
            <router-link :to="`/categories`">
              <button class="share-buttons__twitter"> Tweet</button>
            </router-link>
          </div>
        </header>
        <div class="post-article-divider"></div>
        <div class="post-article-content">
          <p class="post-article-content__body">
            {{ selectedPost.description }}
          </p>
        </div>
      </div>
      <div class="post-container-grid-main" v-else>
        <h1 class="posts-article-heading"></h1>
        Article Not Found
      </div>
    </div>
  </div>
</template>

<script>
// third party libraries
import moment from 'moment';
// data
import fixtures from '../../data/fixtures';

export default {
  name: 'PostView',
  data() {
    return {
      posts: fixtures.posts,
      categories: fixtures.categories,
      selectedPost: [],
      postId: '',
      categoryId: '',
      categoryTitle: '',
      bin: [],
    };
  },
  async created() {
    this.postId = this.$route.params.postId;
    this.selectedPost = await this.getPost();
    this.categoryId = await this.getPost().categoryId;
    this.categoryTitle = await this.getCategory().title;
  },
  methods: {
    // Get the post
    getPost() {
      return this.posts.find(post => post.id === this.postId);
    },
    // Get category
    getCategory() {
      return this.categories.find(category => category.id === this.categoryId);
    },
    // return custom date format
    postTimestamp: postTime => moment(postTime).format('LLL Z'),
    // function to delete data
    remove(selectedPost) {
      const index = this.posts.findIndex(post => post.id === selectedPost.id);
      this.posts.splice(index, 1);
      this.$router.go(-1);
      this.$toastr.success('deleted successfully', `${selectedPost.title}`);
    },
    // function to send data to bin
    archive(selectedPost) {
      const index = this.posts.findIndex(post => post.id === selectedPost.id);
      const archivePost = this.posts[index];

      this.bin.push(archivePost);
      this.posts.splice(index, 1);
      this.$router.push('/posts');
      this.$toastr.success('archived successfully', `${selectedPost.title}`);
    },
  },
};
</script>

<!-- SASS styling -->
<style lang="scss">
  @import "../../assets/scss/components/post-content.scss";
  @import "../../assets/scss/components/action-buttons.scss";
</style>
