"use client";

interface GumroadButtonProps {
  characterName?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
  variant?: 'primary' | 'secondary';
}

export default function GumroadButton({ 
  characterName, 
  className = "", 
  size = 'medium',
  variant = 'primary' 
}: GumroadButtonProps) {

  const handleSimpleClick = () => {
    window.open('https://gguggulab.gumroad.com/l/oexqcw', '_blank', 'noopener,noreferrer');
  };


  // Size-based styles
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          container: 'my-4',
          padding: 'p-4',
          title: 'text-lg',
          description: 'text-xs',
          button: 'px-4 py-2 text-xs',
          footer: 'text-xs'
        };
      case 'medium':
        return {
          container: 'my-8',
          padding: 'p-6',
          title: 'text-xl',
          description: 'text-sm',
          button: 'px-6 py-3 text-sm',
          footer: 'text-xs'
        };
      case 'large':
        return {
          container: 'my-12',
          padding: 'p-8',
          title: 'text-2xl',
          description: 'text-base',
          button: 'px-8 py-4 text-base',
          footer: 'text-sm'
        };
      case 'xl':
        return {
          container: 'my-16',
          padding: 'p-10',
          title: 'text-4xl',
          description: 'text-xl',
          button: 'px-12 py-6 text-lg',
          footer: 'text-base'
        };
      default:
        return {
          container: 'my-8',
          padding: 'p-6',
          title: 'text-xl',
          description: 'text-sm',
          button: 'px-6 py-3 text-sm',
          footer: 'text-xs'
        };
    }
  };

  const styles = getSizeStyles();

  // Variant-based styles
  const getVariantStyles = () => {
    if (variant === 'secondary') {
      return {
        background: 'bg-gradient-to-r from-gray-600/20 to-slate-600/20',
        border: 'border-gray-400/30 hover:border-gray-400/60',
        button: 'bg-gradient-to-r from-gray-500 to-slate-600 hover:from-gray-600 hover:to-slate-700'
      };
    }
    return {
      background: 'bg-gradient-to-r from-purple-600/20 to-pink-600/20',
      border: 'border-purple-400/30 hover:border-purple-400/60',
      button: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'
    };
  };

  const variantStyles = getVariantStyles();

  if (size === 'xl') {
    // Special XL layout for main promotion sections
    return (
      <div className={`text-center ${className}`}>
        <button 
          onClick={handleSimpleClick}
          className={`inline-flex items-center justify-center ${variantStyles.button} text-white ${styles.button} rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 cursor-pointer`}
        >
          <span className="mr-3 text-2xl">🎭</span>
          Get Complete Character Collection
        </button>
        <div className="mt-4 text-purple-300">
          ⚡ Instant download • 💎 Lifetime access • 📚 13 detailed profiles
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${variantStyles.background} backdrop-blur-sm rounded-xl ${styles.padding} border ${variantStyles.border} transition-all duration-300`}>
        <div className="text-center">
          <h3 className={`${styles.title} font-bold text-white mb-3 flex items-center justify-center gap-2`}>
            <span className="text-2xl">✍️</span>
            {characterName ? `Writing fanfiction about ${characterName}?` : "Need complete character profiles?"}
          </h3>
          <p className={`text-purple-200 mb-4 ${styles.description}`}>
            Get the complete character profile with detailed personality traits, relationships, and story arcs.
          </p>
          <button 
            onClick={handleSimpleClick}
            className={`inline-flex items-center justify-center ${variantStyles.button} text-white ${styles.button} rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 cursor-pointer`}
          >
            <span className="mr-2">📚</span>
            Get Complete Character Profile
          </button>
          <div className={`mt-3 ${styles.footer} text-purple-300`}>
            Perfect for fanfiction writers • 13 comprehensive profiles • Instant download
          </div>
        </div>
      </div>
    </div>
  );
}