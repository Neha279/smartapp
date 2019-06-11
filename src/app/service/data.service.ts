import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {Injectable}  from '@angular/core';
import { map,filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DataService {
     
    public data: AngularFireList<any[]>;
    items: Observable<any[]>;

    constructor( public db: AngularFireDatabase){
        this.data = this.db.list('/');
        this.items = this.data.valueChanges();
        this.items.subscribe(res=> console.log(res));
    }

    public getDataList(): any {
        const dataObservable = new Observable(observer => {
               setTimeout(() => {
                   observer.next(this.items);
               }, 1000);
        });
        return dataObservable;
    }
    
    ngOnDestroy() {
        // this.data.next();
        // this.data.complete();
        //this.items.next();
        //this.items.complete();
    }
  }