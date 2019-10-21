import { Component, OnInit } from '@angular/core';
import { getElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
bindingTest:string;
  constructor() { 

  }

  ngOnInit() {
    this.bindingTest = 'this is a sample of binding test';
    
  }

  testSum(num1:number, num2:number){
    return num1 + num2;

  }

  unTestFunction(){
    return true;
  }
  
}
