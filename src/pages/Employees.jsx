import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
  Sort,
  Filter,
  VirtualScroll,
  Selection,
  Edit,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

function Employees() {
  return (
    <div className="m-2 md-m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Add", "Edit", "Update", "Delete", "Cancel", "Print"]}
        width="auto"
        allowFiltering
        allowPdfExport
        allowResizing
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Search,
            Toolbar,
            Selection,
            Sort,
            Filter,
            VirtualScroll,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
}

export default Employees;
