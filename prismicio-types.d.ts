// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | HeaderSlice
  | SkillsAndCertificationsSlice
  | WorkSlice
  | ContactSlice
  | AboutSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type ProjectDocumentDataSlicesSlice = GallerySlice | HeroSlice;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

type ProjectsDocumentDataSlicesSlice = WorkSlice;

/**
 * Content for Projects documents
 */
interface ProjectsDocumentData {
  /**
   * Title field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice> /**
   * Meta Title field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Intro field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  intro: prismic.KeyTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | ProjectDocument
  | ProjectsDocument
  | SettingsDocument;

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * About field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.about
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about: prismic.RichTextField;

  /**
   * Slice Name field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.slice_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slice_name: prismic.KeyTextField;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *Contact → Default → Primary*
 */
export interface ContactSliceDefaultPrimary {
  /**
   * Email field in *Contact → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Message field in *Contact → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.message
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  message: prismic.RichTextField;

  /**
   * Slice Name field in *Contact → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.slice_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slice_name: prismic.KeyTextField;
}

/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefault;

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSlice = prismic.SharedSlice<
  "contact",
  ContactSliceVariation
>;

/**
 * Item in *Gallery → Default → Primary → Photos*
 */
export interface GallerySliceDefaultPrimaryPhotosItem {
  /**
   * Photo field in *Gallery → Default → Primary → Photos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.default.primary.photos[].photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;
}

/**
 * Primary content in *Gallery → Default → Primary*
 */
export interface GallerySliceDefaultPrimary {
  /**
   * Photos field in *Gallery → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.default.primary.photos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  photos: prismic.GroupField<Simplify<GallerySliceDefaultPrimaryPhotosItem>>;
}

/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GallerySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Gallery*
 */
type GallerySliceVariation = GallerySliceDefault;

/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlice = prismic.SharedSlice<
  "gallery",
  GallerySliceVariation
>;

/**
 * Primary content in *Header → Default → Primary*
 */
export interface HeaderSliceDefaultPrimary {
  /**
   * Intro field in *Header → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.default.primary.intro
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro: prismic.RichTextField;
}

/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Header*
 */
type HeaderSliceVariation = HeaderSliceDefault;

/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: Header
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSlice = prismic.SharedSlice<"header", HeaderSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Main Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.main_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;

  /**
   * Description field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Link Github field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.link_github
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_github: prismic.LinkField;

  /**
   * Link Live Demo field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.link_live_demo
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_live_demo: prismic.LinkField;

  /**
   * Year field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.year
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *SkillsAndCertifications → Default → Primary → Certifications*
 */
export interface SkillsAndCertificationsSliceDefaultPrimaryCertificationsItem {
  /**
   * Certification field in *SkillsAndCertifications → Default → Primary → Certifications*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skills_and_certifications.default.primary.certifications[].certification
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  certification: prismic.RichTextField;
}

/**
 * Primary content in *SkillsAndCertifications → Default → Primary*
 */
export interface SkillsAndCertificationsSliceDefaultPrimary {
  /**
   * Certifications field in *SkillsAndCertifications → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: skills_and_certifications.default.primary.certifications[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  certifications: prismic.GroupField<
    Simplify<SkillsAndCertificationsSliceDefaultPrimaryCertificationsItem>
  >;

  /**
   * Slice Name field in *SkillsAndCertifications → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skills_and_certifications.default.primary.slice_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slice_name: prismic.KeyTextField;

  /**
   * Languages field in *SkillsAndCertifications → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skills_and_certifications.default.primary.languages
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  languages: prismic.RichTextField;

  /**
   * Coding field in *SkillsAndCertifications → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skills_and_certifications.default.primary.coding
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  coding: prismic.RichTextField;

  /**
   * Design field in *SkillsAndCertifications → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skills_and_certifications.default.primary.design
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  design: prismic.RichTextField;
}

/**
 * Default variation for SkillsAndCertifications Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillsAndCertificationsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SkillsAndCertificationsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SkillsAndCertifications*
 */
type SkillsAndCertificationsSliceVariation =
  SkillsAndCertificationsSliceDefault;

/**
 * SkillsAndCertifications Shared Slice
 *
 * - **API ID**: `skills_and_certifications`
 * - **Description**: SkillsAndCertifications
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillsAndCertificationsSlice = prismic.SharedSlice<
  "skills_and_certifications",
  SkillsAndCertificationsSliceVariation
>;

/**
 * Item in *Work → Default → Primary → Navigation*
 */
export interface WorkSliceDefaultPrimaryNavigationItem {
  /**
   * Category field in *Work → Default → Primary → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work.default.primary.navigation[].category
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  category: prismic.KeyTextField;
}

/**
 * Item in *Work → Full Screen → Primary → Navigation*
 */
export interface WorkSliceFullScreenPrimaryNavigationItem {
  /**
   * Category field in *Work → Full Screen → Primary → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work.fullScreen.primary.navigation[].category
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  category: prismic.KeyTextField;
}

/**
 * Primary content in *Work → Default → Primary*
 */
export interface WorkSliceDefaultPrimary {
  /**
   * Navigation field in *Work → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: work.default.primary.navigation[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<
    Simplify<WorkSliceDefaultPrimaryNavigationItem>
  >;

  /**
   * Slice Name field in *Work → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work.default.primary.slice_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slice_name: prismic.KeyTextField;
}

/**
 * Default variation for Work Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorkSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Work → Full Screen → Primary*
 */
export interface WorkSliceFullScreenPrimary {
  /**
   * Navigation field in *Work → Full Screen → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: work.fullScreen.primary.navigation[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<
    Simplify<WorkSliceFullScreenPrimaryNavigationItem>
  >;

  /**
   * Slice Name field in *Work → Full Screen → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Como vai aparecer no menu
   * - **API ID Path**: work.fullScreen.primary.slice_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slice_name: prismic.KeyTextField;
}

/**
 * Full Screen variation for Work Slice
 *
 * - **API ID**: `fullScreen`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkSliceFullScreen = prismic.SharedSliceVariation<
  "fullScreen",
  Simplify<WorkSliceFullScreenPrimary>,
  never
>;

/**
 * Slice variation for *Work*
 */
type WorkSliceVariation = WorkSliceDefault | WorkSliceFullScreen;

/**
 * Work Shared Slice
 *
 * - **API ID**: `work`
 * - **Description**: Work
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkSlice = prismic.SharedSlice<"work", WorkSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataSlicesSlice,
      ProjectsDocument,
      ProjectsDocumentData,
      ProjectsDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      ContactSlice,
      ContactSliceDefaultPrimary,
      ContactSliceVariation,
      ContactSliceDefault,
      GallerySlice,
      GallerySliceDefaultPrimaryPhotosItem,
      GallerySliceDefaultPrimary,
      GallerySliceVariation,
      GallerySliceDefault,
      HeaderSlice,
      HeaderSliceDefaultPrimary,
      HeaderSliceVariation,
      HeaderSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      SkillsAndCertificationsSlice,
      SkillsAndCertificationsSliceDefaultPrimaryCertificationsItem,
      SkillsAndCertificationsSliceDefaultPrimary,
      SkillsAndCertificationsSliceVariation,
      SkillsAndCertificationsSliceDefault,
      WorkSlice,
      WorkSliceDefaultPrimaryNavigationItem,
      WorkSliceDefaultPrimary,
      WorkSliceFullScreenPrimaryNavigationItem,
      WorkSliceFullScreenPrimary,
      WorkSliceVariation,
      WorkSliceDefault,
      WorkSliceFullScreen,
    };
  }
}
