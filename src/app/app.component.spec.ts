import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>; 
 beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      declarations: [AppComponent, HelloComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], 
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent); 
    app = fixture.debugElement.componentInstance; 
  });
  
 describe('on app creation', () => {
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
 });
});