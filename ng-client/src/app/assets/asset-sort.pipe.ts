import { Pipe, PipeTransform } from '@angular/core';

import Asset from './asset.model';


@Pipe({
  //name: 'sortingAssets'
  name: 'orderBy'
})
export class StoreAssetSortPipe implements PipeTransform {

  transform( array: Array<any>, sortColumn: string, sortReverse: boolean ): Array<string> {
    array.sort( ( a: any, b: any ) => {
      let ae = a[ sortColumn ];
      let be = b[ sortColumn ];
      if ( ae == undefined && be == undefined ) return 0;
      if ( ae == undefined && be != undefined ) return sortReverse ? 1 : -1;
      if ( ae != undefined && be == undefined ) return sortReverse ? -1 : 1;
      if ( ae == be ) return 0;
      return sortReverse ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
    });
    return array;
  }
}


/* transform(assets: Asset[], path: string[], order: number = 1): Asset[] {
    if (!assets || !path || !order) return assets;
    return assets.sort((a: Asset, b: Asset) => {
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })
      return a > b ? order : order * (- 1);
    })
  }
} */
