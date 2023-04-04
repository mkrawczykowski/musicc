import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/structure/Layout/Layout";
import CookieConsent from '../components/structure/CookieConsent/CookieConsent';

export default function Homepage() {
  return (
    <>
      <Layout>
        test
      </Layout>
      <CookieConsent />
    </>
  )
}
