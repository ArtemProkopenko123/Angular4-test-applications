import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './shared/todo.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent }   from './not-found.component';
import { HomeComponent }   from './home.component';
import { PhotogalleryService } from './shared/photogallery.service';

const appRoutes: Routes = [
    { path: 'photogallery', component: PhotogalleryComponent },
    { path: '', component: HomeComponent},
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    declarations: [ 
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent,
        PhotogalleryComponent,
        NotFoundComponent,
        HomeComponent
    ],
    
    providers:  [ 
        TodoService,
        Title,
        PhotogalleryService
                ],
    
    imports:[
        RouterModule.forRoot(appRoutes,{ enableTracing: true }),
        AlertModule.forRoot(),
        BrowserModule, 
        FormsModule,
        RouterModule
    
    ],
    bootstrap:  [ AppComponent ]
})
export class AppModule { 
}
 