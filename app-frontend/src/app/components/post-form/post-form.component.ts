import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import io from 'socket.io-client';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  socketHost: any;
  socket: any;

  postForm: FormGroup;
  constructor(private fb: FormBuilder, private postService: PostService) {
    this.socketHost = 'http://localhost:3000';
    this.socket = io(this.socketHost);
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.postForm = this.fb.group({
      post: ['', Validators.required]
    });
  }

  //send post to server
  submitPost() {
    // test debug
    // console.log(this.postForm.value);
    this.postService.addPost(this.postForm.value).subscribe(data => {
      //emit refresh event
      this.socket.emit('refresh', {});
      //test debug
      // console.log(data);
      this.postForm.reset();
    });
  }
}
