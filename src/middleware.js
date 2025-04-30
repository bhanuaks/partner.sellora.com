import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
import jwt from "jsonwebtoken";

export function middleware(request){
    const res = NextResponse.next();

    res.headers.set('Access-Control-Allow-Origin', '*')
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    
    const userAuth = request.cookies.get('affiliateUserAuthToken', '');
    
    //request.cookies.get('affiliateUserAuthToken', '');
    const requestUrl = request.nextUrl;
    //console.log(userAuth, requestUrl)
    
    const isUserLogin = userAuth && userAuth.name == "affiliateUserAuthToken";
    

     const accesWithoutLoginPage = ['/affiliate-program', '/associate-program', '/create-account', '/login']
    if((requestUrl.pathname.startsWith('/affiliate') || requestUrl.pathname.startsWith('/associate')) && !accesWithoutLoginPage.includes(requestUrl.pathname)){
        
                  
        
        if(!isUserLogin){
            const redirectUrl = new URL('/login', request.url)
            return NextResponse.redirect(redirectUrl)
        }
    }else if(requestUrl.pathname.startsWith('/login') || requestUrl.pathname.startsWith('/create-account')){
        if(isUserLogin){
            //console.log('kkkkkkkkkkkk', userAuth)
            const token = userAuth.value?.split('.')[1];
            const userDetail = atob(token)
            let redirectUrl 
            //console.log('mmmmmmmmmmmm', JSON.parse(userDetail), userAuth)
            const userDetailValue = JSON.parse(userDetail)
            if(userDetailValue.user?.program == 1){
            redirectUrl = new URL('/affiliate/dashboard', request.url)
            } else if(userDetailValue.user?.program == 2) {
            redirectUrl = new URL('/associate/profit-summary', request.url)
            } else {
            redirectUrl = new URL('/login', request.url)
            }
            
            //const redirectUrl = new URL('/dashboard', request.url)
            return NextResponse.redirect(redirectUrl)
            
        }
    }

        

    //  authentication User API
   /* if(requestUrl.pathname.startsWith('/api/user')){ 
        if(!isUserLogin){ 
            return NextResponse.json({status:false, message:"Unauthorized User"},403)
        }
    }
        */

     //  authentication Seller API
    if(requestUrl.pathname.startsWith('/api/aff-user/')){ 
        if(!isUserLogin){
            return NextResponse.json({status:false, message:"Unauthorized User"},403)
        }
    }


    return res;
}

export const config ={
    matcher:['/:path*']
}