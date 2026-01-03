export default function Card({ 
  children, 
  className = '', 
  variant = 'default',
  hoverable = false,
  gradient = false,
  glowing = false,
  glass = true,
  accentColor,
  style = {},
  ...rest
}) {
  const baseStyles = 'glass-card glass-reflection glass-hover rounded-3xl overflow-hidden relative group';
  
  const variants = {
    default: '',
    blue: 'border-t-[5px] border-pastel-blue/60 hover:border-t-[7px] hover:shadow-pastel-blue/30',
    pink: 'border-t-[5px] border-pastel-pink/60 hover:border-t-[7px] hover:shadow-pastel-pink/30',
    yellow: 'border-t-[5px] border-pastel-yellow/60 hover:border-t-[7px] hover:shadow-pastel-yellow/30',
    green: 'border-t-[5px] border-pastel-green/60 hover:border-t-[7px] hover:shadow-pastel-green/30',
    gradient: 'bg-gradient-to-br from-white/30 via-white/20 to-pastel-blue-50/40',
  };

  const hoverStyles = hoverable 
    ? 'transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03] cursor-pointer transform perspective-1000' 
    : 'transition-all duration-300';

  const gradientBorder = gradient 
    ? 'relative before:absolute before:inset-0 before:rounded-3xl before:p-[3px] before:bg-gradient-to-br before:from-pastel-blue before:via-pastel-pink before:to-pastel-yellow before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500' 
    : '';
    
  const glowEffect = glowing 
    ? 'hover:shadow-glow-blue' 
    : '';

  const accentVars = accentColor ? { '--card-accent': accentColor } : {};
  const accentHover = accentColor ? 'hover:[border-color:var(--card-accent)]' : '';
  const inlineStyle = { ...accentVars, ...style };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${gradientBorder} ${glowEffect} ${accentHover} ${className}`}
      style={inlineStyle}
      {...rest}
    >
      {/* Enhanced glass reflection effect */}
      {glass && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        </>
      )}
      
      {/* Shine effect on hover */}
      {hoverable && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      )}
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = '' }) {
  return <div className={`p-4 pt-0 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }) {
  return <div className={`p-4 pt-0 ${className}`}>{children}</div>;
}

