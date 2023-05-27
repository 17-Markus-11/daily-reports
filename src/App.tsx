import React, { Component } from 'react';
import './App.css';
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
import Main from './components/main/Main';

class App extends Component {
  render(): React.ReactNode {    
    return (
      <div className="App">
        <Main />
        <RotatableSvg left={100} top={200} width={100} svg={cactus} />
        <RotatableSvg left={200} top={800} width={50} svg={bottle} />
        <RotatableSvg left={1600} top={750} width={100} svg={glove} />
        <RotatableSvg left={1750} top={450} width={100} svg={crisTree} />
        <RotatableSvg left={1400} top={150} width={100} svg={coffe} />
        <RotatableSvg left={450} top={200} width={100} svg={letter} />
        <RotatableSvg left={400} top={650} width={100} svg={leaf} />
        <RotatableSvg left={1700} top={100} width={100} svg={ship} />
        <RotatableSvg left={300} top={350} width={100} svg={flowerpot} />
        <RotatableSvg left={1500} top={400} width={100} svg={flowerpotLeaf} />
      </div>
    );
  }
}

export default App;
