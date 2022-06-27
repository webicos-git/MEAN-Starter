import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/post.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  createNewPost(form: NgForm) {
    console.log(form.value);
    this.postService.createPost(form.value.title, form.value.description).subscribe((res: any) => {
      console.log(res);
    })
    this.router.navigateByUrl('home');
  }

}
