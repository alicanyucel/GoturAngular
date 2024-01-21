import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IStoreRegistryRequest, IGetRegistryRequestListQuery, RegistryListService } from './registry-list.service';

@Component({
  selector: 'app-registry-list',
  templateUrl: './registry-list.component.html',
  styleUrls: ['./registry-list.component.scss']
})
export class RegistryListComponent implements OnInit {
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  private _queryForm: FormGroup = this._formBuilder.group<IGetRegistryRequestListQuery>({
    page: 0,
    count: 15,
    dateRangeEnd: undefined,
    dateRangeStart: undefined,
    status: undefined,
    searchText: undefined,
  });
  public get queryForm(): FormGroup {
    return this._queryForm;
  }
  private _dataSource: MatTableDataSource<IStoreRegistryRequest>;
  public get dataSource(): MatTableDataSource<IStoreRegistryRequest> {
    return this._dataSource;
  }
  public get displayedColumns(): Array<string> {
    return [
      'storeName',
      'name',
      'surname',
      'nationalIdentityNumber',
      'phone',
      'email',
      'district',
      'province',
      'status',
      'actions'
    ];
  };
  constructor(
    private _formBuilder: FormBuilder,
    private _service: RegistryListService
  ) { }
  async ngOnInit(): Promise<void> {
    await this.getRegistryRequestList();
  }
  async submitQueryForm(): Promise<void> {
    await this.getRegistryRequestList();
  }
  async getPageData(e: {
    pageIndex: number, pageSize: number
  }): Promise<void> {
    this._queryForm.setValue({
      ...this._queryForm.value,
      page: e.pageIndex,
      count: e.pageSize
    });
    await this.submitQueryForm();
  }
  async getRegistryRequestList(): Promise<void> {
    const res = await this._service.getRegistryRequestList(this._queryForm.value);
    this.paginator.pageIndex = res.page;
    this.paginator.pageSize = res.count;
    this.paginator.length = res.total;
    this._dataSource = new MatTableDataSource<IStoreRegistryRequest>(res.data);
  }
}
