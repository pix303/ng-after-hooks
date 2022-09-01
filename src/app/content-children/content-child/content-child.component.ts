import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { DateViewerDirective } from '../date-viewer.directive';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements AfterContentInit {

  @ContentChild("imageRef", { read: ViewContainerRef }) child!: ViewContainerRef;
  @ContentChild(DateViewerDirective) dateViewer!: DateViewerDirective;

  constructor() { }

  ngAfterContentInit(): void {
    console.log("projected child matched by selector");
    console.log(this.child);
    console.log("projected child matched by directive type");
    console.log(this.dateViewer.currentDate)
  }

}
