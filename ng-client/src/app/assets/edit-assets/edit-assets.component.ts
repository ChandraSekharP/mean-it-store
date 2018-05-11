import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Asset from '../asset.model';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-edit-assets',
  templateUrl: './edit-assets.component.html',
  styleUrls: ['../assets.component.scss', './edit-assets.component.scss']
})
export class EditAssetsComponent implements OnInit {

  selectedRow : Number;
  setClickedRow : Function;

  constructor(private assetService: AssetService) {
    this.setClickedRow = function(index){
        this.selectedRow = index;
    }
  }

  public categories = [
      { value: 'Computers', display: 'Computers' },
      { value: 'Data Servers', display: 'Data Servers' },
      { value: 'Routers', display: 'Routers' }
  ];

  public makes = [
      { value: 'Apple', display: 'Apple' },
      { value: 'Lenovo', display: 'Lenovo' },
      { value: 'DELL', display: 'DELL' },
      { value: 'Cisco', display: 'Cisco' },
      { value: 'Data Link', display: 'Data Link' },
      { value: 'Samsung', display: 'Samsung' }
  ];

  assetsList: Asset[];
  editAssets: Asset[] = [];

  ngOnInit(): void {
    this.assetService.getAssets()
      .subscribe(assets => {
        this.assetsList = assets
        console.log(assets)
      })
  }

  editAsset(asset: Asset) {
    console.log(asset)
    if(this.assetsList.includes(asset)){
      if(!this.editAssets.includes(asset)){
        this.editAssets.push(asset)
      }else{
        this.editAssets.splice(this.editAssets.indexOf(asset), 1)
        this.assetService.editAsset(asset).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          this.editAsset(asset)
          console.error('Update Unsuccesful')
        })
      }
    }
  }

  doneAsset(asset:Asset){
    this.assetService.editAsset(asset).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editAsset(asset)
      console.error('Update Unsuccesful')
    })
  }

  submitAsset(event, asset:Asset){
    if(event.keyCode ==13){
      this.editAsset(asset)
    }
  }

  /* deleteTodo(todo: ToDo) {
    this.todoService.deleteTodo(todo._id).subscribe(res => {
      this.todosList.splice(this.todosList.indexOf(todo), 1);
    })
  } */

  /* getBook(id) {
    this.http.get('/book/'+id).subscribe(data => {
      this.book = data;
    });
  }

  updateBook(id) {
    this.book.updated_date = Date.now();
    this.http.put('/book/'+id, this.book)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  } */

}
