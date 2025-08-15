import * as trackService from './services/trackService.js'
import TrackList from './components/TrackList/TrackList.jsx'
import { useState, useEffect } from 'react';


const App = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await trackService.index();

        if (fetchedTracks.err) {
          throw new Error(fetchedTracks.err);
        };

        setTracks(fetchedTracks);
      } catch (err) {
        console.log(err);
      };
    };
    fetchTracks();
  }, []);
  return <h1>Hello world!</h1>;
};

export default App;
