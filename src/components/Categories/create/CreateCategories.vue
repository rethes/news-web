<template>
  <div class="category-container">
    <h1 class="form-title">{{ isUpdating ? 'Edit A Category' : 'Create A Category' }}</h1>
    <div class="create-img">
      <img src="../../../assets/images/Album-create.svg"/>
    </div>
    <div class="form-creation" v-if="selectedCategory">
      <div class="form-content">
        <label for="title" class="label">Title:</label>
        <input
          class="input-fields"
          id="title"
          name="title"
          :placeholder="!isUpdating ? 'Add a title' : ''"
          :value="isUpdating ? selectedCategory.title : ''"
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
      selectedCategory: [],
      categoryId: '',
      isUpdating: false,
    };
  },
  async created() {
    this.isUpdating = this.$router.history.current.fullPath.includes('/edit');
    this.categoryId = this.$route.params.id;

    if (this.isUpdating === true) {
      this.selectedCategory = await this.getACategory();
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
        this.$router.push('/categories');
        this.$toastr.success('created successfully', `${this.title}`);
        this.title = '';
      } else {
        const editedCategory = {
          id: this.selectedCategory.id,
          title: this.title,
          createdAt: this.selectedCategory.createdAt,
          updatedAt: moment().format(),
        };
        // ..old category index
        const index = this.categories.findIndex(
          category => category.id === this.categoryId,
        );
        // add the new category and remove the old
        this.categories.splice(index, 1, editedCategory);
        this.$router.push('/categories');
        this.$toastr.success('Category successfully updated');
      }
    },

    onReset() {
      this.title = '';
      this.isUpdating = false;
      this.$router.push('/categories');
    },

    getACategory() {
      return this.categories.find(category => category.id === this.categoryId);
    },
  },
};
</script>

<!-- SASS styling -->
<style lang="scss">
  @import "../../../assets/scss/components/create-category";
  @import "../../../assets/scss/components/common/action-buttons";
  @import "../../../assets/scss/components/common/form-creation";
</style>
