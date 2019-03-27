import { Injectable } from '@angular/core';

//importing http client to make the requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1';
  
  constructor() { 
    console.log("blog-http service was called");
  }
  
  public getAllBlogs(): any {
    return this.allBlogs;
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
 