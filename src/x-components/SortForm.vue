<template>
  <div><br>
    <q-form class="q-flex row q-mb-sm q-pa-xs">
      <q-select
          v-model="sortValue"
          :options="sortOptions"
         @update:model-value="sort"
          label="  Sort By"
          class="col sort-form"
      />
    </q-form>
  </div>
</template>

<script>
import TravelEvent from "@/x-models/travel-event-model";

console.log("SORT FORM\n");
export default {
  name: "SortForm",
  props: {
    item: {type: TravelEvent},
    sortFunction: Function
  },
  data() {
    let sortOptions = [
      {label: 'Title', value: 'title'},
      {label: 'Date', value: 'returnDate'},
      {label: 'Favorites', value: 'favorite'},
    ];
    return {
      sortOptions,
      sortValue: sortOptions[0],
    }
  },
  methods: {
    sort() {
      console.log('dropdown updated:', this.sortValue.value);
      this.sortFunction(this.sortValue.value)
    },
  }
}
</script>

<style lang="scss">

</style>