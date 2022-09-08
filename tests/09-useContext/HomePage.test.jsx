const { render, screen } = require("@testing-library/react");
const { HomePage } = require("../../src/09-useContext/HomePage");

describe('Tests in HomePage', () => {

    test('should show the component without the user', () => {
        render(<HomePage />)
    });
});