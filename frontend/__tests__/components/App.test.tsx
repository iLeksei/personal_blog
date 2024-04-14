import React from 'react';
import {render, screen} from '@testing-library/react';

import App from '../../src/App';

describe('App components tests', () => {

    it('should render App component', function () {
        render(<App/>);
        expect(screen.getByText(/Hello, world!/i)).toBeInTheDocument();
    });
});
