import { Sonuc } from './../../models/Sonuc';
import { AlertService } from './../../services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public apiServis:ApiService,
    public alert:AlertService
  ) { }

  ngOnInit() {
  }
  OturumAc(kadi:string,parola:string){
    this.apiServis.tokenAl(kadi,parola).subscribe((d:any)=>{
      console.log(d);
    }, err=>{
      var s: Sonuc = new Sonuc();
      s.islem=false;
      s.mesaj="Kullanıcı Adı veya Parola Geçersiz!!";
      this.alert.AlertUygula(s);
    })
  }

}
