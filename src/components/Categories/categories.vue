<template>
  <div class="categories-list">
    <div class="categories-list-header-row">
      <h1 class="categories-list-heading"> List Of Categories </h1>
      <div class="action-buttons action-buttons">
      <router-link :to="`/categories/new`">
        <button class="action-buttons__add">
          Add Category
        </button>
      </router-link>
      </div>
    </div>
    <div class="categories-table" v-if="categories.length > 0">
      <div class="categories-table-header">
        <div class="categories-table-values">
          <h3 class="h3-headings">Category Title</h3>
        </div>
        <div class="categories-table-values">
          <h3 class="h3-headings">Actions</h3>
        </div>
      </div>
      <div class="categories-table-rows" v-for="category in categories" :key="category.id">
        <div class="categories-table-values">
          <router-link :to="`/categories/${category.id}/posts`" class="categories-table-links">
            {{ category.title }}
          </router-link>
        </div>
        <div class="categories-table-values action-buttons">
          <router-link :to="`/categories/${category.id}/posts/new`">
            <button class="action-buttons__add">
              Add Posts
            </button>
          </router-link>
          <router-link :to="`/categories/${category.id}/edit`">
            <button class="action-buttons__edit"> Edit </button>
          </router-link>
          <button class="action-buttons__delete" @click="remove(category.id)">
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
  name: 'ViewCategories',
  data() {
    return {
      categories: fixtures.categories,
      posts: fixtures.posts,
      categoryId: '',
      isEditMode: false,
      remainingPosts: [],
    };
  },
  methods: {
    // function to delete data
    remove(selectedCategoryId) {
      // find all post without the index
      const childPosts = this.posts.filter(post => post.categoryId !== selectedCategoryId);

      // assign them to a new array.
      this.remainingPosts.push(childPosts);

      const index = this.categories.findIndex(category => category.id === selectedCategoryId);
      this.categories.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
  @import "../../assets/scss/components/view-category.scss";
  @import "../../assets/scss/components/action-buttons.scss";
</style>
