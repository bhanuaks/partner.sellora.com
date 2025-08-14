import React from 'react'

function SimpleLoader() {
  return (
    <div style={{
      position: 'sticky',
      width: '100px',
      height: '100px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <svg style={{
        animation: 'rotate 2s linear infinite',
        height: '100px',
        position: 'relative',
        width: '100px'
      }} viewBox="25 25 50 50">
        <circle
          style={{
            strokeDasharray: '1, 200',
            strokeDashoffset: 0,
            animation: `
              dash 1.5s ease-in-out infinite,
              color 6s ease-in-out infinite
            `,
            strokeLinecap: 'round',
            fill: 'none',
            strokeWidth: '5',
            strokeMiterlimit: '10'
          }}
          cx="50"
          cy="50"
          r="20"
        />
      </svg>
      <style>{`
        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }
        @keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
          }
        }
        @keyframes color {
          0%, 100% { stroke: #d62d20; }
          40% { stroke: #0057e7; }
          66% { stroke: #008744; }
          80%, 90% { stroke: #ffa700; }
        }
      `}</style>
    </div>
  );
}

export default SimpleLoader