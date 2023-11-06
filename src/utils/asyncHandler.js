// High Order Function
const asyncHandler = (requestHandler) => async (req, res, next) => {
    try {
        await requestHandler(req, res, next);
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            message: error.message,
        });
    }
};

export { asyncHandler };

// Alternate method (use of Prommises)

// const asyncHandler = (requestHandler) => {
//     (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) =>
//             next(err)
//         );
//     };
// };
