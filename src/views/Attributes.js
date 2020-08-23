// @TODO: Import `Table`, `TableBody`, `TableCell`, `TableCellHead`, `TableHead`, `TableRow` & `TableRowHead` from `is2@dh/ui`
import { useDataQuery } from "@dhis2/app-runtime";
import React from "react";
import {
  Table,
  TableBody,
  TableCellHead,
  TableHead,
  TableRow,
  TableRowHead,
  TableCell
} from "@dhis2/ui";


const ATTRIBUTES_QUERY = {
  attributes: {
    resource: "attributes",
    params: {
      paging: false,
      fields: "id,displayName,unique"
    }
  }
};

export const Attributes = () => {
  const { loading, error, data } = useDataQuery(ATTRIBUTES_QUERY);

  return (
    <div>
      <h1>Attributes</h1>
      <p>Attributes we capture by its unique property</p>

      {
        loading && "Loading..."
      }

      {

        error && error.message
      }

      {
        data?.attributes?.attributes && (
          <Table>
            <TableHead>
              <TableRowHead>
                <TableCellHead>Name</TableCellHead>
                <TableCellHead>Unique</TableCellHead>
              </TableRowHead>
            </TableHead>
            <TableBody>
              {data.attributes.attributes.map(({ id, displayName, unique }) => (
                <TableRow key={id}>
                  <TableCell>{displayName}</TableCell>
                  <TableCell> {unique ? "yes" : "no"} </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )
      }
    </div>
  );
};
