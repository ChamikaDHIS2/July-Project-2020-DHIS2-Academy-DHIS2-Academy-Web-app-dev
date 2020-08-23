

import { useHistory, useRouteMatch } from 'react-router-dom'
import { PropTypes } from '@dhis2/prop-types'
import React from 'react'
import { Menu, MenuItem } from '@dhis2/ui'

const NavigationItem = ({ path, label }) => {
    const history = useHistory()
    const routeMatch = useRouteMatch(path)
    const isActive = routeMatch?.isExact
    const onClick = () => !isActive && history.push(path)
    return <MenuItem label={label} active={isActive} onClick={onClick} />
}

NavigationItem.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export const Navigation = () => (
    
    <Menu>
        <NavigationItem
            label="Home"
            path="/"
        />

        <NavigationItem
            label="Attributes"
            path="/attributes"
        />
        
        <NavigationItem
            label="Visualization"
            path="/visualizations"
        />

        <NavigationItem
            label="Contact Us"
            path="/form"
        />
    </Menu>
)
