import React from 'react';

// import GTM from '../GTM/GTM';
// import TagManager from 'react-gtm-module';

// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import PageTitle from '../PageTitle/PageTitle';
// import * as styles from './Layout.module.scss';

const Layout = ({children}) => {
    const GTM_ID = process.env.GATSBY_GTM_ID;
    const tagManagerArgs = {
        gtmId: GTM_ID,
    }

    return(
        <>
            {/* <Header></Header> */}
            
                {children}
           
            
            {/* <Footer></Footer> */}
            {/* <GTM/> */}
            
        </>
    )
}

export default Layout;