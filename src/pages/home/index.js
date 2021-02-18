import React from 'react';
import { useHistory } from 'react-router';
import CustomButton from '../../components/buttons/CustomButton';

const index = () => {
    const route = useHistory();

    const gotoContactUsPage = () => {
        route.push('/contact-us');
    };

    return (
        <div>
            <CustomButton label="Go To contact us page" onClick={gotoContactUsPage} />
        </div>
    );
};

export default index;
