import { MainSpace, ImageSpace, FormSpace } from "./styles";
import { Button } from "@mui/material";
import Form from "./Form";

function App() {
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <div>
          <Button> - </Button>
          <Button> + </Button>
        </div>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
