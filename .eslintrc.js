module.exports = {
  "parser": "babel-eslint",
  "extends": [
      "eslint:recommended",// report common problem
      "plugin:react/recommended"
  ],
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "env": {
      "es6": true,
      "browser":true,
      "node":true
  },
  "rules": {
      // enable additional rules
      "indent": ["error", 2],// 两个字符缩进
      "quotes": ["error", "single"],// 双引号
      "semi": ["error", "always"], // 分号
      "no-console": "off",
      "react/prop-types":"off"
  },
  "settings": {
      "react": {
          "createClass": "createReactClass", // Regex for Component Factory to use,
          "pragma": "React", 
          "version": "detect", 
          "flowVersion": "0.53"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
          "Hyperlink",
          {"name": "Link", "linkAttribute": "to"}
        ]
    }
}