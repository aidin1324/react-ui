import "./index.css";

function Button(props) {
    const { variant = "primary", size = "medium", children } = props;
    const buttonClasses = `my-button my-button--${variant} my-button--${size}`;

    return <button className={buttonClasses}>{children}</button>;
}

export default Button;