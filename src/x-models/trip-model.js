function EventTrip(title, tripDescription, arrivalDate, returnDate, key,
                   favorite, photoGroupArray) {
    this.title = title ?? '';
    this.tripDescription = tripDescription ?? '';
    // add any additional properties
    this.arrivalDate = arrivalDate ?? '';
    this.returnDate = returnDate ?? '';
    this.key = key ?? '';
    this.favorite = favorite ?? false;
    this.photoGroupArray = photoGroupArray ?? [];
    this.save = function(newObj){
        this.title = newObj.title;
        this.photosArray = newObj.photosArray;
    }
}
EventTrip.type = "EventTrip";

function PhotoGroupArray(title, photosArray,photo, photoCaption) {  //this will auto-label the title & photosArray  "Chapters"
    this.title = title ?? '';
    this.photosArray = photosArray ?? [];
    this.photo = photo ?? '';
    this.photoCaption = photoCaption ?? '';
    this.save = function(newObj){
        this.photo = newObj.photo;
        this.photoCaption = newObj.photoCaption;
    }
}

function PhotosArray(photo, photoCaption){   //this will auto-label the photos & photoCaptions "topics"
    this.photo = photo ?? '';
    this.photoCaption = photoCaption ?? '';
    this.save = function(newObj){
        this.photo = newObj.photo;
        this.photoCaption = newObj.photoCaption;
    }
}

export {EventTrip, PhotoGroupArray, PhotosArray};

