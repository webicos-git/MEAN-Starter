import { Injectable } from '@angular/core';
import {Post} from './post.model';
import {WebRequestService} from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]

  constructor(private webRequestService: WebRequestService) { }

  createPost(title: string, description: string) {
    return this.webRequestService.post('posts', {title, description})
  }

  getPost() {
    return this.webRequestService.get('posts');
  }

  getPostById(id: string) {
    return this.webRequestService.getPostById('posts', id)
  }

  deletePost(id: string) {
    return this.webRequestService.delete('posts', id)
  }

  updatePost(title: string, description: string,id:string) {
    return this.webRequestService.patch('posts', {title, description},id)
  }

}
