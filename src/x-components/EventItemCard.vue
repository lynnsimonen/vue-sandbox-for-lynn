<template>
  <div class="card-body">
    <component :is="itemCardComponent()" :item="item"/>
  </div>
</template>

<script>
import TripDetails from "@/x-components/TripDetails.vue";
console.log("EVENT ITEM CARD");

export default {
  name: "EventItemCard",
  components: {TripDetails},
  props: {
    item: {type: Object}
  },
  methods: {
    itemCardComponent(){
      console.log('EVENT ITEM CARD');
      //return item.constructor.name + 'Card';  Will fail with webpack???
      return "TripDetails"
    }
  }
}
</script>

<style lang="scss">

</style>