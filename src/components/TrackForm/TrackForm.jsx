import { useState } from 'react';
import { useParams } from 'react-router';


const TrackForm = ({ handleAddTrack, selected, handleUpdateTrack }) => {


    const initState = {
        title: '',
        artist: '',
    };
    const [formData, setFormData] = useState(
        selected ? selected : initState
    );

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selected) {
            handleUpdateTrack(formData, selected._id)
        } else {
            handleAddTrack(formData);
        }
    }
    return (
        <div>
            <h1>{selected ? 'Edit Track' : 'New Track'}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> Title </label>
                <input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="artist"> Artist </label>
                <input
                    id="artist"
                    name="artist"
                    value={formData.artist}
                    onChange={handleChange}
                    required
                />
                {!selected ?
                    <button type="submit">Add New Track</button> :
                    <button type="submit">Edit Track</button>
                }
            </form>
        </div>
    );
};

export default TrackForm;