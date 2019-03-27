import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      "blogId":"1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":["comedy", "humour"],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"This is blog 1"
    },
    {
      "blogId":"2",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"This is blog 1"
    },
    {
      "blogId":"3",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"This is blog 1"
    }
  ]

  public currentBlog;
  
  // method to return all the blogs
  public getAllBlogs(): any {
    return this.allBlogs;
  }

  constructor() {
    console.log("service constructor is called")
   }
  
   // method to get a particular blog
  public getSingleBlogInformation(currentBlogId): any {
    // using a for loop here from type script

    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
    
    console.log(this.currentBlog);
    return this.currentBlog;
  }
}
