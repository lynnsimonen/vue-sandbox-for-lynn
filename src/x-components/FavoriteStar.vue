<template>
  <div>
    FAVORITE STAR
      <q-btn
          flat
          icon="star_border"
          v-on:click="item.regularStar()"
      ></q-btn>

  </div>
</template>

<script>
import {EventTrip} from "@/x-models/trip-model";

export default {
  name: "FavoriteStar",
  props: {
    item: {type: EventTrip}
  },
}
</script>

<style lang="scss">

</style>