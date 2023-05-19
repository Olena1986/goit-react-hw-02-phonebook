import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyle } from './section.styled';

export const Section = props => {
  const { title, children } = props;
  return (
    <SectionStyle.Style>
      <SectionStyle.TitleStyle>{title}</SectionStyle.TitleStyle>
      {children}
    </SectionStyle.Style>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
