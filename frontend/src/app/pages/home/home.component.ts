import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { MomentService } from '../../services/moment.service';
import { environment } from '../../../environments/environment';
import { Moment } from '../../interfaces/Moment';

  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

    export class HomeComponent implements OnInit {
      baseApiUrl = environment.baseApiUrl;

        allMoments: Moment[] = [];
        moments: Moment[] = [];

          constructor(
            private momentService: MomentService
          ) { }

            ngOnInit(): void {
              this.momentService.getMoments().subscribe((items) => {
                const data = items.data;

                  data.map((item) => {
                    item.created_at = new Date(item.created_at!).toLocaleDateString('pt-br');
                  });

                    this.allMoments = data;
                    this.moments = data;
              });
            }
    }
