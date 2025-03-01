interface AlertProps {
  text: string;
}

const Alert = ({ text }: AlertProps) => {
  return <div className="alert alert-primary">{text}</div>;
};

export default Alert;
