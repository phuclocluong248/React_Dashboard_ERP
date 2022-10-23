import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

function Profits() {
  return (
    <div className="m-2 md-m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Profits" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData()}
        allowPaging
        contextMenuItems={contextMenuItems}
        allowSorting
        allowFiltering
        allowPdfExport
        // allowResizing FIXME: allowResizing resizes page too
        toolbar={[
          "Add",
          "Edit",
          "Update",
          "Delete",
          "Cancel",
          "Print",
          "ExcelExport",
        ]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Sort,
            ContextMenu,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Profits;
