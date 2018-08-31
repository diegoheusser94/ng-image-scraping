import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }

  getSite(url: string): Promise<any> {
    return this.http.get(url).toPromise();
  }

}
