import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Moment } from '../../interfaces/Moment';
import { MomentService } from '../../services/moment.service';
import { MessageService } from '../../services/message.service';

  @Component({
    selector: 'app-newmoment',
    templateUrl: './newmoment.component.html',
    styleUrls: ['./newmoment.component.css']
  })

    export class NewmomentComponent implements OnInit {
      buttonText = 'Compartilhar!';

        constructor(
          private momentService: MomentService,
          private messageService: MessageService,
          private router: Router
        ) { }

          ngOnInit(): void { }

            async createHandler(moment: Moment) {
              const momentData = new FormData();

                momentData.append('title', moment.title);
                momentData.append('description', moment.description);

                  if(moment.image) {
                    momentData.append('image', moment.image);
                  }

                    await this.momentService.createMoment(momentData).subscribe();

                      this.messageService.addMoment('Momento criado com sucesso!');

                        this.router.navigate(['/']);
            }
    }
