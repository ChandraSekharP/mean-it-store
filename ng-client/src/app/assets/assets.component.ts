import { Component, OnInit } from '@angular/core';

import Asset from './asset.model';
import { AssetService } from './asset.service';
import { StoreAssetFilterPipe } from './asset-filter.pipe';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  constructor(private assetService: AssetService) { }

  assetsList: Asset[];

  filter: Asset = new Asset();

  ngOnInit(): void {
    this.assetService.getAssets()
      .subscribe(assets => {
        this.assetsList = assets
        console.log(assets)
      })
  }
}
