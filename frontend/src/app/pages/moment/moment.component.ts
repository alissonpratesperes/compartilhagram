import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

import { environment } from  '../../../environments/environment';
import { Moment } from '../../interfaces/Moment';
import { Comment } from '../../interfaces/Comment';
import { MomentService } from '../../services/moment.service';
import { CommentService } from '../../services/comment.service';
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

          commentForm!: FormGroup;

            constructor(
              private route: ActivatedRoute,
              private router: Router,
              private momentService: MomentService,
              private commentService: CommentService,
              private messageService: MessageService
            ) { }

              ngOnInit(): void {
                const id = Number(this.route.snapshot.paramMap.get('id'));

                  this.momentService.getMoment(id).subscribe(item => this.moment = item.data);

                    this.commentForm = new FormGroup({
                      text: new FormControl('', [Validators.required]),
                      username: new FormControl('', [Validators.required]),
                    });
              }

                get text() {
                  return this.commentForm.get('text')!;
                }

                get username() {
                  return this.commentForm.get('username')!;
                }

                  async removeHandler(id: number) {
                    await this.momentService.removeMoment(id).subscribe();

                      this.messageService.addMoment('Momento excluído com sucesso!');

                        this.router.navigate(['/']);
                  }

                    async onSubmit(formDirective: FormGroupDirective) {
                      if(this.commentForm.invalid) {
                        return;
                      }

                        const data: Comment = this.commentForm.value;

                          data.momentId = Number(this.moment!.id);

                            await this.commentService.createComment(data).subscribe((comment) => {
                              this.moment!.comments!.push(comment.data);
                            });

                              this.messageService.addMoment('Comentário enviado com sucesso!');

                                this.commentForm.reset();

                                  formDirective.resetForm();
                    }
    }
