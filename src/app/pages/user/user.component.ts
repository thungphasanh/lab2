import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(private route:ActivatedRoute, private router:Router){}
  userid: any;
  ngOnInit(): void {
      this.userid=this.route.snapshot.params['id'];
  }
  goHome():void{
    this.router.navigate(['']);
}
}