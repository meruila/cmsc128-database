import React from "react";
import CircleIcon from '@mui/icons-material/Circle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip'
import ArticleIcon from '@mui/icons-material/Article';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Box from '@mui/material/Box'

/**
 * Template for Quick Access Buttons in SHACker Toolbar
 * NOTE: [05/28/22] Buttons are static
 * OPTIONAL: Change to dynamic most/recently used buttons
 * @returns Quick Access Buttons Component for SHACKerToolbar
 */

function QuickAccessButtons() {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'nowrap',
          }}>
            <Tooltip title="Student Records">
                <IconButton>
                    <ArticleIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Summary">
                <IconButton>
                    <SummarizeIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Logs">
                <IconButton>
                    <ReceiptLongIcon/>
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default QuickAccessButtons;