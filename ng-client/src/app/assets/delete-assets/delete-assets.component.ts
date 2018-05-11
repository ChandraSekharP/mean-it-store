import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Asset from '../asset.model';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-delete-assets',
  templateUrl: './delete-assets.component.html',
  styleUrls: ['./delete-assets.component.scss']
})
export class DeleteAssetsComponent implements OnInit {

  constructor(private assetService: AssetService) { }

  assetsList: Asset[];

  ngOnInit(): void {
    this.assetService.getAssets()
      .subscribe(assets => {
        this.assetsList = assets
        console.log(assets)
      })
  }

  deleteAsset(asset: Asset) {
    this.assetService.deleteAsset(asset._id).subscribe(res => {
      this.assetsList.splice(this.assetsList.indexOf(asset), 1);
    })
  }

}
