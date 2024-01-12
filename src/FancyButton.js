function FancyButton({ children }) {
  return (
    <button
      style={{
        padding: '16px 32px',
        border: '2px solid hsl(340deg 100% 50%)',
        borderRadius: '4px',
        background: 'hsl(340deg 100% 50% / 0.1)',
        fontSize: '1rem'
      }}
    >
      {children}
    </button>
  )
}

export default FancyButton;