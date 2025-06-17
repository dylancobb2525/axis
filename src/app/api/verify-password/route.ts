import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    // Store the password securely in environment variable
    // For now, using the same password but this should be in .env.local
    const CORRECT_PASSWORD = process.env.SITE_PASSWORD || 'ushaxisdemo$';
    
    if (password === CORRECT_PASSWORD) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
} 