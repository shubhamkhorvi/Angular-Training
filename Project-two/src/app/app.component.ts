import { Component, OnInit } from '@angular/core';
import { arithematicTest } from './arithematicTest';
import { bankv2 } from './bankv2';
import { bankv1 } from './bankv1';
import { parent } from './parent';
import { child } from './child';
import { boy } from './boy';
import { Iboy } from './Iboy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends arithematicTest implements OnInit{
  title = 'Project-two';
  myVar1: arithematicTest = new arithematicTest();
  bank1: bankv1 = new bankv1();
  bank2: bankv2 = new bankv2();

  p1 = new parent();
  c1 = new child();

  myBoy = new boy();
  itadaori: Iboy = { name: "Itadori", age: 18, likes: ['Jenifer Lawrence'], school: "Jujutsu Kaisen"};

  num1!: number;
  num2!: number;
  num3!: number;

  
  message="I am from INDIA"
  product={id:101,name:'Iphone 13',price:98000}
  val=98.123456789
  currentdate=new Date()  


  productList=[
    {id:101,name:'Iphone 13',price:98000},
    {id:102,name:'Iphone 12 Mini',price:45000},
    {id:103,name:'HP Headphone',price:1600},
    {id:104,name:'Dell Mouse',price:900}
  ]
  
  isActive=false;

  city="Mumbai";

  ngOnInit(): void {
    this.myVar1.sum(60,9);
    this.myVar1.sub(60,9);
    this.bank1.withdraw();
    this.bank2.withdraw();

    this.c1.childId = 10;
    this.c1.parentId = 20;
    this.p1.parentId =300;

    this.displayPndC();
    this.myBoy.giveIntro();
    this.myBoy.boyDeets = this.itadaori;
    this.myBoy.giveIntro();    
  }

  displayPndC(): void{
    console.log(this.c1);  
    console.log(this.p1);
  }
  
  div(a:any,b:any){
    try{
      event?.preventDefault();
      this.num1 = Number.parseInt(a.value);
      this.num2 = Number.parseInt(b.value);
      if(this.num2===0)
      {   this.num3 = 0;
          throw new Error('Division by zero not allowed')
      }
      this.num3 = this.num1 / this.num2;
    }
    catch(err){
      console.error('An Error Found:'+err)
    }

  } 
}
