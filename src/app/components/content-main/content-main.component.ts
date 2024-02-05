import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})
export class ContentMainComponent {
  @Input() titleBanner:string = ""
  @Input() personField:{url:string, w:string, h:string}[] = []
  @Input() personInformations:string = ""
}
