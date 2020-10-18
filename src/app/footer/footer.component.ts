import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  popularAreas: string[];

  constructor(library: FaIconLibrary) { 
    library.addIcons(faWhatsapp, faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin, faPhone, faEnvelope);
    this.popularAreas = ["G.R.A", "Rumuola","Rumuokoro", "Eliozu", "Mile 2"];
  }

  ngOnInit(): void {
  }

}
