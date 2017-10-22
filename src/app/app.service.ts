import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';                                
import 'rxjs/add/operator/map';


@Injectable()
export class ChartsService {

    constructor(private _http:Http) {}

    /**
    * Get all offers method
    * @returns {Observable<Response>}
    */
    getAllCharts(): Observable<Response> {
        return this._http.get('/charts').map(data => data.json());
    }
}
