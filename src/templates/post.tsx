import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import {Container, Row, Col} from '../components/structure/Grid/Grid';
import {getImage} from 'gatsby-plugin-image';
import FeaturedImage from '../components/partials/FeaturedImage/FeaturedImage';

const PostTemplate = ({data, pageContext }) => {

    const postID = pageContext.id;
    const title = data.wpPost.title;
    const titleACF = data.wpPost.PageTitle.pageTitle;
    const descriptionACF = data.wpPost.PageTitle.pageDescription;
    const flexibleSections = data.wpPost.flexibleSections.sections;
    const postCategories = data.wpPost.categories.nodes;
    const featuredImage = data.wpPost.featuredImage ? getImage(data.wpPost.featuredImage.node.localFile) : null;
    const featuredImageAlt = featuredImage ? data.wpPost.featuredImage.node.altText : null;
    return(
        <Layout>
            
            <main>
                <Container>
                    <Row>
                        <Col classes="col col-xxl-1"></Col>
                        <Col classes="col-2 col-md-8 col-xxl-10">
                            {
                                featuredImage ? <FeaturedImage image={featuredImage} alt={featuredImageAlt} /> : null
                            }
                        </Col>
                        <Col classes="col col-xxl-1"></Col>
                    </Row>
                </Container>
                
            </main>
        </Layout>
    )
}

export default PostTemplate;