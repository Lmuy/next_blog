import React from 'react';
import Head from 'next/head'
import Header from '../components/Header'
import { Row, Col, Menu } from 'antd';

const Detailed = () => {
  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          zuo
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          you
        </Col>
      </Row>
    </div>
  )
}

export default Detailed