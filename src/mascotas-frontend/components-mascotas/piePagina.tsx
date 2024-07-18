import React from 'react';
import './piePagina.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PiePaginaProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PiePagina: React.FC<PiePaginaProps> = ({ totalPages, currentPage, handlePageChange }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    handlePageChange(event, value);
  };

  return (
    <div className="pie-pagina-container">
      <Stack 
        spacing={1} 
        sx={{ 
          alignItems: 'center', 
          backgroundColor: 'white', 
          marginTop: '5px', 
          width: '100%',
          padding: '10px 0'
        }}
      >
        <Pagination 
          count={totalPages} 
          page={currentPage}
          onChange={handleChange}  
          sx={{ 
            '& .MuiPaginationItem-root': { 
              backgroundColor: '#87ceeb', 
              color: '#fff',
              '&:hover': {
                backgroundColor: '#ffa500',
              },
              '&.Mui-selected': {
                backgroundColor: '#ffa500',
                '&:hover': {
                  backgroundColor: '#ffa500',
                },
              },
            } 
          }} 
        />
      </Stack>
    </div>
  );
};

export default PiePagina;
