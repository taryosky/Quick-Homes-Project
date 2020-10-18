import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faBath, faBed, faToilet, faCar, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { Property } from '../property.model'


@Component({
  selector: 'app-min-property-display',
  templateUrl: './min-property-display.component.html',
  styleUrls: ['./min-property-display.component.css']
})
export class MinPropertyDisplayComponent implements OnInit {
  property: Property
  constructor(library: FaIconLibrary) {
    library.addIcons(faBed, faBath, faToilet, faCar, faMapMarker);
    this.property = new Property(4, "For Rent", "New Detached building in lekki phase 1", 4, 4, "A new house built in the heart of lekki for those who are seeking for confort", "Lekki Phase 1");
   }


  ngOnInit(): void {
  }

}
