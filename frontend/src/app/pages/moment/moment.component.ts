import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

import { environment } from  '../../../environments/environment';
import { Moment } from '../../interfaces/Moment';
import { MomentService } from '../../services/moment.service';
import { MessageService } from '../../services/message.service';

  @Component({
    selector: 'app-moment',
    templateUrl: './moment.component.html',
    styleUrls: ['./moment.component.css']
  })

    export class MomentComponent implements OnInit {
      baseApiUrl = environment.baseApiUrl;

        moment?: Moment;
        faTimes = faTimes;
        faEdit = faEdit;

          constructor(
            private route: ActivatedRoute,
            private router: Router,
            private momentService: MomentService,
            private messageService: MessageService
          ) { }

            ngOnInit(): void {
              const id = Number(this.route.snapshot.paramMap.get('id'));

                this.momentService.getMoment(id).subscribe(item => this.moment = item.data);
            }

              async removeHandler(id: number) {
                await this.momentService.removeMoment(id).subscribe();

                  this.messageService.addMoment('Momento excluído com sucesso!');

                    this.router.navigate(['/']);
              }
    }
