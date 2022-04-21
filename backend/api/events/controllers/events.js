"use strict";
const { sanitizeEntity } = require("strapi-utils");
module.exports = {
  // get logged in users
  async me(context) {
    const user = context.state.user;
    if (!user) {
      return context.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }
    const data = await strapi.services.events.find({ user: user.id });
    if (!data) {
      return context.notFound();
    }
    return sanitizeEntity(data, { model: strapi.models.events });
  },
};
