import React from 'react';
// get fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faFastForward,
  faFastBackward
} from "@fortawesome/free-solid-svg-icons";

import ZingTouch from 'zingtouch';

class Wheel extends React.Component {

  //once the wheel are mounted attach scroll handler
  componentDidMount(){
    document.getElementById("wheel").onclick = this.handleScroll(this.props.callbackFromParent);
  }

  handleScroll = (callbackFromParent) => {
    console.log("clicked");
    let angle = 0
    const target = document.getElementById('wheel');
    const region = new ZingTouch.Region(target);
    region.bind(target, 'rotate', function(e) {
      console.log("scroll ", angle);
      angle += e.detail.distanceFromLast;
      console.log(angle);
      if(Math.abs(angle) > 35){
        let scrollDir = angle > 0 ? 1 : -1;
        angle = 0;
        callbackFromParent(scrollDir);
      }
    });
  }

  handleClick = (component) => {
    this.props.callbackFromParent(component);
  }

  render(){
    const {callbackFromParent} = this.props;
    return (
      <div id="wheel" draggable="false">
        <div id="menu-button" className="unselectable" onClick={() => this.handleClick("menu")}>
          Menu
        </div>
        <div id="next" onClick={() => this.handleClick("fast-forward")}>
          <FontAwesomeIcon className="icon-style" icon={faFastForward} />
        </div>
        <div id="play" onClick={() => this.handleClick("play-pause")}>
          <FontAwesomeIcon className="icon-style" icon={faPlay} />
          <FontAwesomeIcon className="icon-style" icon={faPause} />
        </div>
        <div id="previous" onClick={() => this.handleClick("fast-backward")}>
          <FontAwesomeIcon className="icon-style" icon={faFastBackward} />
        </div>
        <div id="select" onClick={() => this.handleClick("select")}></div>
      </div>
    );
  }
}

export default Wheel;
