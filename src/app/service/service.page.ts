import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  constructor() { }

  option= {
    slidesPerView:1.5,
    centerSlides: true,
    loop: true,
    spaceBetween: 10,
    //autoplay:true,
  }

  ngOnInit() {
  }

}
