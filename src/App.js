import React from 'react';
import { FormStorage } from './form/Form';
import Radio from './form/inputs/Radio';
import { Select } from './form/inputs/Select';

const configFields = [
  {
    id: 'cep',
    label: 'CEP',
    type: 'input::text',
    initialValue: '',
    placeholder: '00000-000',
    validates: ['required', 'cep'],
  },
  {
    id: 'email',
    label: 'Email',
    type: 'input::email',
    initialValue: '',
    validates: ['required', 'email'],
  },
  {
    id: 'checkbox',
    initialValue: ['Uva'],
    type: 'checkbox',
    options: ['Uva', 'Laranja', 'Limão'],
  },
];

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <FormStorage
      configFields={configFields}
      onSubmit={(values) => console.log('submit values', values)}
    >
      <Select
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />

      <Radio
        options={['azul', 'verde', 'amarelo']}
        value={cor}
        setValue={setCor}
      />
      <button>Enviar</button>
    </FormStorage>
  );
};

export default App;
