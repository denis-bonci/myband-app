import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Member } from './member';

@Injectable()
export class MembersService {
  private apiUrl = 'http://localhost/members';

  constructor(private http: Http) { }

  getMembers(): Observable<Member[]> {
    return this.http.get(this.apiUrl).map(res => res.json());
  };
}
