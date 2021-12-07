import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: {
    body: string,
    title: string,
    id: number,
    userId: number
  } = {
    body: '',
    title: '',
    id: 0,
    userId: 0
  };
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.postService.getPostDetails(id)
    .subscribe(res => {
      this.post = res;
    });
  }

}
