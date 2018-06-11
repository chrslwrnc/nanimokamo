import React from 'react';
import * as styles from './styles';
import FeaturedItem from './FeaturedItem';
import data from 'data';

const featured = data.filter(({ isFeatured }) => isFeatured);

const renderItem = (props, i) => <FeaturedItem key={i} {...props} />;

const Featured = () => <styles.Wrapper>{featured.map(renderItem)}</styles.Wrapper>;

export default Featured;
