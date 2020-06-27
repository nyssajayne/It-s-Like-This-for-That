import React, {Component} from 'react'
import Button from './Button.js'

class Modal extends Component {
	render() {
		return (
			<div className="share-modal">
				<div className="overlay"> </div>
			    <i id="close" className="icon-cancel" onClick={this.props.showModal}></i>
				<div className="modal">
	        		<p>if you can trust them, share your idea with your  friends on Twitter or Facebook.</p>
			        <section className="share">
			        	<Button copy="Twitter" icon="icon-twitter" handleClick={() => this.props.goToLink('http://twitter.com/intent/tweet?text=I had a great idea, this for that. Get yours at itslikethisforthat.com', '_blank')} />
			        	<Button copy="Facebook" icon="icon-facebook" handleClick={() => this.props.postToFeed(this.props.likethis, this.props.likethat)} />
			        </section>
	      		</div>
      		</div>
		)
	}
}

export default Modal