import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-notices',
  templateUrl: './card-notices.component.html',
  styleUrls: ['./card-notices.component.css']
})
export class CardNoticesComponent {
  @Input() id:string = "";
  @Input() title_banner:string = "";
  @Input() image_banner:string = "";
}