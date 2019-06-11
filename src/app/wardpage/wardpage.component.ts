import { Component, OnInit, ViewChild } from '@angular/core';
import {DataService } from '../service/data.service';
import {UtilService } from '../service/util.service';
import { Observable, Observer } from 'rxjs';
import { map,filter } from 'rxjs/operators';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@Component({
  selector: 'ward-page',
  templateUrl: './wardpage.component.html',
  styleUrls: ['./wardpage.component.sass'],
  providers:  [ DataService, UtilService ]
})
export class WardPageComponent implements OnInit {
  
    public data : Observable<any[]>;
    dataP: any[];
    dataD: any[];
    dataN: any[];
    types: string[] = ['Patient','Nurse','Doctor'];
    wardsList : string[] = [];
    selected : string = "1";

    constructor(private _dataService: DataService, private _utilService : UtilService){}

    ngOnInit() {
      const dataObservable = this._dataService.getDataList();
      dataObservable.subscribe((data: Observable<any[]>) => {
          //this.data = data; 
          console.log("init.,.");
          data.subscribe(res=>  { 
            
            this.dataP = res.filter(item => item['class'] === 'Patient' );
            this.dataP = this._utilService.sortOn(this.dataP, "first_name");
            
            this.dataD = res.filter(item => item['class'] === 'Doctor' );
            this.dataD = this._utilService.sortOn(this.dataD, "first_name");

            let nurseData = res.filter(item => item['class'] === 'Nurse' );
            nurseData = this._utilService.sortOn(nurseData, "first_name");

            this.dataN = this._utilService.groupBy(nurseData , (c) => c.ward_number);
            this.wardsList = Object.keys(this.dataN);
            console.log(this.wardsList);

          });
      });
  }

  trackByFn(index, item) {
      return index; 
  }
   
  getNextBatch(event) {}

  ngOnDestroy() {
      // this.data.next();
      // this.data.complete();
  }

}