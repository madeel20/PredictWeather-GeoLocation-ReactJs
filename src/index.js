import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
class App extends React.Component {
    state = {lat:null, error: null};
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat:position.coords.latitude})
            },
            (err) => {
                this.setState({error: err.message})
            }
        );
        console.log('component mount');
    }
    componentDidUpdate(){
        console.log('component update');
    }
    renderContent(){
        if(this.state.lat && !this.state.error)
        return  <SeasonDisplay lat={this.state.lat} />;
   else if(!this.state.lat && this.state.error)
        return <h2> Error: {this.state.error}</h2>;
   else 
        return <Loader message="Loading..."/>;
    }
    
    render() {
        return (
            <div >
                {this.renderContent()}
            </div>
        )
    }
}
       

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);