import { useDataMutation } from "@dhis2/app-runtime";
import { Button } from "@dhis2/ui";

const userQuery = {
  me: {
    resource: "me",
    params: {
      fields: "name"
    }
  }
};

const mutation = {
  resource: "visualizations",

  type: "create",
  data: ({ namespace }) => ({
    name: namespace + " | " + "AAA_TEST-CHS2",
    type: "SINGLE_VALUE"
  })
};

export const NewVisualizationButton = ({ refetch }) => {
  const [mutate, { loading, engine }] = useDataMutation(mutation);
  const onClick = async () => {
    const { me } = await engine.query(userQuery);
    await mutate({ namespace: me.name });
    refetch();
  };
  return (
    <Button primary disabled={loading} onClick={onClick}>
      + New
    </Button>
  );
};
