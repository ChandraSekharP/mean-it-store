import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { AssetsComponent } from './assets/assets.component';
import { AddAssetsComponent } from './assets/add-assets/add-assets.component';
import { GetAssetsComponent } from './assets/get-assets/get-assets.component';
import { EditAssetsComponent } from './assets/edit-assets/edit-assets.component';
import { DeleteAssetsComponent } from './assets/delete-assets/delete-assets.component';
import { AllocationsComponent } from './allocations/allocations.component';
import { NewAllocationsComponent } from './allocations/new-allocations/new-allocations.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  //{ path: 'Register', component: RegisterComponent },
  //{ path: 'Login', component: LoginComponent },
  { path: '', component: WelcomeComponent },
  { path: 'Logout', component: LogoutComponent },
  //{ path: 'Actions', component: ActionsComponent },
  { path: 'Assets', component: AssetsComponent,
    children: [{path: 'AddAssets', component: AddAssetsComponent},
               {path: 'GetAssets', component: GetAssetsComponent},
               {path: 'EditAssets', component: EditAssetsComponent},
               {path: 'DeleteAssets', component: DeleteAssetsComponent}
             ]
  },
  { path: 'Allocations', component: AllocationsComponent, children: [{path: 'NewAllocations', component: NewAllocationsComponent}] },
  //{ path: 'Assets', loadChildren: 'app/assets/assets.module#AssetsModule', data: { preload: true } }
  //{ path: 'Allocations', loadChildren: 'app/allocations/allocations.module#AllocationsModule', data: { preload: true } }
  //{ path: 'AddAsset', component: AddComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
