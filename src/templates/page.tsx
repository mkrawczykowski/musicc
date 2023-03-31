import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';

const PageTemplate = ({data}) => {

    // const title = data.wpPage.title;
    // const titleACF = data.wpPage.PageTitle.pageTitle;
    // const descriptionACF = data.wpPage.PageTitle.pageDescription;
    // const flexibleSections = data.wpPage.flexibleSections.sections;
    // console.log('flexibleSections');
    // console.log(flexibleSections);

    return(
        <Layout>
            <main>
                test
            </main>
        </Layout>
    )
}

export default PageTemplate;