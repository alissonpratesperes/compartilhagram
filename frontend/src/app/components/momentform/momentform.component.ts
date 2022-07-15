import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

  @Component({
    selector: 'app-momentform',
    templateUrl: './momentform.component.html',
    styleUrls: ['./momentform.component.css']
  })

    export class MomentformComponent implements OnInit {

      @Input() buttonText!: string;

        momentForm!: FormGroup;

          constructor() { }

            ngOnInit(): void {
              this.momentForm = new FormGroup({
                id: new FormControl(''),
                title: new FormControl('', [ Validators.required ]),
                description: new FormControl('', [ Validators.required ]),
                image: new FormControl('')
              });
            }

              get title() {
                return this.momentForm.get('title')!;
              }

              get description() {
                return this.momentForm.get('description')!;
              }

                submit() {
                  if(this.momentForm.invalid) {
                    return;
                  }

                    console.log('Enviou formulário.');
                }

    }
