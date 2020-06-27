import React, {Component} from 'react'

class Idea extends Component {
	render() {
		return (
			<section id="itslike">
		        &ldquo;It&rsquo;s like <span id="this" className="what">{this.props.likethis}</span> for <span id="that" className="what">{this.props.likethat}</span>.&rdquo;
		     </section>
		)
	}
}

export default Idea