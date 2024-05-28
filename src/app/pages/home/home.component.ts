import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(){
    console.log("constructor");
  }
  phones:any[]=[]
  timer:any
  ngOnInit(): void {
    console.log("ngOnInit");
    this.phones=["apple", "samsung", "oppo"]
    this.timer = setInterval(() => {
      console.log("timer")
    },1000)
  }
  ngAfterViewInit(): void {
      console.log("ngAfterViewInit");
      var samsungli = document.getElementById("samsung");
      console.log(samsungli)
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    clearInterval(this.timer)
  }
}
