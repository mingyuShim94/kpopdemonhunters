import { NextRequest, NextResponse } from "next/server";

// Cloudflare Edge Runtime 설정
export const runtime = 'edge';

// 대기자 명단 요청 인터페이스
interface WaitlistRequest {
  email: string;
}

// 간단한 이메일 검증 함수
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json() as WaitlistRequest;

    // 이메일 검증
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "이메일 주소가 필요합니다." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "유효한 이메일 주소를 입력해 주세요." },
        { status: 400 }
      );
    }

    // Cloudflare KV에 이메일 저장 (환경변수 체크)
    const kv = process.env.KV_NAMESPACE;
    if (kv) {
      // 실제 Cloudflare KV 구현은 Cloudflare Workers 환경에서 가능
      // 현재는 로그로만 기록
      console.log(`Waitlist email registered: ${email}`);
    }

    // 임시로 로컬 로그 기록 (실제 배포에서는 KV나 외부 서비스 사용)
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Waitlist registration: ${email}`);

    // 성공 응답
    return NextResponse.json(
      { 
        success: true, 
        message: "대기자 명단에 성공적으로 등록되었습니다!" 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Waitlist registration error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}

// OPTIONS 메서드 지원 (CORS)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}