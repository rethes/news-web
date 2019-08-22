<template>
  <div id="category-container">
    <h1 class="form-title">{{ isUpdating ? 'Edit A Category' : 'Create A Category' }}</h1>
    <div class="create-img">
      <img src="../../../assets/images/Album-create.svg"/>
    </div>
    <div class="category-creation">
      <div class="form-content">
        <label for="title" class="label">Title:</label>
        <input
          class="input-fields"
          id="title"
          name="title"
          :placeholder="!isUpdating ? 'Add a title' : ''"
          :value="isUpdating ? title : ''"
          @change="onInputChange"
        />
        <div class="submit-clear-btn">
          <button @click="onSubmit" class="create-btn">
            {{ isUpdating ? 'Update' : 'Create' }}
          </button>
          <button @click="onReset" class="cancel-btn" >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// third-party libraries
import * as moment from 'moment';
import cuid from 'cuid';
// data
import fixtures from '../../../data/fixtures';

export default {
  name: 'CreateCategories',
  data() {
    return {
      categories: fixtures.categories,
      title: '',
      categoryId: '',
      isUpdating: false,
    };
  },
  async created() {
    this.isUpdating = this.$router.history.current.fullPath.includes('/edit');
    this.categoryId = this.$route.params.id;

    if (this.isUpdating === true) {
      this.title = await this.selectedCategory();
    }
  },
  methods: {
    onInputChange(event) {
      this.title = event.target.value && event.target.value.trim();
    },

    onSubmit() {
      if (!this.title) {
        return;
      }

      if (this.isUpdating === false) {
        const newCategory = {
          id: cuid(),
          title: this.title,
          createdAt: moment().format(),
          updatedAt: moment().format(),
        };

        this.categories.push(newCategory);
        this.title = '';
        this.$router.push('/categories');
      } else {
        const editedCategory = {
          id: this.categoryId,
          title: this.title,
          createdAt: moment().format(),
          updatedAt: moment().format(),
        };

        // ..old category index
        const index = this.categories.findIndex(category => category.id === this.categoryId);
        // add the new category and remove the old
        this.categories.splice(index, 1, editedCategory);
        this.$router.push('/categories');
      }
    },

    async selectedCategory() {
      const getACategory = await this.categories.find(
        category => category.id === this.categoryId,
      );
      return getACategory && getACategory.title;
    },

    onReset() {
      this.title = '';
      this.isUpdating = false;
      this.$router.push('/categories');
    },
  },
};
</script>

<!-- SASS styling -->
<style lang="scss">
  @import "../../../assets/scss/components/create-category";
</style>
