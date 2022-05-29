import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';

export const Categories = () => {
  const { loading, data } = useQuery(QUERY_CATEGORIES);

  if (loading) return;

  return (
    <div className="">
      <div className="fc-row">
        {data.categories.map(category => {
          return (
            <div className="" key={category.id}>
              <img src={category.icons[0].url} alt="" style={{ height: '150px' }} />
              <p>{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
