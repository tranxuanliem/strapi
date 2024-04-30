"use strict";

/**
 * `pages-populate` middleware
 */

const populate = {
  seo: {
    populate: {
      metaImage: {
        fields: ["name", "url", "alternativeText", "caption"],
      },
    },
  },
  sections: {
    on: {
      "module.hero": {
        populate: {
          links: true,
          image: {
            fields: ["name", "url", "alternativeText"],
          },
          backgroundImage: {
            fields: ["name", "url", "alternativeText"],
          },
        },
      },
      "module.cards": {
        populate: {
          card: {
            populate: {
              links: true,
              image: {
                fields: ["name", "url", "alternativeText"],
              },
            },
          },
        },
      },
      "module.benefits": {
        populate: {
          benefit: {
            populate: {
              links: true,
              image: {
                fields: ["name", "url", "alternativeText"],
              },
            },
          },
        },
      },
      "module.content": {
        populate: {
          links: true,
          image: {
            fields: ["name", "url", "alternativeText"],
          },
          backgroundImage: {
            fields: ["name", "url", "alternativeText"],
          },
        },
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      ...ctx.query,
    };
    await next();
  };
};
