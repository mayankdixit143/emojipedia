import React from "react";
import Entry from './Entry';
import Emojipedia from '../emojipedia.js';

function createEntry(Emojipedia) {
    return (
      <Entry 
      key={Emojipedia.id}
      emoji={Emojipedia.emoji}
      name={Emojipedia.name}
      meaning={Emojipedia.meaning}
      />
    )
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {Emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
