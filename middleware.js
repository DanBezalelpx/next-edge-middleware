import { NextResponse } from 'next/server'

export async function middleware(req) {
  console.log('Guy Shalom hi')
  return NextResponse.next()
}
