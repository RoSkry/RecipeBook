import React from "react"

class Footer extends React.Component
{
    render()
    {
    return(
        <footer>
            You are welcome {this.props.text}
        </footer>
    );
    }
}

export default Footer