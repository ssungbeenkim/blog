'use client';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeContext({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: dev 실행시 콘솔 에러 확인
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  );
}
