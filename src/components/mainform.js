import * as React from 'react';
import Notifications from './Notifications';
import { Input, IconButton } from "@chakra-ui/react";
import { SearchIcon }  from '@chakra-ui/icons';

const mainform = ({ notifications, onChange, onSubmit, query }) => {
    return (
        <form onSubmit={onSubmit} className="search-form">
            {notifications !== "" && <Notifications notifications={notifications} />}
            <Input
                variant="filled"
                maxWidth="50%"
                focusBorderColor = "blue.500"
                errorBorderColor = "red.500"
                type="text"
                name="query"
                onChange={onChange}
                value={query}
                autoComplete="off"
                placeholder="Search Ingridients"
            />
            <IconButton
                colorScheme="blue"
                aria-label="Search database"
                type="submit"
                value="Search"
                icon={<SearchIcon />}
                />
        </form>
    );
};

export default mainform;
