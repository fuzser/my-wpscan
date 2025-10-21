import React from 'react';

export default function VibrateButton({
  color = '#007bff',
  width = '150px',
  height = '50px',
  onClick,
  children = '点击我',
}) {
  // 点击时触发震动动画，然后调用父传的 onClick 回调
  function handleClick(e) {
    const btn = e.currentTarget;
    btn.classList.add('vibrate');
    setTimeout(() => {
      btn.classList.remove('vibrate');
    }, 300); // 震动动画时长

    if (onClick) onClick();
  }

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: color,
          width,
          height,
          border: 'none',
          borderRadius: '8px',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          userSelect: 'none',
          outline: 'none',
          transition: 'transform 0.1s',
        }}
      >
        {children}
      </button>

      <style>{`
        .vibrate {
          animation: vibrate 0.3s linear;
        }
        @keyframes vibrate {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </>
  );
}
