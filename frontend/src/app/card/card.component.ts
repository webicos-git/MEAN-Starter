import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/post.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  posts: any[]

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getPost().subscribe((res: any) => {
      console.log(res);
      this.posts = res;
    })
  }

  deletePost(id: string) {
    this.postService.deletePost(id).subscribe((res: any) => {
      const postIndex = this.posts.findIndex(p => p._id === id)
      if (postIndex == -1) return
      this.posts.splice(postIndex, 1)
    })
  }

  updatePost(id: string) {
    this.router.navigate(['update/', id])
  }

}
