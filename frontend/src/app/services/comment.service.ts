import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comment } from '../interfaces/Comment';
import { Response } from '../interfaces/Response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/moments/`;

    constructor(
      private http: HttpClient
    ) { }

      createComment(data: Comment): Observable<Response<Comment>> {
        return this.http.post<Response<Comment>>(this.apiUrl + data.momentId + '/comments', data);
      }
}
