import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() onClicked = new EventEmitter();
  header: string;

  constructor() {}

  onClick(e: PointerEvent) {
    const val = e.target as HTMLElement;

    this.onClicked.emit(val.textContent);
  }
}
