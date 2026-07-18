import React from 'react';
import { cn } from './Button';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="flex items-center space-x-3 cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              ref={ref}
              className={cn(
                "peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 transition-all checked:border-primary-500 checked:bg-primary-500 hover:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
                error ? "border-red-500" : "",
                className
              )}
              {...props}
            />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
          {label && (
            <span className="text-sm font-medium text-gray-700 select-none group-hover:text-gray-900 transition-colors">
              {label}
            </span>
          )}
        </label>
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
