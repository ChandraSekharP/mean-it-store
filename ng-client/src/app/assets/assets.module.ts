import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

import { GeneratorComponent } from './asset-id-generator';
import { AssetsComponent } from './assets.component';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { GetAssetsComponent } from './get-assets/get-assets.component';
import { EditAssetsComponent } from './edit-assets/edit-assets.component';
import { DeleteAssetsComponent } from './delete-assets/delete-assets.component';
//import { ManageComponent } from './add-asset/manage.component';
import { AssetService } from './asset.service';
import { AssetsRoutingModule } from './asset-routing.module';

@NgModule({
  imports: [
    CommonModule,
		ReactiveFormsModule,
		AssetsRoutingModule
  ],
  declarations: [
		AssetsComponent,
    GeneratorComponent,
		AddAssetsComponent,
    GetAssetsComponent,
		EditAssetsComponent,
		DeleteAssetsComponent/*,
    ManageComponent*/
  ],
  providers: [ AssetService ]
})
export class AssetsModule { }
