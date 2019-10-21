import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponent } from './sample.component';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a h1 tag with innerHTML property as "title"',() =>{
    expect(document.getElementById('testTitle').innerHTML).toMatch('title');
  });
  it('should create a p tag with content',() =>{
    expect(document.getElementById('testContent')).toBeTruthy;
  });
  it('should add two paramenters',function(){
    expect(component.testSum(3,5)).toEqual(8);
});
  it('should test the binding property for the 3rd line text',()=>{
    expect(document.getElementById('binding').innerHTML).toMatch('this is a sample of binding test');
  });
  it('should not pass the test,',() =>{
    expect(document.getElementById('btn').innerHTML).toMatch('nottested');
  });
});
