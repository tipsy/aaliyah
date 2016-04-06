exports.tryAgain = function (func, delay) {
    !function dustItOffAndTryAgain() {
        try {
            func();
        } catch (nonSuccess) {
            setTimeout(dustItOffAndTryAgain, delay);
        }
    }();
};
