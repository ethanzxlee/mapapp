import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
// import { Style } from 'mapbox-gl';

import * as models from '@uow-map/models';
import * as constant from '@uow-map/constants';

@Injectable()
export class CampusApiService {
    constructor(private http: HttpClient) {}

    getCampuses(): Observable<models.Campus[]> {
        return this.http.get<models.Campus[]>(`${constant.API_BASE_URL}campuses/`);
    }

    getCampus(id: string | number): Observable<models.Campus> {
        return this.http.get<models.Campus>(`${constant.API_BASE_URL}campuses/${id}/`);
    }

    getMapStyle(campusId: string | number): Observable<any> {
        return this.http.get<any>(
            `${constant.API_BASE_URL}map-nodes/mapbox-style/?campus=${campusId}`
        );
    }
}
