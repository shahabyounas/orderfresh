import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest){

    const authentication = true

    if(authentication) {
        // return NextResponse.next()
        return NextResponse.redirect(new URL('/home', request.url))
    }

    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: '/'
}