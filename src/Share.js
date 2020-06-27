import React, {Component} from 'react'
import Button from './Button.js'

class Share extends React.Component {
	render() {
		return (
			<section className="share">
				<Button copy="have another idea" icon="icon-lightbulb" handleClick={this.props.setRandomIdea} />
				<Button copy="pitch to your friends" icon="icon-comment-empty" handleClick={this.props.showModal} />
		    </section>
		)
	}
}



export default Share