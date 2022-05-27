import React from "react";
import CircleIcon from '@mui/icons-material/Circle';
import IconButton from '@mui/material/IconButton';

/**
 * Template for Quick Access Buttons in SHACker Toolbar
 * NOTE: [05/18/22] Still needs to be replaced with most used buttons
 * @returns Quick Access Buttons Component for SHACKerToolbar
 */

function QuickAccessButtons() {
    return (
        <div>
            <IconButton>
                <CircleIcon/>
            </IconButton>
            <IconButton>
                <CircleIcon/>
            </IconButton>
            <IconButton>
                <CircleIcon/>
            </IconButton>
        </div>
    )
}

export default QuickAccessButtons;