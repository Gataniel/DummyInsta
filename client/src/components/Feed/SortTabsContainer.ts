import { connect } from 'react-redux';

import { setSortedBy } from 'redux/actions';
import { RootState, SortedBy } from 'redux/interfaces';
import { getSortedBy } from 'redux/reducers/sorts/selectors';

import SortTabs from './SortTabs';

const mapStateToProps = (state: RootState) => ({
  sortedBy: getSortedBy(state),
});

const mapDispatchToProps = {
  setSortedBy: (sortBy: SortedBy) => setSortedBy(sortBy),
};

export default connect(mapStateToProps, mapDispatchToProps)(SortTabs);
