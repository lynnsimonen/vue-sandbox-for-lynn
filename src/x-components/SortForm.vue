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
  data(){
    let sortOptions = [
      {label: 'Title', value: 'title'},
      {label: 'Date', value: 'returnDate'},
    ];
    return {
      sortOptions,
      sortValue: sortOptions[0],
    }
  },
  methods: {
    // sort() {
    //   console.log('dropdown updated: ', this.sortValue.value);
    //   console.log('this.sortValue: ', this.sortValue);
    //   this.sortFunction(this.sortValue.value)
    // },
    //itemToBeSorted: undefined,
    // sort(property) {
    //   if (property === 'item.title') {
    //     const itemToBeSorted = [];
    //     this.itemToBeSorted.sort((a, b) => {
    //       if (a.title.toLowerCase() < b.title.toLowerCase()) {
    //         return -1;
    //       } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
    //         return 1;
    //       }
    //       console.log('sorting by', property);
    //       return 0;
    //     })
    //   } else if (property === 'item.returnDate') {
    //     this.itemToBeSorted.sort((a, b) => {
    //       console.log('sorting by', property);
    //       return new Date(a.item.returnDate) - new Date(b.item.returnDate);
    //     })
    //   }
    // },
  },
}
</script>

<style lang="scss">

</style>