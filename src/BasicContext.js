import React, { Component } from "react";
const BasicContext = React.createContext();
class BasicProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyCode: '',
            countryCode: '',
            tryThis: 'Heyhehehhey',
            loading: false,
        };
    }
    componentWillMount() {
        this.setState({ loading: false });
        fetch(
            'https://ipapi.co/json/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        .then(resp => resp.json())
        .then((resp) => {
            localStorage.setItem("country_code", resp.country_code);
            localStorage.setItem("currency", resp.currency);
            this.setState({
                loading: false,
                currencyCode: resp.currency,
                countryCode: resp.country_code,
            });
        })
        .catch((err) =>{
            console.log("failed")
        })
    }
    render() {
        const { loading } = this.state
        console.log(loading)
        return (
            loading === false ?
                <BasicContext.Provider value={this.state}>
                    {this.props.children}
                </BasicContext.Provider>
                : <h1>Loading</h1>
        )
    }
}
const BasicConsumer = BasicContext.Consumer;
export { BasicProvider, BasicConsumer };