import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addNewPost: FormGroup;

  constructor(
    private auth: AuthService,
    private postService: PostService
  ) {
    this.addNewPost = new FormGroup({
      title: new FormControl('', []),
      body: new FormControl('', []),
      userId: new FormControl(this.auth.userId, [])
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit() {
    if (!this.addNewPost.valid) {
      this.addNewPost.markAllAsTouched();
      return;
    }
    console.log(this._v);

    this.postService.addPost(this._v)
    .subscribe(res => {
      console.log(res);
    });
  }
  get _v() {
      return this.addNewPost.value;
  }

  getformControl(formControl: any) {
    return this.addNewPost.get(formControl) as FormArray;
  }

}
