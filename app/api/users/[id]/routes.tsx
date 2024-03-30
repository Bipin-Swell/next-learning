import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: {
        id: number
    }
};

export function GET(request: NextRequest,
    props: Props) {
    const { params: { id } } = props;

    if (id > 10) {
        return NextResponse.json('User not found!', {
            status: 404
        });
    }

    return NextResponse.json({
        id: id,
        name: 'Bipin Kumar',
        email: 'bipin@example.com'
    });
}

