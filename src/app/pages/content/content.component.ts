import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() title_banner:string = ""
  @Input() user_image_info:{url:string, w:string, h:string}[] = []
  @Input() user_info:string = ""
  @Input() title_field_content:string = "";
  @Input() field_content:string = "";
  @Input() image_field_content: { url: string; w: string; h: string; alt: string }[] = [];

  private id:string | null = ""
  constructor (
    private route:ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
    if(result) {
      this.title_banner = result.title_banner !== undefined ? result.title_banner : "";
      this.user_image_info = result.user_image_info !== undefined ? result.user_image_info : [];
      this.user_info = result.user_info !== undefined ? result.user_info : "";
      this.title_field_content = result.title_field_content !== undefined ? result.title_field_content : "";
      this.field_content = result.field_content !== undefined ? result.field_content : "";
      this.image_field_content = result.image !== undefined ? result.image : [];
    }
  }
}
