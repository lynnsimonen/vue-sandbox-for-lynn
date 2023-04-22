<template>
  <q-card-section>
    <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">

        PHOTO GROUP LIST

      <!--  List each photo here-->
<!--      <photo-group-->
<!--          v-for="photoGroup in photoGroups"-->
<!--          :photo-group="photoGroup"-->
<!--          :key="photoGroup.title"-->
<!--      ></photo-group>-->

    </div>
  </q-card-section>
</template>

<script>

import {EventTrip} from "@/x-models/trip-model";
console.log("PHOTOGROUP-LIST");

export default {
  name: "PhotoGroupList",
  components: {},
  props: {
    item: {type: EventTrip }
  },
  created(){
  },
}
</script>

<style lang="scss">

//ALL TRIPS TAB: Photo Groups Text
.header-bar{
  background-color: #2c8c37;
  color: white;
}

.photo-group{
  text-align: center;
}

.q-btn__content .block{
  color: #2c8c37;
}

.photo-group-box{
  display: flex;
  justify-content: center;
}

.photo-group, .q-carousel{
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #4E6163ff;
}


//ALL TRIPS TAB: qty of photos in photo group
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
  margin:50px 50px 50px 25px;
}

.add-photo-group{
  margin: 50px 50px 25px 50px;
}

.q-input{
  color: #2c8c37;
}

//ALL TRIPS: Trip Description labels
  .q-field__label {
    color:#2c8c37;
  }

//ALL TRIPS: camera icon color
  .add-group-all-trips{
    color: #2c8c37;
    padding: 0;
    margin-left: 15px;
  }

//FAVORITES TAB...
//favorite star icon

  .fav-trip{
    display: flex;
    align-items: self-start;
  }

.q-field__native {
  color: #2c8c37;
  display: flex;
  justify-content: flex-end;
}

//ADD A TRIP TAB
  #form-id * {
    font-size: 10px;
    color: #2c8c37;
    line-height: 10px;
    margin: 0;
  }

.q-field__native{
  margin:0;
  padding: 10px;
}

.btn-submit-div-wrap{
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-new-trip{
  background-color: rgba(44, 140, 55, 0.3);
  color: white;
}

.q-date__header-title, .q-date__header-subtitle{
  color: #2c8c37;
  font-weight: bolder;
}
</style>