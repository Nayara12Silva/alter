import React from 'react';
import { TextField, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchInput = () => {
  return (
    <div>
      <TextField label="Pesquisar" variant="outlined"
        InputProps={{ endAdornment: (
            <IconButton>
              <Search/>
            </IconButton>
          ),
        }}
        sx={{ width:700}}/>
    </div>
  );
};

export default SearchInput;
