import { ComponentFixture, fakeAsync, TestBed, tick, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    })

    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should bind invalid', () => {
    component.onLogin();
    expect(component.user.userName).toEqual('');
    expect(component.user.password).toEqual('');
  });

  it('Should Check logic metode onLogin ', async function () {
    component.user.userName = 'admin';
    component.user.password = 'admin';
    await component.onLogin();
    expect(component.res.message).toEqual('succesfully');

  });

  it('clic should invoke on login', fakeAsync(() => {
    spyOn(component, 'onLogin');
    let btn = fixture.debugElement.nativeElement.querySelector('button');
    btn.click();
    tick();
    expect(component.onLogin).toHaveBeenCalled();

  }));
});
