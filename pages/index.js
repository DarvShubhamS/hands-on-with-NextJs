import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
class IndexPage extends Component {
    static async getInitialProps(context) {
        console.log(context)
        const promise = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: 'Super Test' })
            }, 6000)
        })
        return promise
    }
    render() {
        return (<div>
            <h1>Main Page of {this.props.appName}</h1>
            <p>Go To <Link href="/auth"><a>Auth</a></Link></p>
            <button onClick={() => Router.push('/auth')}>Route</button>
        </div>
        )

    }
}

export default IndexPage