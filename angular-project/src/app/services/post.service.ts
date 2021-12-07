import { Injectable } from '@angular/core';
import { urls } from '../constants/app.constants';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private restService: RestApiService
  ) { }

  getAllPosts() {
    return this.restService.get(urls.posts);
  }

  getPostDetails(id: string) {
    return this.restService.get(`${urls.posts}/${id}`);
  }
}
