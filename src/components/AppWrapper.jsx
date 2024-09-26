import { StrictMode } from 'react';

const AppWrapper = ({ children }) => {
    return (
        <StrictMode>
            {children}
        </StrictMode>
    );
};

export default AppWrapper;

