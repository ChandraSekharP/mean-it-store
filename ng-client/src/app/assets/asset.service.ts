
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Response} from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

import Asset from './asset.model';

@Injectable()
export class AssetService {

  apiUrl = 'http://localhost:3000';
  addAssetUrl = `${this.apiUrl}/api/addAsset`;
  getAssetsUrl = `${this.apiUrl}/api/viewAssets`;
  editAssetUrl = `${this.apiUrl}/api/updateAsset`;
  deleteAssetUrl = `${this.apiUrl}/api/deleteAsset`;

  constructor(private http: HttpClient) { }

  //filter: Asset = new Asset();

  addAssetToStore(asset: Asset): Observable<any>{
    return this.http.post(`${this.addAssetUrl}`, asset);
  }

  getAssets(): Observable<Asset[]>{
    return this.http.get(this.getAssetsUrl)
    .map(res  => {
      return res["data"].docs as Asset[];
    })
  }

  editAsset(asset:Asset){
    return this.http.put(`${this.editAssetUrl}`, asset);
  }

  deleteAsset(id:string):any{
    return this.http.delete(`${this.deleteAssetUrl}/${id}`)
    .map(res  => {
      return res;
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
