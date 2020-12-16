import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import LOCALIZATION from '../../locale/en';

function Loading() {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column mt-xl-5'>
            <div>
                <CircularProgress />
            </div>
            <div>
                <h3 className="loader">{LOCALIZATION.LOADING}</h3>
            </div>
        </div>
    );
}

export default Loading;