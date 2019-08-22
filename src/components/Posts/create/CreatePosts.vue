<template>
  <div id="post-container">
      <h1 class="form-title">{{ isUpdating ? 'Edit Article' : 'Create Article' }} </h1>
      <div class="create-img">
        <img src="../../../assets/images/Album-create.svg"/>
      </div>
      <div class="post-creation">
        <div class="form-content">
          <h1 class="form-title"> Category: {{ categoryTitle }} </h1>
          <label for="title" class="label">Title:</label>
          <input
            class="input-fields"
            id="title"
            name="title"
            :placeholder="!isUpdating ? 'Add a title' : ''"
            :value="isUpdating ? title : ''"
            @change="onInputChange"
          />
          <label for="description" class="label">Description:</label>
          <textarea
            class="input-fields"
            id="description"
            name="description"
            :placeholder="!isUpdating ? 'Add a description' : ''"
            :value="isUpdating ? description : ''"
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
      title: '',
      description: '',
      categoryId: '',
      categoryTitle: 'General News',
      isUpdating: false,
    };
  },
  async created() {
    this.isUpdating = this.$router.history.current.fullPath.includes('/edit');
    this.categoryId = this.$route.params.categoryId;
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
          author: {
            name: 'Sasha Hanks',
            image: 'https://res.cloudinary.com/do8ik6qe5/image/upload/v1553545763/todo-app/2019-03-25T20:29:21.742Z.jpg',
          },
          description: this.description,
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
        this.$router.push('/posts');
      } else {
        const editedPost = {
          id: this.postId,
          categoryId: this.categoryId,
          title: this.title,
          description: this.description,
          createdAt: moment().format(),
          updatedAt: moment().format(),
        };

        // ..old post index
        const index = this.posts.findIndex(post => post.id === this.postId);
        // add the new post and remove the old
        this.post.splice(index, 1, editedPost);
        this.$router.push('/posts');
      }
    },

    onReset() {
      this.title = '';
      this.description = '';
      this.isUpdating = false;
      this.$router.push('/posts');
    },
  },
};
</script>

<!-- SASS styling -->
<style lang="scss">
  @import "../../../assets/scss/components/create-post";
</style>
