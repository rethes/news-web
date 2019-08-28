<template>
  <div id="post-container">
      <h1 class="form-title">{{ isUpdating ? 'Edit Article' : 'Create Article' }} </h1>
      <div class="create-img">
        <img src="../../../assets/images/Album-create.svg"/>
      </div>
      <div class="post-creation">
        <div class="form-content" v-if="categoryTitle">
          <h1 class="form-title"> Category: {{ categoryTitle }} </h1>
          <label for="title" class="label">Title:</label>
          <input
            class="input-fields"
            id="title"
            name="title"
            :placeholder="!isUpdating ? 'Add a title' : ''"
            :value="isUpdating ? selectedPost.title : ''"
            @change="onInputChange"
          />
          <label for="description" class="label">Description:</label>
          <textarea
            class="input-fields"
            id="description"
            name="description"
            :placeholder="!isUpdating ? 'Add a description' : ''"
            :value="isUpdating ? selectedPost.description : ''"
            @change="onInputChange"
          >
          </textarea>
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
import moment from 'moment';
import cuid from 'cuid';
// data
import fixtures from '../../../data/fixtures';

export default {
  name: 'CreatePosts',
  data() {
    return {
      posts: fixtures.posts,
      categories: fixtures.categories,
      postId: '',
      selectedPost: [],
      categoryId: '',
      categoryTitle: '',
      isUpdating: false,
    };
  },
  async created() {
    this.isUpdating = this.$router.history.current.fullPath.includes('/edit');
    this.categoryId = this.$route.params.categoryId;
    this.postId = this.$route.params.postId;
    this.categoryTitle = await this.getACategory().title;
    this.selectedPost = this.getPost();
  },
  methods: {
    onInputChange(event) {
      if (event.target.name === 'title') {
        this.title = event.target.value && event.target.value.trim();
      } else {
        this.description = event.target.value && event.target.value.trim();
      }
    },

    onSubmit() {
      if (!this.title && !this.description) {
        return;
      }

      if (this.isUpdating === false) {
        const newPost = {
          id: cuid(),
          title: this.title,
          description: this.description,
          author: {
            name: 'Sasha Hanks',
            image: 'https://res.cloudinary.com/do8ik6qe5/image/upload/v1553545763/todo-app/2019-03-25T20:29:21.742Z.jpg',
          },
          categoryId: this.categoryId,
          createdAt: moment().format(),
          updatedAt: moment().format(),
        };
        // add note
        this.posts.push(newPost);
        // reset post
        this.title = '';
        this.description = '';
        // redirect to view all posts
        this.$router.push(`/categories/${this.categoryId}/posts`);
        this.$toastr.success('News Article successfully created');
      } else {
        const editedPost = {
          id: this.selectedPost.id,
          title: this.title,
          description: this.description,
          author: {
            name: this.selectedPost.author.name,
            image: this.selectedPost.author.image,
          },
          categoryId: this.selectedPost.categoryId,
          createdAt: this.selectedPost.createdAt,
          updatedAt: moment().format(),
        };
        // ..old post index
        const index = this.posts.findIndex(post => post.id === this.postId);
        // add the new post and remove the old
        this.posts.splice(index, 1, editedPost);
        this.$router.push(`/categories/${this.categoryId}/posts`);
        this.$toastr.success('News Article successfully updated');
      }
    },

    onReset() {
      this.title = '';
      this.description = '';
      this.isUpdating = false;
      this.$router.push(`/posts/${this.postId}`);
    },

    getACategory() {
      return this.categories.find(category => category.id === this.categoryId);
    },

    getPost() {
      return this.posts.find(post => post.id === this.postId);
    },
  },
};
</script>

<!-- SASS styling -->
<style lang="scss">
  @import "../../../assets/scss/components/create-post";
</style>
