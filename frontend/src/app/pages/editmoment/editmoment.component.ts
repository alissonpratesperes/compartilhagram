import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Moment } from '../../interfaces/Moment';
import { MomentService } from '../../services/moment.service';

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
            private route: ActivatedRoute
          ) { }

            ngOnInit(): void {
              const id = Number(this.route.snapshot.paramMap.get('id'));

                this.momentService.getMoment(id).subscribe(item => {
                  this.moment = item.data;
                });
            }
    }
