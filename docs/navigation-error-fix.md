# Navigation Error Fix Report

## 문제 상황 (Problem Description)

### 발생한 오류

- **Error Type**: Runtime TypeError
- **Error Message**: `Cannot read properties of null (reading 'removeChild')`
- **환경**: Next.js 15.5.2 (Turbopack)

### 증상

- page1에서 page2로 이동할 때 JavaScript 오류 발생
- URL은 page2로 변경되지만 화면은 여전히 page1 내용을 표시
- 페이지 네비게이션이 제대로 작동하지 않음

## 근본 원인 분석 (Root Cause Analysis)

### 오류 발생 위치

```javascript
// app/page.tsx의 useEffect cleanup 함수
return () => {
  if (document.body.contains(script)) {
    document.body.removeChild(script); // 여기서 오류 발생
  }
};
```

### 원인 분석

1. **React 라이프사이클 충돌**: useEffect cleanup 함수가 React의 컴포넌트 언마운트 과정에서 실행
2. **DOM 상태 불일치**: 페이지 전환 시 DOM이 이미 부분적으로 해체된 상태에서 `document.body`가 null이 됨
3. **타이밍 문제**: `document.body.contains(script)` 체크는 통과하지만, 실제 `removeChild` 실행 시점에 `document.body`가 null
4. **HMR (Hot Module Replacement) 간섭**: 개발 환경에서 Turbopack의 HMR이 DOM 조작과 충돌

## 해결 방법 (Solution)

### 1단계: 시도한 해결책들

```javascript
// 시도 1: 안전한 cleanup 함수 (실패)
return () => {
  try {
    if (document.body && script && document.body.contains(script)) {
      document.body.removeChild(script);
    }
  } catch (error) {
    console.warn("Error during script cleanup:", error);
  }
};

// 시도 2: 스크립트 중복 방지 로직 (실패)
const scriptLoadedRef = useRef(false);
if (scriptLoadedRef.current) return;
```

### 2단계: 최종 해결책

**Gumroad 스크립트를 전역 레벨로 이동**

#### Before (문제 코드)

```javascript
// app/page.tsx
"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://gumroad.com/js/gumroad.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script); // 오류 발생 지점
      }
    };
  }, []);
  // ...
}
```

#### After (해결된 코드)

```javascript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://gumroad.com/js/gumroad.js" async></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

// app/page.tsx (단순화됨)
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold text-black">page1</h1>
      <Link href="/page2" className="...">Go to Page2</Link>
      <a href="https://gguggulab.gumroad.com/l/oexqcw" className="gumroad-button ...">
        Buy my product
      </a>
    </div>
  );
}
```

## 검증 결과 (Verification Results)

### 테스트 수행

1. **페이지 네비게이션 테스트**: page1 → page2 이동
2. **Gumroad 버튼 기능 테스트**: 구매 팝업 오버레이 확인
3. **콘솔 오류 확인**: JavaScript 에러 모니터링

### 결과

✅ **Navigation 정상 작동**: URL 변경 시 페이지 내용도 정상 업데이트  
✅ **Gumroad 기능 유지**: 구매 버튼 클릭 시 팝업 정상 표시  
✅ **오류 완전 해결**: removeChild TypeError 더 이상 발생하지 않음  
✅ **성능 개선**: 불필요한 DOM 조작 제거로 페이지 전환 속도 향상

## 핵심 교훈 (Key Learnings)

### 1. 써드파티 스크립트 관리 Best Practice

- **전역 스크립트**: `layout.tsx`에서 한 번만 로드
- **컴포넌트 레벨 스크립트**: React 라이프사이클과 충돌 가능성

### 2. Next.js App Router에서의 스크립트 로딩

```javascript
// ✅ 권장: layout.tsx에서 전역 로딩
<head>
  <script src="external-script.js" async></script>
</head>;

// ❌ 비권장: 컴포넌트에서 동적 로딩 (cleanup 필요)
useEffect(() => {
  const script = document.createElement("script");
  // ... DOM 조작
  return () => {
    /* cleanup 로직 */
  };
}, []);
```

### 3. 오류 디버깅 접근법

1. **에러 위치 특정**: React DevTools와 콘솔 스택 트레이스 활용
2. **라이프사이클 이해**: React 컴포넌트 마운트/언마운트 과정 분석
3. **단계적 해결**: 복잡한 로직보다 근본적 구조 변경 고려

## 참고 자료 (References)

- [Next.js Script Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)
- [React useEffect Cleanup](https://react.dev/reference/react/useEffect#cleanup-function)
- [Gumroad Integration Guide](https://help.gumroad.com/article/150-gumroad-overlay)
