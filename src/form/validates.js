export const common = {
  required: (value) => {
    if (!value?.length) return 'Preencha um valor';
    return false;
  },
};

export const regexes = {
  cep: (value) => {
    const regex = /^\d{5}-?\d{3}$/;

    if (!regex.test(value)) return 'Cep inválido';
    return false;
  },
  email: (value) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(value)) return 'Email inválido';
    return false;
  },
};

export const specific = {
  cpf: () => false,
};
