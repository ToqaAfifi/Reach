const Button = ({ children, type='text', loading, onClick }) => {
  return (
    <button type={type} disabled={loading} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
