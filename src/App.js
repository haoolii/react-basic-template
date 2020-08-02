import React from 'react';
import { render } from 'react-dom';
// import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {
  // return React.createElement('div', { id: 'test-react' }, [
  //   React.createElement('h1', {}, 'Hello! React!'),
  //   React.createElement(Pet, {
  //     name: 'Luna',
  //     animal: 'Dog',
  //     breed: 'Havanese',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Pepper',
  //     animal: 'Bird',
  //     breed: 'Cockatiel',
  //   }),
  //   React.createElement(Pet, { name: 'Doink', animal: 'Cat', breed: 'Mixed' }),
  // ]);

  return (
    <div>
      <h1 id="Adopt">Adopt me!</h1>
      <SearchParams></SearchParams>
    </div>
  );
};
render(<App />, document.getElementById('root'));
