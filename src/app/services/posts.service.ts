import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get(`${this.baseUrl}/api/posts`);
  }

}
