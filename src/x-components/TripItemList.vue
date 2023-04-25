<template>
  <div>
    <div class="row justify-between">
      <div class="col-4 col-sm-3">
        <sort-form
            :sort-function="sort"
        ></sort-form>
      </div>
      <div class="col-5 col-md-3">
        <search-form>
          :search-function="search"
        </search-form>
      </div>
    </div>
    <q-list bordered>
      <div v-for="item in trips"
           :item="item"
           :key="item.key"
           @delete-trip="(emittedTrip) => {$emit('delete-trip', emittedTrip)}"
      >
        <!-- EventItemCard imports data from Trip Details -->
        <event-item-card :item="item"/>
      </div>
    </q-list>
  </div>
</template>

<script>
console.log("TRIP ITEM LIST");
import SearchForm from "@/x-components/SearchForm.vue"
import SortForm from "@/x-components/SortForm.vue";
import EventItemCard from "@/x-components/EventItemCard.vue";
import {EventTrip, Photo, PhotoGroup} from "@/x-models/trip-model";
import TravelEvent from "@/x-models/travel-event-model";

export default {
  name: 'TripItemList',
  emits: "delete-it",
  props: {
    item: {type: TravelEvent},
  },
  components: {SearchForm, SortForm, EventItemCard},
  data() {
    return {
      //filteredTrips: [...this],
      trips: [
        new TravelEvent(new EventTrip('France Family Trip - 2018',
            'France was great. France was great.  France was great.  France was great.  France was great.  France was great.  France was great.',
            '03/27/2018',
            '04/02/2018',
            'a',
            true,
            [new PhotoGroup
            ('Day One',
                [new Photo('src/images/FR_01.JPG', 'caption-one'),
                  new Photo('src/images/FR_02.JPG', 'caption-one'),
                ]),
              new PhotoGroup
              ('Day Two',
                  [new Photo('src/images/FR_03.JPG', 'caption-one'),
                    new Photo('src/images/FR_Eiffel.jpg', 'caption-one'),
                  ]),
              new PhotoGroup
              ('Day Three',
                  [new Photo('src/images/FR_Monet.jpg', 'caption-one'),
                    new Photo('src/images/FR_Nrmdy.jpg', 'caption-one'),
                  ]), //end last photoGroupArray

            ], //end new PhotoGroup
        )),//end new TravelEvent

        new TravelEvent(new EventTrip('Southern Family Trip - 2019',
            'Trip was great',
            '03/24/2019',
            '04/15/2019',
            'b',
            false,
            [new PhotoGroup
            ('Day 1',
                [new Photo('src/images/CR_01.JPG', 'caption-one'),
                  new Photo('src/images/CR_02.JPG', 'caption-two'),
                  new Photo('src/images/CR_03.JPG', 'caption-three')
                ])
            ]
        )),

        new TravelEvent(new EventTrip('Island Family Trip - 2021',
            'We had fun',
            '07/09/2021',
            '07/19/2021',
            'c',
            true
        )),
        new TravelEvent(new EventTrip('Western Family Trip - 2015',
            'Trip was great',
            '03/24/2015',
            '04/02/2015',
            'd',
            true
        )),
        new TravelEvent(new EventTrip('Eastern Family Trip - 2016',
            'Trip was great',
            '03/24/2016',
            '04/02/2016',
            'e',
            false
        )),
      ],
    }
  },

  methods: {
    deleteIt(item) {
      //item.$emit('remove-trip', item);
      this.trips.splice(this.trips.indexOf(item), 1);
    },

    addTrip() {
      this.trips.push(this.newTrip);
      //clear the form
      this.newTrip = {
        title: '',
        tripDescription: '',
        arrivalDate: '',
        returnDate: '',
        key: '',
        favorite: false,
      }
    },

    sort(property) {
      console.log('sorting by', property);
      if (property === 'title') {
        this.trips.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          console.log('sorting by', property);
          return 0;
        })
      } else if (property === 'returnDate') {
        this.trips.sort((a, b) => {
          console.log('sorting by', property);
          return new Date(a.returnDate) - new Date(b.returnDate);
        })
      } else if (property === 'favorite') {
        this.trips.sort((a, b) => {
          if (a.favorite === true && b.favorite === false) {
            return -1;
          } else if (a.favorite === false && b.favorite === true) {
            return 1;
          }
          console.log(a, property);
          return 0;
        })
      }
    },
    search() {
      let keyword = '';
      if (keyword) {
        return this.trips.title.toLowerCase().includes(this.keyword.toLowerCase())
            || this.trips.tripDescription.toLowerCase().includes(this.keyword.toLowerCase());
      }

    },
  },
}

</script>

<style lang="scss">

.q-header {
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

.star-yellow .q-tab__icon, .star-yellow .q-icon {
  color: yellow;
}

.sort-form, .q-form {
  background-color: rgba(211, 211, 211, 0.8);
  color: black;
  padding-left: 15px;
}

.q-list {
  background-color: white;
  font-weight: bold;
  color: #2c8c37
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

</style>