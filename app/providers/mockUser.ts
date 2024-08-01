// mockUser.ts
import { UserProfile } from '@auth0/nextjs-auth0/client';

export const mockUser: UserProfile = {
    sub: 'mock|12345',
    nickname: 'MockUser',
    name: 'Mock User',
    picture: 'https://example.com/mock-user-picture.jpg',
    updated_at: new Date().toISOString(),
    email: 'mockuser@example.com',
    email_verified: true,
};