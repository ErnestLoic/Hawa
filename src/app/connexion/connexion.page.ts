import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(
    private fb: FormBuilder,
    public loadingCtrl: LoadingController,
    private router: Router
  ) { }

  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';

  ngOnInit() {
    this.ionViewDidEnter();
  }
  error_msg = {
    'email': [
      { 
        type: 'required', 
        message: 'Entrez une adresse mail' 
      },
      { 
        type: 'pattern', 
        message: 'Adresse invalide' 
      }
    ],
    'password': [
      { 
        type: 'required', 
        message: 'Entrez votre mot de passe' 
      },
      { 
        type: 'minlength', 
        message: 'Le mot de passe doit avoir au moins 6 caractères' 
      }
    ]
  };
  gotoAccueil() {
    this.router.navigateByUrl('student/accueil');
  }
  ionViewDidEnter(){
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }
}
