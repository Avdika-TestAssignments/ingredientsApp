import React from 'react';

import Notifications from './Notifications';
import { Input, InputS } from '../Styled/MainFormStyle';

const Mainform = ({ notifications, onChange, onSubmit, query }) => {
    return (
        <form onSubmit={onSubmit} className="search-form">
            {notifications !== "" && <Notifications notifications={notifications} />}
            <Input
                type="text"
                name="query"
                onChange={onChange}
                value={query}
                autoComplete="off"
                placeholder="Search Ingredients"
                spellcheck="true"
            />
            <InputS
                type="submit"
                value="Search"
            />
        </form>
    );
};

export default Mainform;
