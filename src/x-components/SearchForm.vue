<template>
  <div><br>
    <q-form class="q-flex row q-mb-sm q-pa-xs">
      <q-input
          v-model="keyword"
          placeholder="event name or "
          label="Search"
          class="col sort-form"
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

</style>