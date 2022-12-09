import React from 'react';

const ImpFileInput = () => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>DO</td>
                        <td><input type="file" className='ordDO'/></td>
                    </tr>
                    <tr>
                        <td>CF</td>
                        <td><input type="file" className='ordCF'/></td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td><input type="file" className='ordOther'/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ImpFileInput;