
const TrackDetail = ({ selected }) => {
    if (!selected) {
        return (
            <div>
                <h3>No Track Selected</h3>
            </div>
        );
    }

    return (
        <div>
            <h2>Now Playing</h2>
            <p>Title: {selected.title}</p>
            <p>Artsist: {selected.artist}</p>
        </div>
    )
}

export default TrackDetail;