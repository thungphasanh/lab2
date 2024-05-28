import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;
  constructor(){
    this.rating= 0;
    this.starWidth= this.rating*86/5;
  }
  ngOnChanges():void{
    this.starWidth= this.rating*86/5;
  }
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  onClick():void{
    this.ratingClicked.emit(`Danh gia cua san pham la ${this.rating} sao!`);
  }
  ngOnInit(): void {
  }
}
