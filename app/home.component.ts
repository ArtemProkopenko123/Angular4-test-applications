import { Component} from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
@Component({
    selector: 'home-app',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    title = 'Home Page';

 public constructor(private titleService: Title ) {this.titleService.setTitle(this.title) }
   
}