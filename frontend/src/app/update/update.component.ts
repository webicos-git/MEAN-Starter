import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Post} from '../shared/post.model';
import {PostService} from '../shared/post.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  posts: Post[]
  title: string
  description: string
  id:string
  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id');
      this.id=idParam;
      this.postService.getPostById(idParam).subscribe((res: any) => {
        this.title = res.title;
        this.description = res.description

      });
    })

  }

  updatePost(form: NgForm) {
    console.log(form.value);
    this.postService.updatePost(form.value.title, form.value.description,this.id).subscribe((res: any) => {
      console.log(res);
    })
    this.router.navigateByUrl('home');
  }

}
