import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PostService} from '../post.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent  {
 /// msg = false;
  
  
    
  constructor(
    public postService: PostService,
    ) { }

  
    addNewName() {
      const newName = {bankname:"Madurai bank",
      pannumber:"JKGHJ78839",
      licensenumber:"KJHJ7888",
      mobileno:"9896745338",
      gstnumber:"JGk73328",
      ssinumber:"eihg92223",
      tinnumber:"JGJH9945",
      email:"anitha@danfishel.com",
      registeredaccountid:"UTY822669"


      };
  
  
      
 /// post: any;

 //// ngOnInit(): void {
    this.postService.postList(newName).subscribe(data => {
      ///this.post = data;
      console.log(data);
     /// this.msg = true;
    })

  

    }}
