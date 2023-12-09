import {Component, ViewChild} from '@angular/core';
import {Ticket} from "../../classes/ticket";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {SharedService} from "../../services/shared-service/shared.service";
import {UserService} from "../../services/user-service/user.service";
import {User} from "../../classes/user";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent {

  usersList: User[];

  displayedColumns: string[] = ['id', 'name', 'email', 'createdDate', "role", "isDisabled", "action" ];

  selection = new SelectionModel<Ticket>(true, []);

  dataSource: any;

  showLoading: boolean = true;

  loadingFailed = false;

  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }
  }


  showError() {
    this.loadingFailed = true;
    this.showLoading = false;
  }


  constructor(private sharedService: SharedService, private userService: UserService) {

  }

  ngOnInit() {
    this.fetchUsersOnInit();
  }

  fetchUsersOnInit() {
    this.userService.getAllUsers().subscribe(data => {
        setTimeout(() =>
          {
            this.showLoading = false;
            this.usersList = data
            this.dataSource = new MatTableDataSource(this.usersList);
          },
          1000);
      },
      err => {
        this.showError()
        this.sharedService.error = err;
      })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: Ticket): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ticketNumber + 1}`;
  }

}
