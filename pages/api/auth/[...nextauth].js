import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:"924985086613-9raidgplp0u615paaiil0im80emq0ljf.apps.googleusercontent.com",
            clientSecret:"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"
        }),
    ],
    secret:process.env.JWT_SECRET
});