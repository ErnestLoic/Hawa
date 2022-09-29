import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.page.html',
  styleUrls: ['./cours.page.scss'],
})
export class CoursPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Seances = [
    {
      id:1,
      titre:"Entrepreneuriat",
      responsable:"Dr MONDO",
      semestre: 2
    },
    {
      id:2,
      titre:"L'entreprise dans le contexte Africain",
      responsable:"Dr MELACHIO",
      semestre: 2
    },
    {
      id:3,
      titre:"Ethique de l'ingénieur",
      responsable:"M BATA",
      semestre: 2
    },
    {
      id:4,
      titre:"Compilation",
      responsable:"Pr KOUAMOU",
      semestre: 2
    },
    {
      id:5,
      titre:"Architecture des SI",
      responsable:"Dr KEGNE",
      semestre: 2
    },
    {
      id:6,
      titre:"Théorie et codage",
      responsable:"Pr NDOUNDAM",
      semestre: 2
    },
  ]
}
