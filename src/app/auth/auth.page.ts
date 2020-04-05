import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
isloading: boolean = false;
islogin: boolean = true;

email: string='';
password:string='';
@Input() formGroup: FormGroup;
  constructor(private authservice: AuthService,private router: Router, private loadingctrl: LoadingController) { }

  ngOnInit() {
    
  }



  
  onlogin(){
    this.isloading = true;
    this.authservice.login();
    
    this.loadingctrl.create({ keyboardClose:true , message:'جاري التحقق من حسابك ',spinner:'dots' })
    .then(leadElement =>{
leadElement.present();
setTimeout( ()=> {
  this.isloading = false;
  
  leadElement.dismiss();
  this.router.navigate(['/places/tabs/discover']);
  console.log(this.email,this.password);
},1500);



    });

}
onsignin(){
this.islogin = !this.islogin;


}

onSubmit(form:NgForm ){
  
  if(!form.valid){

return;

  }
  this.email = form.value.email;
  this.password = form.value.password;
  console.log(this.email,this.password);
if(this.islogin){

  //send request to login server

} else {

//send request to signe in server

}

  }




  
}
