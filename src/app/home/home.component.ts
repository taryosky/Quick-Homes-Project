import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locations: any;

  constructor() {
    this.locations = [
                      {name:"Port Harcoutr L.G.A", villages:["Aziabie Town", "Abuloma","Borokiri", "D-Line", "Mile 1", "Mile 2"]},
                      {name: "Obio-Akpor L.G.A", villages: ["Atali", "Eliozu", "Elioparanwo", "Awalama"]},
                      {name: "Eleme L.G.A", villages:["Aabon", "Aleto", "Kalebon", "Ogale"]},
                      {name: "Ekwere L.G.A", villages: ["Adanta", "Agwa/Nuahua", "Igwuruta-Ali"]}
  ]
    
   }

  ngOnInit(): void {
  }

}
