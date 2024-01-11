interface AlertButtonProps {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  onClick: () => void;
}

function AlertButton({
  children,
  onClick,
  color = "primary",
}: AlertButtonProps) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default AlertButton;
