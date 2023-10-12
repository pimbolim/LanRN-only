module.exports = {
  atrules: {
    charset: {
      prelude: '<string>',
    },
    'font-face': {
      descriptors: {
        'unicode-range': {
          comment: 'replaces <unicode-range>, an old production name',
          syntax: '<urange>#',
        },
      },
    },
  },
  properties: {
    '-moz-background-clip': {
      comment: 'deprecated syntax in old Firefox, https://developer.mozilla.org/en/docs/Web/CSS/background-clip',
      syntax: 'padding | border',
    },
    '-moz-border-radius-bottomleft': {
      comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius',
      syntax: "<'border-bottom-left-radius'>",
    },
    '-moz-border-radius-bottomright': {
      comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius',
      syntax: "<'border-bottom-right-radius'>",
    },
    '-moz-border-radius-topleft': {
      comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius',
      syntax: "<'border-top-left-radius'>",
    },
    '-moz-border-radius-topright': {
      comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius',
      syntax: "<'border-bottom-right-radius'>",
    },
    '-moz-control-character-visibility': {
      comment: 'firefox specific keywords, https://bugzilla.mozilla.org/show_bug.cgi?id=947588',
      syntax: 'visible | hidden',
    },
    '-moz-osx-font-smoothing': {
      comment: 'misssed old syntax https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth',
      syntax: 'auto | grayscale',
    },
    '-moz-user-select': {
      comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/user-select',
      syntax: 'none | text | all | -moz-none',
    },
    '-ms-flex-align': {
      comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align',
      syntax: 'start | end | center | baseline | stretch',
    },
    '-ms-flex-item-align': {
      comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align',
      syntax: 'auto | start | end | center | baseline | stretch',
    },
    '-ms-flex-line-pack': {
      comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-line-pack',
      syntax: 'start | end | center | justify | distribute | stretch',
    },
    '-ms-flex-negative': {
      comment: 'misssed old syntax implemented in IE; TODO: find references for comfirmation',
      syntax: "<'flex-shrink'>",
    },
    '-ms-flex-pack': {
      comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-pack',
      syntax: 'start | end | center | justify | distribute',
    },
    '-ms-flex-order': {
      comment: 'misssed old syntax implemented in IE; https://msdn.microsoft.com/en-us/library/jj127303(v=vs.85).aspx',
      syntax: '<integer>',
    },
    '-ms-flex-positive': {
      comment: 'misssed old syntax implemented in IE; TODO: find references for comfirmation',
      syntax: "<'flex-grow'>",
    },
    '-ms-flex-preferred-size': {
      comment: 'misssed old syntax implemented in IE; TODO: find references for comfirmation',
      syntax: "<'flex-basis'>",
    },
    '-ms-interpolation-mode': {
      comment: 'https://msdn.microsoft.com/en-us/library/ff521095(v=vs.85).aspx',
      syntax: 'nearest-neighbor | bicubic',
    },
    '-ms-grid-column-align': {
      comment: 'add this property first since it uses as fallback for flexbox, https://msdn.microsoft.com/en-us/library/windows/apps/hh466338.aspx',
      syntax: 'start | end | center | stretch',
    },
    '-ms-grid-row-align': {
      comment: 'add this property first since it uses as fallback for flexbox, https://msdn.microsoft.com/en-us/library/windows/apps/hh466348.aspx',
      syntax: 'start | end | center | stretch',
    },
    '-ms-hyphenate-limit-last': {
      comment: 'misssed old syntax implemented in IE; https://www.w3.org/TR/css-text-4/#hyphenate-line-limits',
      syntax: 'none | always | column | page | spread',
    },
    '-webkit-appearance': {
      comment: 'webkit specific keywords',
      references: ['http://css-infos.net/property/-webkit-appearance'],
      syntax:
        'none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button',
    },
    '-webkit-background-clip': {
      comment: 'https://developer.mozilla.org/en/docs/Web/CSS/background-clip',
      syntax: '[ <box> | border | padding | content | text ]#',
    },
    '-webkit-column-break-after': {
      comment: 'added, http://help.dottoro.com/lcrthhhv.php',
      syntax: 'always | auto | avoid',
    },
    '-webkit-column-break-before': {
      comment: 'added, http://help.dottoro.com/lcxquvkf.php',
      syntax: 'always | auto | avoid',
    },
    '-webkit-column-break-inside': {
      comment: 'added, http://help.dottoro.com/lclhnthl.php',
      syntax: 'always | auto | avoid',
    },
    '-webkit-font-smoothing': {
      comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth',
      syntax: 'auto | none | antialiased | subpixel-antialiased',
    },
    '-webkit-mask-box-image': {
      comment: 'missed; https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image',
      syntax: '[ <url> | <gradient> | none ] [ <length-percentage>{4} <-webkit-mask-box-repeat>{2} ]?',
    },
    '-webkit-print-color-adjust': {
      comment: 'missed',
      references: ['https://developer.mozilla.org/en/docs/Web/CSS/-webkit-print-color-adjust'],
      syntax: 'economy | exact',
    },
    '-webkit-text-security': {
      comment: 'missed; http://help.dottoro.com/lcbkewgt.php',
      syntax: 'none | circle | disc | square',
    },
    '-webkit-user-drag': {
      comment: 'missed; http://help.dottoro.com/lcbixvwm.php',
      syntax: 'none | element | auto',
    },
    '-webkit-user-select': {
      comment: 'auto is supported by old webkit, https://developer.mozilla.org/en-US/docs/Web/CSS/user-select',
      syntax: 'auto | none | text | all',
    },
    'alignment-baseline': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/text.html#AlignmentBaselineProperty'],
      syntax: 'auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical',
    },
    'baseline-shift': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/text.html#BaselineShiftProperty'],
      syntax: 'baseline | sub | super | <svg-length>',
    },
    behavior: {
      comment: 'added old IE property https://msdn.microsoft.com/en-us/library/ms530723(v=vs.85).aspx',
      syntax: '<url>+',
    },
    'clip-rule': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/masking.html#ClipRuleProperty'],
      syntax: 'nonzero | evenodd',
    },
    cue: {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: "<'cue-before'> <'cue-after'>?",
    },
    'cue-after': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: '<url> <decibel>? | none',
    },
    'cue-before': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: '<url> <decibel>? | none',
    },
    cursor: {
      comment: 'added legacy keywords: hand, -webkit-grab. -webkit-grabbing, -webkit-zoom-in, -webkit-zoom-out, -moz-grab, -moz-grabbing, -moz-zoom-in, -moz-zoom-out',
      references: ['https://www.sitepoint.com/css3-cursor-styles/'],
      syntax:
        '[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing | hand | -webkit-grab | -webkit-grabbing | -webkit-zoom-in | -webkit-zoom-out | -moz-grab | -moz-grabbing | -moz-zoom-in | -moz-zoom-out ] ]',
    },
    display: {
      comment: 'extended with -ms-flexbox',
      syntax: '| <-non-standard-display>',
    },
    position: {
      comment: 'extended with -webkit-sticky',
      syntax: '| -webkit-sticky',
    },
    'dominant-baseline': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/text.html#DominantBaselineProperty'],
      syntax: 'auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge',
    },
    'image-rendering': {
      comment: 'extended with <-non-standard-image-rendering>, added SVG keywords optimizeSpeed and optimizeQuality',
      references: ['https://developer.mozilla.org/en/docs/Web/CSS/image-rendering', 'https://www.w3.org/TR/SVG/painting.html#ImageRenderingProperty'],
      syntax: '| optimizeSpeed | optimizeQuality | <-non-standard-image-rendering>',
    },
    fill: {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#FillProperty'],
      syntax: '<paint>',
    },
    'fill-opacity': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#FillProperty'],
      syntax: '<number-zero-one>',
    },
    'fill-rule': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#FillProperty'],
      syntax: 'nonzero | evenodd',
    },
    filter: {
      comment: 'extend with IE legacy syntaxes',
      syntax: '| <-ms-filter-function-list>',
    },
    'glyph-orientation-horizontal': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/text.html#GlyphOrientationHorizontalProperty'],
      syntax: '<angle>',
    },
    'glyph-orientation-vertical': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/text.html#GlyphOrientationVerticalProperty'],
      syntax: '<angle>',
    },
    kerning: {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/text.html#KerningProperty'],
      syntax: 'auto | <svg-length>',
    },
    'letter-spacing': {
      comment: 'fix syntax <length> -> <length-percentage>',
      references: ['https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/letter-spacing'],
      syntax: 'normal | <length-percentage>',
    },
    marker: {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
      syntax: 'none | <url>',
    },
    'marker-end': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
      syntax: 'none | <url>',
    },
    'marker-mid': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
      syntax: 'none | <url>',
    },
    'marker-start': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
      syntax: 'none | <url>',
    },
    'max-width': {
      comment: 'fix auto -> none (https://github.com/mdn/data/pull/431); extend by non-standard width keywords https://developer.mozilla.org/en-US/docs/Web/CSS/max-width',
      syntax: 'none | <length-percentage> | min-content | max-content | fit-content(<length-percentage>) | <-non-standard-width>',
    },
    width: {
      comment: 'per spec fit-content should be a function, however browsers are supporting it as a keyword (https://github.com/csstree/stylelint-validator/issues/29)',
      syntax: '| fit-content | -moz-fit-content | -webkit-fit-content',
    },
    'min-width': {
      comment: 'extend by non-standard width keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width',
      syntax: 'auto | <length-percentage> | min-content | max-content | fit-content(<length-percentage>) | <-non-standard-width>',
    },
    overflow: {
      comment: 'extend by vendor keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow',
      syntax: '| <-non-standard-overflow>',
    },
    pause: {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: "<'pause-before'> <'pause-after'>?",
    },
    'pause-after': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: '<time> | none | x-weak | weak | medium | strong | x-strong',
    },
    'pause-before': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: '<time> | none | x-weak | weak | medium | strong | x-strong',
    },
    rest: {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: "<'rest-before'> <'rest-after'>?",
    },
    'rest-after': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: '<time> | none | x-weak | weak | medium | strong | x-strong',
    },
    'rest-before': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: '<time> | none | x-weak | weak | medium | strong | x-strong',
    },
    'shape-rendering': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#ShapeRenderingPropert'],
      syntax: 'auto | optimizeSpeed | crispEdges | geometricPrecision',
    },
    src: {
      comment: "added @font-face's src property https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src",
      syntax: '[ <url> [ format( <string># ) ]? | local( <family-name> ) ]#',
    },
    speak: {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: 'auto | none | normal',
    },
    'speak-as': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: 'normal | spell-out || digits || [ literal-punctuation | no-punctuation ]',
    },
    stroke: {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
      syntax: '<paint>',
    },
    'stroke-dasharray': {
      comment: 'added SVG property; a list of comma and/or white space separated <length>s and <percentage>s',
      references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
      syntax: 'none | [ <svg-length>+ ]#',
    },
    'stroke-dashoffset': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
      syntax: '<svg-length>',
    },
    'stroke-linecap': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
      syntax: 'butt | round | square',
    },
    'stroke-linejoin': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
      syntax: 'miter | round | bevel',
    },
    'stroke-miterlimit': {
      comment: 'added SVG property (<miterlimit> = <number-one-or-greater>) ',
      references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
      syntax: '<number-one-or-greater>',
    },
    'stroke-opacity': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
      syntax: '<number-zero-one>',
    },
    'stroke-width': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
      syntax: '<svg-length>',
    },
    'text-anchor': {
      comment: 'added SVG property',
      references: ['https://www.w3.org/TR/SVG/text.html#TextAlignmentProperties'],
      syntax: 'start | middle | end',
    },
    'unicode-bidi': {
      comment: 'added prefixed keywords https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi',
      syntax: '| -moz-isolate | -moz-isolate-override | -moz-plaintext | -webkit-isolate | -webkit-isolate-override | -webkit-plaintext',
    },
    'unicode-range': {
      comment: 'added missed property https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face/unicode-range',
      syntax: '<urange>#',
    },
    'voice-balance': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: '<number> | left | center | right | leftwards | rightwards',
    },
    'voice-duration': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: 'auto | <time>',
    },
    'voice-family': {
      comment: '<name> -> <family-name>, https://www.w3.org/TR/css3-speech/#property-index',
      syntax: '[ [ <family-name> | <generic-voice> ] , ]* [ <family-name> | <generic-voice> ] | preserve',
    },
    'voice-pitch': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: '<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]',
    },
    'voice-range': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: '<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]',
    },
    'voice-rate': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: '[ normal | x-slow | slow | medium | fast | x-fast ] || <percentage>',
    },
    'voice-stress': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: 'normal | strong | moderate | none | reduced',
    },
    'voice-volume': {
      comment: 'https://www.w3.org/TR/css3-speech/#property-index',
      syntax: 'silent | [ [ x-soft | soft | medium | loud | x-loud ] || <decibel> ]',
    },
    'writing-mode': {
      comment: 'extend with SVG keywords',
      syntax: '| <svg-writing-mode>',
    },
  },
  syntaxes: {
    '-legacy-gradient': {
      comment: 'added collection of legacy gradient syntaxes',
      syntax: '<-webkit-gradient()> | <-legacy-linear-gradient> | <-legacy-repeating-linear-gradient> | <-legacy-radial-gradient> | <-legacy-repeating-radial-gradient>',
    },
    '-legacy-linear-gradient': {
      comment: 'like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient',
      syntax:
        '-moz-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-linear-gradient( <-legacy-linear-gradient-arguments> )',
    },
    '-legacy-repeating-linear-gradient': {
      comment: 'like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient',
      syntax:
        '-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )',
    },
    '-legacy-linear-gradient-arguments': {
      comment: 'like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient',
      syntax: '[ <angle> | <side-or-corner> ]? , <color-stop-list>',
    },
    '-legacy-radial-gradient': {
      comment: 'deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients',
      syntax:
        '-moz-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-radial-gradient( <-legacy-radial-gradient-arguments> )',
    },
    '-legacy-repeating-radial-gradient': {
      comment: 'deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients',
      syntax:
        '-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )',
    },
    '-legacy-radial-gradient-arguments': {
      comment: 'deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients',
      syntax: '[ <position> , ]? [ [ [ <-legacy-radial-gradient-shape> || <-legacy-radial-gradient-size> ] | [ <length> | <percentage> ]{2} ] , ]? <color-stop-list>',
    },
    '-legacy-radial-gradient-size': {
      comment: 'before a standard it contains 2 extra keywords (`contain` and `cover`) https://www.w3.org/TR/2011/WD-css3-images-20110908/#ltsize',
      syntax: 'closest-side | closest-corner | farthest-side | farthest-corner | contain | cover',
    },
    '-legacy-radial-gradient-shape': {
      comment: "define to double sure it doesn't extends in future https://www.w3.org/TR/2011/WD-css3-images-20110908/#ltshape",
      syntax: 'circle | ellipse',
    },
    '-non-standard-font': {
      comment: 'non standard fonts',
      references: ['https://webkit.org/blog/3709/using-the-system-font-in-web-content/'],
      syntax:
        '-apple-system-body | -apple-system-headline | -apple-system-subheadline | -apple-system-caption1 | -apple-system-caption2 | -apple-system-footnote | -apple-system-short-body | -apple-system-short-headline | -apple-system-short-subheadline | -apple-system-short-caption1 | -apple-system-short-footnote | -apple-system-tall-body',
    },
    '-non-standard-color': {
      comment: 'non standard colors',
      references: [
        'http://cssdot.ru/%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA_CSS/color-i305.html',
        'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Mozilla_Color_Preference_Extensions',
      ],
      syntax:
        '-moz-ButtonDefault | -moz-ButtonHoverFace | -moz-ButtonHoverText | -moz-CellHighlight | -moz-CellHighlightText | -moz-Combobox | -moz-ComboboxText | -moz-Dialog | -moz-DialogText | -moz-dragtargetzone | -moz-EvenTreeRow | -moz-Field | -moz-FieldText | -moz-html-CellHighlight | -moz-html-CellHighlightText | -moz-mac-accentdarkestshadow | -moz-mac-accentdarkshadow | -moz-mac-accentface | -moz-mac-accentlightesthighlight | -moz-mac-accentlightshadow | -moz-mac-accentregularhighlight | -moz-mac-accentregularshadow | -moz-mac-chrome-active | -moz-mac-chrome-inactive | -moz-mac-focusring | -moz-mac-menuselect | -moz-mac-menushadow | -moz-mac-menutextselect | -moz-MenuHover | -moz-MenuHoverText | -moz-MenuBarText | -moz-MenuBarHoverText | -moz-nativehyperlinktext | -moz-OddTreeRow | -moz-win-communicationstext | -moz-win-mediatext | -moz-activehyperlinktext | -moz-default-background-color | -moz-default-color | -moz-hyperlinktext | -moz-visitedhyperlinktext | -webkit-activelink | -webkit-focus-ring-color | -webkit-link | -webkit-text',
    },
    '-non-standard-image-rendering': {
      comment: 'non-standard keywords http://phrogz.net/tmp/canvas_image_zoom.html',
      syntax: 'optimize-contrast | -moz-crisp-edges | -o-crisp-edges | -webkit-optimize-contrast',
    },
    '-non-standard-overflow': {
      comment: 'non-standard keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow',
      syntax: '-moz-scrollbars-none | -moz-scrollbars-horizontal | -moz-scrollbars-vertical | -moz-hidden-unscrollable',
    },
    '-non-standard-width': {
      comment: 'non-standard keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width',
      syntax: 'fill-available | min-intrinsic | intrinsic | -moz-available | -moz-fit-content | -moz-min-content | -moz-max-content | -webkit-min-content | -webkit-max-content',
    },
    '-webkit-gradient()': {
      comment:
        'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/ - TODO: simplify when after match algorithm improvement ( [, point, radius | , point] -> [, radius]? , point )',
      syntax:
        '-webkit-gradient( <-webkit-gradient-type>, <-webkit-gradient-point> [, <-webkit-gradient-point> | , <-webkit-gradient-radius>, <-webkit-gradient-point> ] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )',
    },
    '-webkit-gradient-color-stop': {
      comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
      syntax: 'from( <color> ) | color-stop( [ <number-zero-one> | <percentage> ] , <color> ) | to( <color> )',
    },
    '-webkit-gradient-point': {
      comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
      syntax: '[ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]',
    },
    '-webkit-gradient-radius': {
      comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
      syntax: '<length> | <percentage>',
    },
    '-webkit-gradient-type': {
      comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
      syntax: 'linear | radial',
    },
    '-webkit-mask-box-repeat': {
      comment: 'missed; https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image',
      syntax: 'repeat | stretch | round',
    },
    '-webkit-mask-clip-style': {
      comment: 'missed; there is no enough information about `-webkit-mask-clip` property, but looks like all those keywords are working',
      syntax: 'border | border-box | padding | padding-box | content | content-box | text',
    },
    '-ms-filter-function-list': {
      comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter',
      syntax: '<-ms-filter-function>+',
    },
    '-ms-filter-function': {
      comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter',
      syntax: '<-ms-filter-function-progid> | <-ms-filter-function-legacy>',
    },
    '-ms-filter-function-progid': {
      comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter',
      syntax: "'progid:' [ <ident-token> '.' ]* [ <ident-token> | <function-token> <any-value>? ) ]",
    },
    '-ms-filter-function-legacy': {
      comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/-ms-filter',
      syntax: '<ident-token> | <function-token> <any-value>? )',
    },
    '-ms-filter': {
      syntax: '<string>',
    },
    age: {
      comment: 'https://www.w3.org/TR/css3-speech/#voice-family',
      syntax: 'child | young | old',
    },
    'attr-name': {
      syntax: '<wq-name>',
    },
    'attr-fallback': {
      syntax: '<any-value>',
    },
    'border-radius': {
      comment: 'missed, https://drafts.csswg.org/css-backgrounds-3/#the-border-radius',
      syntax: '<length-percentage>{1,2}',
    },
    bottom: {
      comment: "missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect",
      syntax: '<length> | auto',
    },
    'content-list': {
      comment: 'missed -> https://drafts.csswg.org/css-content/#typedef-content-list (document-url, <target> and leader() is omitted util stabilization)',
      syntax: "[ <string> | contents | <image> | <quote> | <target> | <leader()> | <attr()> | counter( <ident>, <'list-style-type'>? ) ]+",
    },
    'element()': {
      comment: 'https://drafts.csswg.org/css-gcpm/#element-syntax & https://drafts.csswg.org/css-images-4/#element-notation',
      syntax: 'element( <custom-ident> , [ first | start | last | first-except ]? ) | element( <id-selector> )',
    },
    'generic-voice': {
      comment: 'https://www.w3.org/TR/css3-speech/#voice-family',
      syntax: '[ <age>? <gender> <integer>? ]',
    },
    gender: {
      comment: 'https://www.w3.org/TR/css3-speech/#voice-family',
      syntax: 'male | female | neutral',
    },
    'generic-family': {
      comment: 'added -apple-system',
      references: ['https://webkit.org/blog/3709/using-the-system-font-in-web-content/'],
      syntax: '| -apple-system',
    },
    gradient: {
      comment: 'added legacy syntaxes support',
      syntax: '| <-legacy-gradient>',
    },
    left: {
      comment: "missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect",
      syntax: '<length> | auto',
    },
    'mask-image': {
      comment: 'missed; https://drafts.fxtf.org/css-masking-1/#the-mask-image',
      syntax: '<mask-reference>#',
    },
    'name-repeat': {
      comment:
        'missed, and looks like obsolete, keep it as is since other property syntaxes should be changed too; https://www.w3.org/TR/2015/WD-css-grid-1-20150917/#typedef-name-repeat',
      syntax: 'repeat( [ <positive-integer> | auto-fill ], <line-names>+)',
    },
    'named-color': {
      comment: 'added non standard color names',
      syntax: '| <-non-standard-color>',
    },
    paint: {
      comment: 'used by SVG https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint',
      syntax: 'none | <color> | <url> [ none | <color> ]? | context-fill | context-stroke',
    },
    'page-size': {
      comment: 'https://www.w3.org/TR/css-page-3/#typedef-page-size-page-size',
      syntax: 'A5 | A4 | A3 | B5 | B4 | JIS-B5 | JIS-B4 | letter | legal | ledger',
    },
    ratio: {
      comment: 'missed, https://drafts.csswg.org/mediaqueries-4/#typedef-ratio',
      syntax: '<integer> / <integer>',
    },
    right: {
      comment: "missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect",
      syntax: '<length> | auto',
    },
    shape: {
      comment: 'missed spaces in function body and add backwards compatible syntax',
      syntax: 'rect( <top>, <right>, <bottom>, <left> ) | rect( <top> <right> <bottom> <left> )',
    },
    'svg-length': {
      comment: 'All coordinates and lengths in SVG can be specified with or without a unit identifier',
      references: ['https://www.w3.org/TR/SVG11/coords.html#Units'],
      syntax: '<percentage> | <length> | <number>',
    },
    'svg-writing-mode': {
      comment: 'SVG specific keywords (deprecated for CSS)',
      references: ['https://developer.mozilla.org/en/docs/Web/CSS/writing-mode', 'https://www.w3.org/TR/SVG/text.html#WritingModeProperty'],
      syntax: 'lr-tb | rl-tb | tb-rl | lr | rl | tb',
    },
    top: {
      comment: "missed; not sure we should add it, but no others except `shape` is using it so it's ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect",
      syntax: '<length> | auto',
    },
    'track-group': {
      comment: 'used by old grid-columns and grid-rows syntax v0',
      syntax: "'(' [ <string>* <track-minmax> <string>* ]+ ')' [ '[' <positive-integer> ']' ]? | <track-minmax>",
    },
    'track-list-v0': {
      comment: 'used by old grid-columns and grid-rows syntax v0',
      syntax: '[ <string>* <track-group> <string>* ]+ | none',
    },
    'track-minmax': {
      comment: 'used by old grid-columns and grid-rows syntax v0',
      syntax: 'minmax( <track-breadth> , <track-breadth> ) | auto | <track-breadth> | fit-content',
    },
    x: {
      comment: "missed; not sure we should add it, but no others except `cursor` is using it so it's ok for now; https://drafts.csswg.org/css-ui-3/#cursor",
      syntax: '<number>',
    },
    y: {
      comment: "missed; not sure we should add it, but no others except `cursor` is using so it's ok for now; https://drafts.csswg.org/css-ui-3/#cursor",
      syntax: '<number>',
    },
    declaration: {
      comment: 'missed, restored by https://drafts.csswg.org/css-syntax',
      syntax: "<ident-token> : <declaration-value>? [ '!' important ]?",
    },
    'declaration-list': {
      comment: 'missed, restored by https://drafts.csswg.org/css-syntax',
      syntax: "[ <declaration>? ';' ]* <declaration>?",
    },
    url: {
      comment: 'https://drafts.csswg.org/css-values-4/#urls',
      syntax: 'url( <string> <url-modifier>* ) | <url-token>',
    },
    'url-modifier': {
      comment: 'https://drafts.csswg.org/css-values-4/#typedef-url-modifier',
      syntax: '<ident> | <function-token> <any-value> )',
    },
    'number-zero-one': {
      syntax: '<number [0,1]>',
    },
    'number-one-or-greater': {
      syntax: '<number [1,\u221e]>',
    },
    'positive-integer': {
      syntax: '<integer [0,\u221e]>',
    },
    '-non-standard-display': {
      syntax:
        '-ms-inline-flexbox | -ms-grid | -ms-inline-grid | -webkit-flex | -webkit-inline-flex | -webkit-box | -webkit-inline-box | -moz-inline-stack | -moz-box | -moz-inline-box',
    },
  },
};
