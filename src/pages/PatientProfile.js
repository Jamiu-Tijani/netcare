import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
import Iconify from '../components/iconify';

// import profile from "../../public"
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function PatientProfile() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Profile
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-start" sx={{ mb: 5 }}>
          {/* <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack> */}
          <div style={{ width: 175, height: 175, position: 'relative' }}>
            <img src="/assets/images/covers/test2.jpeg" alt="" style={{ width: 175, height: 175, borderRadius: 100 }} />
            <Iconify
              icon={'eva:edit-fill'}
              style={{ position: 'absolute', right: 0, bottom: 8, cursor: 'pointer', width: 35, height: 35 }}
            />
          </div>
        </Stack>

        <div>
          <h2>
            Profile: <span style={{ fontSize: 19, fontWeight: '500' }}> Salawudeen Quadri Olamilekan</span>
          </h2>
          <h2>
            Age: <span style={{ fontSize: 19, fontWeight: '500' }}> 19</span>
          </h2>
          <h2>
            Genotype: <span style={{ fontSize: 19, fontWeight: '500' }}> AA</span>
          </h2>
          <h2>
            Blood Type: <span style={{ fontSize: 19, fontWeight: '500' }}> O+</span>
          </h2>
        </div>
      </Container>
    </>
  );
}
