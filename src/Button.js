import React, {Component} from 'react'

class Button extends React.Component {
	render() {
		return (
			<button className="share-button" onClick={this.props.handleClick}><i className={this.props.icon}></i>{this.props.copy}</button>
		)
	}
}

export default Button