import { TextField } from '@mui/material';
import React from 'react';

function OrdRemark(props) {
    return (
        <div>
            <TextField
          id="filled-multiline-flexible"
          label="REMARK"
          multiline
          maxRows={2}
        //   value={value}
        //   onChange={handleChange}
          variant="standard"
        />
        </div>
    );
}

export default OrdRemark;