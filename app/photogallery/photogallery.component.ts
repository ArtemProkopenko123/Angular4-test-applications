import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotogalleryService } from '../shared/photogallery.service';
import { BrowserModule, Title }  from '@angular/platform-browser';
@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent implements OnInit {
    title = 'Gallery';
    newTitle = '';
    setTitle = false;
    alert = false;
    public constructor(private titleService: Title ) {this.titleService.setTitle(this.title) }

   

    onSubmit(){
    if(this.setTitle) this.titleService.setTitle(this.newTitle);   
    if(this.alert) alert(this.newTitle);
    }

    ngOnInit() {}
}
