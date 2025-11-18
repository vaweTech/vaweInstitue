import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  loading = false,
  disabled = false,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variants = {
    primary: 'bg-[var(--button)] hover:bg-[var(--button-hover)] text-[var(--text)] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-[var(--navbar-hero)] hover:brightness-95 text-[var(--text)] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0',
    accent: 'bg-[var(--background-alt)] hover:brightness-95 text-[var(--text)] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border-2 border-[var(--button-hover)] text-[var(--button-hover)] hover:bg-[var(--button-hover)] hover:text-white hover:scale-105 active:scale-100',
    ghost: 'text-[var(--text)] hover:bg-gray-100 hover:scale-105 active:scale-100',
    success: 'bg-[var(--success)] hover:brightness-95 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = loading ? (
    <>
      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Loading...</span>
    </>
  ) : children;

  if (href && !disabled) {
    if (href.startsWith('http')) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}

