import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Idea from './Idea.js'
import Share from './Share.js'
import About from './About.js'
import Modal from './Modal.js'
const FB = window.FB;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likethis: this.getRandomIdea(this.props.likethis),
      likethat: this.getRandomIdea(this.props.likethat)
    }
  }

  /* Helper class to generate random idea*/
  getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
  }

  /* Generate random idea */
  getRandomIdea = (idea) => {
    var randomInt = this.getRandomInt(idea.length);

    return idea[randomInt];
  }

  /* Set the random idea */
  setRandomIdea = () => {
    this.setState({
      likethis: this.getRandomIdea(this.props.likethis),
      likethat: this.getRandomIdea(this.props.likethat)
    })
  }

  showModal = () => {
    let body = document.querySelector('body');

    body.classList.contains('modal-open') ? body.classList.remove('modal-open') : body.classList.add('modal-open');
  }

  goToLink = (url, target) => {
    window.open(url, target);
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '520425498126829',
        status     : true,
        cookie     : true,
        xfbml      : true,
        version    : 'v2.5'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  postToFeed(likethis, likethat){
    var obj = {
      method: 'feed',
      link: 'http://itslikethisforthat.com', 
      name: `I've got an idea! It's like ${likethis} for ${likethat}!`,
      description: `Get your own idea at It's Like This for That.`
    };

    function callback(response){}
      window.FB.ui(obj, callback);
  }

  render() {
    return (
      <div>
        <Header />
        
        <Idea
          likethis={this.state.likethis}
          likethat={this.state.likethat} />

        <Share 
          setRandomIdea={this.setRandomIdea}
          showModal={this.showModal} />

        <About goToLink={this.goToLink} />

        <Modal
          showModal={this.showModal}
          goToLink={this.goToLink}
          postToFeed={this.postToFeed}
          likethis={this.state.likethis}
          likethat={this.state.likethat} />
      </div>
    );
  }
}

export default App;
