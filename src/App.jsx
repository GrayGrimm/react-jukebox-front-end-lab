import { useState, useEffect } from 'react';
import * as trackService from './services/trackService.js'
import TrackList from './components/TrackList/TrackList.jsx'
import TrackForm from './components/TrackForm/TrackForm.jsx'


const App = () => {
  const [tracks, setTracks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);


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

  // const handleFormView = () => {

  // }

  return (
    <>
      <TrackForm  />
      <TrackList tracks={tracks} />
    </>
  );
};

export default App;
