import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from './post/post.component';
import {CardComponent} from './card/card.component';
import {UpdateComponent} from './update/update.component';

const routes: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'home', component: CardComponent },
  { path: 'update/:id', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
