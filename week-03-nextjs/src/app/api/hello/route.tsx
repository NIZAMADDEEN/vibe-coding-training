
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Welcome to MISAB NOOR ACADEMY JANI API!",
    status: "success",
  });
}

export async function POST(request: Request) {
  const data = await request.json();

  return NextResponse.json({
    message: "Information received successfully!",
    receivedData: data,
  });
}
