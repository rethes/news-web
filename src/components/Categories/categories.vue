<template>
  <div class="categories-list">
    <div class="categories-list-header-row">
      <h1 class="categories-list-heading"> Categories List ({{categories.length}}) </h1>
      <div class="action-buttons action-buttons">
        <router-link :to="`/categories/new`">
          <button class="action-buttons__add">
            Add Category
          </button>
        </router-link>
      </div>
    </div>
    <div class="table" v-if="categories.length > 0">
      <div class="table-header">
        <div class="table-values">
          <h3 class="h3-headings">Category Title</h3>
        </div>
        <div class="table-values">
          <h3 class="h3-headings">Actions</h3>
        </div>
      </div>
      <div class="table-rows" v-for="category in categories" :key="category.id">
        <div class="table-values">
          <router-link :to="`/categories/${category.id}/posts`" class="table-links">
            {{ category.title }}
          </router-link>
        </div>
        <div class="table-values action-buttons">
          <router-link :to="`/categories/${category.id}/posts/new`">
            <button class="action-buttons__add">
              Add Posts
            </button>
          </router-link>
          <router-link :to="`/categories/${category.id}/edit`">
            <button class="action-buttons__edit"> Edit</button>
          </router-link>
          <button class="action-buttons__delete" @click="remove(category)">
            Delete
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="categories-list-heading"> No Categories Found </h3>
    </div>
  </div>
</template>

<script>
// data
import fixtures from '../../data/fixtures';

export default {
  name: 'Categories',
  data() {
    return {
      posts: fixtures.posts,
      isEditMode: false,
      categoryId: '',
      categories: [],
      remainingPosts: [],
    };
  },
  async created() {
    this.categories = fixtures.categories.sort(
      (a, b) => (new Date(a.updatedAt) < new Date(b.updatedAt) ? 1 : -1),
    );
  },
  methods: {
    // function to delete data
    remove(selectedCategory) {
      // find all category post with the index
      const childPosts = this.posts.filter(
        post => post.categoryId === selectedCategory.id,
      );
      this.remainingPosts.push(childPosts);

      const index = this.categories.findIndex(category => category.id === selectedCategory.id);
      this.categories.splice(index, 1);
      this.$toastr.success('deleted successfully', `${selectedCategory.title}`);
    },
  },
};
</script>

<style lang="scss">
  @import "../../assets/scss/components/common/action-buttons";
  @import "../../assets/scss/components/common/table.scss";
  @import "../../assets/scss/components/common/global.scss";
  @import "../../assets/scss/components/view-category.scss";
</style>
