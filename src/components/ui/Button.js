const Button = ({ children, loading, onClick }) => {
  return (
    <button disabled={loading} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
