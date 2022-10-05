import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @ViewChild('content', { static: true }) newServerContent: ElementRef;
  // newServerName = '';
  // newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverName.value,
      content: this.newServerContent.nativeElement.value,
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverName.value,
      content: this.newServerContent.nativeElement.value,
    });
  }
}
