import React from 'react'
import { Link } from 'react-router-dom'

import { Icon } from 'antd'

const Geo = () => (
  <div>
    <Icon type="environment" theme="filled" />
    <Link to='/changeCity'>切换城市</Link>
    [香河 廊坊 天津]
  </div>
)

export default Geo;