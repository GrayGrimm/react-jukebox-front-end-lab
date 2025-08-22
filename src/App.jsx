import { useState, useEffect, useOptimistic } from 'react';
import * as trackService from './services/trackService.js';
import TrackList from './components/TrackList/TrackList.jsx';
import TrackForm from './components/TrackForm/TrackForm.jsx';
import TrackDetail from './components/TrackDetail/TrackDetail.jsx';


const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState(null);
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

  const handleSelect = (track) => {
    setSelected(track);
  };

  const handleFormView = (track) => {
    // if (!track._id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };
  //when adding the play functionality make sure when a song is played the form disappears

  const handleAddTrack = async (formData) => {
    try {

      const newTrack = await trackService.create(formData)

      if (newTrack.err) {
        throw new Error(newTrack.err);
      };

      setTracks([newTrack, ...tracks]);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updatedTrack = await trackService.update(formData, trackId);

      if (updatedTrack.err) {
        throw new Error(updatedTrack.err)
      }
      const updatedTrackList = tracks.map((track) => (
        track._id !== updatedTrack._id ? track : updatedTrack
      ));
      setTracks(updatedTrackList);
      setSelected(updatedTrack);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTrack = async (trackId) => {
    try{
      const deletedTrack = await trackService.deleteTrack(trackId)

      setTracks(tracks.filter((track)=> track._id !== deletedTrack._id));
      setSelected(null);
      setIsFormOpen(false);
    }catch(err){
      console.log(err);
    }
  };

  return (
    <>
      {isFormOpen ? (
        <TrackForm
          handleAddTrack={handleAddTrack}
          selected={selected}
          handleUpdateTrack={handleUpdateTrack}
        />
      ) : (
        <>
          <TrackList
            tracks={tracks}
            handleFormView={handleFormView}
            isFormOpen={isFormOpen}
            handleSelect={handleSelect}
            selected={selected}
            handleDeleteTrack={handleDeleteTrack}
          />
          <TrackDetail
            selected={selected}
            handleDeleteTrack={handleDeleteTrack}
          />
          {/* {selected && (
            <div>
              <h2>Selected Track:</h2>
              <p>{selected.title} by {selected.artist}</p>
            </div>
          )} */}

        </>
      )}
    </>
  );
};

export default App;
