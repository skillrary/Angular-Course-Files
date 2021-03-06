import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];
  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.getAllPosts()
    .subscribe(res => {
      this.posts = res;
    });
  }

  deletePost(id: number) {
    this.postService.deletePost(id)
    .subscribe(res => {
      console.log(res);
    });
  }

}
