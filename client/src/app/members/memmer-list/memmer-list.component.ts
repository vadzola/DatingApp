import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from './../../_services/members.service';

@Component({
  selector: 'app-memmer-list',
  templateUrl: './memmer-list.component.html',
  styleUrls: ['./memmer-list.component.css']
})
export class MemmerListComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
    }

  loadMembers() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
    })
  }
}
