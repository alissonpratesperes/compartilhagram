import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Moment } from '../../interfaces/Moment';
import { MomentService } from '../../services/moment.service';
import { MessageService } from '../../services/message.service';

  @Component({
    selector: 'app-editmoment',
    templateUrl: './editmoment.component.html',
    styleUrls: ['./editmoment.component.css']
  })

    export class EditmomentComponent implements OnInit {
      buttonText = 'Editar!';

        moment!: Moment;

          constructor(
            private momentService: MomentService,
            private messageService: MessageService,
            private route: ActivatedRoute,
            private router: Router
          ) { }

            ngOnInit(): void {
              const id = Number(this.route.snapshot.paramMap.get('id'));

                this.momentService.getMoment(id).subscribe(item => {
                  this.moment = item.data;
                });
            }

              async editHandler(formData: Moment) {
                const id = this.moment.id;
                const momentData = new FormData();

                  momentData.append('title', formData.title);
                  momentData.append('description', formData.description);

                    if(formData.image) {
                      momentData.append('image', formData.image);
                    }

                      await this.momentService.updateMoment(id!, momentData).subscribe();

                        this.messageService.addMoment(`Momento ${id} atualizado com sucesso!`);

                          this.router.navigate(['/']);
              }
    }
