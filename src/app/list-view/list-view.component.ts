import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  constructor(private api:ApiService){
    this.api.fetchedData().subscribe(
      (respons)=>{
        console.log(respons)
        this.fetchData=respons
        
      }
    )
  }
  fetchData:any=[]
 
}
