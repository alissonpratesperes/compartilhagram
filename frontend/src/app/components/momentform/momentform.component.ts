import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-momentform',
  templateUrl: './momentform.component.html',
  styleUrls: ['./momentform.component.css']
})
export class MomentformComponent implements OnInit {

  @Input() buttonText!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
