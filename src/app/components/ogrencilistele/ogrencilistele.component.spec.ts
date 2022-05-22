/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OgrencilisteleComponent } from './ogrencilistele.component';

describe('OgrencilisteleComponent', () => {
  let component: OgrencilisteleComponent;
  let fixture: ComponentFixture<OgrencilisteleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgrencilisteleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrencilisteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
