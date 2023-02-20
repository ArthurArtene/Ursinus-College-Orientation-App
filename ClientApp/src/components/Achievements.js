import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import bearlegend from './Achievements/Bear Legend.png';
import bearstar from './Achievements/Bear Star.png';
import bearsuperstar from './Achievements/Bear Superstar.png';
import berman from './Achievements/Berman.png';
import bomberger from './Achievements/Bomberger.png';
import bps from './Achievements/BPS.png';
import bwc from './Achievements/BWC.png';
import gym from './Achievements/Gym.png';
import idc from './Achievements/IDC.png';
import kscope from './Achievements/Kaleidoscope.png';
import locked from './Achievements/Locked.png';
import lower from './Achievements/Lower.png';
import mail from './Achievements/Mail Centre.png';
import myrin from './Achievements/Myrin.png';
import olin from './Achievements/Olin.png';
import pfahler from './Achievements/Pfahler.png';
import stem from './Achievements/Stem.png';
import thomas from './Achievements/Thomas.png';
import upper from './Achievements/Upper.png';
import wellness from './Achievements/Wellness.png';


function sayHello() {
    var image = document.getElementById("bwc");
    
    var button = document.getElementById("button");
    if (button.innerText == "Lock") {
        image.style.opacity = "0.5";
        button.innerText = "Unlock";
    } else {
        image.style.opacity = "1";
        button.innerText = "Lock";
    };
    
}

export class Achievements extends Component {
  static displayName = Achievements.name;
    
  render() {
    return (
        <div> 
            <p className="text-white">Testing</p>
            <button id="button" onClick={sayHello}>Lock</button>;
            <table id="table">
                <tr>
                    <td><img class="lockable" id="bearlegend" src={bearlegend} class="img-fluid"></img></td>
                    <td><img class="lockable" id="bearsuperstar" src={bearsuperstar} class="img-fluid"></img></td>
                    <td><img class="lockable" id="bearstar" src={bearstar} class="img-fluid"></img></td>
                    <td><img class="lockable" id="berman" src={berman} class="img-fluid"></img></td>
                    <td><img class="lockable" id="bomberger" src={bomberger} class="img-fluid"></img></td>
                </tr>
                <tr>
                    <td><img class="lockable" id="bps" src={bps} class="img-fluid"></img></td>
                    <td><img class="lockable" id="bwc" src={bwc} class="img-fluid"></img></td>
                    <td><img class="lockable" id="gym" src={gym} class="img-fluid"></img></td>
                    <td><img class="lockable" id="idc" src={idc} class="img-fluid"></img></td>
                    <td><img class="lockable" id="kscope" src={kscope} class="img-fluid"></img></td>
                </tr>
                <tr>
                    <td><img class="lockable" id="mail" src={mail} class="img-fluid"></img></td>
                    <td><img class="lockable" id="myrin" src={myrin} class="img-fluid"></img></td>
                    <td><img class="lockable" id="olin" src={olin} class="img-fluid"></img></td>
                    <td><img class="lockable" id="pfahler" src={pfahler} class="img-fluid"></img></td>
                    <td><img class="lockable" id="stem" src={stem} class="img-fluid"></img></td>
                </tr>
                <tr>
                    <td><img class="lockable" id="thomas" src={thomas} class="img-fluid"></img></td>
                    <td><img class="lockable" id="upper" src={upper} class="img-fluid"></img></td>
                    <td><img class="lockable" id="wellness" src={wellness} class="img-fluid"></img></td>
                    
                </tr>
            </table>
      </div>
    );
  }
}
