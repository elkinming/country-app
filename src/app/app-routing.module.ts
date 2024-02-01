import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

// Se definen la rutas de la aplicacion
const routes: Routes = [
  // {
  //   path: "",
  //   component: HomePageComponent
  // },
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "contact",
    component: ContactPageComponent
  },
  {
    // Cargando modulos usando Lazy Loading
    path: "countries",
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: "**",
    redirectTo: "countries"
  }
]

// Se importa y configura el router
// Posteriormente se exporta para que pueda ser importado en el modulo principal
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [],
})
export class AppRoutingModule { }

