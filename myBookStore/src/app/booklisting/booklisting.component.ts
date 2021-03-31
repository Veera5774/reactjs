import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mbs-booklisting',
  templateUrl: './booklisting.component.html',
  styleUrls: ['./booklisting.component.css']
})
export class BooklistingComponent implements OnInit {

  bookList:any = [
    {name:'Steel and Fire', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image:'book01.jpg', price:10},
    {name:'First Magnitude', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image:'book02.jpg', price:12}, 
    {name: 'Game of Thrones', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image:'book03.jpg', price:15}, 
    {name: 'The Influence of Sea Power', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image:'book04.jpg', price:18},
    {name: 'Lord of Light', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image:'book05.jpg', price:11}, 
    {name: 'The Great Jewel Robbery', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image:'book06.jpg', price:13}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
