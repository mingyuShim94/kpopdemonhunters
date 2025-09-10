'use client';

import { useEffect, useRef } from 'react';

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const isCleanedUp = useRef(false);

  useEffect(() => {
    // Reset cleanup flag
    isCleanedUp.current = false;
    
    // Clean up any existing script first
    if (scriptRef.current && scriptRef.current.parentNode && document.head) {
      try {
        if (document.head.contains(scriptRef.current)) {
          scriptRef.current.parentNode.removeChild(scriptRef.current);
        }
      } catch (error) {
        // Ignore cleanup errors during DOM transitions
      }
    }

    // Create new script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.setAttribute('data-structured-data', Date.now().toString());
    
    // Store reference
    scriptRef.current = script;
    
    // Add to document
    if (document.head) {
      document.head.appendChild(script);
    }

    return () => {
      // Prevent double cleanup
      if (isCleanedUp.current) return;
      isCleanedUp.current = true;
      
      // Use setTimeout to defer cleanup until after React's reconciliation
      setTimeout(() => {
        try {
          const currentScript = scriptRef.current;
          // More robust safety checks
          if (currentScript && 
              document.head && 
              currentScript.parentNode && 
              currentScript.parentNode === document.head &&
              document.head.contains(currentScript)) {
            document.head.removeChild(currentScript);
          }
        } catch (error) {
          // Silently ignore all cleanup errors to prevent console spam
          // This prevents removeChild TypeError during page navigation
        } finally {
          scriptRef.current = null;
        }
      }, 100); // Increased delay to ensure DOM stability
    };
  }, [data]);

  return null;
}