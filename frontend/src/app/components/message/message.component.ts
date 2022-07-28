import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MessageService } from '../../services/message.service';

  @Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
  })

    export class MessageComponent implements OnInit {
      faTimes = faTimes;

      constructor(
        public messageService: MessageService
      ) { }

      ngOnInit(): void {
      }

    }
