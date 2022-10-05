import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {}

  ngAfterContentInit() {
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngOnInit(): void {}
}
