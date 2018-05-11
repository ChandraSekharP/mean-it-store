import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//import { EqualValidator } from './equal-validator.directive';
import { StoreAssetFilterPipe } from './assets/asset-filter.pipe';
import { StoreAssetSortPipe } from './assets/asset-sort.pipe';
import { KeysPipe } from './assets/asset-keys.pipe';

import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
//import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';
//import { ActionsComponent } from './actions/actions.component';
import { GeneratorComponent } from './assets/asset-id-generator';
import { AssetsComponent } from './assets/assets.component';
import { AddAssetsComponent } from './assets/add-assets/add-assets.component';
import { GetAssetsComponent } from './assets/get-assets/get-assets.component';
import { EditAssetsComponent } from './assets/edit-assets/edit-assets.component';
import { DeleteAssetsComponent } from './assets/delete-assets/delete-assets.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { WelcomeService } from './welcome/welcome.service';
import { AssetService } from './assets/asset.service';

import { AllocationsComponent } from './allocations/allocations.component';
import { NewAllocationsComponent } from './allocations/new-allocations/new-allocations.component';
//import { MessagesComponent } from './messages/messages/messages.component';

import { CustomValidators } from './is-same-validator';

@NgModule({
  declarations: [
    AppComponent,
    /*RegisterComponent,
    LoginComponent,*/
    WelcomeComponent,
    GeneratorComponent,
    AssetsComponent,
    AddAssetsComponent,
    GetAssetsComponent,
    EditAssetsComponent,
    DeleteAssetsComponent,
    //ActionsComponent,
    AllocationsComponent,
    NewAllocationsComponent,
    GetAssetsComponent,
    LogoutComponent,
    StoreAssetFilterPipe,
    StoreAssetSortPipe,
    KeysPipe/*,
    MessagesComponent*/
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, AuthGuardService, WelcomeService, AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
