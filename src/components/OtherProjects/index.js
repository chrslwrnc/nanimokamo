import React from 'react';
import * as styles from './styles';
import OtherProjectsItem from './OtherProjectsItem';
import data from 'data';

const other = data.filter(({ isFeatured }) => !isFeatured);

const renderItem = (props, i) => <OtherProjectsItem key={i} {...props} />;

const Featured = () => <styles.Wrapper>{other.map(renderItem)}</styles.Wrapper>;

export default Featured;
