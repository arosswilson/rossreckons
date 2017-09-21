import React, {Component} from 'react';
import Link from './Link';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.hasScrolled = this.hasScrolled.bind(this)
    this.state = {
      didScroll: false,
      lastScrollTop: 0,
      isHidden: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({didScroll:true})
    });

    setInterval(()=> {
      if (this.state.didScroll) {
        this.hasScrolled();
        this.setState({
          didScroll: false,
        })
      }
    }, 250)
  }

  hasScrolled() {
    var hidden;
    var navbarHeight = this.navContainer.clientHeight;
    var st = document.body.scrollTop;
    if (Math.abs(this.props.lastScrollTop - st <= this.props.delta)){
      return
    };

    if (st > this.state.lastScrollTop && st > navbarHeight){
      hidden = true
    } else {
      if(st + window.innerHeight < document.innerHeight){
        hidden = false
      }
    }
    this.setState({
      isHidden: hidden,
      lastScrollTop: st,
    })
  }

  render(){
    var hiddenClass = this.state.isHidden ? ' nav-up' : ''
    return (
      <div className={"navbar" + hiddenClass} ref={(navContainer)=>{this.navContainer = navContainer}}>
        <p className="name">Ross Wilson</p>
        <div className="button-group">
          <Link destination="/" label="About"/>
          <Link destination="/blog/" label="Blog"/>
        </div>
      </div>
    )
  }
}

export default NavBar;