import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { AllocationsComponent }  from './allocations.component';
import { NewAllocationsComponent }  from './new-allocations/new-allocations.component';
/*import { CountryListComponent }  from './country-list/country.list.component';
import { CountryDetailComponent }  from './country-list/detail/country.detail.component';
import { CountryEditComponent }  from './country-list/edit/country.edit.component';
import { CountryService } from './service/country.service';*/
import { AllocationsRoutingModule }  from './allocations-routing.module';

@NgModule({
  imports: [
    CommonModule,
		ReactiveFormsModule,
		AllocationsRoutingModule
  ],
  declarations: [
		AllocationsComponent,
		NewAllocationsComponent/*,
		CountryListComponent,
		CountryEditComponent,
		CountryDetailComponent*/
  ]/*,
  providers: [ AllocatiosService ]*/
})
export class AllocationsModule { }
