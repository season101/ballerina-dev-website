/**
 * Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Container, Row, Stack } from 'react-bootstrap';

import Footer from '../components/common/footer/Footer';

export default function Layout({ children }) {
  const TopNav = dynamic(() => import('../components/common/top-nav/TopNav'), { ssr: false });
  const Meta = dynamic(() => import('../components/common/meta/Meta'), { ssr: false });

  return (
    <>
      <Head>
        {/* Google analytics */}
        <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"/>
        <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-PSL2TX4"/>
        <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-92163714-2"/>

        <script type="text/javascript" crossOrigin src="https://cdn.jsdelivr.net/npm/@docsearch/js@alpha"/>
        {/* CookiePro Cookies Consent Notice start for ballerina.io */}
        <script src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="630ad396-5fd5-4745-92ae-2765dc8841ee" ></script>
        <script type="text/javascript">
        function OptanonWrapper() { }
        </script>
        {/* CookiePro Cookies Consent Notice end for ballerina.io */}
      </Head>
      <Meta/>
      <Stack gap={0} className='main-wrapper'>
        <TopNav launcher='rn'/>
        <Container className='wrap-page-content' fluid>
          <Row>
            {children}
          </Row>
        </Container>

        <Footer/>

      </Stack>
    </>
  );
}