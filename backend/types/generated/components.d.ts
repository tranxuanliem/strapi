import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsBenefit extends Schema.Component {
  collectionName: 'components_elements_benefit';
  info: {
    displayName: 'benefit';
    description: '';
  };
  attributes: {
    size: Attribute.Enumeration<
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    >;
    textAlign: Attribute.Enumeration<['left', 'right', 'center']>;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText;
    links: Attribute.Component<'elements.link', true>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_card';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText;
    links: Attribute.Component<'elements.link', true>;
    image: Attribute.Media;
    isBackgroundImage: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    color: Attribute.Enumeration<['Primary', 'Secondary']>;
  };
}

export interface ModuleBenefits extends Schema.Component {
  collectionName: 'components_module_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    numberOfColumns: Attribute.Enumeration<
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    >;
    textAlign: Attribute.Enumeration<['left', 'right', 'center']>;
    benefit: Attribute.Component<'elements.benefit', true>;
  };
}

export interface ModuleCards extends Schema.Component {
  collectionName: 'components_module_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface ModuleContent extends Schema.Component {
  collectionName: 'components_module_contents';
  info: {
    displayName: 'content';
    icon: 'cog';
    description: '';
  };
  attributes: {
    eyebrow: Attribute.String;
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText;
    links: Attribute.Component<'elements.link', true>;
    image: Attribute.Media;
    backgroundImage: Attribute.Media;
    textAlign: Attribute.Enumeration<['left', 'right', 'center']>;
    reverse: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ModuleHero extends Schema.Component {
  collectionName: 'components_module_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    eyebrow: Attribute.String;
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText;
    links: Attribute.Component<'elements.link', true>;
    image: Attribute.Media;
    backgroundImage: Attribute.Media;
  };
}

export interface SeoMetadata extends Schema.Component {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'metadata';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.benefit': ElementsBenefit;
      'elements.card': ElementsCard;
      'elements.link': ElementsLink;
      'module.benefits': ModuleBenefits;
      'module.cards': ModuleCards;
      'module.content': ModuleContent;
      'module.hero': ModuleHero;
      'seo.metadata': SeoMetadata;
    }
  }
}
