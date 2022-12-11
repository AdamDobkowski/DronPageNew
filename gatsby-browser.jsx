/** @format */

const React = require('react');
const { default: MainTemplate } = require('./src/components/MainTemplate');

exports.wrapPageElement = ({ element, props }) => {
  return <MainTemplate {...props}> {element}</MainTemplate>;
};
