import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { faFacebook, faWhatsapp, faLinkedin, faInstagram, faTwitter  } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  @ViewChild('navbar', {static: true}) navBar: ElementRef;
  navBarPosition: number;

  constructor(library: FaIconLibrary) {
    library.addIcons(faWhatsapp, faFacebook, faLinkedin, faInstagram, faTwitter);
   }
  hello(){
    console.log("Hello world");
  }

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  scrollFunction(elemRef: HTMLDivElement) {
    if (window.pageYOffset >= this.navBarPosition) {
      this.navBar.nativeElement.classList.add('sticky');
    } else {
      this.navBar.nativeElement.classList.remove('sticky');
    }
    console.log(this.navBar.nativeElement.classList);
  } 

  toggleNav(ele: HTMLDivElement, ico: HTMLButtonElement):void{
    let element = ele;
    let icon = ico;
    if (element.style.display == 'none'){
      element.style.display = 'block';
      icon.innerHTML = '&times;';
    }
    else{
      element.style.display = 'none';
      icon.innerHTML = '&#9776;';
    }
  }
  ngOnInit(): void {
    this.navBarPosition = this.navBar.nativeElement.offsetTop;
  }

  ngAfterViewInit(): void {
    this.navBarPosition = this.navBar.nativeElement.offsetTop;
  }

}
