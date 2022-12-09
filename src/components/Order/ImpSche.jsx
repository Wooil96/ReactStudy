import React from 'react';

const ImpSche = () => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>PULLOUT</td>
                        <td><input type="text" className="ordPullOut" placeholder='Location ID'/></td>
                    </tr>
                    <tr>
                        <td>P/OUT SCHE</td>
                        <td><input type="date" className="ordPullOutSch" defaultValue={"MM/DD/YY"}  /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DELIVERY</td>
                        <td><input type="text" className="ordDelivery" placeholder='Location ID'/></td>
                    </tr>
                    <tr>
                        <td>DILV SCHE</td>
                        <td><input type="date" className="ordDeliverySch" defaultValue={"MM/DD/YY"}  /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RETURN</td>
                        <td><input type="text" className="ordReturn" placeholder='Location ID'/></td>
                    </tr>
                    <tr>
                        <td>RTN SCHE</td>
                        <td><input type="date" className="ordReturnSch" defaultValue={"MM/DD/YY"}  /></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ImpSche;