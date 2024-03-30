import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    const users = [
        {
            id: 1,
            name: 'Bipin Kumar',
            email: 'bipin@example.com'
        },
        {
            id: 2,
            name: 'Roshan Kumar',
            email: 'roshan@example.com'
        }
    ];
    return NextResponse.json(users);
}
