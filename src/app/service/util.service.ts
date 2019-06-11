import { map,filter,reduce } from 'rxjs/operators';
import {Injectable}  from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilService {

    constructor() {}
    
    public sortOn (arr, prop) {
       return arr.sort (
            function (a, b) {
                if (a[prop] < b[prop]){
                    return -1;
                } else if (a[prop] > b[prop]){
                    return 1;
                } else {
                    return 0;   
                }
            }
        );
     }

    public groupBy(arr, f): any {
        return arr.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
    }
}