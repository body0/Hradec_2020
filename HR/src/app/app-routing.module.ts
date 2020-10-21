import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrafInitComponent } from './graf-init/graf-init.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'initGraf', component: GrafInitComponent },
  { path: '**', redirectTo: '' },
  // { path: 'deviceSettings/:deviceName/:deviceVersion', component: DeviceSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

