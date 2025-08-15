import { useState } from "react";

const TrackFrom = () => {
    const initState = {
        title: '',
        artist: '',
    };
    const [formData, setFormData] = useState(initState);

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value});
    };
    return (
        <div>
            <form>
                <label htmlFor="title"> Title </label>
                <input 
                id="title"
                name="title"
                value={formData.name}
                onChange={handleChange}
                required
                />
                <label htmlFor="artist"> Artist </label>
                <input 
                id="artist"
                name="artist"
                value={formData.name}
                onChange={handleChange}
                required
                />
                <button type="submit">Add New Track</button>
            </form>
        </div>
    );
};

export default TrackFrom;