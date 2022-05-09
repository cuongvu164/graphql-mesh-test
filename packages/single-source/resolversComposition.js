module.exports = {
  isAuth: (next) => (root, args, context, info) => {
    // Check if Authorization header is present
    if (!context.headers.authorization) {
      throw new Error("Unauthorized");
    }
    return next(root, args, context, info);
  }
};
