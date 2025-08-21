import { useState } from 'react';

const TrackForm = ({ handleAddTrack }) => {
    const initState = {
        title: '',
        artist: '',
    };
    const [formData, setFormData] = useState(initState);

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        handleAddTrack(formData);
    }
    return (
        <div>
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
                <button type="submit">Add New Track</button>
            </form>
        </div>
    );
};

export default TrackForm;