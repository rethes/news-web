<template>
  <div class="archived-list">
    <div class="header-row">
      <h1 class="h1-heading"> Trash ({{bin.length}}) </h1>
    </div>
    <div v-if="bin.length > 0" class="table">
      <div class="table-header">
        <div class="table-values">
          <h3 class="h3-headings">Trashed Article</h3>
        </div>
        <div class="table-values">
          <h3 class="h3-headings">Actions</h3>
        </div>
      </div>
      <div class="table-rows" v-for="value in bin" :key="value.id">
        <div class="table-value-right">
          <div class="posts-list-content-values">
            <div class="posts-list-content-header">
              {{ value.title }}
            </div>
            <div v-if=" value.description.length < 400">
              {{ value.description }}
            </div>
            <div v-else>
              {{ value.description.substring(0, 399) + '...' }}
            </div>
          </div>
        </div>
        <div class="table-values action-buttons">
          <button class="action-buttons__archive" @click="recover(value)">
            Reset
          </button>
          <button class="action-buttons__delete" @click="remove(value)">
            Delete
          </button>
        </div>
      </div>
    </div>
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
  @import "../../assets/scss/components/common/table.scss";
  @import "../../assets/scss/components/archived-posts.scss";
</style>
