import React, { Component } from 'react';
import axios from 'axios';

class A extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get('/api/get/user').then(res => console.log('===>res', res));
    }

    render() {
        return <div>A 页面</div>;
    }
}

export default A;
