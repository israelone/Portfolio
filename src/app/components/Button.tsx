// Reusable Button component with multiple variants
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  target,
  rel,
}: ButtonProps) {
  const baseClasses =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center whitespace-nowrap";

  const variants = {
    primary:
      "bg-cyan-600 text-white hover:bg-cyan-700 shadow-md hover:shadow-lg active:scale-95",
    secondary:
      "bg-white text-gray-900 hover:bg-gray-100 shadow-sm hover:shadow-md border border-gray-300 active:scale-95",
    outline:
      "border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 hover:shadow-md active:scale-95",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
