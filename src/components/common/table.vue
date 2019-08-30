<template>
  <div class="table">
    <div class="table-header">
      <div class="table-values">
        <h3 class="h3-headings">{{tableHeaders.title}}</h3>
      </div>
      <div class="table-values">
        <h3 class="h3-headings">Actions</h3>
      </div>
    </div>
    <div class="table-rows" v-for="value in tableValues" :key="value.id">
      <div class="table-values">
      </div>
      <div class="table-values action-buttons">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableValues: Array,
    tableHeaders: Object,
  },
  methods: {},
};
</script>

<style lang="scss">
  @import "../../assets/scss/components/common/table.scss";
</style>
