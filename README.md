# React json hook form

This is a simple generate form by json, use context and hooks

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Use one json to create a form

For example:

```javascript
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
```

### Use context to create the form

You need pass the json to FormStorage:

```javascript
<FormStorage
  configFields={configFields}
  onSubmit={(values) => console.log('submit values', values)}
>
  <button>Enviar</button>
</FormStorage>
```
