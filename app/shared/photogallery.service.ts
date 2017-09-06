//import { Photogallery } from './photogallery';
import { BrowserModule, Title }  from '@angular/platform-browser';


export class PhotogalleryService {

   private titleService: Title;
 
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}