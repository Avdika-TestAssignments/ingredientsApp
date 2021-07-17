import React from 'react';

import { Text } from '../Styled/NotificationsStyle';

function Notifications({ notifications }) {
    return (
        <div>
        <Text>{notifications}</Text>
      </div>
    )
}

export default Notifications;
