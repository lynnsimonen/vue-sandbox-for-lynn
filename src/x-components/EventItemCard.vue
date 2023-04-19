<template>
  <div class="card-body">
    EVENT ITEM CARD
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
      //return item.constructor.name + 'Card';  Will fail with webpack???
      return "TripDetails"
    }
  }
}
</script>

<style lang="scss">

</style>