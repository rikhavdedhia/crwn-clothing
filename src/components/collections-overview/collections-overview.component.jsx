import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './collections-overview.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector.js';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);


const mapStateToProper = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProper)(CollectionsOverview);