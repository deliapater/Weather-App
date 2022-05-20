import React from 'react';
import {getCurrentWeather} from './../api/OpenWeatherApi'
import './SearchBar.scss';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

    }
    onInputChange(e) {
        this.props.inputChange(e);
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.formSubmitted();
    }
    render() {
        const location = this.props.location;
        const temp = 'this.state.temp';
        

        return (
            <div className='search-bar'>
            <form className='search-bar__form' onSubmit={(e) => this.onFormSubmit(e)}>
                <button className='search-bar__button' type="submit">
                    Search
                </button>
                <input
                className='search-bar__input' 
                name="search"
                id="search"
                value={location}
                onChange={(e) => this.onInputChange(e)}
                />
            </form>
            </div>
        )
    }
}

export default SearchBar;