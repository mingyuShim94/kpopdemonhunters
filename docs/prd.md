# KDH 팬 위키 MVP 사양서 (M0 \~ M2)

## 1. 개요

- **목적**:『K‑pop Demon Hunters』(KDH) IP 관련 설정·캐릭터·OST 정보를 통합해 신규·기존 팬의 정보 탐색 허들을 낮추고, 검색 노출을 극대화한다.
- **범위**: PRD 1단계(MVP)에 해당하는 핵심 기능만 구현해 2개월 내 퍼블릭 런칭을 목표로 한다.

## 2. 목표 및 핵심 지표

| 구분            | 목표치                            | 측정 도구           |
| --------------- | --------------------------------- | ------------------- |
| MAU             | ≥ 10k (런칭 +30일)                | GA4                 |
| 평균 세션 길이  | ≥ 3 분                            | GA4                 |
| 페이지/세션     | ≥ 4                               | GA4                 |
| Core Web Vitals | LCP ≤2.5 s, FID ≤100 ms, CLS ≤0.1 | Lighthouse, CWV API |

_Phase 1 성공 시, Phase 2 확장 기능(다국어·갤러리 등)을 진행한다._

## 3. 사용자 시나리오 (MVP 한정)

1. **헌트릭스 팬**은 루미 캐릭터 페이지에서 의상 레퍼런스를 3 클릭 이내로 찾을 수 있다.
2. **세계관 분석러**는 악귀 분류 타임라인을 요약 페이지에서 바로 확인하고 인용할 수 있다.
3. **신규 해외 팬**은 영문 스토리 TL;DR를 Google 결과로 유입해 2 분 내 KDH 세계관을 이해한다.

## 4. 핵심 기능 명세

| ID   | 기능                     | 설명                                    | 수용 기준(AC)                      |
| ---- | ------------------------ | --------------------------------------- | ---------------------------------- |
| F‑01 | **카테고리 구조**        | 캐릭터·OST·세계관·악귀·명장면           | 원하는 문서 3 클릭 ≤               |
| F‑02 | **캐릭터 프로필 페이지** | 이름·성격·대사·참고 이미지              | 모바일 FCP ≤2s, SEO meta 본문 포함 |
| F‑03 | **OST 목록 & 가사**      | 트랙 목록, 유튜브 MV, 가사 원문/번역 탭 | 탭 전환 ≤0.5s                      |
| F‑04 | **세계관·스토리 요약**   | 타임라인 + 배경 설명 (MDX)              | 스크롤 인터랙티브, CLS ≤0.1        |
| F‑05 | **키워드 검색**          | Algolia InstantSearch 전 문서 대상      | 응답 ≤300 ms, 오탈자 70 % 교정     |
| F‑06 | **반응형 UI**            | Mob → Desktop 전 구간                   | Lighthouse Mob 90 점↑              |
| F‑07 | **기본 SEO**             | title, meta, og\:image 자동 생성        | 구글 Search Console 오류 0 건      |

### 제외(Phase 2‒3에서 다룸)

- 이미지 갤러리(스틸·팬아트)
- 태그 네트워크·관계 차트
- 다국어 라우팅(/en, /jp)
- 팬 기여 시스템, 트렌드 알고리즘

## 5. 비기능 요구사항

| 카테고리   | 요구사항                                                |
| ---------- | ------------------------------------------------------- |
| **성능**   | FCP ≤2 s, TTI ≤3 s (4G 모바일)                          |
| **보안**   | XSS 방어, CSP 기본 정책, Firebase Auth JWT 검증         |
| **접근성** | WCAG 2.1 AA, 모든 비주얼 요소 ARIA 라벨 포함            |
| **확장성** | 연간 문서 2 만 건, 동시 사용자 5k 추가 가능             |
| **호환성** | Chrome, Safari, Edge, Firefox 최신 2 버전 & iOS/Android |

## 6. 아키텍처 & 기술 스택

| 레이어          | 선택 기술                              | 비고                           |
| --------------- | -------------------------------------- | ------------------------------ |
| **프론트엔드**  | Next.js 14 (App Router) + TypeScript   | SSG + ISR, ESLint strict       |
| **콘텐츠 저장** | MDX 파일 + Decap CMS (Git gateway)     | 리뷰 플로우 PR → Merge         |
| **검색**        | Algolia InstantSearch + typo tolerance | 무료 tier → 지표 후 업그레이드 |
| **이미지**      | AWS S3 + CloudFront, AVIF/WEBP 변환    | next/image loader 커스텀       |
| **인증**        | Firebase Auth (OAuth)                  | 이메일 Link Login 나중에 추가  |
| **분석**        | Google Analytics 4, BigQuery 연결      | 이벤트 + 유저 속성 커스텀      |
| **배포**        | GitHub Actions → Cloudflare Pages      | Preview → Main Branch 배포     |

## 7. 데이터 모델 (초안)

```plaintext
Collection: characters
- id (slug)
- name_ko / name_en
- personality (markdown)
- quotes[]
- image_url

Collection: ost
- id (slug)
- title
- youtube_id
- lyrics_ko / lyrics_en (markdown)

Collection: lore
- id (slug)
- type (timeline | concept)
- content_mdx
```

## 8. 일정 & 마일스톤

| 주차 | 목표                          | 산출물                             |
| ---- | ----------------------------- | ---------------------------------- |
| W1   | 프로젝트 세팅                 | Repo, CI/CD, Decap CMS 구성 완료   |
| W2   | 데이터 모델 & 카테고리 라우팅 | MDX 스키마, Dynamic Routes         |
| W3   | 캐릭터 프로필 UI              | 카드 컴포넌트, 이미지 로더         |
| W4   | OST 페이지 + MV embed         | 가사 탭, MV iframe                 |
| W5   | 검색(Algolia) 통합            | InstantSearch UI, typo tolerance   |
| W6   | 세계관 요약 타임라인          | Intersection Observer, scroll snap |
| W7   | SEO / 성능 최적화             | Meta 태그, CWV 튜닝                |
| W8   | QA & 런칭                     | Lighthouse 90↑, Beta 배포 → Public |

## 9. 위험 & 대응

| 위험          | 가능성     | 영향 | 대응                                              |
| ------------- | ---------- | ---- | ------------------------------------------------- |
| 저작권 이슈   | 중간       | 높음 | IP 보유사 사전 승인, CC 라이선스 이미지 우선 사용 |
| 급격한 트래픽 | 낮음 (MVP) | 중간 | ISR 캐싱, Cloudflare CDN 활용                     |
| 데이터 오류   | 중간       | 중간 | CMS PR 리뷰 → Merge, 롤백 스크립트                |

## 10. 오픈 이슈 / 다음 단계

- CMS 에디터 UX: 이미지 업로드 워크플로 확정 필요
- Firebase 비용 모니터링: 무료 할당량 내 유지 방안
- 팬 기여 시스템 스펙 정의 (Phase 2)

---

_작성: 2025‑07‑08 (KST)_
