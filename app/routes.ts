import { Routes } from '@angular/router'
import { PhotogalleryComponent } from './photogallery/photogallery.component'
import { ImageDetailComponent } from './photogallery/image/image-detail.component'
import { HomeComponent }   from './home.component'
import { NotFoundComponent }   from './not-found.component'
export const appRoutes:Routes = [
    { path: 'photogallery', component: PhotogalleryComponent },
    { path: 'image/:id', component: ImageDetailComponent },
    { path: '', component: HomeComponent},
    { path: '**', component: NotFoundComponent }
]
