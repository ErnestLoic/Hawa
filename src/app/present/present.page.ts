import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-present',
  templateUrl: './present.page.html',
  styleUrls: ['./present.page.scss'],
})
export class PresentPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  goToSignIn() {
    this.router.navigateByUrl('connexion');
  }
}
