import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchInput = ({value, onChange}) => {

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

//   const handleSearch = () => {
//     // Aqui você pode adicionar a lógica para realizar a pesquisa com o texto
//     console.log('Realizando a pesquisa:', texto);
//     // ...resto da lógica de pesquisa
//   };

  return (
    <div>
      <TextField
        label="Pesquisar"
        value={value}
        onChange={handleInputChange}
        variant="outlined"
      />
    </div>
  );
};

export default SearchInput;