import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/filter';

import Asset from '../asset.model';
import { AssetService } from '../asset.service';
import { StoreAssetSortPipe } from '../asset-sort.pipe';
import { KeysPipe } from '../asset-keys.pipe';
import { StoreAssetFilterPipe } from '../asset-filter.pipe';

@Component({
  selector: 'app-get-assets',
  templateUrl: './get-assets.component.html',
  styleUrls: ['../assets.component.scss']
})
export class GetAssetsComponent implements OnInit {

  constructor(private assetService: AssetService) {}

  //public visibleSortIcons:boolean = false;
  sortReverse = false;
  sortColumn = "assetId";
  @Input('sort-direction')

  assetsList: Asset[];
  filter: Asset = new Asset();
  //assetObj = new Asset();
  path: string[] = ['category'];
  order: number = 1;  // 1 asc, -1 desc
  //sortDirection: number = 1;

  ngOnInit(): void {
    this.assetService.getAssets()
      .subscribe(assets => {
        this.assetsList = assets
        console.log(assets)
      })
  }

  /* showSortIcons() {
    this.visibleSortIcons = !this.visibleSortIcons;
  }

  hideSortIcons() {
    this.visibleSortIcons = false;
  } */

  sortTable(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    //this.visibleSortIcons = true;
    return false; // do not reload
  }

}
