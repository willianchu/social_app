import * as React from "react";
import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="flower">
          <div className="inner">
              <div className="spinner">
                  <div className="child"><a className="leaf" href="https://fb.me/tknomad"><img src="https://rawcdn.githack.com/specious/specious.github.io/08dba0c/gfx/icons/fb.svg" alt="Facebook" />
                          <div className="glass-holder">
                              <div className="counterspin">
                                  <div className="glass"></div>
                              </div>
                          </div>
                      </a></div>
                  <div className="child"><a className="leaf" href="https://twitter.com/webninja256"><img src="https://rawcdn.githack.com/specious/specious.github.io/08dba0c/gfx/icons/bird.svg" alt="Twitter" />
                          <div className="glass-holder">
                              <div className="counterspin">
                                  <div className="glass"></div>
                              </div>
                          </div>
                      </a></div>
                  <div className="child"><a className="leaf" href="https://flic.kr/the-specious"><img src="https://rawcdn.githack.com/specious/specious.github.io/08dba0c/gfx/icons/photos.svg" alt="Flickr" />
                          <div className="glass-holder">
                              <div className="counterspin">
                                  <div className="glass"></div>
                              </div>
                          </div>
                      </a></div>
                  <div className="child"><a className="leaf" href="https://github.com/specious"><img src="https://rawcdn.githack.com/specious/specious.github.io/08dba0c/gfx/icons/octocat.svg" alt="GitHub" />
                          <div className="glass-holder">
                              <div className="counterspin">
                                  <div className="glass"></div>
                              </div>
                          </div>
                      </a></div>
                  <div className="child"><a className="leaf" href="https://codepen.io/tknomad"><img src="https://rawcdn.githack.com/specious/specious.github.io/08dba0c/gfx/icons/codepen.svg" alt="CodePen" />
                          <div className="glass-holder">
                              <div className="counterspin">
                                  <div className="glass"></div>
                              </div>
                          </div>
                      </a></div>
              </div>
              <div className="cover"></div>
          </div>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
