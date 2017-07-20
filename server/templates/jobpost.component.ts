import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styles: []
})
export class JobPostComponent implements OnInit {

  @Input() data:any;

  constructor(private auth:AuthService) { }


  ngOnInit() {
  }

}
