import React, { useState } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import { CircularLoader } from "@dhis2/ui";

import { VisualizationsTable } from "./VisualizationsTable";
import { PaginationControls } from "./PaginationControls";
import { RenameFunction } from "./RenameFunctionCode.js";
import * as classes from "../App.module.css";

const visualizationsQuery = {
  results: {
    resource: "visualizations",
    params: ({ page }) => ({
      page: page,
      pageSize: 5,
      fields: ["id", "name"],
      filter: "name:ilike:Jone Traore"
    })
  }
};

export const PaginatedVisualizationsTable = () => {
  const { loading, error, data, refetch } = useDataQuery(visualizationsQuery, {
    variables: { page: 1 }
  });
  const [editId, setEditId] = useState(undefined);
  if (error) {
    return <span>ERROR: {error.message}</span>;
  }

  if (loading) {
    return <CircularLoader />;
  }

  
  return (

    <div className={classes.tableContainer}>
      <VisualizationsTable
        visualizations={data.results.visualizations}
        refetch={refetch}
        onEdit={setEditId}
      />
      <PaginationControls pager={data.results.pager} refetch={refetch} />
      {editId && (
        <RenameFunction
          visualizationId={editId}
          refetch={refetch}
          onClose={() => setEditId()}
        />
      )}
    </div>
  );
};
