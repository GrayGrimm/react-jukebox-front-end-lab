// src/components/HootDetails/HootDetails.jsx

const TrackList = ({ tracks, isFormOpen, handleFormView, TrackForm, handleSelect, selected }) => {

    return (
        <>
            <div>
                <button onClick={handleFormView}>
                    New Track
                </button>
            </div>
            <div>
                <h1>Track List</h1>
                <div>
                    {!tracks.length ? (
                        <h2>No Tracks Added!</h2>
                    ) : (
                        <ul>
                            {tracks.map((track) => (
                                <li
                                    key={track._id}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleSelect(track)}
                                >
                                    {track.title} by {track.artist}
                                    <button onClick={() => handleFormView(selected)}>
                                        Edit
                                    </button>

                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};
export default TrackList;