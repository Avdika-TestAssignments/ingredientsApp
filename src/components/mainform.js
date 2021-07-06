import React from 'react';
import Notifications from './Notifications';

const mainform = ({ notifications, onChange, onSubmit, query }) => {
    return (
        <form onSubmit={onSubmit} className="search-form">
            {notifications !== "" && <Notifications notifications={notifications} />}
            <input
                type="text"
                name="query"
                onChange={onChange}
                value={query}
                autoComplete="off"
                placeholder="Search Ingredients"
                spellcheck="true"
            />
            <input
                type="submit"
                value="Search"
            />
        </form>
    );
};

export default mainform;
