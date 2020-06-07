// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// https://stackoverflow.com/questions/41366380/matchmedia-not-present-when-testing-create-react-app-component-which-contain-rea
global.matchMedia = global.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    }
  }