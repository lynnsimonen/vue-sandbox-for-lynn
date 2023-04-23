<template>
  <q-layout class="shadow-2 rounded-borders">

    <!-- HEADER-->
    <q-header elevated class="q-mb-md">,
      <q-toolbar>
        <q-toolbar-title class="q-mx-lg q-mb-md toolbar-travelpics">
          <q-avatar size="50px">
            <img src="../src/images/smilingWorld250px.jpg" alt="smiling world icon">
          </q-avatar>
          TripPics
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- MAIN BODY-->

    <q-page-container>
      <div class="row">
        <div class="col-12 col-10 q-px-lg">

          <!--  INSERT COMPONENT HERE-->
          <trip-item-list></trip-item-list>

        </div>
      </div>
    </q-page-container>


    <!-- FOOTER -->
    <q-footer elevated>
      <q-toolbar class="footer-end">
        <q-toolbar-title class="footer-title text-caption">©️2023 Copyright: SimonenWebBeginnings. All Rights Reserved |
          Privacy
          Policy
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>


<style lang="scss">

.q-header {
  background-image: linear-gradient(to left, #2c8c37, #fff);
  color: #2c8c37;
}

.toolbar-travelpics, h1, h2, h3, h4, h5, h6 {
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

.star-yellow .q-tab__icon, .star-yellow .q-icon {
  color: yellow;
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

.footer-end {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #2c8c37;
}

</style>
<script setup>
import TripItemList from "@/x-components/TripItemList.vue";
</script>