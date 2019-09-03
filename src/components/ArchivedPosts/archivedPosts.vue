<template>
  <div class="archived-list">
    <div class="header-row">
      <h1 class="h1-heading"> Trash List ({{bin.length}}) </h1>
    </div>
    <ul v-if="bin.length > 0">
      <li v-for="value in bin" :key="value.id" >
        <div class="posts-list-content-items">
          <div class="create-img">
            <img src="../../assets/images/Album-create.svg"/>
          </div>
          <div class="posts-list-content-values">
            <div class="posts-list-content-header">
              {{ value.title }}
            </div>
            <div class="posts-list-content-description">
              <div v-if=" value.description.length < 500">
                {{ value.description }}
              </div>
              <div v-else>
                {{ value.description.substring(0, 499) + '...' }}
              </div>
            </div>
            <div class="action-buttons" style="padding: 10px;">
              <button class="action-buttons__archive" @click="recover(value)">
                Reset
              </button>
              <button class="action-buttons__delete" @click="remove(value)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div v-else>
      <h3 class="h3-heading"> No Articles Found </h3>
    </div>
  </div>
</template>

<script>
// data
import fixtures from '../../data/fixtures';

export default {
  name: 'archivedPosts',
  data() {
    return {
      bin: fixtures.articleTrash,
      posts: fixtures.posts,
    };
  },
  methods: {
    // function to delete data from the bin
    remove(selectedPost) {
      const index = this.bin.findIndex(post => post.id === selectedPost.id);
      this.bin.splice(index, 1);
      this.$router.push('/trash');
      this.$toastr.success('deleted successfully', `${selectedPost.title}`);
    },
    // function to recover data
    recover(selectedPost) {
      // find the post index in the bin
      const index = this.bin.findIndex(post => post.id === selectedPost.id);
      const recoverPost = this.bin[index];
      // push into the posts
      this.posts.push(recoverPost);
      // remove posts from bin
      this.bin.splice(index, 1);
      this.$router.push('/posts');
      this.$toastr.success('recovered successfully', `${selectedPost.title}`);
    },
  },
};
</script>

<style lang="scss">
  @import "../../assets/scss/components/common/action-buttons";
  @import "../../assets/scss/components/common/global.scss";
  @import "../../assets/scss/components/view-post.scss";
  @import "../../assets/scss/components/archived-posts.scss";
</style>
