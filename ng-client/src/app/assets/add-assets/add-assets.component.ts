import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

//import { GeneratorComponent } from '../asset-id-generator';
import Asset from '../asset.model';
import { AssetService } from '../asset.service';

@Component({
  selector: 'add-asset',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss']
  //directives: [GeneratorComponent]
  // providers: [CategoryService]
})
export class AddAssetsComponent implements OnInit {
  //public counterValue: number;
  constructor(private assetService: AssetService) {
    //this.counterValue = 0;
  }

  public categories = [
      { value: 'Computers', display: 'Computers' },
      { value: 'Data servers', display: 'Data Servers' },
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
  /* selectedCategory:Category = new Category(0, 'Select One');
  categories: Category[];

  constructor(private assetService: AssetService
              private categoryService: CategoryService) {
    this.categories = this.categoryService.getCategories();
  } */

  //result: string = randomString();

  public visibleSuccessMessage:boolean = false;
  public visibleErrorMessage:boolean = false;
  public visibleAddAssetForm:boolean = true;

  public newAsset: Asset = new Asset()

  assetsList: Asset[];

  ngOnInit(): void {
    this.assetService.getAssets()
      .subscribe(assets => {
        this.assetsList = assets
        console.log(assets)
      })
  }

  /* counterUpdate(event: object) {
    this.counterValue = event.countAssetID;
  } */

  /* uniqueAssetID() {
		 this.length = 8;
		 this.timestamp = +new Date;

		 var _getRandomInt = function( min, max ) {
			return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
		 }

		 this.generate = function() {
			 var ts = this.timestamp.toString();
			 var parts = ts.split( "" ).reverse();
			 var id = "";

			 for( var i = 0; i < this.length; ++i ) {
				var index = _getRandomInt( 0, parts.length - 1 );
				id += parts[index];
			 }
			 return id;
		 }
	} */

  hideSuccessMessage() {
    this.visibleSuccessMessage = false;
    this.visibleAddAssetForm = true;
  }

  hideErrorMessage() {
    this.visibleErrorMessage = false;
    this.visibleAddAssetForm = true;
  }

  showSuccessMessage() {
    this.visibleSuccessMessage = !this.visibleSuccessMessage;
    this.visibleAddAssetForm = !this.visibleAddAssetForm;
  }

  showErrorMessage() {
    this.visibleErrorMessage = !this.visibleErrorMessage;
    this.visibleAddAssetForm = !this.visibleAddAssetForm;
  }

  addAsset() {
    this.assetService.addAssetToStore(this.newAsset)
      .subscribe((res) => {
        this.assetsList.push(res.data)
        this.newAsset = new Asset()
        this.showSuccessMessage();
      }, err => {
        this.showErrorMessage();
      })
  }

  /* editTodo(todo: ToDo) {
    console.log(todo)
    if(this.todosList.includes(todo)){
      if(!this.editTodos.includes(todo)){
        this.editTodos.push(todo)
      }else{
        this.editTodos.splice(this.editTodos.indexOf(todo), 1)
        this.todoService.editTodo(todo).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          this.editTodo(todo)
          console.error('Update Unsuccesful')
        })
      }
    }
  }

  doneTodo(todo:ToDo){
    todo.status = 'Done'
    this.todoService.editTodo(todo).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editTodo(todo)
      console.error('Update Unsuccesful')
    })
  }

  submitTodo(event, todo:ToDo){
    if(event.keyCode ==13){
      this.editTodo(todo)
    }
  }

  deleteTodo(todo: ToDo) {
    this.todoService.deleteTodo(todo._id).subscribe(res => {
      this.todosList.splice(this.todosList.indexOf(todo), 1);
    })
  } */
    public randomString(): string {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var length = 10;
      var result = '', rnd;
      while (length > 0) {
        rnd = Math.floor(Math.random() * chars.length);
        result += chars.charAt(rnd);
        length--;
      }
      return result;
    }
}
