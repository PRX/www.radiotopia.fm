# Podcast Data

- The podcast name should be entered on the Content tab.
- The show artwork (show tile) should be entered on the Options tab as the `Featured Image`.
- The `Podcast Website Link URL` and `Podcast Website Link Text` fields on Podcast collection items are optional.
    - If a URL is entered, the link will appear on the individual podcast page, under the show’s name
        - This URL should be a **complete** URL: e.g., `https://some-podcast.com/`
    - If text is entered, that text will be used for for the link, and it will link to the URL
        - Otherwise, the link will default to `Listen at <the URL>`
- The `Social Icon CSS Filter` accepts one or more CSS filters which can be used to change the color of the social icons at the top of each podcast page.
    - The icons are black by default (i.e., the icon images are actually black).
    - [This utility](https://codepen.io/sosuke/pen/Pjoqqp) can take a “Target color” and return the CSS filter that should be applied to make the icons that color.
    - The value entered into the podcast data form should **NOT** include `filter:`, it should start with `invert(50%)`
- The podcast trailer and “where to start” episodes are derived from native Squarespace audio players that are managed on each podcast page, in a block field below the custom players. These native players will not be visible on the public-facing website.
    - For the trailer, only the first player in the block field is used.
    - For “where to start” episodes, a custom player will be added for each native player found in the block field.
    - The native players can be configured to use either an “external file” or an “upload file”.
    - The “Title” and “Artist” set on the native player will be displayed in the corresponding custom player.
    - In order to migrate old data, there are additional “legacy” block fields that appear. No new audio should be added to these block fields. They should be phased out over time, and all audio should be added to the new block fields.

# Styles and CSS Stylesheets

- Sigmund Pro is installed from Adobe via `Settings > Advanced > Code Injection`.
- Sigmund Pro is activated under `Design > Custom CSS`.
- By default, all text is dark blue (defined in `Design > Site Styles`), except for links which are light blue.
- **Header 1** in text blocks turns pink when both bold and italic.
    - Defined in `Design > Custom CSS`
- **Header 2** in text blocks turns light blue when bold.
    - Defined in `Design > Custom CSS`
- **Header 2** in text blocks turns semi-transparent light blue when both bold and italic.
    - Defined in `Design > Custom CSS`
- Adjacent **Header 2** elements in text blocks have a negative bottom margin, so they will overlap slightly.
    - Defined in `Design > Custom CSS`
- When creating custom CSS at any level for `H1`, `H2`, `H3` or `P` tags (custom CSS, code blocks, etc), be aware that the settings in `Design > Site Styles` may come into play, and may change at some point in the future.
    - For example, if you create a code block with custom CSS to change the color of an H1 tag to red, and you’re happy with the other attributes of the H1 text (size, weight, etc), a later change to the Site Styles, such as the font size of Header 1, will also affect your customized H1 tag.
    - If you want to ensure that a custom H1, H2, H3, or P tag is resilient to future Site Styles changes, you should explicitly set all of the following:
        - Font size
        - Font weight
        - Font style
        - Line height
        - Letter spacing
        - Text transform
- The configuration defined in `Design > Site Styles` is the primary mechanism for controlling styles on the site. When there’s a need to alter the style of `H1`, `H2`, `H3`, or `P` tags (i.e., **header 1**, **header 2**, **header 3** and **normal** styles in text blocks), it should be done via Site Styles. Be aware that these changes will affect text on many pages across the site.
- Styles for most aspects of the footer and the footer nav are also controlled in `Design > Site Styles`
- There is a small amount of custom CSS used for the podcast grid on the homepage.
    - The custom CSS is located in the “Page header code injection” on the home page itself.
    - For layout tweaks
        - It only applies at very narrow screen sizes.
        - It overrides the default behavior of showing a single item per row.
        - There are comments in the code with details on how to change the number of columns displayed when this CSS comes into play.
    - For design tweaks
        - Adds a hover state with the podcast name
- There’s a small amount of custom CSS used to achieve the overlap for “audio with vision” on the home page
    - The custom CSS is located in the `Page header code injection` on the home page itself.
- There are a number of editable areas (aka block fields) on the individual podcast page (besides the ones used for audio players mentioned above). Most of these are shared block fields, meaning the content added/changed on *any* podcast page will appear on *all* podcast pages.
    - One example is the header above the “where to start” audio players. Currently it is text that reads “where to start”. If that text is updated to read, for example, “take a listen”, all podcast pages will then say “take a listen”.
    - These block fields are fully-functioning Squarespace CMS block fields, and all block types could theoretically be added to them.
        - In most cases, they are intended to allow for easy editing to small amounts of text, like headings or short blurbs. Adding more or more complex content to these block fields could yield unexpected results.
        - For some of these block fields, there is specific CSS to style the *expected* content in a certain way. For example, a block field may be intended to include a heading for a section, and there is CSS to specially style “Header 1” text in the block field a certain way. That specific style would not be available in other block fields on the page, or other pages on the site (without further customization).
        - The intended style will only appear if the text within the block field is formatted to match the custom CSS. If the CSS styles “Heading 1”, only “Heading 1” text in the block field will receive the style. Changing the text to “Heading 2”, for example, is permitted, but it would use the general “Heading 2” style for the site, and may diverge from the intended design.
        - These block field-specific CSS overrides are maintained in the custom template code, and are not editable via the Squarespace CMS at this time.

## Advanced

_This section is intended for developers._

The `Page Text Font` and `Page Text Color` tweaks in **Site Style** are applied to `#siteWrapper` (1,0,0). The `div` with that ID wraps nearly everything on the page, and all properties of those two tweaks are inheritable. So essentially all elements on all pages will inherit these font/color properties.

This includes all basic `p` tags that Squarespace generates from text and markdown blocks. There is no explicit styling of basic `p` tags; they are simply inheriting all the way from `#siteWrapper`.

`h1`, `h2`, and `h3` tags have thier own tweaks in **Site Styles** for font and color, which are applied to the tag types (0,0,1). The native Squarespace stylesheets include some additonal styles for heading tags which are not controlled in **Site Styles**.

Some elements of complex Squarespace block types use `em` units. For example, the captions of image blocks (`.sqs-block.image-block .image-caption-wrapper p`) have `font-size: .875em`. It is very uncommon for the parents of these sorts of elements to have an explicit font size, so in most cases these units will be relative to the font size of `#siteWrapper`. In other words, the `Page Text Font` font size has fairly ranging effects, including font sizes as well as spacing between and within numerous elements.
