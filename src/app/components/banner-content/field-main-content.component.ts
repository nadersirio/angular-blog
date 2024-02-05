import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-main-content',
  templateUrl: './field-main-content.component.html',
  styleUrls: ['./field-main-content.component.css']
})
export class FieldMainContentComponent {
  @Input() titleBanner:string = "";
  @Input() fieldContent:string = "";
  @Input() imageContent: { url: string; w: string; h: string; alt: string }[] = [];
}