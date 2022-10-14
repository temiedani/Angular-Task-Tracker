import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() color: string = '';
  @Input() text: string = '';

  @Output() addbtnClick = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  // AddButton Click event
  onClick() {
    this.addbtnClick.emit();
  }
}
