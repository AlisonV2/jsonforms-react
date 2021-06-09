import React from 'react';
import schema from './data/schema.json';
import './App.css';
import { JsonForms } from '@jsonforms/react';
import { FormContainer } from './styles/form-container.styles';
import CustomButton from "./components/custom-button.component";
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';



function App() {
  return (
    <FormContainer>
      <JsonForms
        schema={schema}
        renderers={materialRenderers}
        cells={materialCells}
      />
    <CustomButton type='submit'>Envoyer</CustomButton>
    </FormContainer>
  );
}

export default App;
