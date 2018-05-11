import { Pipe, PipeTransform } from '@angular/core';

import Asset from './asset.model';

@Pipe({
    name: 'storeassetfilter',
    pure: false
})
export class StoreAssetFilterPipe implements PipeTransform {
  transform(items: Asset[], filter: Asset): Asset[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Asset) => this.applyFilter(item, filter));
  }


  applyFilter(asset: Asset, filter: Asset): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (asset[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (asset[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
