import React from 'react';

// Savora Restaurant Logo with fork/spoon icon
export const SavoraLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-3 cursor-pointer ${className}`}>
    {/* Stylized flame / chef fork emblem */}
    <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff521d] to-[#ff7a3d] flex items-center justify-center shadow-md">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M12 2v8" />
          <path d="M9 2v4a3 3 0 0 0 6 0V2" />
          <path d="M12 10v12" />
        </svg>
      </div>
      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#111] rounded-full border-2 border-white flex items-center justify-center">
        <span className="w-1 h-1 bg-[#ff521d] rounded-full"></span>
      </span>
    </div>

    <span className="font-serif-heading font-extrabold text-2xl tracking-wider text-[#1a1a1a] leading-none uppercase">
      SAVORA
    </span>
  </div>
);

// Backward compatibility alias
export const DingoLogo = SavoraLogo;

// The distinctive Colorlib Read More arrow with cutlery/spoon line
export const SpoonArrow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`inline-flex items-center gap-1.5 align-middle ${className}`}>
    <span className="h-[1px] w-6 bg-[#666666] inline-block transition-all group-hover:w-8 group-hover:bg-[#ff6426]" />
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform group-hover:translate-x-1 text-[#666666] group-hover:text-[#ff6426]"
    >
      <path
        d="M8.5 1.5L12 5M12 5L8.5 8.5M12 5H1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

// Section Heading with orange line under the first word (Exact Colorlib signature)
interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  align = 'left',
  className = '',
  dark = false,
}) => {
  // Split first word to add the underline
  const words = title.trim().split(' ');
  const firstWord = words[0] || '';
  const remainingWords = words.slice(1).join(' ');

  return (
    <div className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && subtitle.trim() !== '' && (
        <span className={`text-xs md:text-sm font-medium tracking-wide block mb-2 font-sans ${dark ? 'text-[#ff7a3d]' : 'text-[#888888]'}`}>
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-[38px] leading-tight font-serif-heading font-semibold tracking-tight ${
          dark ? 'text-white' : 'text-[#1c1d1f]'
        }`}
      >
        <span className="relative inline-block pb-2">
          {firstWord}
          <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ff6426] rounded-full" />
        </span>
        {remainingWords ? ` ${remainingWords}` : ''}
      </h2>
    </div>
  );
};
