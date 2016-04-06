exports.tryAgain = function (func, delay) {
    (function pickItUpAndTryAgain() {
        try {
            func();
        } catch (nonSuccess) {
            setTimeout(pickItUpAndTryAgain, delay);
        }
    })();
};
