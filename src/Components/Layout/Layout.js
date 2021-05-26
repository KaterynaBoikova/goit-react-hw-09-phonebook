import React from 'react';
import {Container} from '@material-ui/core';

const Layout = ({ sectionCN, containerCN, children }) => (
    <section className={sectionCN}>
        <Container maxWidth="lg" className={containerCN}>
        {children}
        </Container>
    </section>
);

export default Layout;