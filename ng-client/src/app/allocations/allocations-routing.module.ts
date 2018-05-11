import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllocationsComponent }  from './allocations.component';
import { NewAllocationsComponent }  from './new-allocations/new-allocations.component';
//import { ManageAllocationsComponent }  from './manage-allocations/manage-allocations.component';

const AllocationsRoutes: Routes = [
	{
	  path: 'Allocations', component: AllocationsComponent,
    children: [ {path: 'NewAllocations', component: NewAllocationsComponent}/*, {path: 'ManageAllocations', component: ManageAllocationsComponent}*/ ]
	}
];

@NgModule({
  imports: [ RouterModule.forChild(AllocationsRoutes) ],
  exports: [ RouterModule ]
})
export class AllocationsRoutingModule{ }
