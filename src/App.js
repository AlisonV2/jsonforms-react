import React from 'react';
import schema from './data/schema.json';
import './App.css';
import { JsonForms } from '@jsonforms/react';
import { FormContainer } from './styles/form-container.styles';
import { CustomButton, CustomButtonContainer } from "./styles/custom-button.styles";
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';



function App() {
  return (
    <FormContainer>
      <JsonForms
        schema={schema}
        renderers={materialRenderers}
        cells={materialCells}
      />
      <CustomButtonContainer>
            <CustomButton>Envoyer</CustomButton>
      </CustomButtonContainer>
    </FormContainer>
  );
}

export default App;
