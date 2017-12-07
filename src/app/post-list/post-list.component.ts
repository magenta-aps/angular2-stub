import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {

  isLoading = false;
  posts;

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this.isLoading = true;

    this._postService.getPosts()
    .subscribe(posts => {
      this.isLoading = false;
      this.posts = posts;
    });
  }

  viewPost(id) {
    console.log('clicked on post id ' + id);
  }

}
