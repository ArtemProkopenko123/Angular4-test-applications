import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
    visibleImages = [];
    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id);
    }
}

const IMAGES = [
    {"id" : 1, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_1.jpg"},
    {"id" : 2, "category": "boats", "caption": "Beautiful boat", "url": "assets/img/boat_2.jpg"},
    {"id" : 3, "category": "boats", "caption": "Best boat", "url": "assets/img/boat_3.jpg"},
    {"id" : 4, "category": "boats", "caption": "Nice boat", "url": "assets/img/boat_4.jpg"},
    {"id" : 5, "category": "camping", "caption": "Nice camping", "url": "assets/img/camping-1.jpg"},
    {"id" : 6, "category": "camping", "caption": "Nice view from a camping", "url": "assets/img/camping-2.jpg"},
    {"id" : 7, "category": "camping", "caption": "Check my new camping", "url": "assets/img/camping-3.jpg"},
    {"id" : 8, "category": "camping", "caption": "Our camping", "url": "assets/img/camping-4.jpg"},
    {"id" : 9, "category": "camping", "caption": "Small camping", "url": "assets/img/camping-5.jpg"},
    {"id" : 10, "category": "love", "caption": "Beautiful love", "url": "assets/img/love_1.jpg"},
    {"id" : 11, "category": "love", "caption": "Best love", "url": "assets/img/love_2.jpg"},
    {"id" : 12, "category": "love", "caption": "I love love", "url": "assets/img/love_3.jpg"},
    {"id" : 13, "category": "love", "caption": "How you love me", "url": "assets/img/love_4.jpg"}
]
