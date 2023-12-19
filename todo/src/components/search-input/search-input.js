import React, {Component} from 'react';

import './search-input.css'

class SearchInput extends Component {
    state = {
        searchText: ""
    }
    onSearchChange = (e) => {
        const searchText = e.target.value;
        this.setState({searchText});
        this.props.onSearchChange(searchText);
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text" placeholder={this.props.placeText}
                onChange={this.onSearchChange}
                value={this.state.searchText}
            />
        )
    }
}

export default SearchInput;
