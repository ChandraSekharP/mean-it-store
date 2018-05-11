import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetsComponent }  from './assets.component';
import { AddAssetsComponent }  from './add-assets/add-assets.component';
import { GetAssetsComponent } from './get-assets/get-assets.component';
import { EditAssetsComponent } from './edit-assets/edit-assets.component';
import { DeleteAssetsComponent } from './delete-assets/delete-assets.component';

//import { ManageComponent }  from './add-assets/manage.component';

const AssetsRoutes: Routes = [
	{
	  path: 'Assets', component: AssetsComponent,
    children: [ {path: 'AddAssets', component: AddAssetsComponent},
								{path: 'GetAssets', component: GetAssetsComponent},
								{path: 'EditAssets', component: EditAssetsComponent},
								{path: 'DeleteAssets', component: DeleteAssetsComponent}
							]
	}
];

@NgModule({
  imports: [ RouterModule.forChild(AssetsRoutes) ],
  exports: [ RouterModule ]
})
export class AssetsRoutingModule{ }
