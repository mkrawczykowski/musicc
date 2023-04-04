import React from 'react';
import Layout from '../components/structure/Layout/Layout';
import {Container, Row, Col} from '../components/structure/Grid/Grid';

const PostTemplate = ({ }) => {

    return(
        <Layout>
            
            <main>
                <Container>
                    <Row>
                        <Col classes="col col-xxl-1"></Col>
                        <Col classes="col-2 col-md-8 col-xxl-10">
                            test
                        </Col>
                        <Col classes="col col-xxl-1"></Col>
                    </Row>
                </Container>
                
            </main>
        </Layout>
    )
}

export default PostTemplate;