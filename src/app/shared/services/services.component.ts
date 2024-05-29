import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      logo: 'file-info-alt',
      title: 'Documentaries',
      desc: 'Implementing documentaries inside and outside Qatar while challenging all circumstances and places in a distinctive manner'
    },
    {
      logo: 'medium-m',
      title: 'Motion Graphic',
      desc: "Writing content as required (commercial, entertainment, educational) With the article at hand."
    },
    {
      logo: 'users-alt',
      title: 'Organization',
      desc: 'A team specialized in events and exhibitions at all levels'
    },
    {
      logo: 'bing',
      title: 'Professional Advertising',
      desc: 'Professional Advertising for all brands and events'
    },
    {
      logo: 'eye',
      title: 'Visual Identity',
      desc: 'Developing a visual identity for the company, by laying the foundations for using the logo, determining color shades, the official font, and all other visual identity elements, including sizes, colors, measurements, etc.'
    },
    {
      logo: 'camera-change',
      title: 'Photography',
      desc: 'Photography services for all occasions And the video.'
    },
    {
      logo: 'google',
      title: 'SEO',
      desc: 'Improving the search engine process in Google after a long study and noticable results after  the complation period'
    },
    {
      logo: 'apps',
      title: 'Social Media',
      desc: 'Managing social media platforms of all kinds (Facebook - Instagram - Twitter - Snapchat - etc..)'
    },
    {
      logo: 'megaphone',
      title: 'Marketing Compaigns',
      desc: 'It is important to carry out a marketing campaign, but after studying the market and the appropriate time for the campaign, we help the client to take his steps carefully.'
    },
    {
      logo: 'tv-retro',
      title: 'TV programs',
      desc: 'Preparing television programs - producing television programs in all their forms - providing a group of distinguished media professionals'
    },
    {
      logo: 'flip-h',
      title: 'Radio programs',
      desc: 'Talk and live programs - medical and educational programs - broadcasts - implementing audio advertisements'
    },
  ]
}
