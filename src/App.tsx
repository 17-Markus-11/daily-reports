import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import RotatableSvg from './components/rotatable-svg/RotatableSvg';
import { ReactComponent as cactus } from './svg/cactus.svg';
import { ReactComponent as bottle } from './svg/bottle.svg';
import { ReactComponent as glove } from './svg/glove.svg';
import { ReactComponent as crisTree } from './svg/chris-tree.svg';
import { ReactComponent as coffe } from './svg/coffe.svg';
import { ReactComponent as letter } from './svg/letter.svg';
import { ReactComponent as leaf } from './svg/leaf.svg';
import { ReactComponent as ship } from './svg/ship.svg';
import { ReactComponent as flowerpot } from './svg/flowerpot.svg';
import { ReactComponent as flowerpotLeaf } from './svg/flowerpot-leaf.svg';
import ReportsContainer from './components/report/ReportsContainer';
import { AnimationTypes } from './components/rotatable-svg/AnimationTypes';

class App extends Component {
  render(): React.ReactNode {    
    return (
      <div className="App">
        <div className="AppContent">
          <Switch>
            <Route exact={true} render={() => <ReportsContainer/>} />
          </Switch>
        </div>
        <RotatableSvg animationName={AnimationTypes.Swing} left={100} top={200} width={100} svg={cactus} />
        <RotatableSvg animationName={AnimationTypes.SwingOposite} left={200} top={800} width={50} svg={bottle} />
        <RotatableSvg animationName={AnimationTypes.Swing} left={1600} top={750} width={100} svg={glove} />
        <RotatableSvg animationName={AnimationTypes.SwingOposite} left={1750} top={450} width={100} svg={crisTree} />
        <RotatableSvg animationName={AnimationTypes.Swing} left={1400} top={150} width={100} svg={coffe} />
        <RotatableSvg animationName={AnimationTypes.SwingOposite} left={450} top={200} width={100} svg={letter} />
        <RotatableSvg animationName={AnimationTypes.Swing} left={400} top={650} width={100} svg={leaf} />
        <RotatableSvg animationName={AnimationTypes.SwingOposite} left={1700} top={100} width={100} svg={ship} />
        <RotatableSvg animationName={AnimationTypes.Swing} left={300} top={350} width={100} svg={flowerpot} />
        <RotatableSvg animationName={AnimationTypes.SwingOposite} left={1500} top={400} width={100} svg={flowerpotLeaf} />
      </div>
    );
  }
}

export default App;
