import React from 'react';

class HelloWorld extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render(){


        return(
            <div>
                Hello {this.props.user}
            </div>
        )
    }

}

HelloWorld.defaultProps = {
    user:'nitin'
}

export default HelloWorld;