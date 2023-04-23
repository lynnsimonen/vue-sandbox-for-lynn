<template>
  <div>
    <div class="row justify-between">
      <div class="col-3 col-sm-2">
        <sort-form
            :sort-function="sort"
        ></sort-form>
      </div>
    </div>
    <q-list bordered >
      <div  v-for="item in trips"
            :item="item"
            :key="item.key"

      >
      <event-item-card :item="item"/>
      </div>
    </q-list>
  </div>
</template>

<script>
console.log("TRIP ITEM LIST");
import SortForm from "@/x-components/SortForm.vue";
import EventItemCard from "@/x-components/EventItemCard.vue";
import {EventTrip, PhotoGroupArray, PhotosArray} from "@/x-models/trip-model";
import TravelEvent from "@/x-models/travel-event-model";
export default {
  name: 'TripItemList',
  emits: "delete-it",
  props: {
    item: { type: TravelEvent},
    itemToBeSorted: undefined,
  },
  components: {SortForm, EventItemCard},
  data() {
    return {
      trips: [
        new TravelEvent(new EventTrip('France Family Trip - 2018',
            'France was great. France was great.  France was great.  France was great.  France was great.  France was great.  France was great.',
            '03/27/2018',
            '04/05/2018',
            'a',
            true,
            [new PhotoGroupArray
                ('Day One',
                    [new PhotosArray
                                    ('src/images/FR_01.jpg', 'caption-one'),
                                    ('src/images/FR_02.jpg', 'caption-one'),
                                  ]),
                        ('Day Two',
                              [new PhotosArray
                                    ('src/images/FR_03.jpg', 'caption-one'),
                                    ('src/images/FR_01.jpg', 'caption-one'),
                                ]),
                        ('Day Three',
                              [new PhotosArray
                                    ('src/images/FR_03.jpg', 'caption-one'),
                                    ('src/images/FR_01.jpg', 'caption-one'),
                                ]), //end last photoGroupArray

            ], //end new TravelEvent
        )),

        new TravelEvent(new EventTrip('Southern Family Trip - 2019',
            'Trip was great',
            '03/24/2019',
            '04/02/2019',
            'b',
            false,
            [new PhotoGroupArray
                            ('Day Two',
                                [new PhotosArray
                                ('one.jpg', 'caption-one'),
                                  ('src/images/FR_01.JPG','caption-two'),
                                  ('three.jpg','caption-three')
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
      ]
    }
  },

  methods: {
    deleteIt(item) {
      //item.$emit('remove-trip', item);
      this.trips.splice(this.trips.indexOf(item),1);
    },
    addTrip(){
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

.sort-form {
  background-color: #2c8c37;
  padding-left: 15px;
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