
const TrackList = ({ tracks, isFormOpen , handleFormView }) => {

    return (
        <>
        <div>
        <button onClick={handleFormView}>
            {isFormOpen ? 'Close Form' : 'New Track'}
        </button>
        </div>
            <div>
                <h1>Track List</h1>
                <div>
                    {!tracks.length ? (
                        <h2>No Tracks Yet!</h2>
                    ) : (
                        <ul>
                            {tracks.map((track) => (
                                <li
                                    key={track._id}
                                >
                                    {track.title} by {track.artist}
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