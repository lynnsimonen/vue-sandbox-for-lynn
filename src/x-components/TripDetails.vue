<template>

  <q-expansion-item class="trip-line-item"
                    expand-separator
                    switch-toggle-side
  >
    <template v-slot:header>
      <q-item-section side>
        <!-- put a star here if the favorite input star is checked -->
        <q-icon
            v-bind:class="isFavorite === item.favorite ? 'white' : 'yellow'"
            name="star"
        ></q-icon>
      </q-item-section>

      <q-item-section>
        <q-item-label> {{ item.title }}</q-item-label>
        <q-item-label caption> {{ item.arrivalDate }} - {{ item.returnDate }}</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>{{lengthOfTrip(item)}} day trip</q-item-label>
      </q-item-section>

    </template>
    <q-card>
      <q-card-section>
        <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
            <div class="captains-log col-12">
                Memories & Trip Notes
              <q-btn outline style="color: black"
                     flat
                     icon="star"
                     name="star"
                     size="xs"
                     @click="isFav(item)"
                     :class="{
                       'yellow-text' : item.favorite === true,
                       'gray-text' : item.favorite === false,
                     }"
              >{{item.favorite? "FAV" : "Not FAV"}}</q-btn>
            </div>
          <div class="log col-12 q-py-none q-by-none">
            <p q-by-none>
            {{ item.tripDescription }}
            </p>
          </div>
          <span class="edit-delete-box col-12 q-mx-none q-my-none">
                <q-btn
                    class="q-btn-edit"
                    color="grey"
                    dense
                    flat
                    icon="edit"
                    padding="0px 10px"
                    size="sm"
                >
                </q-btn>
                <q-btn
                    class="q-btn-edit"
                    color="red"
                    dense
                    flat
                    icon="delete_forever"
                    padding="0px"
                    margin="0px"
                    size="sm"
                    @click="deleteIt(item)"
                >
                </q-btn>
            </span>
          <span class="photo-groups col-11">Photo Groups</span>
        </div>
      </q-card-section>
        <photo-group-list></photo-group-list>
      <!-- bind here
      <photo-group-list
          v-bind:photoGroups="trip.photoGroupArray"
      ></photo-group-list>  -->
    </q-card>
  </q-expansion-item>

</template>

<script>
import {EventTrip} from "@/x-models/trip-model";
import PhotoGroupList from "@/x-components/PhotoGroupList.vue";

console.log("TRIP DETAILS");
export default {
  name: "TripDetails",
  data() {
    return {
      noteId:"noteId",  //"noteId" is a class
      isFavorite: false,
    }
  },
  components: {PhotoGroupList},
  props: {
    item: {type: EventTrip }
  },
  //this will tell me if I'm pulling the correct data... look on console
  created(){

  },
  computed: {
  },
  methods: {
    isFav(item){
     item.favorite = !item.favorite;
      return item.favorite;
    },
    deleteIt(item) {
      item.$emit('remove-trip', item);
    },
    lengthOfTrip(item) {
      // eslint-disable-next-line no-undef
      let a = new Date(item.returnDate);
      // eslint-disable-next-line no-undef
      let b = new Date(item.arrivalDate);
      // To calculate the time difference of two dates
      let Difference_In_Time = a.getTime() - b.getTime();

      console.log(Difference_In_Time / (1000 * 3600 * 24))

      // To calculate the no. of days between two dates
      return Difference_In_Time / (1000 * 3600 * 24);
    }
  }
}

</script>

<style lang="scss">
q-header {
  background-image: linear-gradient(to left, #2c8c37, #fff);
  color: #2c8c37;
}

.q-toolbar, h1, h2, h3, h4, h5, h6, .q-tabs {
  font-family: "Paytone One", "Arial Black", sans-serif;
}

.q-toolbar {
  display: flex;
  align-items: flex-start;
}

.toolbar-travelpics {
  color: #2c8c37;
  font-size: 30px;
}

.gray-text{
  text-color: gray;
}
.yellow-text{
  text-color: goldenrod;
}
.yellow{
  color: goldenrod;
}
.white{
  color: white;
}

#noteId{
  color:#2c8c37;
}

.sort-form {
 color: #2c8c37;
}

.q-field__control-container .q-field__native span {
  color: white;
}
.q-field__control-container .q-field__label {
  color: white;
}

.q-field__append .q-icon {
  color: white;
}

.block {
  font-weight: bold;
  margin-right: 0;
  padding-right: 30px;
  font-size: 14px;
}

.sort-hdr-title {
  padding-left: 15px;
}

.q-item__section--side {
  align-items: flex-start;
}

.trip-title {
  font-weight: bold;
  font-size: 18px;
  padding-top: 20px;
}

.captains-log, .photo-groups {
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 0;
  top-margin: 0;
  top-padding: 0;
}

.q-expansion-item__content {
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 25px;
}

.log {
  border: #4e6163 1px solid;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
  padding-bottom: 0;
  margin-bottom: 0;
}

.edit-delete-box {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 60px;
  padding-top: 0;
  margin-top: 0;
  padding-bottom: 0;
  margin-bottom: 0;
}

.header-bar {
  background-color: #2c8c37;
  color: white;
}

.photo-group {
  text-align: center;
}

//.q-btn__content .block {
//  color: #2c8c37;
//}

.photo-group-box {
  display: flex;
  justify-content: center;
}

.photo-group, .q-carousel {
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #4e6163;
}

.add-photo-icon {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  padding: 25px;
}

.q-carousel {
  padding: 5px;
  height: 250px;
}

.text-h6 {
  padding: 5px;
  font-weight: bolder;
  color: white;
  font-size: 10px;
}

.absolute-bottom {
  display: flex;
  justify-content: center;
}

.uploaders {
  margin: 50px 50px 50px 25px;
}

.add-photo-group {
  margin: 50px 50px 25px 50px;
}

.q-input {
  color: #2c8c37;
}



.q-field__label {
  color: #2c8c37;
}

.add-group-all-trips {
  color: #4e6163;
  padding: 0;
  margin-left: 15px;
}

.fav-trip {
  display: flex;
  align-items: self-start;
}

.q-field__native {
  color: #2c8c37;
  display: flex;
  justify-content: flex-end;
}

#form-id * {
  font-size: 10px;
  color: #4e6163;
  line-height: 10px;
  margin: 0;
}

.q-field__native {
  margin: 0;
  padding: 10px;
}

.btn-submit-div-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-new-trip {
  background-color: rgba(44, 140, 55, 0.3);
  color: white;
}

.q-date__header-title, .q-date__header-subtitle {
  color: #4e6163;
  font-weight: bolder;
}

info-gather {
  align-content: flex-end;
}

.footer-end {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #2c8c37;
}

.footer-title {
  font-size: 10px;
}
</style>