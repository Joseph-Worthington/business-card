const Button = ({ children, source }) => (
    <button className="button"><a href={source}>{children}</a></button>
);

export default Button;