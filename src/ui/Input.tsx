import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'date' | 'time';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  required?: boolean;
  className?: string;
  label?: string;
  error?: string;
  name?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  required = false,
  className = '',
  label,
  error,
  name,
  id
}) => {
  const baseClasses = 'w-full py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200';
  
  const paddingClasses = Icon 
    ? iconPosition === 'left' ? 'pl-10 pr-4' : 'pl-4 pr-10'
    : 'px-4';

  const errorClasses = error 
    ? 'border-red-500 focus:ring-red-500' 
    : '';

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : '';

  const classes = `${baseClasses} ${paddingClasses} ${errorClasses} ${disabledClasses} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        )}
        
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={classes}
        />
        
        {Icon && iconPosition === 'right' && (
          <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Input;