import { BrowserModule, Title } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { TodoFormComponent } from './todo-form/todo-form.component'
import { TodoListComponent } from './todo-list/todo-list.component'
import { TodoItemComponent } from './todo-item/todo-item.component'
import { TodoService } from './shared/todo.service'
import { AlertModule } from 'ngx-bootstrap/alert'
import { PhotogalleryComponent } from './photogallery/photogallery.component'
import { appRoutes } from './routes'
import { NotFoundComponent }   from './not-found.component'
import { HomeComponent }   from './home.component'
import { PhotogalleryService } from './shared/photogallery.service'
import { ImageDetailComponent } from './photogallery/image/image-detail.component'
import { ImageService } from './shared/image.service'
import { ImageFilterPipe } from './shared/imageFilter.pipe';
import { CustomServicesComponent } from './services/custom-services.component'
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [ 
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent,
        PhotogalleryComponent,
        NotFoundComponent,
        HomeComponent,
        ImageDetailComponent,
        ImageFilterPipe,
        CustomServicesComponent
    ],
    
    providers:  [ 
        TodoService,
        Title,
        PhotogalleryService,
        ImageService,
        ImageFilterPipe
                ],
    
    imports:[
        RouterModule.forRoot(appRoutes),
        AlertModule.forRoot(),
        BrowserModule, 
        FormsModule,
        RouterModule,
        ModalModule.forRoot(),
        HttpModule
    
    ],
    bootstrap:  [ AppComponent ]
})
export class AppModule { 
}
 