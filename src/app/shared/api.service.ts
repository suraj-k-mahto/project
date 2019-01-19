import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import { JwtService } from './jwt.service';
// import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class ApiService {

    isHttpProtocol: boolean;

    constructor(
        private http: Http,
        //  private jwtService: JwtService,
        @Inject(DOCUMENT) private document
    ) {
        let url = document.location.protocol;
        console.log("Api service isHttpProtocol ", url);
        if (url === 'http:') {
            this.isHttpProtocol = true;
        }
        if (url === 'https:') {
            this.isHttpProtocol = false;
        }
    }

    private setHeaders(): Headers {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        // if (this.jwtService.getToken()) {
        //     headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
        // }
        return new Headers(headersConfig);
    }

    private formatErrors(error: any) {
        return Observable.throw(error.json());
    }

    get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        return this.http.get(
            (this.isHttpProtocol === true) ? `${environment.api_url}${path}` : `${environment.api_url_https}${path}`,
            { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map((res: Response) => res.json());
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(
            (this.isHttpProtocol === true) ? `${environment.api_url}${path}` : `${environment.api_url_https}${path}`,
            JSON.stringify(body),
            { headers: this.setHeaders() }
        )
            .catch(this.formatErrors)
            .map((res: Response) => res.json());
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            (this.isHttpProtocol === true) ? `${environment.api_url}${path}` : `${environment.api_url_https}${path}`,
            JSON.stringify(body),
            { headers: this.setHeaders() }
        )
            .catch(this.formatErrors)
            .map((res: Response) => res.json());
    }

    delete(path): Observable<any> {
        return this.http.delete(
            (this.isHttpProtocol === true) ? `${environment.api_url}${path}` : `${environment.api_url_https}${path}`,
            { headers: this.setHeaders() }
        )
            .catch(this.formatErrors)
            .map((res: Response) => res.json());
    }
}
