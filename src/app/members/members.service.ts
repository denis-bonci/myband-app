import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Member } from './member';
import { environment } from '../../environments/environment';

@Injectable()
export class MembersService {
  private apiUrl = environment.apiUrl + '/members';

  constructor(private http: Http) { }

  getMembers(): Observable<Member[]> {
      return this.http.get(this.apiUrl)
      .map(response => response.json() as Member[]);
  };
}
