
import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './mapstyles';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
   //Para la paginación
   title = 'google-maps';
   constructor(private map:google.maps.Map) { }

  ngOnInit(): void {
    let loader=new Loader({
      apiKey:'AIzaSyAaHGwUhOdRfImNHEMraZWSmYtc98YFBMc'
    })

    loader.load().then(()=>{

      console.log('loaded gmaps')
      const location = { lat:9.748917, lng: -83.753428}

        this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: location, 
        zoom:8,
        styles: styles
      })
      
      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });

    })
  }

}