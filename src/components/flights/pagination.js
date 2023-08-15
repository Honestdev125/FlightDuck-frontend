import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CustomPagination = ({onChange, count, siblingCount}) => {
    return (
        <Box >
                <Stack spacing={2}>
      
                    <Pagination 
                      
                      count={count.length} 
                      defaultPage={1} 
                      siblingCount={siblingCount} 
                      boundaryCount={1} 
                      onChange={onChange}
                      variant="outlined" shape="rounded"
          
                      sx={{
                      
                          
                        '& .MuiPaginationItem-root:hover': {
                          borderColor: '#0077cc',
                          bgcolor: '#333',
                          color: 'white',
                          borderRadius: '5px'
                        },
                        '& .Mui-selected': {
                          borderColor: '#333',
                          color: '#0077cc',
                          borderRadius: '5px',
                          borderColor: '#0077cc',
                        },
                      }}
                    />
                </Stack>
              </Box>
    )
}

export default CustomPagination