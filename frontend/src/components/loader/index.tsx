import React from 'react';
import ContentLoader from 'react-content-loader';

const ThreeDots = () => (
  <ContentLoader viewBox="0 0 110 60" height={60} width={110} backgroundColor="transparent">
    <circle cx="10" cy="30" r="8" />
    <circle cx="50" cy="30" r="8" />
    <circle cx="100" cy="30" r="8" />
  </ContentLoader>
);

ThreeDots.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots'
};

export default ThreeDots;
