import React from 'react';
import Layout from "../Components/Layout/Layout";
import styles from '../Styles/HomeView.module.css';
const HomeView=()=>{
    return <Layout sectionCN={styles.sectionHome} containerCN={styles.containerHome}>
        <h1 className={styles.textMain}>Phonebook</h1>
    </Layout>
};

export default HomeView;