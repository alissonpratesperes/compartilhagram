import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

import { environment } from  '../../../environments/environment';
import { Moment } from '../../interfaces/Moment';
import { MomentService } from '../../services/moment.service';

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
            private momentService: MomentService,
            private route: ActivatedRoute
          ) { }

            ngOnInit(): void {
              const id = Number(this.route.snapshot.paramMap.get('id'));

                this.momentService.getMoment(id).subscribe(item => this.moment = item.data);
            }

    }
