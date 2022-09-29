import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');

  ngOnInit() {
    this.changeFormat(this.today);
  }

  onClick(s){
    localStorage.setItem("seance", JSON.stringify(s));
    this.router.navigate(['/student/cours-checkout']);
  }

  
  changeFormat(today){
    let ChangedFormat = this.pipe.transform(this.today, 'dd/MM/YYYY');
    this.changedDate = ChangedFormat;
    console.log(this.changedDate);
  }

  Seances = [
    {
      id:1,
      titre:"Entrepreneuriat",
      responsable:"Dr MONDO",
      heurDebutPrevu:"8h00",
      heurFinPrevu:"9h50"
    },
    {
      id:2,
      titre:"L'entreprise dans le contexte Africain",
      responsable:"Dr MELACHIO",
      heurDebutPrevu:"13h00",
      heurFinPrevu:"16h00"
     
    },
  ]
}
