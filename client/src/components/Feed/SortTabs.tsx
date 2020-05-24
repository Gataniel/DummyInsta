import React from 'react';
import classNames from 'classnames';

import { SortedBy } from 'redux/interfaces';

import './styles/SortTabs.scss';

interface Props {
  sortedBy: SortedBy;
  setSortedBy(sortedBy: SortedBy): void;
}

interface SortLinkProps extends Props {
  activeValue: SortedBy;
  text: string;
}

const SortLink: React.FC<SortLinkProps> = ({
  text,
  sortedBy,
  activeValue,
  setSortedBy,
}) => (
  <li
    className={classNames({
      'is-active': sortedBy === activeValue,
    })}
    onClick={() => setSortedBy(activeValue)}
  >
    <a>{text}</a>
  </li>
);

const SortTabs: React.FC<Props> = ({ sortedBy, setSortedBy }) => (
  <div className="tabs tabs_sort-tabs is-centered">
    <ul>
      <SortLink
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
        activeValue={SortedBy.Likes}
        text="Likes"
      />
      <SortLink
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
        activeValue={SortedBy.CreatedAt}
        text="Created At"
      />
      <SortLink
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
        activeValue={SortedBy.Comments}
        text="Comments"
      />
    </ul>
  </div>
);

export default SortTabs;
