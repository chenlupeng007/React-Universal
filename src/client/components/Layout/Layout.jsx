import React from 'react';
import { Layout } from 'antd';

import { StaticContext } from '@common/context'
import { Header as MyHeader} from '@components/Header'

import { withStyles } from '@hoc'
import layoutStyles from 'antd/lib/layout/style/index.css';
import styles from './Layout.scss'

const {
  Header, Footer, Content,
} = Layout;

const MyLayout = (props) => (
  <StaticContext.Provider value = {props.staticContext}>
    <Layout>
      <Header><MyHeader/></Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </StaticContext.Provider>
)

export default withStyles(MyLayout, layoutStyles, styles);