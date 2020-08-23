import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
  InputField,
  Button,
  ButtonStrip
} from "@dhis2/ui";
import { useDataMutation, useDataQuery } from "@dhis2/app-runtime";
import { useState } from "react";

const renameQuery = {
  vis: {
    resource: "visualizations",
    id: ({ id }) => id,
    params: {
      fields: ["name"]
    }
  }
};
const renameMutation = {
  resource: "visualizations",
  type: "update",
  partial: true,
  id: ({ id }) => id,
  data: ({ name }) => ({
    name
  })
};

export const RenameFunction = ({ visualizationId, refetch, onClose }) => {
  const [name, setName] = useState();
  const { loading: queryLoading, error: querryError } = useDataQuery(
    renameQuery,
    {
      variables: { id: visualizationId },
      onComplete: (data) => setName(data.vis.name)
    }
  );

  const [mutate, { mutationLoading, mutationError }] = useDataMutation(
    renameMutation
  );

  const error = querryError || mutationError;
  const loading = queryLoading || mutationLoading;

  return (
    <Modal onClose={onClose}>
      <ModalTitle>Rename Visualization </ModalTitle>
      <ModalContent>
        <InputField
          disabled={loading}
          label="Visualization Name"
          placeholder="..."
          onChange={(e) => setName(e.value)}
          value={name}
        />
      </ModalContent>
      <ModalActions>
        <ButtonStrip>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            primary
            onClick={async () => {
              await mutate({ id: visualizationId, name });
              refetch();
              onClose();
            }}
          >
            Save
          </Button>
        </ButtonStrip>
      </ModalActions>
    </Modal>
  );
};
