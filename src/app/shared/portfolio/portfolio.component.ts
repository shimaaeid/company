import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  filteredRecord: any;
  active: any = '#contact';

  constructor(public _lightbox: Lightbox) {}
  data = [
    {
      title: 'Katara Fountain',
      text: 'Abstract',
      src: 'assets/images/portfolio/19.jpg',
      type: 'Photography'
    },
    {
      title: 'Fireworks',
      text: 'Abstract',
      src: 'assets/images/portfolio/10.jpg',
      type: 'Photography'
    },

    {
      title: 'Lusail Ramadan',
      text: 'Books',
      src: 'assets/images/portfolio/14.jpg',
      type: 'Festival'
    },
    {
      title: 'Fireworks',
      text: 'Abstract',
      src: 'assets/images/portfolio/21.jpg',
      type: 'Photography'
    },
    {
      title: 'Lusail Ramadan',
      text: 'V-card',
      src: 'assets/images/portfolio/15.jpg',
      type: 'Festival'
    },
    {
      title: 'Lusail Ramadan',
      text: 'Abstract',
      src: 'assets/images/portfolio/16.jpg',
      type: 'Festival'
    },
    {
      title: 'Mockup Collection',
      text: 'Abstract',
      src: 'assets/images/portfolio/17.jpg',
      type: 'Designing'
    },
    {
      title: 'Abstract images',
      text: 'Abstract',
      src: 'assets/images/portfolio/18.jpg',
      type: 'Photography'
    },
  ];


  open(index: number): void {
    this._lightbox.open(this.filteredRecord, index);
  }

  ngOnInit() {
    this.filteredRecord = this.data;
  }

  ScrollIntoView(elem: string) {
    this.active = elem;
    let ele = document.querySelector(elem) as any;
    ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
