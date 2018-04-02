import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import * as models from '@uow-map/models';
import * as constant from '@uow-map/constants';

@Injectable()
export class MapboxApiService {
    constructor(private http: HttpClient) {}

    getToken(): Observable<string> {
        return this.http
            .get<models.MapboxTokenWrapper>(`${constant.API_BASE_URL}mapbox/token/`)
            .pipe(map(tokenWrapper => tokenWrapper.token));
    }
}
