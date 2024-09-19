import * as crypto from 'crypto';

interface TokenPayload {
    user: string;
    data: any;
    salt: string;
}

export function encode(user: string, data: any): string {
    const salt = crypto.randomBytes(16).toString('hex');
    const payload: TokenPayload = { user, data, salt };
    const jsonPayload = JSON.stringify(payload);
    return Buffer.from(jsonPayload).toString('base64url');
}

export function decode(token: string): { user: string; data: any } | null {
    try {
        const jsonPayload = Buffer.from(token, 'base64url').toString();
        const payload: TokenPayload = JSON.parse(jsonPayload);
        return { user: payload.user, data: payload.data };
    } catch {
        return null;
    }
}