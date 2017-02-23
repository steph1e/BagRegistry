import { subscribeToRenderElement } from '@angular/core/src/linker/view_utils';
import { Component, OnInit } from '@angular/core';
import { MemberDataEntry } from '../member-data-entry'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public members: MemberDataEntry[] = [];
  private _index = 0;
  private _theMembers = MemberDataEntry.TheMembers

public enableAdd() {
return this._index < this._theMembers.length;
}
public addDive() {
if (this.enableAdd()) {
this.members.push(this._theMembers[this._index++]);
}
}
public clearDives() {
this.members = [];
this._index = 0;
}

  constructor() { }

  ngOnInit() {
  }

}
