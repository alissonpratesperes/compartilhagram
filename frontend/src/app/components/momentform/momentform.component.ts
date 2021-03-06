import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Moment } from '../../interfaces/Moment';

  @Component({
    selector: 'app-momentform',
    templateUrl: './momentform.component.html',
    styleUrls: ['./momentform.component.css']
  })

    export class MomentformComponent implements OnInit {

      @Output() onSubmit = new EventEmitter<Moment>()
      @Input() buttonText!: string;
      @Input() momentData: Moment | null = null;

        momentForm!: FormGroup;

          constructor() { }

            ngOnInit(): void {
              this.momentForm = new FormGroup({
                id: new FormControl(this.momentData ? this.momentData.id : ''),
                title: new FormControl(this.momentData ? this.momentData.title : '', [
                  Validators.required
                ]),
                description: new FormControl(this.momentData ? this.momentData.description : '', [
                  Validators.required
                ]),
                image: new FormControl('')
              });
            }

              get title() {
                return this.momentForm.get('title')!;
              }

              get description() {
                return this.momentForm.get('description')!;
              }

                onFileSelected(event: any) {
                  const fileSelected: File = event.target.files[0];
                    this.momentForm.patchValue({
                      image: fileSelected
                    });
                }

                submit() {
                  if(this.momentForm.invalid) {
                    return;
                  }
                    console.log(this.momentForm.value);
                    this.onSubmit.emit(this.momentForm.value);
                }

    }
