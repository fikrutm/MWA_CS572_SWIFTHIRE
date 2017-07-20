import { Component} from '@angular/core';
import { AuthService } from "../services/auth.service";
import {JobService} from '../services/job.service';
import { Subscription } from 'rxjs/Rx'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
 // styleUrls: ['./jobe.component.css']
})
export class SearchComponent {

  lat: Number;
  long: Number;

  public subscription: Subscription;
  //public jobs:{};
  
  public posts;
  constructor(private jobService: JobService,private auth:AuthService) {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       
        //console.log(this.lat);
         this.jobService.getTenJob(position.coords.longitude, position.coords.latitude).subscribe(data=> 
      {
        this.posts = data;
      console.log(this.posts);});
    
      });
    }

    console.log('before get ten'+this.lat);
   

  }
//   constructor(private jobService:JobService, private auth:AuthService){


//      if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         this.lat = position.coords.latitude;
//         this.long = position.coords.longitude;
//         console.log('inside '+this.lat);
//       });
//     }

    
//     console.log('this is diffrent'+this.lat+this.long);
//  this.jobService.getTenJob(this.long,this.lat).map(data=> this.posts = data);
//   //  this.jobService.getTenJob('-91.9669674','41.0230116').subscribe(
//   //    data=>{
//   //      this.posts=data
//   //     console.log(this.posts)
//   //  });



//   } 
  }



  
//}
