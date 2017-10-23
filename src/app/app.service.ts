import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';                                
import 'rxjs/add/operator/map';


@Injectable()
export class ChartsService {

    constructor(private _http:Http) {}

    /**
    * Get all charts method
    * @returns {Observable<Response>}
    */
    getAllCharts(next?: number): Observable<Response> {
    	if (!next) {
    		return this._http.get('/charts').map(data => data.json());
    	} else {
    		return this._http.get('/charts?'+ next).map(data => data.json());
    	}
    }
}
