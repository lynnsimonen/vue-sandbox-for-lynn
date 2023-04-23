<template>
  <div><br>
    <q-form @submit.prevent="search" class="q-flex row q-mb-sm q-pa-xs">
      <q-input
          v-model="keyword"
          label="Search"
          placeholder="trip name or description"
          class="col"
          filled
      />
    </q-form>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  props: {
    searchFunction: Function
  },
  methods: {
    search(){
      this.searchFunction(this.keyword)
    }
  }
}
</script>

<style scoped>
.search-form {
  background-color: #2c8c37;
}
</style>