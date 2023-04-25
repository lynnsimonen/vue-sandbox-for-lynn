<template>
  <div><br>
    <TripItemList ref="tripItemList"/>
    <q-form @submit.prevent="search" class="q-flex row q-mb-sm q-pa-xs">
      <q-input
          v-model="keyword"
          type="text"
          @update:model-value="search"
          label="Search"
          placeholder="trip name or description"
          class="col"
          filled
      />
      <!--      <div class="item error" v-if="input&&!filteredList().length">-->
      <!--        <p>No results found!</p>-->
      <!--      </div>-->
    </q-form>
  </div>
</template>

<script>
import TravelEvent from "@/x-models/travel-event-model";
import TripItemList from "@/x-components/TripItemList.vue";

export default {
  name: "SearchForm",
  components: {TripItemList},
  props: {
    item: {type: TravelEvent},
    searchFunction: Function
  },
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search() {
      console.log('this.keyword: ', this.keyword)
      this.$refs.tripItemList.search(this.keyword)
    }
  },
};
</script>

<style scoped>
.search-form {
  background-color: #2c8c37;
}
</style>