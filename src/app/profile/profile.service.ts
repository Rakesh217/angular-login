import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private data: String;
  constructor(public httpClient: HttpClient) {}

  sendData(): String {
    return this.data;
  }

  callProfileService() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
