import React from 'react'

import { Row, Col } from 'antd';
import Geometry from './Geometry'
import User from './User'
import Navbar from './Navbar'

import { withStyles } from '@hoc'
import gridStyles from 'antd/lib/grid/style/index.css'
import styles from './Header.scss'

const Header = () => (
  <Row className={styles.header_bar}>
    <Col span={4}><Geometry/></Col>
    <Col span={6}><User/></Col>
    <Col span={14}><Navbar/></Col>
  </Row>
)

export default withStyles(Header, gridStyles, styles);