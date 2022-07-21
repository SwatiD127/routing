import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { reduce } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
disable:boolean=true
  constructor() { }
firstname='Inerpolation'
clsname='one'
clsname2='two'
showMsg=true
colorVal='red'
colorVal2='yellow'
giveMeRed='giveMe'
num:any;
data:any=[]
title="Interpolation function"
itemImageUrl='assets/aa.png'
items=[{name:'swati',rollno:7}]
  ngOnInit(): void {
  }

  onClick(){
    alert("Event Binding Performed")
  }
 getTitle()
 {
   return this.title
 }
 max(firstno:number,secondno:number){
 return Math.max(firstno,secondno)
 }  
}
