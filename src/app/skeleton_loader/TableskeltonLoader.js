import React from 'react'

function TableskeltonLoader({totalRows=3, totalColumns=3}) {
  return (
    <>
    <style>
  {` 
  .skeleton-cell {
    height: 16px;
    background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
    border-radius: 4px;
    animation: loading 1.5s infinite;
  }
  @keyframes loading {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }`}
</style>
    {(() => {
  const rows = [];
  for (let i = 0; i < totalRows; i++) {
    rows.push(
      <tr key={i} className='winner__table'>
        {(() => {
          const cols = [];
          for (let j = 0; j < totalColumns; j++) {
            cols.push(
              <td key={j}><div className="skeleton-cell"></div></td>
            );
          }
          return cols;
        })()}
      </tr>
    );
  }
  return rows;
})()}
                 
       
</>
  )
}

export default TableskeltonLoader