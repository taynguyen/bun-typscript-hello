import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsBlogHighlights extends Struct.ComponentSchema {
  collectionName: 'components_sections_blog_highlights';
  info: {
    description: '';
    displayName: 'Blog Highlights';
    icon: 'collection';
  };
  attributes: {
    articles: Schema.Attribute.Component<'shared.article-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_sections_call_to_actions';
  info: {
    description: '';
    displayName: 'Call To Action';
    icon: 'megaphone';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCompanyShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_company_showcases';
  info: {
    description: '';
    displayName: 'Company Showcase';
    icon: 'slideshow';
  };
  attributes: {
    description: Schema.Attribute.Text;
    showcases: Schema.Attribute.Component<'shared.company-card', true>;
    title_line_1: Schema.Attribute.String;
    title_line_1_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_line_2: Schema.Attribute.String;
  };
}

export interface SectionsExpertGuidance extends Struct.ComponentSchema {
  collectionName: 'components_sections_expert_guidances';
  info: {
    description: '';
    displayName: 'Expert Guidance';
    icon: 'user-astronaut';
  };
  attributes: {
    advisor_widget: Schema.Attribute.Component<'shared.advisor-widget', false>;
    block2_title: Schema.Attribute.String;
    block2_title_description: Schema.Attribute.Text;
    block2_title_prefix: Schema.Attribute.String;
    block2_title_prefix_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    cta_text: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    title_prefix: Schema.Attribute.String;
    title_prefix_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SectionsExpertInsight extends Struct.ComponentSchema {
  collectionName: 'components_sections_expert_insights';
  info: {
    description: '';
    displayName: 'Expert Insight';
  };
  attributes: {
    bg_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    insights: Schema.Attribute.Component<'shared.expert-insight-item', true>;
    title: Schema.Attribute.String;
    title_prefix: Schema.Attribute.String;
    title_prefix_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SectionsFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    bg_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    info_bar: Schema.Attribute.Component<'shared.footer-info-bar', false>;
    menu: Schema.Attribute.Component<'shared.footer-menu', false>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heros';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'heading';
  };
  attributes: {
    cta_link: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media;
    review_avatar_badges: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    review_text: Schema.Attribute.String;
    search_button_text: Schema.Attribute.String;
    search_placeholder: Schema.Attribute.String;
    title: Schema.Attribute.Blocks;
    trusted_partner_icons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    trusted_partners_label: Schema.Attribute.Blocks;
  };
}

export interface SectionsJsScriptSnippet extends Struct.ComponentSchema {
  collectionName: 'components_sections_js_script_snippets';
  info: {
    displayName: 'JS Script snippet';
  };
  attributes: {
    js_code: Schema.Attribute.Text;
  };
}

export interface SectionsNavigationBar extends Struct.ComponentSchema {
  collectionName: 'components_sections_navigation_bars';
  info: {
    displayName: 'Navigation Bar';
  };
  attributes: {
    bg_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    bg_color_mobile: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    buttons: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo_mobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    menu_list: Schema.Attribute.Component<'shared.navigation-bar-menu', true>;
  };
}

export interface SectionsServicesOverview extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_overviews';
  info: {
    description: '';
    displayName: 'Services Overview';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'shared.service-item', true>;
    title_line_1: Schema.Attribute.Blocks;
    title_line_2: Schema.Attribute.Blocks;
    title_line_2_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title_line_3: Schema.Attribute.Blocks;
  };
}

export interface SectionsTopServiceProviderBanner
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_top_service_provider_banners';
  info: {
    description: '';
    displayName: 'Top Service Provider Banner';
  };
  attributes: {
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsVisionMission extends Struct.ComponentSchema {
  collectionName: 'components_sections_vision_missions';
  info: {
    description: '';
    displayName: 'Vision Mission';
    icon: 'eye';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.vision-card', true>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.Blocks;
    title_prefix: Schema.Attribute.String;
    title_prefix_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ServicesPageSectionsBenefitsList
  extends Struct.ComponentSchema {
  collectionName: 'components_services_page_sections_benefits_lists';
  info: {
    displayName: 'BenefitsList';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.benefit-item', true>;
    bg_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    cta: Schema.Attribute.Component<'shared.text-icon-link', false>;
    description: Schema.Attribute.Text;
    title_line_1: Schema.Attribute.String;
    title_line_2: Schema.Attribute.String;
  };
}

export interface ServicesPageSectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_services_page_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.text-icon-link', false>;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title_line_1: Schema.Attribute.String;
    title_line_2: Schema.Attribute.String;
  };
}

export interface ServicesPageSectionsServiceOfferingsGrid
  extends Struct.ComponentSchema {
  collectionName: 'components_services_page_sections_service_offerings_grids';
  info: {
    displayName: 'Service Offerings Grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    item_icon: Schema.Attribute.Media<'images' | 'files'>;
    items: Schema.Attribute.Component<'shared.offering-item', true>;
    title: Schema.Attribute.String;
    title_suffix: Schema.Attribute.String;
  };
}

export interface SharedAdvisorWidget extends Struct.ComponentSchema {
  collectionName: 'components_shared_advisor_widgets';
  info: {
    description: '';
    displayName: 'Advisor Widget';
    icon: 'alien';
  };
  attributes: {
    advisor_id: Schema.Attribute.String;
  };
}

export interface SharedArticleCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_article_cards';
  info: {
    description: '';
    displayName: 'Article Card';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedAuthor extends Struct.ComponentSchema {
  collectionName: 'components_shared_authors';
  info: {
    displayName: 'author';
    icon: 'user';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface SharedBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_items';
  info: {
    displayName: 'Benefit Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCompanyCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_company_cards';
  info: {
    description: '';
    displayName: 'Company Showcase Card';
    icon: 'building';
  };
  attributes: {
    bg_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    review_author: Schema.Attribute.Component<'shared.author', false>;
    review_comment: Schema.Attribute.Text;
    score_review: Schema.Attribute.String;
    score_text: Schema.Attribute.String;
  };
}

export interface SharedExpertInsightItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_expert_insight_items';
  info: {
    displayName: 'Expert Insight Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterInfoBar extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_info_bars';
  info: {
    displayName: 'Footer Info Bar';
  };
  attributes: {
    copy_right_text: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    social_links: Schema.Attribute.Component<'shared.icon-link', true>;
  };
}

export interface SharedFooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_menus';
  info: {
    displayName: 'Footer Menu';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.footer-menu-item', true>;
  };
}

export interface SharedFooterMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_menu_items';
  info: {
    displayName: 'Footer Menu Item';
  };
  attributes: {
    columns: Schema.Attribute.Component<'shared.link-array', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SharedIconLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_links';
  info: {
    displayName: 'Icon Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'attachment';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    display_text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedLinkArray extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_arrays';
  info: {
    displayName: 'Link Array';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedNavigationBarBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_bar_banners';
  info: {
    displayName: 'Navigation Bar Banner';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedNavigationBarCategoryItem
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_bar_category_items';
  info: {
    displayName: 'Navigation Bar Category Item';
  };
  attributes: {
    categories: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedNavigationBarMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_bar_menus';
  info: {
    displayName: 'Navigation Bar Menu';
  };
  attributes: {
    column_banner: Schema.Attribute.Component<
      'shared.navigation-bar-banner',
      false
    >;
    column_categories: Schema.Attribute.Component<
      'shared.navigation-bar-category-item',
      true
    >;
    column_items: Schema.Attribute.Component<
      'shared.navigation-bar-menu-item',
      true
    >;
    menu_title: Schema.Attribute.String;
  };
}

export interface SharedNavigationBarMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_bar_menu_items';
  info: {
    displayName: 'Navigation Bar Menu Item';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    title_link: Schema.Attribute.String;
  };
}

export interface SharedOfferingItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_offering_items';
  info: {
    displayName: 'Offering Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    description: '';
    displayName: 'Service Item';
    icon: 'briefcase';
  };
  attributes: {
    cta_link: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTextIconLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_icon_links';
  info: {
    displayName: 'Text Icon Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedVisionCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_cards';
  info: {
    description: '';
    displayName: 'Vision Card';
    icon: 'text';
  };
  attributes: {
    bg_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    description: Schema.Attribute.Text;
    text_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.blog-highlights': SectionsBlogHighlights;
      'sections.call-to-action': SectionsCallToAction;
      'sections.company-showcase': SectionsCompanyShowcase;
      'sections.expert-guidance': SectionsExpertGuidance;
      'sections.expert-insight': SectionsExpertInsight;
      'sections.footer': SectionsFooter;
      'sections.hero': SectionsHero;
      'sections.js-script-snippet': SectionsJsScriptSnippet;
      'sections.navigation-bar': SectionsNavigationBar;
      'sections.services-overview': SectionsServicesOverview;
      'sections.top-service-provider-banner': SectionsTopServiceProviderBanner;
      'sections.vision-mission': SectionsVisionMission;
      'services-page-sections.benefits-list': ServicesPageSectionsBenefitsList;
      'services-page-sections.hero': ServicesPageSectionsHero;
      'services-page-sections.service-offerings-grid': ServicesPageSectionsServiceOfferingsGrid;
      'shared.advisor-widget': SharedAdvisorWidget;
      'shared.article-card': SharedArticleCard;
      'shared.author': SharedAuthor;
      'shared.benefit-item': SharedBenefitItem;
      'shared.company-card': SharedCompanyCard;
      'shared.expert-insight-item': SharedExpertInsightItem;
      'shared.footer-info-bar': SharedFooterInfoBar;
      'shared.footer-menu': SharedFooterMenu;
      'shared.footer-menu-item': SharedFooterMenuItem;
      'shared.icon-link': SharedIconLink;
      'shared.link': SharedLink;
      'shared.link-array': SharedLinkArray;
      'shared.navigation-bar-banner': SharedNavigationBarBanner;
      'shared.navigation-bar-category-item': SharedNavigationBarCategoryItem;
      'shared.navigation-bar-menu': SharedNavigationBarMenu;
      'shared.navigation-bar-menu-item': SharedNavigationBarMenuItem;
      'shared.offering-item': SharedOfferingItem;
      'shared.service-item': SharedServiceItem;
      'shared.text-icon-link': SharedTextIconLink;
      'shared.vision-card': SharedVisionCard;
    }
  }
}
