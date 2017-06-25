import { Component, OnInit } from '@angular/core';
import { MembersService } from './members.service';
import { Member } from './member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MembersService]
})
export class MembersComponent implements OnInit {

  members: Member[];

  constructor(private services: MembersService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.services.getMembers()
    .subscribe(
      members => this.members = members
    );
   }
 }
