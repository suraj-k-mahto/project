import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private apiService: ApiService
  ) { }

  login(body: Object) {
    return this.apiService.post('/user/login', body)
      .map(result => {
        return result;
      })
  }
  signUp(body: Object) {
    return this.apiService.post('/user/register', body)
      .map(result => {
        return result;
      })
  }
}
