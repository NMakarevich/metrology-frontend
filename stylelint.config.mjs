/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-css-modules'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export'],
      },
    ],
  },
};
