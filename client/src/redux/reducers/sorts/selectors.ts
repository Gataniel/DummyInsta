import { RootState, SortsState } from 'redux/interfaces';

const sortsState = ({ sorts }: RootState): SortsState => sorts;

export const getSortedBy = (state: RootState) => sortsState(state).sortedBy;
