import { NextResponse } from 'next/server'

export async function middleware(req) {
  console.log('Guy Shalom')
  return NextResponse.next()
}
