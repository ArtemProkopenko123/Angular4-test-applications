import { Component, OnChanges, Input } from '@angular/core';
import { Title }  from '@angular/platform-browser';

import { PhotogalleryService } from '../shared/photogallery.service';
import { ImageService } from '../shared/image.service';
@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent implements OnChanges {
    
    title = 'Gallery';
    newTitle = ''
    setTitle = false
    alert = false
    visibleImages: any[] = []
    @Input() filterBy?: string = 'all'

    public constructor(private titleService: Title, private photoService : PhotogalleryService, private imageService : ImageService ) {
        this.titleService.setTitle(this.title); 
        this.visibleImages = this.imageService.getImages();
    }

    onSubmit(){ 
        if(this.setTitle) this.titleService.setTitle(this.newTitle);   
        if(this.alert) this.photoService.alert(this.newTitle);;
    }

    ngOnChanges (){
        this.visibleImages = this.imageService.getImages();
    }
}
