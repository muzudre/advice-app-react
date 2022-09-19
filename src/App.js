import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {
    state = {
        advice: '',
        loading: true
    }

    componentDidMount() {
        this.fetchAdvice()
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(response => {
                const { advice } = response.data.slip
                this.setState({ advice, loading: false })
            })
            .catch(error => {
                console.log('Error: ', error)
            })
    }

    handleNewAdvice = () => {
        this.setState({ loading: true })
        this.fetchAdvice()
    }

    render() {
        const { advice, loading } = this.state
        return (
            <div className='app'>
                <div className='card'>
                    {loading ? (
                        <div className="lds-ripple"><div></div><div></div></div>
                    ) : (
                        <h1 className='heading'>{advice}</h1>
                    )}
                    <button className='button' onClick={() => this.handleNewAdvice()}>Give me advice!</button>
                </div>

            </div>
        )
    }
}

export default App;