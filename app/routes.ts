import { Routes } from '@angular/router'
import { PhotogalleryComponent } from './photogallery/photogallery.component'
import { ImageDetailComponent } from './photogallery/image/image-detail.component'
import { HomeComponent }   from './home.component'
import { NotFoundComponent }   from './not-found.component'
import { CustomServicesComponent } from './services/custom-services.component'
export const appRoutes:Routes = [
    
    { path: 'photogallery', component: PhotogalleryComponent },
    { path: 'photogallery/:id', component: ImageDetailComponent },
    { path: 'services', component: CustomServicesComponent },
    { path: '', component: HomeComponent},
    { path: '**', component: NotFoundComponent }
]
