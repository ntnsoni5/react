import React from 'react';

class App extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            header :"Header.....",
            content :"Content.....",
        }

        this.setState({
            header:'changed header..',
            content:'changed content..',
        })

    }

    render()
    {
           return( 
           <div>
          <Header headerProp={this.state.header} />
           <Content contentProp={this.state.content} />
           </div> )
    }

}

App.defaultProps = {
    user:'Nitin'
}

class Header extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render(){
        return(<div>
            <h1>
                {this.props.headerProp}
            </h1>
        </div>)
    }
}

class Content extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render(){
        return(<div>
            <h1>
                {this.props.contentProp}
            </h1>
        </div>)
    }
}

export default App;