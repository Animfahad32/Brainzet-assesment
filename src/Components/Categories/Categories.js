import { Container, Grid } from '@mui/material';
import React from 'react';

const Categories = () => {
    return (
        <>
        {/* Category Heading */}
           <div>
            <h2 className="text-center category-title">Categories</h2>
            </div>
       
       {/* Categories Column      */}
       <Container maxWidth="lg">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} style={{ justifyContent: "center"}}>
                <Grid item md={6} sm={12}  >
                <div class=" bg-white rounded p-6 flex items-center justify-between category-card category-card-1">
                                            <h5 class="text-white font-semibold text-4xl  mb-4 mt-0">Backend</h5>
                                            <i class="fas fa-code"></i>
                                        </div>
                </Grid>
                <Grid item md={6} sm={12}>
                <div class=" bg-white rounded p-6 flex items-center justify-between category-card category-card-2">
                                            <h5 class="text-white font-semibold text-4xl  mb-4 mt-0">Backend</h5>
                                            <i class="fas fa-code"></i>
                                        </div>
                </Grid>
                <Grid item md={6} sm={12}>
                <div class=" bg-white rounded p-6 flex items-center justify-between category-card category-card-3">
                                            <h5 class="text-white font-semibold text-4xl  mb-4 mt-0">Backend</h5>
                                            <i class="fas fa-code"></i>
                                        </div>
                </Grid>
                <Grid item md={6} sm={12}>
                <div class=" bg-white rounded p-6 flex items-center justify-between category-card category-card-4">
                                            <h5 class="text-white font-semibold text-4xl  mb-4 mt-0">Backend</h5>
                                            <i class="fas fa-code"></i>
                                        </div>
                </Grid>
                </Grid>
          
        
    
        </Container>
        </>
     
    );
};

export default Categories;