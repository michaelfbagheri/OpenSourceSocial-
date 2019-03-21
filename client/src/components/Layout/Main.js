import React, {Component} from 'react'

class Main extends Component {
    render(){
        return (
            <main className='container'>
                <section className="row">
                    <div className="col-md-4 event-list">left-side</div>
                    <div className="col-md-8 event-module">right-side</div>
                </section>
                <section className="row">
                    <div className="col-md-12 event-map">Map</div>
                </section>
            </main>
        )
}
}

export default Main
