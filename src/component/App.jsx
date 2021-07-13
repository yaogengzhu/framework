import React from 'react'
import { DatePicker, Button } from 'antd';
import PropTypes from 'prop-types'
import './index.less'

const App = (props) => {
    const { test } = props
    return (
        <div className="demo">
            <DatePicker />
            <span>22222</span> <span>{test}</span>
            <Button type="primary">Primary Button</Button>
            <div>hello</div>
        </div>
    )
}

App.propTypes = {
    test: PropTypes.string,
}

App.defaultProps = {
    test: '您好喔',
}

export default App
