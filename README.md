# KPoP Demon Hunters (KDH)

『K‑pop Demon Hunters』IP의 팬 위키 프로젝트입니다. 캐릭터, OST, 세계관 정보를 한 곳에서 제공하여 신규 및 기존 팬들의 접근성을 높이는 것을 목표로 합니다.

## 기술 스택

- **프레임워크**: Next.js 15 (App Router) + TypeScript
- **스타일링**: Tailwind CSS v4
- **배포**: Cloudflare Pages (OpenNext.js 어댑터 사용)
- **폰트**: Geist

## 개발 시작하기

개발 서버 실행:

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 사용 가능한 명령어

```bash
# 개발 서버 (Turbopack 사용)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 로컬 실행
npm start

# 린트 검사
npm run lint

# Cloudflare에 배포
npm run deploy

# 배포 미리보기
npm run preview

# Cloudflare 환경 타입 생성
npm run cf-typegen
```

## 프로젝트 구조

```
app/                    # Next.js App Router 페이지 및 레이아웃
├── layout.tsx         # 루트 레이아웃 (Geist 폰트 포함)
├── page.tsx           # 홈페이지 컴포넌트
└── globals.css        # 글로벌 Tailwind 스타일

docs/                  # 프로젝트 문서
└── prd.md            # 제품 요구사항 정의서 (한국어)

public/               # 정적 에셋 (_headers for Cloudflare)
```

## 배포

이 프로젝트는 Cloudflare Pages에 배포됩니다. OpenNext.js 어댑터를 사용하여 Next.js 애플리케이션을 Cloudflare의 Edge Runtime에서 실행할 수 있도록 최적화되었습니다.

자세한 내용은 [CLAUDE.md](./CLAUDE.md) 파일을 참조하세요.
