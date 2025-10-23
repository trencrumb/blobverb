(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const mp="/blobverb/assets/bird-Corn_Bunting-BnfS8ukK.wav",gp=Object.freeze(Object.defineProperty({__proto__:null,default:mp},Symbol.toStringTag,{value:"Module"})),_p="/blobverb/assets/bird-Grey_breasted_Crake--zGh3Pj9P.wav",vp=Object.freeze(Object.defineProperty({__proto__:null,default:_p},Symbol.toStringTag,{value:"Module"})),xp="/blobverb/assets/cow-B1QRs7aI.wav",yp=Object.freeze(Object.defineProperty({__proto__:null,default:xp},Symbol.toStringTag,{value:"Module"})),bp="/blobverb/assets/dog-BH6VFJu-.wav",Sp=Object.freeze(Object.defineProperty({__proto__:null,default:bp},Symbol.toStringTag,{value:"Module"})),Mp="/blobverb/assets/elephant-DCVHiw_G.wav",Ep=Object.freeze(Object.defineProperty({__proto__:null,default:Mp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="180",Ps={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tp=0,ku=1,wp=2,zd=1,Ap=2,qn=3,Bn=0,ke=1,Mn=2,gi=0,Ds=1,Hu=2,Vu=3,Gu=4,Rp=5,Fi=100,Cp=101,Pp=102,Dp=103,Ip=104,Lp=200,Up=201,Np=202,Fp=203,Yl=204,jl=205,Bp=206,Op=207,zp=208,kp=209,Hp=210,Vp=211,Gp=212,Wp=213,Xp=214,Zl=0,Kl=1,Ql=2,Ns=3,Jl=4,tc=5,ec=6,nc=7,kd=0,$p=1,qp=2,_i=0,Yp=1,jp=2,Zp=3,Kp=4,Qp=5,Jp=6,tm=7,Hd=300,Fs=301,Bs=302,ic=303,sc=304,xa=306,rc=1e3,Oi=1001,oc=1002,an=1003,em=1004,Xr=1005,Nn=1006,La=1007,zi=1008,On=1009,Vd=1010,Gd=1011,wr=1012,au=1013,vi=1014,Tn=1015,Fr=1016,lu=1017,cu=1018,Ar=1020,Wd=35902,Xd=35899,$d=1021,qd=1022,sn=1023,Rr=1026,Cr=1027,Yd=1028,ya=1029,jd=1030,uu=1031,hu=1033,Oo=33776,zo=33777,ko=33778,Ho=33779,ac=35840,lc=35841,cc=35842,uc=35843,hc=36196,dc=37492,fc=37496,pc=37808,mc=37809,gc=37810,_c=37811,vc=37812,xc=37813,yc=37814,bc=37815,Sc=37816,Mc=37817,Ec=37818,Tc=37819,wc=37820,Ac=37821,Rc=36492,Cc=36494,Pc=36495,Dc=36283,Ic=36284,Lc=36285,Uc=36286,nm=3200,im=3201,Zd=0,sm=1,hi="",dn="srgb",Os="srgb-linear",ea="linear",ne="srgb",Qi=7680,Wu=519,rm=512,om=513,am=514,Kd=515,lm=516,cm=517,um=518,hm=519,Xu=35044,$u="300 es",wn=2e3,na=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const gr=Math.PI/180,Pr=180/Math.PI;function Gs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Nt(i,t,e){return Math.max(t,Math.min(e,i))}function du(i,t){return(i%t+t)%t}function dm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fm(i,t,e){return i!==t?(e-i)/(t-i):0}function _r(i,t,e){return(1-e)*i+e*t}function pm(i,t,e,n){return _r(i,t,1-Math.exp(-e*n))}function mm(i,t=1){return t-Math.abs(du(i,t*2)-t)}function gm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _m(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xm(i,t){return i+Math.random()*(t-i)}function ym(i){return i*(.5-Math.random())}function bm(i){i!==void 0&&(qu=i);let t=qu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sm(i){return i*gr}function Mm(i){return i*Pr}function Em(i){return(i&i-1)===0&&i!==0}function Tm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Am(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const fu={DEG2RAD:gr,RAD2DEG:Pr,generateUUID:Gs,clamp:Nt,euclideanModulo:du,mapLinear:dm,inverseLerp:fm,lerp:_r,damp:pm,pingpong:mm,smoothstep:gm,smootherstep:_m,randInt:vm,randFloat:xm,randFloatSpread:ym,seededRandom:bm,degToRad:Sm,radToDeg:Mm,isPowerOfTwo:Em,ceilPowerOfTwo:Tm,floorPowerOfTwo:wm,setQuaternionFromProperEuler:Am,normalize:Oe,denormalize:Ss};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const b=Math.sqrt(y),E=Math.atan2(b,p*x);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const _=a*x;if(l=l*m+d*_,c=c*m+f*_,u=u*m+g*_,h=h*m+v*_,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-a*f,t[e+2]=c*g+u*f+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Nt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new I,Yu=new Wi;class kt{constructor(t,e,n,s,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],y=s[4],_=s[7],b=s[2],E=s[5],T=s[8];return r[0]=o*v+a*x+l*b,r[3]=o*m+a*y+l*E,r[6]=o*p+a*_+l*T,r[1]=c*v+u*x+h*b,r[4]=c*m+u*y+h*E,r[7]=c*p+u*_+h*T,r[2]=d*v+f*x+g*b,r[5]=d*m+f*y+g*E,r[8]=d*p+f*_+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Na.makeScale(t,e)),this}rotate(t){return this.premultiply(Na.makeRotation(-t)),this}translate(t,e){return this.premultiply(Na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new kt;function Qd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rm(){const i=ia("canvas");return i.style.display="block",i}const ju={};function Dr(i){i in ju||(ju[i]=!0,console.warn(i))}function Cm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Zu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pm(){const i={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Os]:{primaries:t,whitePoint:n,transfer:ea,toXYZ:Zu,fromXYZ:Ku,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Zu,fromXYZ:Ku,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}const Zt=Pm();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ji;class Dm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=ia("canvas")),Ji.width=t.width,Ji.height=t.height;const s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ia("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Im=0;class pu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Gs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fa(s[o].image)):r.push(Fa(s[o]))}else r=Fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lm=0;const Ba=new I;class He extends Yi{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Oi,s=Oi,r=Nn,o=zi,a=sn,l=On,c=He.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Gs(),this.name="",this.source=new pu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rc:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rc:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Hd;He.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(f+1)/2,b=(p+1)/2,E=(u+d)/4,T=(h+v)/4,A=(g+m)/4;return y>_&&y>b?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=T/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=A/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=T/r,s=A/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this.w=Nt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this.w=Nt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Um extends Yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new He(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new pu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Um{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jd extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nm extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class be{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),qr.subVectors(this.max,Ys),ts.subVectors(t.a,Ys),es.subVectors(t.b,Ys),ns.subVectors(t.c,Ys),ni.subVectors(es,ts),ii.subVectors(ns,es),Si.subVectors(ts,ns);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Si.z,Si.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Si.z,0,-Si.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Si.y,Si.x,0];return!Oa(e,ts,es,ns,qr)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,ts,es,ns,qr))?!1:(Yr.crossVectors(ni,ii),e=[Yr.x,Yr.y,Yr.z],Oa(e,ts,es,ns,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new I,new I,new I,new I,new I,new I,new I,new I],xn=new I,$r=new be,ts=new I,es=new I,ns=new I,ni=new I,ii=new I,Si=new I,Ys=new I,qr=new I,Yr=new I,Mi=new I;function Oa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mi.fromArray(i,r);const a=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),u=n.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Fm=new be,js=new I,za=new I;class Fn{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(za)),this.expandByPoint(js.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Gn=new I,ka=new I,jr=new I,si=new I,Ha=new I,Zr=new I,Va=new I;class Br{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ka.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(ka);const r=t.distanceTo(e)*.5,o=-this.direction.dot(jr),a=si.dot(this.direction),l=-si.dot(jr),c=si.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ka).addScaledVector(jr,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){Ha.subVectors(e,t),Zr.subVectors(n,t),Va.crossVectors(Ha,Zr);let o=this.direction.dot(Va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);const l=a*this.direction.dot(Zr.crossVectors(si,Zr));if(l<0)return null;const c=a*this.direction.dot(Ha.cross(si));if(c<0||l+c>o)return null;const u=-a*si.dot(Va);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,g,v,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,g,v,m)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;e[0]=d-v*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bm,t,Om)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ri.crossVectors(n,tn),ri.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ri.crossVectors(n,tn)),ri.normalize(),Kr.crossVectors(tn,ri),s[0]=ri.x,s[4]=Kr.x,s[8]=tn.x,s[1]=ri.y,s[5]=Kr.y,s[9]=tn.y,s[2]=ri.z,s[6]=Kr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],y=n[7],_=n[11],b=n[15],E=s[0],T=s[4],A=s[8],S=s[12],M=s[1],C=s[5],P=s[9],L=s[13],N=s[2],z=s[6],H=s[10],Y=s[14],V=s[3],Q=s[7],rt=s[11],pt=s[15];return r[0]=o*E+a*M+l*N+c*V,r[4]=o*T+a*C+l*z+c*Q,r[8]=o*A+a*P+l*H+c*rt,r[12]=o*S+a*L+l*Y+c*pt,r[1]=u*E+h*M+d*N+f*V,r[5]=u*T+h*C+d*z+f*Q,r[9]=u*A+h*P+d*H+f*rt,r[13]=u*S+h*L+d*Y+f*pt,r[2]=g*E+v*M+m*N+p*V,r[6]=g*T+v*C+m*z+p*Q,r[10]=g*A+v*P+m*H+p*rt,r[14]=g*S+v*L+m*Y+p*pt,r[3]=x*E+y*M+_*N+b*V,r[7]=x*T+y*C+_*z+b*Q,r[11]=x*A+y*P+_*H+b*rt,r[15]=x*S+y*L+_*Y+b*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=h*m*c-v*d*c+v*l*f-a*m*f-h*l*p+a*d*p,y=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,_=u*v*c-g*h*c+g*a*f-o*v*f-u*a*p+o*h*p,b=g*h*l-u*v*l-g*a*d+o*v*d+u*a*m-o*h*m,E=e*x+n*y+s*_+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=x*T,t[1]=(v*d*r-h*m*r-v*s*f+n*m*f+h*s*p-n*d*p)*T,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*T,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*T,t[4]=y*T,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*T,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*f+e*l*f)*T,t[8]=_*T,t[9]=(g*h*r-u*v*r-g*n*f+e*v*f+u*n*p-e*h*p)*T,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*p+e*a*p)*T,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*T,t[12]=b*T,t[13]=(u*v*s-g*h*s+g*n*d-e*v*d-u*n*m+e*h*m)*T,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*T,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,v=o*u,m=o*h,p=a*h,x=l*c,y=l*u,_=l*h,b=n.x,E=n.y,T=n.z;return s[0]=(1-(v+p))*b,s[1]=(f+_)*b,s[2]=(g-y)*b,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(d+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+y)*T,s[9]=(m-x)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const c=1/r,u=1/o,h=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===wn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===na)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===wn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===na)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const is=new I,yn=new jt,Bm=new I(0,0,0),Om=new I(1,1,1),ri=new I,Kr=new I,tn=new I,Qu=new jt,Ju=new Wi;class zn{constructor(t=0,e=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class mu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zm=0;const th=new I,ss=new Wi,Wn=new jt,Qr=new I,Zs=new I,km=new I,Hm=new Wi,eh=new I(1,0,0),nh=new I(0,1,0),ih=new I(0,0,1),sh={type:"added"},Vm={type:"removed"},rs={type:"childadded",child:null},Ga={type:"childremoved",child:null};class Ve extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new I,e=new zn,n=new Wi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new kt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Zs,Qr,this.up):Wn.lookAt(Qr,Zs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Wn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sh),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vm),Ga.child=t,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,km),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Hm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new I(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new I,Xn=new I,Wa=new I,$n=new I,os=new I,as=new I,rh=new I,Xa=new I,$a=new I,qa=new I,Ya=new re,ja=new re,Za=new re;class Pe{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),Xn.subVectors(n,e),Wa.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(Xn),l=bn.dot(Wa),c=Xn.dot(Xn),u=Xn.dot(Wa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ya.setScalar(0),ja.setScalar(0),Za.setScalar(0),Ya.fromBufferAttribute(t,e),ja.fromBufferAttribute(t,n),Za.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ya,r.x),o.addScaledVector(ja,r.y),o.addScaledVector(Za,r.z),o}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),Xn.subVectors(t,e),bn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),bn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Pe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Pe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,n),as.subVectors(r,n),Xa.subVectors(t,n);const l=os.dot(Xa),c=as.dot(Xa);if(l<=0&&c<=0)return e.copy(n);$a.subVectors(t,s);const u=os.dot($a),h=as.dot($a);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(os,o);qa.subVectors(t,r);const f=os.dot(qa),g=as.dot(qa);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(as,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return rh.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(rh,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Ka(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=du(t,1),e=Nt(e,0,1),n=Nt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ka(o,r,t+1/3),this.g=Ka(o,r,t),this.b=Ka(o,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=tf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return Zt.workingToColorSpace(Le.copy(this),t),Math.round(Nt(Le.r*255,0,255))*65536+Math.round(Nt(Le.g*255,0,255))*256+Math.round(Nt(Le.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=dn){Zt.workingToColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Jr);const n=_r(oi.h,Jr.h,e),s=_r(oi.s,Jr.s,e),r=_r(oi.l,Jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new qt;qt.NAMES=tf;let Gm=0;class Ws extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Ds,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=jl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yl&&(n.blendSrc=this.blendSrc),this.blendDst!==jl&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gu extends Ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new I,to=new Rt;let Wm=0;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xu,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xu&&(t.usage=this.usage),t}}class ef extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nf extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class De extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xm=0;const un=new jt,Qa=new Ve,ls=new I,en=new be,Ks=new be,Te=new I;class Ge extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qd(t)?nf:ef)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new De(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new be);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(en.min,Ks.min),en.expandByPoint(Te),Te.addVectors(en.max,Ks.max),en.expandByPoint(Te)):(en.expandByPoint(Ks.min),en.expandByPoint(Ks.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Te.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(t,c),Te.add(ls)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new I,l[A]=new I;const c=new I,u=new I,h=new I,d=new Rt,f=new Rt,g=new Rt,v=new I,m=new I;function p(A,S,M){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[A].add(v),a[S].add(v),a[M].add(v),l[A].add(m),l[S].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let A=0,S=x.length;A<S;++A){const M=x[A],C=M.start,P=M.count;for(let L=C,N=C+P;L<N;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new I,_=new I,b=new I,E=new I;function T(A){b.fromBufferAttribute(s,A),E.copy(b);const S=a[A];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),_.crossVectors(E,S);const C=_.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,C)}for(let A=0,S=x.length;A<S;++A){const M=x[A],C=M.start,P=M.count;for(let L=C,N=C+P;L<N;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Ze(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new jt,Ei=new Br,eo=new Fn,ah=new I,no=new I,io=new I,so=new I,Ja=new I,ro=new I,lh=new I,oo=new I;class Ne extends Ve{constructor(t=new Ge,e=new gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ja.fromBufferAttribute(h,t),o?ro.addScaledVector(Ja,u):ro.addScaledVector(Ja.sub(e),u))}e.add(ro)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(eo.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(eo,ah)===null||Ei.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(oh.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(oh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,b=y;_<b;_+=3){const E=a.getX(_),T=a.getX(_+1),A=a.getX(_+2);s=ao(this,p,t,n,c,u,h,E,T,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=ao(this,o,t,n,c,u,h,x,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,b=y;_<b;_+=3){const E=_,T=_+1,A=_+2;s=ao(this,p,t,n,c,u,h,E,T,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,y=m+1,_=m+2;s=ao(this,o,t,n,c,u,h,x,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function $m(i,t,e,n,s,r,o,a){let l;if(t.side===ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Bn,a),l===null)return null;oo.copy(a),oo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(oo);return c<e.near||c>e.far?null:{distance:c,point:oo.clone(),object:i}}function ao(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,no),i.getVertexPosition(l,io),i.getVertexPosition(c,so);const u=$m(i,t,e,n,no,io,so,lh);if(u){const h=new I;Pe.getBarycoord(lh,no,io,so,h),s&&(u.uv=Pe.getInterpolatedAttribute(s,a,l,c,h,new Rt)),r&&(u.uv1=Pe.getInterpolatedAttribute(r,a,l,c,h,new Rt)),o&&(u.normal=Pe.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};Pe.getNormal(no,io,so,d.normal),u.face=d,u.barycoord=h}return u}class Or extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(h,2));function g(v,m,p,x,y,_,b,E,T,A,S){const M=_/T,C=b/A,P=_/2,L=b/2,N=E/2,z=T+1,H=A+1;let Y=0,V=0;const Q=new I;for(let rt=0;rt<H;rt++){const pt=rt*C-L;for(let It=0;It<z;It++){const Ht=It*M-P;Q[v]=Ht*x,Q[m]=pt*y,Q[p]=N,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(It/T),h.push(1-rt/A),Y+=1}}for(let rt=0;rt<A;rt++)for(let pt=0;pt<T;pt++){const It=d+pt+z*rt,Ht=d+pt+z*(rt+1),Jt=d+(pt+1)+z*(rt+1),Ft=d+(pt+1)+z*rt;l.push(It,Ht,Ft),l.push(Ht,Jt,Ft),V+=6}a.addGroup(f,V,S),f+=V,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=zs(i[e]);for(const s in n)t[s]=n[s]}return t}function qm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Ym={clone:zs,merge:ze};var jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jm,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=qm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rf extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new I,ch=new Rt,uh=new Rt;class nn extends rf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,ch,uh),e.subVectors(uh,ch)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const cs=-90,us=1;class Km extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(cs,us,t,e);s.layers=this.layers,this.add(s);const r=new nn(cs,us,t,e);r.layers=this.layers,this.add(r);const o=new nn(cs,us,t,e);o.layers=this.layers,this.add(o);const a=new nn(cs,us,t,e);a.layers=this.layers,this.add(a);const l=new nn(cs,us,t,e);l.layers=this.layers,this.add(l);const c=new nn(cs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class of extends He{constructor(t=[],e=Fs,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qm extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new of(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Or(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:gi});r.uniforms.tEquirect.value=e;const o=new Ne(s,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=Nn),new Km(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class dr extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class tg extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class el extends He{constructor(t=null,e=1,n=1,s,r,o,a,l,c=an,u=an,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nl=new I,eg=new I,ng=new kt;class Ln{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=nl.subVectors(n,e).cross(eg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ng.getNormalMatrix(t),s=this.coplanarPoint(nl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Fn,ig=new Rt(.5,.5),lo=new I;class zr{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],x=r[12],y=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,f-u,p-g,b-x).normalize(),s[1].setComponents(c+o,f+u,p+g,b+x).normalize(),s[2].setComponents(c+a,f+h,p+v,b+y).normalize(),s[3].setComponents(c-a,f-h,p-v,b-y).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(c-l,f-d,p-m,b-_).normalize();else if(s[4].setComponents(c-l,f-d,p-m,b-_).normalize(),e===wn)s[5].setComponents(c+l,f+d,p+m,b+_).normalize();else if(e===na)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);const e=ig.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(lo.x=s.normal.x>0?t.max.x:t.min.x,lo.y=s.normal.y>0?t.max.y:t.min.y,lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Cn=new jt,Pn=new zr;class _u{constructor(){this.coordinateSystem=wn}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(Cn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Pn.setFromProjectionMatrix(Cn,s.coordinateSystem,s.reversedDepth),Pn.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(Cn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Pn.setFromProjectionMatrix(Cn,s.coordinateSystem,s.reversedDepth),Pn.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(Cn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Pn.setFromProjectionMatrix(Cn,s.coordinateSystem,s.reversedDepth),Pn.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(Cn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Pn.setFromProjectionMatrix(Cn,s.coordinateSystem,s.reversedDepth),Pn.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(Cn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Pn.setFromProjectionMatrix(Cn,s.coordinateSystem,s.reversedDepth),Pn.containsPoint(t))return!0}return!1}clone(){return new _u}}function il(i,t){return i-t}function sg(i,t){return i.z-t.z}function rg(i,t){return t.z-i.z}class og{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,s){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}}const $e=new jt,ag=new qt(1,1,1),hh=new zr,lg=new _u,co=new be,wi=new Fn,Qs=new I,dh=new I,cg=new I,sl=new og,Ue=new Ne,uo=[];function ug(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function Ai(i,t){if(i.constructor!==t.constructor){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{const e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}class hg extends Ne{constructor(t,e,n=e*2,s){super(new Ge,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new el(e,t,t,sn,Tn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new el(e,t,t,ya,vi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new el(e,t,t,sn,Tn);n.colorSpace=Zt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),h=new Ze(u,l,c);e.setAttribute(r,h)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new Ze(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new be);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,$e),this.getBoundingBoxAt(r,co).applyMatrix4($e),t.union(co)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,$e),this.getBoundingSphereAt(r,wi).applyMatrix4($e),t.union(wi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(il),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;$e.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(ag.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(il),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,t),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(s&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const u in n.attributes){const h=e.getAttribute(u),d=n.getAttribute(u);ug(h,d,l);const f=h.itemSize;for(let g=h.count,v=c;g<v;g++){const m=l+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(s){const u=a.indexStart,h=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<o.count;d++)r.setX(u+d,l+o.getX(d));for(let d=o.count,f=h;d<f;d++)r.setX(u+d,l);r.needsUpdate=!0,r.addUpdateRange(u,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===t&&this.deleteInstance(s);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=s[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:u,vertexStart:h,reservedIndexCount:d}=c,f=r.index,g=f.array,v=t-h;for(let m=u;m<u+d;m++)g[m]=g[m]+v;f.array.copyWithin(e,u,u+d),f.addUpdateRange(e,d),c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:u,reservedVertexCount:h}=c,d=r.attributes;for(const f in d){const g=d[f],{array:v,itemSize:m}=g;v.copyWithin(t*m,u*m,(u+h)*m),g.addUpdateRange(t*m,h*m)}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingBox===null){const r=new be,o=n.index,a=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let u=l;o&&(u=o.getX(u)),r.expandByPoint(Qs.fromBufferAttribute(a,u))}s.boundingBox=r}return e.copy(s.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingSphere===null){const r=new Fn;this.getBoundingBoxAt(t,co),co.getCenter(r.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=s.start,u=s.start+s.count;c<u;c++){let h=c;o&&(h=o.getX(h)),Qs.fromBufferAttribute(a,h),l=Math.max(l,r.center.distanceToSquared(Qs))}r.radius=Math.sqrt(l),s.boundingSphere=r}return e.copy(s.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,s=this._matricesTexture.image.data;return e.toArray(s,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(il);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const s=new Int32Array(t),r=new Int32Array(t);Ai(this._multiDrawCounts,s),Ai(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Ai(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Ai(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Ai(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ge,this._initializeGeometry(r));const o=this.geometry;r.index&&Ai(r.index.array,o.index.array);for(const a in r.attributes)Ai(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Ue.material=this.material,Ue.geometry.index=o.index,Ue.geometry.attributes=o.attributes,Ue.geometry.boundingBox===null&&(Ue.geometry.boundingBox=new be),Ue.geometry.boundingSphere===null&&(Ue.geometry.boundingSphere=new Fn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,u=s[c];Ue.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,Ue.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Ue.geometry.boundingBox),this.getBoundingSphereAt(c,Ue.geometry.boundingSphere),Ue.raycast(t,uo);for(let h=0,d=uo.length;h<d;h++){const f=uo[h];f.object=this,f.batchId=a,e.push(f)}uo.length=0}Ue.material=null,Ue.geometry.index=null,Ue.geometry.attributes={},Ue.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data,v=n.isArrayCamera?lg:hh;d&&!n.isArrayCamera&&($e.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),hh.setFromProjectionMatrix($e,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){$e.copy(this.matrixWorld).invert(),Qs.setFromMatrixPosition(n.matrixWorld).applyMatrix4($e),dh.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection($e);for(let y=0,_=l.length;y<_;y++)if(l[y].visible&&l[y].active){const b=l[y].geometryIndex;this.getMatrixAt(y,$e),this.getBoundingSphereAt(b,wi).applyMatrix4($e);let E=!1;if(d&&(E=!v.intersectsSphere(wi,n)),!E){const T=h[b],A=cg.subVectors(wi.center,Qs).dot(dh);sl.push(T.start,T.count,A,y)}}const p=sl.list,x=this.customSort;x===null?p.sort(r.transparent?rg:sg):x.call(this,p,n);for(let y=0,_=p.length;y<_;y++){const b=p[y];c[m]=b.start*a,u[m]=b.count,g[m]=b.index,m++}sl.reset()}else for(let p=0,x=l.length;p<x;p++)if(l[p].visible&&l[p].active){const y=l[p].geometryIndex;let _=!1;if(d&&(this.getMatrixAt(p,$e),this.getBoundingSphereAt(y,wi).applyMatrix4($e),_=!v.intersectsSphere(wi,n)),!_){const b=h[y];c[m]=b.start*a,u[m]=b.count,g[m]=p,m++}}f.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class af extends Ws{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const sa=new I,ra=new I,fh=new jt,Js=new Br,ho=new Fn,rl=new I,ph=new I;class dg extends Ve{constructor(t=new Ge,e=new af){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)sa.fromBufferAttribute(e,s-1),ra.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=sa.distanceTo(ra);t.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;fh.copy(s).invert(),Js.copy(t.ray).applyMatrix4(fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=u.getX(v),x=u.getX(v+1),y=fo(this,t,Js,l,p,x,v);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=fo(this,t,Js,l,v,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=fo(this,t,Js,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=fo(this,t,Js,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fo(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(sa.fromBufferAttribute(a,s),ra.fromBufferAttribute(a,r),e.distanceSqToSegment(sa,ra,rl,ph)>n)return;rl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(rl);if(!(c<t.near||c>t.far))return{distance:c,point:ph.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const mh=new I,gh=new I;class fg extends dg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mh.fromBufferAttribute(e,s),gh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mh.distanceTo(gh);t.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lf extends He{constructor(t,e,n=vi,s,r,o,a=an,l=an,c,u=Rr,h=1){if(u!==Rr&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class cf extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vu extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(r.slice(),3)),this.setAttribute("uv",new De(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new I,_=new I,b=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],_),f(e[E+2],b),l(y,_,b,x)}function l(x,y,_,b){const E=b+1,T=[];for(let A=0;A<=E;A++){T[A]=[];const S=x.clone().lerp(_,A/E),M=y.clone().lerp(_,A/E),C=E-A;for(let P=0;P<=C;P++)P===0&&A===E?T[A][P]=S:T[A][P]=S.clone().lerp(M,P/C)}for(let A=0;A<E;A++)for(let S=0;S<2*(E-A)-1;S++){const M=Math.floor(S/2);S%2===0?(d(T[A][M+1]),d(T[A+1][M]),d(T[A][M])):(d(T[A][M+1]),d(T[A+1][M+1]),d(T[A+1][M]))}}function c(x){const y=new I;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(x),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const x=new I;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const _=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(_,1-b)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){const y=o[x+0],_=o[x+2],b=o[x+4],E=Math.max(y,_,b),T=Math.min(y,_,b);E>.9&&T<.1&&(y<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const _=x*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const x=new I,y=new I,_=new I,b=new I,E=new Rt,T=new Rt,A=new Rt;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),E.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),b.copy(x).add(y).add(_).divideScalar(3);const C=m(b);v(E,M+0,x,C),v(T,M+2,y,C),v(A,M+4,_,C)}}function v(x,y,_,b){b<0&&x.x===1&&(o[y]=x.x-1),_.x===0&&_.z===0&&(o[y]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.vertices,t.indices,t.radius,t.details)}}class xu extends vu{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xu(t.radius,t.detail)}}class ba extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const x=p*d-o;for(let y=0;y<c;y++){const _=y*h-r;g.push(_,-x,0),v.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,_=x+c*(p+1),b=x+1+c*(p+1),E=x+1+c*p;f.push(y,_,E),f.push(_,b,E)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(v,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.width,t.height,t.widthSegments,t.heightSegments)}}class yu extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const E=b/e;h.x=-t*Math.cos(s+E*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(E+_,1-y),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=u[p][x+1],_=u[p][x],b=u[p+1][x],E=u[p+1][x+1];(p!==0||o>0)&&f.push(y,_,E),(p!==n-1||l<Math.PI)&&f.push(_,b,E)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(v,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pg extends Ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mg extends Ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gg extends Ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class uf extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ol=new jt,_h=new I,vh=new I;class _g{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_h.setFromMatrixPosition(t.matrixWorld),e.position.copy(_h),vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vh),e.updateMatrixWorld(),ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xh=new jt,tr=new I,al=new I;class vg extends _g{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),al.copy(n.position),al.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(al),n.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh,n.coordinateSystem,n.reversedDepth)}}class xg extends uf{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class yg extends rf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class bg extends uf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sg extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const yh=new jt;class Mg{constructor(t,e,n=0,s=1/0){this.ray=new Br(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new mu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(t,e=!0,n=[]){return Nc(t,this,n,e),n.sort(bh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Nc(t[s],this,n,e);return n.sort(bh),n}}function bh(i,t){return i.distance-t.distance}function Nc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Nc(r[o],t,e,!0)}}class Sh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Nt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Mh=new I,po=new I,hs=new I,ds=new I,ll=new I,Eg=new I,Tg=new I;class Jn{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Mh.subVectors(t,this.start),po.subVectors(this.end,this.start);const n=po.dot(po);let r=po.dot(Mh)/n;return e&&(r=Nt(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Eg,n=Tg){const s=10000000000000001e-32;let r,o;const a=this.start,l=t.start,c=this.end,u=t.end;hs.subVectors(c,a),ds.subVectors(u,l),ll.subVectors(a,l);const h=hs.dot(hs),d=ds.dot(ds),f=ds.dot(ll);if(h<=s&&d<=s)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(h<=s)r=0,o=f/d,o=Nt(o,0,1);else{const g=hs.dot(ll);if(d<=s)o=0,r=Nt(-g/h,0,1);else{const v=hs.dot(ds),m=h*d-v*v;m!==0?r=Nt((v*f-g*d)/m,0,1):r=0,o=(v*r+f)/d,o<0?(o=0,r=Nt(-g/h,0,1)):o>1&&(o=1,r=Nt((v-g)/h,0,1))}}return e.copy(a).add(hs.multiplyScalar(r)),n.copy(l).add(ds.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class wg extends Yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Eh(i,t,e,n){const s=Ag(n);switch(e){case $d:return i*t;case Yd:return i*t/s.components*s.byteLength;case ya:return i*t/s.components*s.byteLength;case jd:return i*t*2/s.components*s.byteLength;case uu:return i*t*2/s.components*s.byteLength;case qd:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case hu:return i*t*4/s.components*s.byteLength;case Oo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ko:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lc:case uc:return Math.max(i,16)*Math.max(t,8)/4;case ac:case cc:return Math.max(i,8)*Math.max(t,8)/2;case hc:case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rc:case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Dc:case Ic:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lc:case Uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ag(i){switch(i){case On:case Vd:return{byteLength:1,components:1};case wr:case Gd:case Fr:return{byteLength:2,components:1};case lu:case cu:return{byteLength:2,components:4};case vi:case au:case Tn:return{byteLength:4,components:1};case Wd:case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rg(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",o0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,b0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,O0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,p_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,__=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,j_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ov=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Cg,alphahash_pars_fragment:Pg,alphamap_fragment:Dg,alphamap_pars_fragment:Ig,alphatest_fragment:Lg,alphatest_pars_fragment:Ug,aomap_fragment:Ng,aomap_pars_fragment:Fg,batching_pars_vertex:Bg,batching_vertex:Og,begin_vertex:zg,beginnormal_vertex:kg,bsdfs:Hg,iridescence_fragment:Vg,bumpmap_pars_fragment:Gg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:$g,clipping_planes_vertex:qg,color_fragment:Yg,color_pars_fragment:jg,color_pars_vertex:Zg,color_vertex:Kg,common:Qg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:t0,displacementmap_pars_vertex:e0,displacementmap_vertex:n0,emissivemap_fragment:i0,emissivemap_pars_fragment:s0,colorspace_fragment:r0,colorspace_pars_fragment:o0,envmap_fragment:a0,envmap_common_pars_fragment:l0,envmap_pars_fragment:c0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:b0,envmap_vertex:h0,fog_vertex:d0,fog_pars_vertex:f0,fog_fragment:p0,fog_pars_fragment:m0,gradientmap_pars_fragment:g0,lightmap_pars_fragment:_0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:x0,lights_pars_begin:y0,lights_toon_fragment:S0,lights_toon_pars_fragment:M0,lights_phong_fragment:E0,lights_phong_pars_fragment:T0,lights_physical_fragment:w0,lights_physical_pars_fragment:A0,lights_fragment_begin:R0,lights_fragment_maps:C0,lights_fragment_end:P0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:I0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:U0,map_fragment:N0,map_pars_fragment:F0,map_particle_fragment:B0,map_particle_pars_fragment:O0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:k0,morphinstance_vertex:H0,morphcolor_vertex:V0,morphnormal_vertex:G0,morphtarget_pars_vertex:W0,morphtarget_vertex:X0,normal_fragment_begin:$0,normal_fragment_maps:q0,normal_pars_fragment:Y0,normal_pars_vertex:j0,normal_vertex:Z0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:t_,iridescence_pars_fragment:e_,opaque_fragment:n_,packing:i_,premultiplied_alpha_fragment:s_,project_vertex:r_,dithering_fragment:o_,dithering_pars_fragment:a_,roughnessmap_fragment:l_,roughnessmap_pars_fragment:c_,shadowmap_pars_fragment:u_,shadowmap_pars_vertex:h_,shadowmap_vertex:d_,shadowmask_pars_fragment:f_,skinbase_vertex:p_,skinning_pars_vertex:m_,skinning_vertex:g_,skinnormal_vertex:__,specularmap_fragment:v_,specularmap_pars_fragment:x_,tonemapping_fragment:y_,tonemapping_pars_fragment:b_,transmission_fragment:S_,transmission_pars_fragment:M_,uv_pars_fragment:E_,uv_pars_vertex:T_,uv_vertex:w_,worldpos_vertex:A_,background_vert:R_,background_frag:C_,backgroundCube_vert:P_,backgroundCube_frag:D_,cube_vert:I_,cube_frag:L_,depth_vert:U_,depth_frag:N_,distanceRGBA_vert:F_,distanceRGBA_frag:B_,equirect_vert:O_,equirect_frag:z_,linedashed_vert:k_,linedashed_frag:H_,meshbasic_vert:V_,meshbasic_frag:G_,meshlambert_vert:W_,meshlambert_frag:X_,meshmatcap_vert:$_,meshmatcap_frag:q_,meshnormal_vert:Y_,meshnormal_frag:j_,meshphong_vert:Z_,meshphong_frag:K_,meshphysical_vert:Q_,meshphysical_frag:J_,meshtoon_vert:tv,meshtoon_frag:ev,points_vert:nv,points_frag:iv,shadow_vert:sv,shadow_frag:rv,sprite_vert:ov,sprite_frag:av},at={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Un={basic:{uniforms:ze([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ze([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new qt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ze([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ze([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ze([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new qt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ze([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ze([at.points,at.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ze([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ze([at.common,at.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ze([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ze([at.sprite,at.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:ze([at.common,at.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:ze([at.lights,at.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Un.physical={uniforms:ze([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const mo={r:0,b:0,g:0},Ri=new zn,lv=new jt;function cv(i,t,e,n,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const b=g(y);b===null?p(a,l):b&&b.isColor&&(p(b,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){const b=g(_);b&&(b.isCubeTexture||b.mapping===xa)?(u===void 0&&(u=new Ne(new Or(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:zs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ri.copy(_.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lv.makeRotationFromEuler(Ri)),u.material.toneMapped=Zt.getTransfer(b.colorSpace)!==ne,(h!==b||d!==b.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ne(new ba(2,2),new ti({name:"BackgroundMaterial",uniforms:zs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(b.colorSpace)!==ne,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(mo,sf(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,_,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:v,addToRenderList:m,dispose:x}}function uv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,C,P,L,N){let z=!1;const H=h(L,P,C);r!==H&&(r=H,c(r.object)),z=f(M,L,P,N),z&&g(M,L,P,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(M,C,P,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,C,P){const L=P.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let z=N[C.id];z===void 0&&(z={},N[C.id]=z);let H=z[L];return H===void 0&&(H=d(l()),z[L]=H),H}function d(M){const C=[],P=[],L=[];for(let N=0;N<e;N++)C[N]=0,P[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:L,object:M,attributes:{},index:null}}function f(M,C,P,L){const N=r.attributes,z=C.attributes;let H=0;const Y=P.getAttributes();for(const V in Y)if(Y[V].location>=0){const rt=N[V];let pt=z[V];if(pt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(M,C,P,L){const N={},z=C.attributes;let H=0;const Y=P.getAttributes();for(const V in Y)if(Y[V].location>=0){let rt=z[V];rt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor));const pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),N[V]=pt,H++}r.attributes=N,r.attributesNum=H,r.index=L}function v(){const M=r.newAttributes;for(let C=0,P=M.length;C<P;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const P=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;P[M]=1,L[M]===0&&(i.enableVertexAttribArray(M),L[M]=1),N[M]!==C&&(i.vertexAttribDivisor(M,C),N[M]=C)}function x(){const M=r.newAttributes,C=r.enabledAttributes;for(let P=0,L=C.length;P<L;P++)C[P]!==M[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function y(M,C,P,L,N,z,H){H===!0?i.vertexAttribIPointer(M,C,P,N,z):i.vertexAttribPointer(M,C,P,L,N,z)}function _(M,C,P,L){v();const N=L.attributes,z=P.getAttributes(),H=C.defaultAttributeValues;for(const Y in z){const V=z[Y];if(V.location>=0){let Q=N[Y];if(Q===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const rt=Q.normalized,pt=Q.itemSize,It=t.get(Q);if(It===void 0)continue;const Ht=It.buffer,Jt=It.type,Ft=It.bytesPerElement,$=Jt===i.INT||Jt===i.UNSIGNED_INT||Q.gpuType===au;if(Q.isInterleavedBufferAttribute){const K=Q.data,ft=K.stride,St=Q.offset;if(K.isInstancedInterleavedBuffer){for(let lt=0;lt<V.locationSize;lt++)p(V.location+lt,K.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let lt=0;lt<V.locationSize;lt++)y(V.location+lt,pt/V.locationSize,Jt,rt,ft*Ft,(St+pt/V.locationSize*lt)*Ft,$)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)p(V.location+K,Q.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let K=0;K<V.locationSize;K++)y(V.location+K,pt/V.locationSize,Jt,rt,pt*Ft,pt/V.locationSize*K*Ft,$)}}else if(H!==void 0){const rt=H[Y];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(V.location,rt);break;case 3:i.vertexAttrib3fv(V.location,rt);break;case 4:i.vertexAttrib4fv(V.location,rt);break;default:i.vertexAttrib1fv(V.location,rt)}}}}x()}function b(){A();for(const M in n){const C=n[M];for(const P in C){const L=C[P];for(const N in L)u(L[N].object),delete L[N];delete C[P]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const P in C){const L=C[P];for(const N in L)u(L[N].object),delete L[N];delete C[P]}delete n[M.id]}function T(M){for(const C in n){const P=n[C];if(P[M.id]===void 0)continue;const L=P[M.id];for(const N in L)u(L[N].object),delete L[N];delete P[M.id]}}function A(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function hv(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==sn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===Fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==On&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Tn&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:b,maxSamples:E}}function fv(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ln,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,y=x*4;let _=p.clippingState||null;l.value=_,_=u(g,d,y,f);for(let b=0;b!==y;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function pv(i){let t=new WeakMap;function e(o,a){return a===ic?o.mapping=Fs:a===sc&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ic||a===sc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qm(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const As=4,Th=[.125,.215,.35,.446,.526,.582],Bi=20,cl=new yg,wh=new qt;let ul=null,hl=0,dl=0,fl=!1;const Ui=(1+Math.sqrt(5))/2,fs=1/Ui,Ah=[new I(-Ui,fs,0),new I(Ui,fs,0),new I(-fs,0,Ui),new I(fs,0,Ui),new I(0,Ui,-fs),new I(0,Ui,fs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],mv=new I;class Rh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=mv}=r;ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ul,hl,dl),this._renderer.xr.enabled=fl,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Fr,format:sn,colorSpace:Os,depthBuffer:!1},s=Ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gv(r)),this._blurMaterial=_v(r,t,e)}return s}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,cl)}_sceneToCubeUV(t,e,n,s,r){const l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(wh),h.toneMapping=_i,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const v=new gu({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),m=new Ne(new Or,v);let p=!1;const x=t.background;x?x.isColor&&(v.color.copy(x),t.background=null,p=!0):(v.color.copy(wh),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const b=this._cubeSize;go(s,_*b,y>2?b:0,b,b),h.setRenderTarget(s),p&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Fs||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;go(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,cl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ah[(s-r-1)%Ah.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ne(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Bi;m>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const p=[];let x=0;for(let T=0;T<Bi;++T){const A=T/v,S=Math.exp(-A*A/2);p.push(S),T===0?x+=S:T<m&&(x+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[s],b=3*_*(s>y-As?s-y+As:0),E=4*(this._cubeSize-_);go(e,b,E,3*_,2*_),l.setRenderTarget(e),l.render(h,cl)}}function gv(i){const t=[],e=[],n=[];let s=i;const r=i-As+1+Th.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-As?l=Th[o-i+As-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,A=E>2?0:-1,S=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];x.set(S,v*g*E),y.set(d,m*g*E);const M=[E,E,E,E,E,E];_.set(M,p*g*E)}const b=new Ge;b.setAttribute("position",new Ze(x,v)),b.setAttribute("uv",new Ze(y,m)),b.setAttribute("faceIndex",new Ze(_,p)),t.push(b),s>As&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ch(i,t,e){const n=new Xi(i,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _v(i,t,e){const n=new Float32Array(Bi),s=new I(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ph(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Dh(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ic||l===sc,u=l===Fs||l===Bs;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Rh(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Rh(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function xv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yv(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let y=0,_=x.length;y<_;y+=3){const b=x[y+0],E=x[y+1],T=x[y+2];d.push(b,E,E,T,T,b)}}else if(g!==void 0){const x=g.array;v=g.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const b=y+0,E=y+1,T=y+2;d.push(b,E,E,T,T,b)}}else return;const m=new(Qd(d)?nf:ef)(d,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function bv(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Sv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mv(i,t,e){const n=new WeakMap,s=new re;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=a.attributes.position.count*y,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const E=new Float32Array(_*b*4*h),T=new Jd(E,_,b,h);T.type=Tn,T.needsUpdate=!0;const A=y*4;for(let M=0;M<h;M++){const C=m[M],P=p[M],L=x[M],N=_*b*4*M;for(let z=0;z<C.count;z++){const H=z*A;f===!0&&(s.fromBufferAttribute(C,z),E[N+H+0]=s.x,E[N+H+1]=s.y,E[N+H+2]=s.z,E[N+H+3]=0),g===!0&&(s.fromBufferAttribute(P,z),E[N+H+4]=s.x,E[N+H+5]=s.y,E[N+H+6]=s.z,E[N+H+7]=0),v===!0&&(s.fromBufferAttribute(L,z),E[N+H+8]=s.x,E[N+H+9]=s.y,E[N+H+10]=s.z,E[N+H+11]=L.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Rt(_,b)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ev(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const df=new He,Ih=new lf(1,1),ff=new Jd,pf=new Nm,mf=new of,Lh=[],Uh=[],Nh=new Float32Array(16),Fh=new Float32Array(9),Bh=new Float32Array(4);function Xs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sa(i,t){let e=Uh[t];e===void 0&&(e=new Int32Array(t),Uh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Av(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Rv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Cv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;Bh.set(n),i.uniformMatrix2fv(this.addr,!1,Bh),Me(e,n)}}function Pv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),Me(e,n)}}function Dv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(Se(e,n))return;Nh.set(n),i.uniformMatrix4fv(this.addr,!1,Nh),Me(e,n)}}function Iv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Fv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function kv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ih.compareFunction=Kd,r=Ih):r=df,e.setTexture2D(t||r,s)}function Hv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pf,s)}function Vv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mf,s)}function Gv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ff,s)}function Wv(i){switch(i){case 5126:return Tv;case 35664:return wv;case 35665:return Av;case 35666:return Rv;case 35674:return Cv;case 35675:return Pv;case 35676:return Dv;case 5124:case 35670:return Iv;case 35667:case 35671:return Lv;case 35668:case 35672:return Uv;case 35669:case 35673:return Nv;case 5125:return Fv;case 36294:return Bv;case 36295:return Ov;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Gv}}function Xv(i,t){i.uniform1fv(this.addr,t)}function $v(i,t){const e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function qv(i,t){const e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function Yv(i,t){const e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function jv(i,t){const e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zv(i,t){const e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kv(i,t){const e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qv(i,t){i.uniform1iv(this.addr,t)}function Jv(i,t){i.uniform2iv(this.addr,t)}function tx(i,t){i.uniform3iv(this.addr,t)}function ex(i,t){i.uniform4iv(this.addr,t)}function nx(i,t){i.uniform1uiv(this.addr,t)}function ix(i,t){i.uniform2uiv(this.addr,t)}function sx(i,t){i.uniform3uiv(this.addr,t)}function rx(i,t){i.uniform4uiv(this.addr,t)}function ox(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||df,r[o])}function ax(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pf,r[o])}function lx(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mf,r[o])}function cx(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ff,r[o])}function ux(i){switch(i){case 5126:return Xv;case 35664:return $v;case 35665:return qv;case 35666:return Yv;case 35674:return jv;case 35675:return Zv;case 35676:return Kv;case 5124:case 35670:return Qv;case 35667:case 35671:return Jv;case 35668:case 35672:return tx;case 35669:case 35673:return ex;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}class hx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wv(e.type)}}class dx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ux(e.type)}}class fx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Oh(i,t){i.seq.push(t),i.map[t.id]=t}function px(i,t,e){const n=i.name,s=n.length;for(pl.lastIndex=0;;){const r=pl.exec(n),o=pl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Oh(e,c===void 0?new hx(a,i,t):new dx(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new fx(a),Oh(e,h)),e=h}}}class Vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);px(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function zh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const mx=37297;let gx=0;function _x(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const kh=new kt;function vx(i){Zt._getMatrix(kh,Zt.workingColorSpace,i);const t=`mat3( ${kh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case ea:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_x(i.getShaderSource(t),a)}else return r}function xx(i,t){const e=vx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yx(i,t){let e;switch(t){case Yp:e="Linear";break;case jp:e="Reinhard";break;case Zp:e="Cineon";break;case Kp:e="ACESFilmic";break;case Jp:e="AgX";break;case tm:e="Neutral";break;case Qp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _o=new I;function bx(){Zt.getLuminanceCoefficients(_o);const i=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Mx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ex(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fr(i){return i!==""}function Vh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(i){return i.replace(Tx,Ax)}const wx=new Map;function Ax(i,t){let e=Vt[t];if(e===void 0){const n=wx.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fc(e)}const Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(i){return i.replace(Rx,Cx)}function Cx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Px(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ap?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Bs:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ix(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function Lx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kd:t="ENVMAP_BLENDING_MULTIPLY";break;case $p:t="ENVMAP_BLENDING_MIX";break;case qp:t="ENVMAP_BLENDING_ADD";break}return t}function Ux(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Px(e),c=Dx(e),u=Ix(e),h=Lx(e),d=Ux(e),f=Sx(e),g=Mx(r),v=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(m=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Vt.tonemapping_pars_fragment:"",e.toneMapping!==_i?yx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,xx("linearToOutputTexel",e.outputColorSpace),bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),o=Fc(o),o=Vh(o,e),o=Gh(o,e),a=Fc(a),a=Vh(a,e),a=Gh(a,e),o=Wh(o),a=Wh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,_=x+p+a,b=zh(s,s.VERTEX_SHADER,y),E=zh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,b),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(C){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(E)||"",z=P.trim(),H=L.trim(),Y=N.trim();let V=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,E);else{const rt=Hh(s,b,"vertex"),pt=Hh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+rt+`
`+pt)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||Y==="")&&(Q=!1);Q&&(C.diagnostics={runnable:V,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(b),s.deleteShader(E),A=new Vo(s,v),S=Ex(s,v)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,mx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}let Fx=0;class Bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ox(t),e.set(t,n)),n}}class Ox{constructor(t){this.id=Fx++,this.code=t,this.usedTimes=0}}function zx(i,t,e,n,s,r,o){const a=new mu,l=new Bx,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,C,P,L){const N=P.fog,z=L.geometry,H=S.isMeshStandardMaterial?P.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),V=Y&&Y.mapping===xa?Y.image.height:null,Q=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const rt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pt=rt!==void 0?rt.length:0;let It=0;z.morphAttributes.position!==void 0&&(It=1),z.morphAttributes.normal!==void 0&&(It=2),z.morphAttributes.color!==void 0&&(It=3);let Ht,Jt,Ft,$;if(Q){const te=Un[Q];Ht=te.vertexShader,Jt=te.fragmentShader}else Ht=S.vertexShader,Jt=S.fragmentShader,l.update(S),Ft=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);const K=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),St=L.isInstancedMesh===!0,lt=L.isBatchedMesh===!0,Wt=!!S.map,xe=!!S.matcap,U=!!Y,Gt=!!S.aoMap,Pt=!!S.lightMap,At=!!S.bumpMap,vt=!!S.normalMap,oe=!!S.displacementMap,gt=!!S.emissiveMap,Bt=!!S.metalnessMap,Ee=!!S.roughnessMap,ge=S.anisotropy>0,D=S.clearcoat>0,w=S.dispersion>0,G=S.iridescence>0,j=S.sheen>0,J=S.transmission>0,q=ge&&!!S.anisotropyMap,Tt=D&&!!S.clearcoatMap,st=D&&!!S.clearcoatNormalMap,bt=D&&!!S.clearcoatRoughnessMap,Mt=G&&!!S.iridescenceMap,nt=G&&!!S.iridescenceThicknessMap,dt=j&&!!S.sheenColorMap,Lt=j&&!!S.sheenRoughnessMap,Et=!!S.specularMap,ct=!!S.specularColorMap,zt=!!S.specularIntensityMap,F=J&&!!S.transmissionMap,it=J&&!!S.thicknessMap,ot=!!S.gradientMap,_t=!!S.alphaMap,tt=S.alphaTest>0,Z=!!S.alphaHash,yt=!!S.extensions;let Ot=_i;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const le={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Ht,fragmentShader:Jt,defines:S.defines,customVertexShaderID:Ft,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:lt,batchingColor:lt&&L._colorsTexture!==null,instancing:St,instancingColor:St&&L.instanceColor!==null,instancingMorph:St&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Os,alphaToCoverage:!!S.alphaToCoverage,map:Wt,matcap:xe,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:V,aoMap:Gt,lightMap:Pt,bumpMap:At,normalMap:vt,displacementMap:d&&oe,emissiveMap:gt,normalMapObjectSpace:vt&&S.normalMapType===sm,normalMapTangentSpace:vt&&S.normalMapType===Zd,metalnessMap:Bt,roughnessMap:Ee,anisotropy:ge,anisotropyMap:q,clearcoat:D,clearcoatMap:Tt,clearcoatNormalMap:st,clearcoatRoughnessMap:bt,dispersion:w,iridescence:G,iridescenceMap:Mt,iridescenceThicknessMap:nt,sheen:j,sheenColorMap:dt,sheenRoughnessMap:Lt,specularMap:Et,specularColorMap:ct,specularIntensityMap:zt,transmission:J,transmissionMap:F,thicknessMap:it,gradientMap:ot,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:_t,alphaTest:tt,alphaHash:Z,combine:S.combine,mapUv:Wt&&v(S.map.channel),aoMapUv:Gt&&v(S.aoMap.channel),lightMapUv:Pt&&v(S.lightMap.channel),bumpMapUv:At&&v(S.bumpMap.channel),normalMapUv:vt&&v(S.normalMap.channel),displacementMapUv:oe&&v(S.displacementMap.channel),emissiveMapUv:gt&&v(S.emissiveMap.channel),metalnessMapUv:Bt&&v(S.metalnessMap.channel),roughnessMapUv:Ee&&v(S.roughnessMap.channel),anisotropyMapUv:q&&v(S.anisotropyMap.channel),clearcoatMapUv:Tt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(S.sheenRoughnessMap.channel),specularMapUv:Et&&v(S.specularMap.channel),specularColorMapUv:ct&&v(S.specularColorMap.channel),specularIntensityMapUv:zt&&v(S.specularIntensityMap.channel),transmissionMapUv:F&&v(S.transmissionMap.channel),thicknessMapUv:it&&v(S.thicknessMap.channel),alphaMapUv:_t&&v(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(vt||ge),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Wt||_t),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ft,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Wt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&S.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=g[S.type];let C;if(M){const P=Un[M];C=Ym.clone(P.uniforms)}else C=S.uniforms;return C}function b(S,M){let C;for(let P=0,L=u.length;P<L;P++){const N=u[P];if(N.cacheKey===M){C=N,++C.usedTimes;break}}return C===void 0&&(C=new Nx(i,M,S,r),u.push(C)),C}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:A}}function kx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function a(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,d,f,g,v,m){const p=o(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||Hx),n.length>1&&n.sort(d||$h),s.length>1&&s.sort(d||$h)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Vx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new qh,i.set(n,[o])):s>=r.length?(o=new qh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new qt};break;case"SpotLight":e={position:new I,direction:new I,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Wx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xx=0;function $x(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qx(i){const t=new Gx,e=Wx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new jt,o=new jt;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,y=0,_=0,b=0,E=0,T=0;c.sort($x);for(let S=0,M=c.length;S<M;S++){const C=c[S],P=C.color,L=C.intensity,N=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=P.r*L,h+=P.g*L,d+=P.b*L;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],L);T++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,V=e.get(C);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=C.shadow.matrix,x++}n.directional[f]=H,f++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(P).multiplyScalar(L),H.distance=N,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[v]=H;const Y=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,Y.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[v]=Y.matrix,C.castShadow){const V=e.get(C);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=z,_++}v++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(P).multiplyScalar(L),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const Y=C.shadow,V=e.get(C);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(L),H.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==y||A.numSpotShadows!==_||A.numSpotMaps!==b||A.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,A.directionalLength=f,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=y,A.numSpotShadows=_,A.numSpotMaps=b,A.numLightProbes=T,n.version=Xx++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Yh(i){const t=new qx(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Yx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Yh(i),t.set(s,[a])):r>=o.length?(a=new Yh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kx(i,t,e){let n=new zr;const s=new Rt,r=new Rt,o=new re,a=new mg({depthPacking:im}),l=new gg,c={},u=e.maxTextureSize,h={[Bn]:ke,[ke]:Bn,[Mn]:Mn},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:jx,fragmentShader:Zx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let p=this.type;this.render=function(E,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(gi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=p!==qn&&this.type===qn,N=p===qn&&this.type!==qn;for(let z=0,H=E.length;z<H;z++){const Y=E[z],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Q=V.getFrameExtents();if(s.multiply(Q),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y)),V.map===null||L===!0||N===!0){const pt=this.type!==qn?{minFilter:an,magFilter:an}:{};V.map!==null&&V.map.dispose(),V.map=new Xi(s.x,s.y,pt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const rt=V.getViewportCount();for(let pt=0;pt<rt;pt++){const It=V.getViewport(pt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),P.viewport(o),V.updateMatrices(Y,pt),n=V.getFrustum(),_(T,A,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===qn&&x(V,A),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,C)};function x(E,T){const A=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,A,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,A,f,v,null)}function y(E,T,A,S){let M=null;const C=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)M=C;else if(M=A.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const P=M.uuid,L=T.uuid;let N=c[P];N===void 0&&(N={},c[P]=N);let z=N[L];z===void 0&&(z=M.clone(),N[L]=z,T.addEventListener("dispose",b)),M=z}if(M.visible=T.visible,M.wireframe=T.wireframe,S===qn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=i.properties.get(M);P.light=A}return M}function _(E,T,A,S,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===qn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const L=t.update(E),N=E.material;if(Array.isArray(N)){const z=L.groups;for(let H=0,Y=z.length;H<Y;H++){const V=z[H],Q=N[V.materialIndex];if(Q&&Q.visible){const rt=y(E,Q,S,M);E.onBeforeShadow(i,E,T,A,L,rt,V),i.renderBufferDirect(A,null,L,rt,E,V),E.onAfterShadow(i,E,T,A,L,rt,V)}}}else if(N.visible){const z=y(E,N,S,M);E.onBeforeShadow(i,E,T,A,L,z,null),i.renderBufferDirect(A,null,L,z,E,null),E.onAfterShadow(i,E,T,A,L,z,null)}}const P=E.children;for(let L=0,N=P.length;L<N;L++)_(P[L],T,A,S,M)}function b(E){E.target.removeEventListener("dispose",b);for(const A in c){const S=c[A],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Qx={[Zl]:Kl,[Ql]:ec,[Jl]:nc,[Ns]:tc,[Kl]:Zl,[ec]:Ql,[nc]:Jl,[tc]:Ns};function Jx(i,t){function e(){let F=!1;const it=new re;let ot=null;const _t=new re(0,0,0,0);return{setMask:function(tt){ot!==tt&&!F&&(i.colorMask(tt,tt,tt,tt),ot=tt)},setLocked:function(tt){F=tt},setClear:function(tt,Z,yt,Ot,le){le===!0&&(tt*=Ot,Z*=Ot,yt*=Ot),it.set(tt,Z,yt,Ot),_t.equals(it)===!1&&(i.clearColor(tt,Z,yt,Ot),_t.copy(it))},reset:function(){F=!1,ot=null,_t.set(-1,0,0,0)}}}function n(){let F=!1,it=!1,ot=null,_t=null,tt=null;return{setReversed:function(Z){if(it!==Z){const yt=t.get("EXT_clip_control");Z?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),it=Z;const Ot=tt;tt=null,this.setClear(Ot)}},getReversed:function(){return it},setTest:function(Z){Z?K(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(Z){ot!==Z&&!F&&(i.depthMask(Z),ot=Z)},setFunc:function(Z){if(it&&(Z=Qx[Z]),_t!==Z){switch(Z){case Zl:i.depthFunc(i.NEVER);break;case Kl:i.depthFunc(i.ALWAYS);break;case Ql:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case Jl:i.depthFunc(i.EQUAL);break;case tc:i.depthFunc(i.GEQUAL);break;case ec:i.depthFunc(i.GREATER);break;case nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=Z}},setLocked:function(Z){F=Z},setClear:function(Z){tt!==Z&&(it&&(Z=1-Z),i.clearDepth(Z),tt=Z)},reset:function(){F=!1,ot=null,_t=null,tt=null,it=!1}}}function s(){let F=!1,it=null,ot=null,_t=null,tt=null,Z=null,yt=null,Ot=null,le=null;return{setTest:function(te){F||(te?K(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(te){it!==te&&!F&&(i.stencilMask(te),it=te)},setFunc:function(te,Hn,Rn){(ot!==te||_t!==Hn||tt!==Rn)&&(i.stencilFunc(te,Hn,Rn),ot=te,_t=Hn,tt=Rn)},setOp:function(te,Hn,Rn){(Z!==te||yt!==Hn||Ot!==Rn)&&(i.stencilOp(te,Hn,Rn),Z=te,yt=Hn,Ot=Rn)},setLocked:function(te){F=te},setClear:function(te){le!==te&&(i.clearStencil(te),le=te)},reset:function(){F=!1,it=null,ot=null,_t=null,tt=null,Z=null,yt=null,Ot=null,le=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,b=null,E=null,T=new qt(0,0,0),A=0,S=!1,M=null,C=null,P=null,L=null,N=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Y>=2);let Q=null,rt={};const pt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Ht=new re().fromArray(pt),Jt=new re().fromArray(It);function Ft(F,it,ot,_t){const tt=new Uint8Array(4),Z=i.createTexture();i.bindTexture(F,Z),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<ot;yt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(it+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return Z}const $={};$[i.TEXTURE_2D]=Ft(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Ns),At(!1),vt(ku),K(i.CULL_FACE),Gt(gi);function K(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function ft(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function St(F,it){return h[F]!==it?(i.bindFramebuffer(F,it),h[F]=it,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=it),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=it),!0):!1}function lt(F,it){let ot=f,_t=!1;if(F){ot=d.get(it),ot===void 0&&(ot=[],d.set(it,ot));const tt=F.textures;if(ot.length!==tt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,yt=tt.length;Z<yt;Z++)ot[Z]=i.COLOR_ATTACHMENT0+Z;ot.length=tt.length,_t=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,_t=!0);_t&&i.drawBuffers(ot)}function Wt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const xe={[Fi]:i.FUNC_ADD,[Cp]:i.FUNC_SUBTRACT,[Pp]:i.FUNC_REVERSE_SUBTRACT};xe[Dp]=i.MIN,xe[Ip]=i.MAX;const U={[Lp]:i.ZERO,[Up]:i.ONE,[Np]:i.SRC_COLOR,[Yl]:i.SRC_ALPHA,[Hp]:i.SRC_ALPHA_SATURATE,[zp]:i.DST_COLOR,[Bp]:i.DST_ALPHA,[Fp]:i.ONE_MINUS_SRC_COLOR,[jl]:i.ONE_MINUS_SRC_ALPHA,[kp]:i.ONE_MINUS_DST_COLOR,[Op]:i.ONE_MINUS_DST_ALPHA,[Vp]:i.CONSTANT_COLOR,[Gp]:i.ONE_MINUS_CONSTANT_COLOR,[Wp]:i.CONSTANT_ALPHA,[Xp]:i.ONE_MINUS_CONSTANT_ALPHA};function Gt(F,it,ot,_t,tt,Z,yt,Ot,le,te){if(F===gi){v===!0&&(ft(i.BLEND),v=!1);return}if(v===!1&&(K(i.BLEND),v=!0),F!==Rp){if(F!==m||te!==S){if((p!==Fi||_!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,_=Fi),te)switch(F){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hu:i.blendFunc(i.ONE,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,y=null,b=null,E=null,T.set(0,0,0),A=0,m=F,S=te}return}tt=tt||it,Z=Z||ot,yt=yt||_t,(it!==p||tt!==_)&&(i.blendEquationSeparate(xe[it],xe[tt]),p=it,_=tt),(ot!==x||_t!==y||Z!==b||yt!==E)&&(i.blendFuncSeparate(U[ot],U[_t],U[Z],U[yt]),x=ot,y=_t,b=Z,E=yt),(Ot.equals(T)===!1||le!==A)&&(i.blendColor(Ot.r,Ot.g,Ot.b,le),T.copy(Ot),A=le),m=F,S=!1}function Pt(F,it){F.side===Mn?ft(i.CULL_FACE):K(i.CULL_FACE);let ot=F.side===ke;it&&(ot=!ot),At(ot),F.blending===Ds&&F.transparent===!1?Gt(gi):Gt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const _t=F.stencilWrite;a.setTest(_t),_t&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function vt(F){F!==Tp?(K(i.CULL_FACE),F!==C&&(F===ku?i.cullFace(i.BACK):F===wp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),C=F}function oe(F){F!==P&&(H&&i.lineWidth(F),P=F)}function gt(F,it,ot){F?(K(i.POLYGON_OFFSET_FILL),(L!==it||N!==ot)&&(i.polygonOffset(it,ot),L=it,N=ot)):ft(i.POLYGON_OFFSET_FILL)}function Bt(F){F?K(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function Ee(F){F===void 0&&(F=i.TEXTURE0+z-1),Q!==F&&(i.activeTexture(F),Q=F)}function ge(F,it,ot){ot===void 0&&(Q===null?ot=i.TEXTURE0+z-1:ot=Q);let _t=rt[ot];_t===void 0&&(_t={type:void 0,texture:void 0},rt[ot]=_t),(_t.type!==F||_t.texture!==it)&&(Q!==ot&&(i.activeTexture(ot),Q=ot),i.bindTexture(F,it||$[F]),_t.type=F,_t.texture=it)}function D(){const F=rt[Q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(F){Ht.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ht.copy(F))}function Lt(F){Jt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Jt.copy(F))}function Et(F,it){let ot=c.get(it);ot===void 0&&(ot=new WeakMap,c.set(it,ot));let _t=ot.get(F);_t===void 0&&(_t=i.getUniformBlockIndex(it,F.name),ot.set(F,_t))}function ct(F,it){const _t=c.get(it).get(F);l.get(it)!==_t&&(i.uniformBlockBinding(it,_t,F.__bindingPointIndex),l.set(it,_t))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,rt={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,y=null,_=null,b=null,E=null,T=new qt(0,0,0),A=0,S=!1,M=null,C=null,P=null,L=null,N=null,Ht.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:ft,bindFramebuffer:St,drawBuffers:lt,useProgram:Wt,setBlending:Gt,setMaterial:Pt,setFlipSided:At,setCullFace:vt,setLineWidth:oe,setPolygonOffset:gt,setScissorTest:Bt,activeTexture:Ee,bindTexture:ge,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:Mt,texImage3D:nt,updateUBOMapping:Et,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:bt,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:Tt,scissor:dt,viewport:Lt,reset:zt}}function ty(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,w){return f?new OffscreenCanvas(D,w):ia("canvas")}function v(D,w,G){let j=1;const J=ge(D);if((J.width>G||J.height>G)&&(j=G/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const q=Math.floor(j*J.width),Tt=Math.floor(j*J.height);h===void 0&&(h=g(q,Tt));const st=w?g(q,Tt):h;return st.width=q,st.height=Tt,st.getContext("2d").drawImage(D,0,0,q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Tt+")."),st}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,w,G,j,J=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=w;if(w===i.RED&&(G===i.FLOAT&&(q=i.R32F),G===i.HALF_FLOAT&&(q=i.R16F),G===i.UNSIGNED_BYTE&&(q=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.R8UI),G===i.UNSIGNED_SHORT&&(q=i.R16UI),G===i.UNSIGNED_INT&&(q=i.R32UI),G===i.BYTE&&(q=i.R8I),G===i.SHORT&&(q=i.R16I),G===i.INT&&(q=i.R32I)),w===i.RG&&(G===i.FLOAT&&(q=i.RG32F),G===i.HALF_FLOAT&&(q=i.RG16F),G===i.UNSIGNED_BYTE&&(q=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RG8UI),G===i.UNSIGNED_SHORT&&(q=i.RG16UI),G===i.UNSIGNED_INT&&(q=i.RG32UI),G===i.BYTE&&(q=i.RG8I),G===i.SHORT&&(q=i.RG16I),G===i.INT&&(q=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(q=i.RGB16UI),G===i.UNSIGNED_INT&&(q=i.RGB32UI),G===i.BYTE&&(q=i.RGB8I),G===i.SHORT&&(q=i.RGB16I),G===i.INT&&(q=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),G===i.UNSIGNED_INT&&(q=i.RGBA32UI),G===i.BYTE&&(q=i.RGBA8I),G===i.SHORT&&(q=i.RGBA16I),G===i.INT&&(q=i.RGBA32I)),w===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),w===i.RGBA){const Tt=J?ea:Zt.getTransfer(j);G===i.FLOAT&&(q=i.RGBA32F),G===i.HALF_FLOAT&&(q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(q=Tt===ne?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(D,w){let G;return D?w===null||w===vi||w===Ar?G=i.DEPTH24_STENCIL8:w===Tn?G=i.DEPTH32F_STENCIL8:w===wr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===vi||w===Ar?G=i.DEPTH_COMPONENT24:w===Tn?G=i.DEPTH_COMPONENT32F:w===wr&&(G=i.DEPTH_COMPONENT16),G}function b(D,w){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==an&&D.minFilter!==Nn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function E(D){const w=D.target;w.removeEventListener("dispose",E),A(w),w.isVideoTexture&&u.delete(w)}function T(D){const w=D.target;w.removeEventListener("dispose",T),M(w)}function A(D){const w=n.get(D);if(w.__webglInit===void 0)return;const G=D.source,j=d.get(G);if(j){const J=j[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(D),Object.keys(j).length===0&&d.delete(G)}n.remove(D)}function S(D){const w=n.get(D);i.deleteTexture(w.__webglTexture);const G=D.source,j=d.get(G);delete j[w.__cacheKey],o.memory.textures--}function M(D){const w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let J=0;J<w.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(w.__webglFramebuffer[j][J]);else i.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)i.deleteFramebuffer(w.__webglFramebuffer[j]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=D.textures;for(let j=0,J=G.length;j<J;j++){const q=n.get(G[j]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(D)}let C=0;function P(){C=0}function L(){const D=C;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),C+=1,D}function N(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function z(D,w){const G=n.get(D);if(D.isVideoTexture&&Bt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const j=D.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,D,w);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function H(D,w){const G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){$(G,D,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function Y(D,w){const G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){$(G,D,w);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function V(D,w){const G=n.get(D);if(D.version>0&&G.__version!==D.version){K(G,D,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}const Q={[rc]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},rt={[an]:i.NEAREST,[em]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[La]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},pt={[rm]:i.NEVER,[hm]:i.ALWAYS,[om]:i.LESS,[Kd]:i.LEQUAL,[am]:i.EQUAL,[um]:i.GEQUAL,[lm]:i.GREATER,[cm]:i.NOTEQUAL};function It(D,w){if(w.type===Tn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Nn||w.magFilter===La||w.magFilter===Xr||w.magFilter===zi||w.minFilter===Nn||w.minFilter===La||w.minFilter===Xr||w.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Q[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Q[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Q[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,rt[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,rt[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,pt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===an||w.minFilter!==Xr&&w.minFilter!==zi||w.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ht(D,w){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",E));const j=w.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const q=N(w);if(q!==D.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[q].usedTimes++;const Tt=J[D.__cacheKey];Tt!==void 0&&(J[D.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(w)),D.__cacheKey=q,D.__webglTexture=J[q].texture}return G}function Jt(D,w,G){return Math.floor(Math.floor(D/G)/w)}function Ft(D,w,G,j){const q=D.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,G,j,w.data);else{q.sort((nt,dt)=>nt.start-dt.start);let Tt=0;for(let nt=1;nt<q.length;nt++){const dt=q[Tt],Lt=q[nt],Et=dt.start+dt.count,ct=Jt(Lt.start,w.width,4),zt=Jt(dt.start,w.width,4);Lt.start<=Et+1&&ct===zt&&Jt(Lt.start+Lt.count-1,w.width,4)===ct?dt.count=Math.max(dt.count,Lt.start+Lt.count-dt.start):(++Tt,q[Tt]=Lt)}q.length=Tt+1;const st=i.getParameter(i.UNPACK_ROW_LENGTH),bt=i.getParameter(i.UNPACK_SKIP_PIXELS),Mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let nt=0,dt=q.length;nt<dt;nt++){const Lt=q[nt],Et=Math.floor(Lt.start/4),ct=Math.ceil(Lt.count/4),zt=Et%w.width,F=Math.floor(Et/w.width),it=ct,ot=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,zt,F,it,ot,G,j,w.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,st),i.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function $(D,w,G){let j=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=i.TEXTURE_3D);const J=Ht(D,w),q=w.source;e.bindTexture(j,D.__webglTexture,i.TEXTURE0+G);const Tt=n.get(q);if(q.version!==Tt.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const st=Zt.getPrimaries(Zt.workingColorSpace),bt=w.colorSpace===hi?null:Zt.getPrimaries(w.colorSpace),Mt=w.colorSpace===hi||st===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let nt=v(w.image,!1,s.maxTextureSize);nt=Ee(w,nt);const dt=r.convert(w.format,w.colorSpace),Lt=r.convert(w.type);let Et=y(w.internalFormat,dt,Lt,w.colorSpace,w.isVideoTexture);It(j,w);let ct;const zt=w.mipmaps,F=w.isVideoTexture!==!0,it=Tt.__version===void 0||J===!0,ot=q.dataReady,_t=b(w,nt);if(w.isDepthTexture)Et=_(w.format===Cr,w.type),it&&(F?e.texStorage2D(i.TEXTURE_2D,1,Et,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Et,nt.width,nt.height,0,dt,Lt,null));else if(w.isDataTexture)if(zt.length>0){F&&it&&e.texStorage2D(i.TEXTURE_2D,_t,Et,zt[0].width,zt[0].height);for(let tt=0,Z=zt.length;tt<Z;tt++)ct=zt[tt],F?ot&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ct.width,ct.height,dt,Lt,ct.data):e.texImage2D(i.TEXTURE_2D,tt,Et,ct.width,ct.height,0,dt,Lt,ct.data);w.generateMipmaps=!1}else F?(it&&e.texStorage2D(i.TEXTURE_2D,_t,Et,nt.width,nt.height),ot&&Ft(w,nt,dt,Lt)):e.texImage2D(i.TEXTURE_2D,0,Et,nt.width,nt.height,0,dt,Lt,nt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Et,zt[0].width,zt[0].height,nt.depth);for(let tt=0,Z=zt.length;tt<Z;tt++)if(ct=zt[tt],w.format!==sn)if(dt!==null)if(F){if(ot)if(w.layerUpdates.size>0){const yt=Eh(ct.width,ct.height,w.format,w.type);for(const Ot of w.layerUpdates){const le=ct.data.subarray(Ot*yt/ct.data.BYTES_PER_ELEMENT,(Ot+1)*yt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Ot,ct.width,ct.height,1,dt,le)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,dt,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Et,ct.width,ct.height,nt.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,dt,Lt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Et,ct.width,ct.height,nt.depth,0,dt,Lt,ct.data)}else{F&&it&&e.texStorage2D(i.TEXTURE_2D,_t,Et,zt[0].width,zt[0].height);for(let tt=0,Z=zt.length;tt<Z;tt++)ct=zt[tt],w.format!==sn?dt!==null?F?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,ct.width,ct.height,dt,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Et,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ot&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ct.width,ct.height,dt,Lt,ct.data):e.texImage2D(i.TEXTURE_2D,tt,Et,ct.width,ct.height,0,dt,Lt,ct.data)}else if(w.isDataArrayTexture)if(F){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Et,nt.width,nt.height,nt.depth),ot)if(w.layerUpdates.size>0){const tt=Eh(nt.width,nt.height,w.format,w.type);for(const Z of w.layerUpdates){const yt=nt.data.subarray(Z*tt/nt.data.BYTES_PER_ELEMENT,(Z+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,dt,Lt,yt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,dt,Lt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,nt.width,nt.height,nt.depth,0,dt,Lt,nt.data);else if(w.isData3DTexture)F?(it&&e.texStorage3D(i.TEXTURE_3D,_t,Et,nt.width,nt.height,nt.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,dt,Lt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Et,nt.width,nt.height,nt.depth,0,dt,Lt,nt.data);else if(w.isFramebufferTexture){if(it)if(F)e.texStorage2D(i.TEXTURE_2D,_t,Et,nt.width,nt.height);else{let tt=nt.width,Z=nt.height;for(let yt=0;yt<_t;yt++)e.texImage2D(i.TEXTURE_2D,yt,Et,tt,Z,0,dt,Lt,null),tt>>=1,Z>>=1}}else if(zt.length>0){if(F&&it){const tt=ge(zt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Et,tt.width,tt.height)}for(let tt=0,Z=zt.length;tt<Z;tt++)ct=zt[tt],F?ot&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt,Lt,ct):e.texImage2D(i.TEXTURE_2D,tt,Et,dt,Lt,ct);w.generateMipmaps=!1}else if(F){if(it){const tt=ge(nt);e.texStorage2D(i.TEXTURE_2D,_t,Et,tt.width,tt.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Lt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Et,dt,Lt,nt);m(w)&&p(j),Tt.__version=q.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function K(D,w,G){if(w.image.length!==6)return;const j=Ht(D,w),J=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+G);const q=n.get(J);if(J.version!==q.__version||j===!0){e.activeTexture(i.TEXTURE0+G);const Tt=Zt.getPrimaries(Zt.workingColorSpace),st=w.colorSpace===hi?null:Zt.getPrimaries(w.colorSpace),bt=w.colorSpace===hi||Tt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Mt=w.isCompressedTexture||w.image[0].isCompressedTexture,nt=w.image[0]&&w.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Mt&&!nt?dt[Z]=v(w.image[Z],!0,s.maxCubemapSize):dt[Z]=nt?w.image[Z].image:w.image[Z],dt[Z]=Ee(w,dt[Z]);const Lt=dt[0],Et=r.convert(w.format,w.colorSpace),ct=r.convert(w.type),zt=y(w.internalFormat,Et,ct,w.colorSpace),F=w.isVideoTexture!==!0,it=q.__version===void 0||j===!0,ot=J.dataReady;let _t=b(w,Lt);It(i.TEXTURE_CUBE_MAP,w);let tt;if(Mt){F&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,zt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){tt=dt[Z].mipmaps;for(let yt=0;yt<tt.length;yt++){const Ot=tt[yt];w.format!==sn?Et!==null?F?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,0,0,Ot.width,Ot.height,Et,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,0,0,Ot.width,Ot.height,Et,ct,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,zt,Ot.width,Ot.height,0,Et,ct,Ot.data)}}}else{if(tt=w.mipmaps,F&&it){tt.length>0&&_t++;const Z=ge(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){F?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,Et,ct,dt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,dt[Z].width,dt[Z].height,0,Et,ct,dt[Z].data);for(let yt=0;yt<tt.length;yt++){const le=tt[yt].image[Z].image;F?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,0,0,le.width,le.height,Et,ct,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,zt,le.width,le.height,0,Et,ct,le.data)}}else{F?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Et,ct,dt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,Et,ct,dt[Z]);for(let yt=0;yt<tt.length;yt++){const Ot=tt[yt];F?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,0,0,Et,ct,Ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,zt,Et,ct,Ot.image[Z])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),q.__version=J.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ft(D,w,G,j,J,q){const Tt=r.convert(G.format,G.colorSpace),st=r.convert(G.type),bt=y(G.internalFormat,Tt,st,G.colorSpace),Mt=n.get(w),nt=n.get(G);if(nt.__renderTarget=w,!Mt.__hasExternalTextures){const dt=Math.max(1,w.width>>q),Lt=Math.max(1,w.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,bt,dt,Lt,w.depth,0,Tt,st,null):e.texImage2D(J,q,bt,dt,Lt,0,Tt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,nt.__webglTexture,0,oe(w)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,nt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(D,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){const j=w.depthTexture,J=j&&j.isDepthTexture?j.type:null,q=_(w.stencilBuffer,J),Tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=oe(w);gt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,q,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,D)}else{const j=w.textures;for(let J=0;J<j.length;J++){const q=j[J],Tt=r.convert(q.format,q.colorSpace),st=r.convert(q.type),bt=y(q.internalFormat,Tt,st,q.colorSpace),Mt=oe(w);G&&gt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,bt,w.width,w.height):gt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,bt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,bt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const J=j.__webglTexture,q=oe(w);if(w.depthTexture.format===Rr)gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(w.depthTexture.format===Cr)gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Wt(D){const w=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const j=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=j}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const j=D.texture.mipmaps;j&&j.length>0?lt(w.__webglFramebuffer[0],D):lt(w.__webglFramebuffer,D)}else if(G){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=i.createRenderbuffer(),St(w.__webglDepthbuffer[j],D,!1);else{const J=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{const j=D.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),St(w.__webglDepthbuffer,D,!1);else{const J=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(D,w,G){const j=n.get(D);w!==void 0&&ft(j.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Wt(D)}function U(D){const w=D.texture,G=n.get(D),j=n.get(w);D.addEventListener("dispose",T);const J=D.textures,q=D.isWebGLCubeRenderTarget===!0,Tt=J.length>1;if(Tt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=w.version,o.memory.textures++),q){G.__webglFramebuffer=[];for(let st=0;st<6;st++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[st]=[];for(let bt=0;bt<w.mipmaps.length;bt++)G.__webglFramebuffer[st][bt]=i.createFramebuffer()}else G.__webglFramebuffer[st]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let st=0;st<w.mipmaps.length;st++)G.__webglFramebuffer[st]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let st=0,bt=J.length;st<bt;st++){const Mt=n.get(J[st]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&gt(D)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){const bt=J[st];G.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[st]);const Mt=r.convert(bt.format,bt.colorSpace),nt=r.convert(bt.type),dt=y(bt.internalFormat,Mt,nt,bt.colorSpace,D.isXRRenderTarget===!0),Lt=oe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,dt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,G.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),St(G.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),It(i.TEXTURE_CUBE_MAP,w);for(let st=0;st<6;st++)if(w.mipmaps&&w.mipmaps.length>0)for(let bt=0;bt<w.mipmaps.length;bt++)ft(G.__webglFramebuffer[st][bt],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt);else ft(G.__webglFramebuffer[st],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let st=0,bt=J.length;st<bt;st++){const Mt=J[st],nt=n.get(Mt);let dt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(dt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,nt.__webglTexture),It(dt,Mt),ft(G.__webglFramebuffer,D,Mt,i.COLOR_ATTACHMENT0+st,dt,0),m(Mt)&&p(dt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(st=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,j.__webglTexture),It(st,w),w.mipmaps&&w.mipmaps.length>0)for(let bt=0;bt<w.mipmaps.length;bt++)ft(G.__webglFramebuffer[bt],D,w,i.COLOR_ATTACHMENT0,st,bt);else ft(G.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,st,0);m(w)&&p(st),e.unbindTexture()}D.depthBuffer&&Wt(D)}function Gt(D){const w=D.textures;for(let G=0,j=w.length;G<j;G++){const J=w[G];if(m(J)){const q=x(D),Tt=n.get(J).__webglTexture;e.bindTexture(q,Tt),p(q),e.unbindTexture()}}}const Pt=[],At=[];function vt(D){if(D.samples>0){if(gt(D)===!1){const w=D.textures,G=D.width,j=D.height;let J=i.COLOR_BUFFER_BIT;const q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(D),st=w.length>1;if(st)for(let Mt=0;Mt<w.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const bt=D.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Mt=0;Mt<w.length;Mt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);const nt=n.get(w[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,G,j,0,0,G,j,J,i.NEAREST),l===!0&&(Pt.length=0,At.length=0,Pt.push(i.COLOR_ATTACHMENT0+Mt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Pt.push(q),At.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let Mt=0;Mt<w.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);const nt=n.get(w[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function oe(D){return Math.min(s.maxSamples,D.samples)}function gt(D){const w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Bt(D){const w=o.render.frame;u.get(D)!==w&&(u.set(D,w),D.update())}function Ee(D,w){const G=D.colorSpace,j=D.format,J=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==Os&&G!==hi&&(Zt.getTransfer(G)===ne?(j!==sn||J!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function ge(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=xe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=gt}function ey(i,t){function e(n,s=hi){let r;const o=Zt.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===lu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vd)return i.BYTE;if(n===Gd)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===au)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===$d)return i.ALPHA;if(n===qd)return i.RGB;if(n===sn)return i.RGBA;if(n===Rr)return i.DEPTH_COMPONENT;if(n===Cr)return i.DEPTH_STENCIL;if(n===Yd)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===jd)return i.RG;if(n===uu)return i.RG_INTEGER;if(n===hu)return i.RGBA_INTEGER;if(n===Oo||n===zo||n===ko||n===Ho)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===lc||n===cc||n===uc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hc||n===dc||n===fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hc||n===dc)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc||n===bc||n===Sc||n===Mc||n===Ec||n===Tc||n===wc||n===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Cc||n===Pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rc)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===Ic||n===Lc||n===Uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new cf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ti({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new ba(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ry extends Yi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new sy,p={},x=e.getContextAttributes();let y=null,_=null;const b=[],E=[],T=new Rt;let A=null;const S=new nn;S.viewport=new re;const M=new nn;M.viewport=new re;const C=[S,M],P=new Sg;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=b[$];return K===void 0&&(K=new tl,b[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=b[$];return K===void 0&&(K=new tl,b[$]=K),K.getGripSpace()},this.getHand=function($){let K=b[$];return K===void 0&&(K=new tl,b[$]=K),K.getHandSpace()};function z($){const K=E.indexOf($.inputSource);if(K===-1)return;const ft=b[K];ft!==void 0&&(ft.update($.inputSource,$.frame,c||o),ft.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<b.length;$++){const K=E[$];K!==null&&(E[$]=null,b[$].disconnect(K))}L=null,N=null,m.reset();for(const $ in p)delete p[$];t.setRenderTarget(y),f=null,d=null,h=null,s=null,_=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,St=null,lt=null;x.depth&&(lt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=x.stencil?Cr:Rr,St=x.stencil?Ar:vi);const Wt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Xi(d.textureWidth,d.textureHeight,{format:sn,type:On,depthTexture:new lf(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ft={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Xi(f.framebufferWidth,f.framebufferHeight,{format:sn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y($){for(let K=0;K<$.removed.length;K++){const ft=$.removed[K],St=E.indexOf(ft);St>=0&&(E[St]=null,b[St].disconnect(ft))}for(let K=0;K<$.added.length;K++){const ft=$.added[K];let St=E.indexOf(ft);if(St===-1){for(let Wt=0;Wt<b.length;Wt++)if(Wt>=E.length){E.push(ft),St=Wt;break}else if(E[Wt]===null){E[Wt]=ft,St=Wt;break}if(St===-1)break}const lt=b[St];lt&&lt.connect(ft)}}const V=new I,Q=new I;function rt($,K,ft){V.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(ft.matrixWorld);const St=V.distanceTo(Q),lt=K.projectionMatrix.elements,Wt=ft.projectionMatrix.elements,xe=lt[14]/(lt[10]-1),U=lt[14]/(lt[10]+1),Gt=(lt[9]+1)/lt[5],Pt=(lt[9]-1)/lt[5],At=(lt[8]-1)/lt[0],vt=(Wt[8]+1)/Wt[0],oe=xe*At,gt=xe*vt,Bt=St/(-At+vt),Ee=Bt*-At;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ee),$.translateZ(Bt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),lt[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ge=xe+Bt,D=U+Bt,w=oe-Ee,G=gt+(St-Ee),j=Gt*U/D*ge,J=Pt*U/D*ge;$.projectionMatrix.makePerspective(w,G,j,J,ge,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pt($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let K=$.near,ft=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),P.near=M.near=S.near=K,P.far=M.far=S.far=ft,(L!==P.near||N!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,N=P.far),P.layers.mask=$.layers.mask|6,S.layers.mask=P.layers.mask&3,M.layers.mask=P.layers.mask&5;const St=$.parent,lt=P.cameras;pt(P,St);for(let Wt=0;Wt<lt.length;Wt++)pt(lt[Wt],St);lt.length===2?rt(P,S,M):P.projectionMatrix.copy(S.projectionMatrix),It($,P,St)};function It($,K,ft){ft===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(ft.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Pr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function($){return p[$]};let Ht=null;function Jt($,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const ft=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let St=!1;ft.length!==P.cameras.length&&(P.cameras.length=0,St=!0);for(let U=0;U<ft.length;U++){const Gt=ft[U];let Pt=null;if(f!==null)Pt=f.getViewport(Gt);else{const vt=h.getViewSubImage(d,Gt);Pt=vt.viewport,U===0&&(t.setRenderTargetTextures(_,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(_))}let At=C[U];At===void 0&&(At=new nn,At.layers.enable(U),At.viewport=new re,C[U]=At),At.matrix.fromArray(Gt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Gt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),U===0&&(P.matrix.copy(At.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),St===!0&&P.cameras.push(At)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const U=h.getDepthInformation(ft[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(lt&&lt.includes("camera-access")&&v){t.state.unbindTexture(),h=n.getBinding();for(let U=0;U<ft.length;U++){const Gt=ft[U].camera;if(Gt){let Pt=p[Gt];Pt||(Pt=new cf,p[Gt]=Pt);const At=h.getCameraImage(Gt);Pt.sourceTexture=At}}}}for(let ft=0;ft<b.length;ft++){const St=E[ft],lt=b[ft];St!==null&&lt!==void 0&&lt.update(St,K,c||o)}Ht&&Ht($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ft=new hf;Ft.setAnimationLoop(Jt),this.setAnimationLoop=function($){Ht=$},this.dispose=function(){}}}const Ci=new zn,oy=new jt;function ay(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,_=x.envMapRotation;y&&(m.envMap.value=y,Ci.copy(_),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(Ci)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ly(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function c(x,y){let _=s[x.id];_===void 0&&(g(x),_=u(x),s[x.id]=_,x.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(x,b);const E=t.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function u(x){const y=h();x.__bindingPointIndex=y;const _=i.createBuffer(),b=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],_=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,T=_.length;E<T;E++){const A=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,M=A.length;S<M;S++){const C=A[S];if(f(C,E,S,b)===!0){const P=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let z=0;z<L.length;z++){const H=L[z],Y=v(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,P+N,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,_,b){const E=x.value,T=y+"_"+_;if(b[T]===void 0)return typeof E=="number"||typeof E=="boolean"?b[T]=E:b[T]=E.clone(),!0;{const A=b[T];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return b[T]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(x){const y=x.uniforms;let _=0;const b=16;for(let T=0,A=y.length;T<A;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,C=S.length;M<C;M++){const P=S[M],L=Array.isArray(P.value)?P.value:[P.value];for(let N=0,z=L.length;N<z;N++){const H=L[N],Y=v(H),V=_%b,Q=V%Y.boundary,rt=V+Q;_+=Q,rt!==0&&b-rt<Y.storage&&(_+=b-rt),P.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=Y.storage}}}const E=_%b;return E>0&&(_+=b-E),x.__size=_,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class cy{constructor(t={}){const{canvas:e=Rm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let b=!1;this._outputColorSpace=dn;let E=0,T=0,A=null,S=-1,M=null;const C=new re,P=new re;let L=null;const N=new qt(0);let z=0,H=e.width,Y=e.height,V=1,Q=null,rt=null;const pt=new re(0,0,H,Y),It=new re(0,0,H,Y);let Ht=!1;const Jt=new zr;let Ft=!1,$=!1;const K=new jt,ft=new I,St=new re,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function xe(){return A===null?V:1}let U=n;function Gt(R,O){return e.getContext(R,O)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${va}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",tt,!1),U===null){const O="webgl2";if(U=Gt(O,R),U===null)throw Gt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Pt,At,vt,oe,gt,Bt,Ee,ge,D,w,G,j,J,q,Tt,st,bt,Mt,nt,dt,Lt,Et,ct,zt;function F(){Pt=new xv(U),Pt.init(),Et=new ey(U,Pt),At=new dv(U,Pt,t,Et),vt=new Jx(U,Pt),At.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),oe=new Sv(U),gt=new kx,Bt=new ty(U,Pt,vt,gt,At,Et,oe),Ee=new pv(_),ge=new vv(_),D=new Rg(U),ct=new uv(U,D),w=new yv(U,D,oe,ct),G=new Ev(U,w,D,oe),nt=new Mv(U,At,Bt),st=new fv(gt),j=new zx(_,Ee,ge,Pt,At,ct,st),J=new ay(_,gt),q=new Vx,Tt=new Yx(Pt),Mt=new cv(_,Ee,ge,vt,G,f,l),bt=new Kx(_,G,At),zt=new ly(U,oe,At,vt),dt=new hv(U,Pt,oe),Lt=new bv(U,Pt,oe),oe.programs=j.programs,_.capabilities=At,_.extensions=Pt,_.properties=gt,_.renderLists=q,_.shadowMap=bt,_.state=vt,_.info=oe}F();const it=new ry(_,U);this.xr=it,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=Pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(H,Y,!1))},this.getSize=function(R){return R.set(H,Y)},this.setSize=function(R,O,W=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,Y=O,e.width=Math.floor(R*V),e.height=Math.floor(O*V),W===!0&&(e.style.width=R+"px",e.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(H*V,Y*V).floor()},this.setDrawingBufferSize=function(R,O,W){H=R,Y=O,V=W,e.width=Math.floor(R*W),e.height=Math.floor(O*W),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,O,W,X){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,O,W,X),vt.viewport(C.copy(pt).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(It)},this.setScissor=function(R,O,W,X){R.isVector4?It.set(R.x,R.y,R.z,R.w):It.set(R,O,W,X),vt.scissor(P.copy(It).multiplyScalar(V).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(R){vt.setScissorTest(Ht=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){rt=R},this.getClearColor=function(R){return R.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(R=!0,O=!0,W=!0){let X=0;if(R){let k=!1;if(A!==null){const et=A.texture.format;k=et===hu||et===uu||et===ya}if(k){const et=A.texture.type,ht=et===On||et===vi||et===wr||et===Ar||et===lu||et===cu,xt=Mt.getClearColor(),mt=Mt.getClearAlpha(),Dt=xt.r,Ut=xt.g,wt=xt.b;ht?(g[0]=Dt,g[1]=Ut,g[2]=wt,g[3]=mt,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Dt,v[1]=Ut,v[2]=wt,v[3]=mt,U.clearBufferiv(U.COLOR,0,v))}else X|=U.COLOR_BUFFER_BIT}O&&(X|=U.DEPTH_BUFFER_BIT),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Mt.dispose(),q.dispose(),Tt.dispose(),gt.dispose(),Ee.dispose(),ge.dispose(),G.dispose(),ct.dispose(),zt.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",Rn),it.removeEventListener("sessionend",Uu),yi.stop()};function ot(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=oe.autoReset,O=bt.enabled,W=bt.autoUpdate,X=bt.needsUpdate,k=bt.type;F(),oe.autoReset=R,bt.enabled=O,bt.autoUpdate=W,bt.needsUpdate=X,bt.type=k}function tt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Z(R){const O=R.target;O.removeEventListener("dispose",Z),yt(O)}function yt(R){Ot(R),gt.remove(R)}function Ot(R){const O=gt.get(R).programs;O!==void 0&&(O.forEach(function(W){j.releaseProgram(W)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,W,X,k,et){O===null&&(O=lt);const ht=k.isMesh&&k.matrixWorld.determinant()<0,xt=cp(R,O,W,X,k);vt.setMaterial(X,ht);let mt=W.index,Dt=1;if(X.wireframe===!0){if(mt=w.getWireframeAttribute(W),mt===void 0)return;Dt=2}const Ut=W.drawRange,wt=W.attributes.position;let Xt=Ut.start*Dt,ee=(Ut.start+Ut.count)*Dt;et!==null&&(Xt=Math.max(Xt,et.start*Dt),ee=Math.min(ee,(et.start+et.count)*Dt)),mt!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,mt.count)):wt!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,wt.count));const pe=ee-Xt;if(pe<0||pe===1/0)return;ct.setup(k,X,xt,W,mt);let ce,ae=dt;if(mt!==null&&(ce=D.get(mt),ae=Lt,ae.setIndex(ce)),k.isMesh)X.wireframe===!0?(vt.setLineWidth(X.wireframeLinewidth*xe()),ae.setMode(U.LINES)):ae.setMode(U.TRIANGLES);else if(k.isLine){let Ct=X.linewidth;Ct===void 0&&(Ct=1),vt.setLineWidth(Ct*xe()),k.isLineSegments?ae.setMode(U.LINES):k.isLineLoop?ae.setMode(U.LINE_LOOP):ae.setMode(U.LINE_STRIP)}else k.isPoints?ae.setMode(U.POINTS):k.isSprite&&ae.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ct=k._multiDrawStarts,de=k._multiDrawCounts,Qt=k._multiDrawCount,Qe=mt?D.get(mt).bytesPerElement:1,Ki=gt.get(X).currentProgram.getUniforms();for(let Je=0;Je<Qt;Je++)Ki.setValue(U,"_gl_DrawID",Je),ae.render(Ct[Je]/Qe,de[Je])}else if(k.isInstancedMesh)ae.renderInstances(Xt,pe,k.count);else if(W.isInstancedBufferGeometry){const Ct=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,de=Math.min(W.instanceCount,Ct);ae.renderInstances(Xt,pe,de)}else ae.render(Xt,pe)};function le(R,O,W){R.transparent===!0&&R.side===Mn&&R.forceSinglePass===!1?(R.side=ke,R.needsUpdate=!0,Wr(R,O,W),R.side=Bn,R.needsUpdate=!0,Wr(R,O,W),R.side=Mn):Wr(R,O,W)}this.compile=function(R,O,W=null){W===null&&(W=R),p=Tt.get(W),p.init(O),y.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),R!==W&&R.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const X=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const et=k.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const xt=et[ht];le(xt,W,k),X.add(xt)}else le(et,W,k),X.add(et)}),p=y.pop(),X},this.compileAsync=function(R,O,W=null){const X=this.compile(R,O,W);return new Promise(k=>{function et(){if(X.forEach(function(ht){gt.get(ht).currentProgram.isReady()&&X.delete(ht)}),X.size===0){k(R);return}setTimeout(et,10)}Pt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let te=null;function Hn(R){te&&te(R)}function Rn(){yi.stop()}function Uu(){yi.start()}const yi=new hf;yi.setAnimationLoop(Hn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(R){te=R,it.setAnimationLoop(R),R===null?yi.stop():yi.start()},it.addEventListener("sessionstart",Rn),it.addEventListener("sessionend",Uu),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(O),O=it.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,O,A),p=Tt.get(R,y.length),p.init(O),y.push(p),K.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Jt.setFromProjectionMatrix(K,wn,O.reversedDepth),$=this.localClippingEnabled,Ft=st.init(this.clippingPlanes,$),m=q.get(R,x.length),m.init(),x.push(m),it.enabled===!0&&it.isPresenting===!0){const et=_.xr.getDepthSensingMesh();et!==null&&Da(et,O,-1/0,_.sortObjects)}Da(R,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,rt),Wt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Wt&&Mt.addToRenderList(m,R),this.info.render.frame++,Ft===!0&&st.beginShadows();const W=p.state.shadowsArray;bt.render(W,R,O),Ft===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(p.setupLights(),O.isArrayCamera){const et=O.cameras;if(k.length>0)for(let ht=0,xt=et.length;ht<xt;ht++){const mt=et[ht];Fu(X,k,R,mt)}Wt&&Mt.render(R);for(let ht=0,xt=et.length;ht<xt;ht++){const mt=et[ht];Nu(m,R,mt,mt.viewport)}}else k.length>0&&Fu(X,k,R,O),Wt&&Mt.render(R),Nu(m,R,O);A!==null&&T===0&&(Bt.updateMultisampleRenderTarget(A),Bt.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(_,R,O),ct.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],Ft===!0&&st.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Da(R,O,W,X){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Jt.intersectsSprite(R)){X&&St.setFromMatrixPosition(R.matrixWorld).applyMatrix4(K);const ht=G.update(R),xt=R.material;xt.visible&&m.push(R,ht,xt,W,St.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Jt.intersectsObject(R))){const ht=G.update(R),xt=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),St.copy(R.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),St.copy(ht.boundingSphere.center)),St.applyMatrix4(R.matrixWorld).applyMatrix4(K)),Array.isArray(xt)){const mt=ht.groups;for(let Dt=0,Ut=mt.length;Dt<Ut;Dt++){const wt=mt[Dt],Xt=xt[wt.materialIndex];Xt&&Xt.visible&&m.push(R,ht,Xt,W,St.z,wt)}}else xt.visible&&m.push(R,ht,xt,W,St.z,null)}}const et=R.children;for(let ht=0,xt=et.length;ht<xt;ht++)Da(et[ht],O,W,X)}function Nu(R,O,W,X){const k=R.opaque,et=R.transmissive,ht=R.transparent;p.setupLightsView(W),Ft===!0&&st.setGlobalState(_.clippingPlanes,W),X&&vt.viewport(C.copy(X)),k.length>0&&Gr(k,O,W),et.length>0&&Gr(et,O,W),ht.length>0&&Gr(ht,O,W),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Fu(R,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Xi(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Fr:On,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const et=p.state.transmissionRenderTarget[X.id],ht=X.viewport||C;et.setSize(ht.z*_.transmissionResolutionScale,ht.w*_.transmissionResolutionScale);const xt=_.getRenderTarget(),mt=_.getActiveCubeFace(),Dt=_.getActiveMipmapLevel();_.setRenderTarget(et),_.getClearColor(N),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),Wt&&Mt.render(W);const Ut=_.toneMapping;_.toneMapping=_i;const wt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Ft===!0&&st.setGlobalState(_.clippingPlanes,X),Gr(R,W,X),Bt.updateMultisampleRenderTarget(et),Bt.updateRenderTargetMipmap(et),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ee=0,pe=O.length;ee<pe;ee++){const ce=O[ee],ae=ce.object,Ct=ce.geometry,de=ce.material,Qt=ce.group;if(de.side===Mn&&ae.layers.test(X.layers)){const Qe=de.side;de.side=ke,de.needsUpdate=!0,Bu(ae,W,X,Ct,de,Qt),de.side=Qe,de.needsUpdate=!0,Xt=!0}}Xt===!0&&(Bt.updateMultisampleRenderTarget(et),Bt.updateRenderTargetMipmap(et))}_.setRenderTarget(xt,mt,Dt),_.setClearColor(N,z),wt!==void 0&&(X.viewport=wt),_.toneMapping=Ut}function Gr(R,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let k=0,et=R.length;k<et;k++){const ht=R[k],xt=ht.object,mt=ht.geometry,Dt=ht.group;let Ut=ht.material;Ut.allowOverride===!0&&X!==null&&(Ut=X),xt.layers.test(W.layers)&&Bu(xt,O,W,mt,Ut,Dt)}}function Bu(R,O,W,X,k,et){R.onBeforeRender(_,O,W,X,k,et),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(_,O,W,X,R,et),k.transparent===!0&&k.side===Mn&&k.forceSinglePass===!1?(k.side=ke,k.needsUpdate=!0,_.renderBufferDirect(W,O,X,k,R,et),k.side=Bn,k.needsUpdate=!0,_.renderBufferDirect(W,O,X,k,R,et),k.side=Mn):_.renderBufferDirect(W,O,X,k,R,et),R.onAfterRender(_,O,W,X,k,et)}function Wr(R,O,W){O.isScene!==!0&&(O=lt);const X=gt.get(R),k=p.state.lights,et=p.state.shadowsArray,ht=k.state.version,xt=j.getParameters(R,k.state,et,O,W),mt=j.getProgramCacheKey(xt);let Dt=X.programs;X.environment=R.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(R.isMeshStandardMaterial?ge:Ee).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Dt===void 0&&(R.addEventListener("dispose",Z),Dt=new Map,X.programs=Dt);let Ut=Dt.get(mt);if(Ut!==void 0){if(X.currentProgram===Ut&&X.lightsStateVersion===ht)return zu(R,xt),Ut}else xt.uniforms=j.getUniforms(R),R.onBeforeCompile(xt,_),Ut=j.acquireProgram(xt,mt),Dt.set(mt,Ut),X.uniforms=xt.uniforms;const wt=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(wt.clippingPlanes=st.uniform),zu(R,xt),X.needsLights=hp(R),X.lightsStateVersion=ht,X.needsLights&&(wt.ambientLightColor.value=k.state.ambient,wt.lightProbe.value=k.state.probe,wt.directionalLights.value=k.state.directional,wt.directionalLightShadows.value=k.state.directionalShadow,wt.spotLights.value=k.state.spot,wt.spotLightShadows.value=k.state.spotShadow,wt.rectAreaLights.value=k.state.rectArea,wt.ltc_1.value=k.state.rectAreaLTC1,wt.ltc_2.value=k.state.rectAreaLTC2,wt.pointLights.value=k.state.point,wt.pointLightShadows.value=k.state.pointShadow,wt.hemisphereLights.value=k.state.hemi,wt.directionalShadowMap.value=k.state.directionalShadowMap,wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,wt.spotShadowMap.value=k.state.spotShadowMap,wt.spotLightMatrix.value=k.state.spotLightMatrix,wt.spotLightMap.value=k.state.spotLightMap,wt.pointShadowMap.value=k.state.pointShadowMap,wt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ut,X.uniformsList=null,Ut}function Ou(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=Vo.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function zu(R,O){const W=gt.get(R);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function cp(R,O,W,X,k){O.isScene!==!0&&(O=lt),Bt.resetTextureUnits();const et=O.fog,ht=X.isMeshStandardMaterial?O.environment:null,xt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Os,mt=(X.isMeshStandardMaterial?ge:Ee).get(X.envMap||ht),Dt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ut=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),wt=!!W.morphAttributes.position,Xt=!!W.morphAttributes.normal,ee=!!W.morphAttributes.color;let pe=_i;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pe=_.toneMapping);const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=ce!==void 0?ce.length:0,Ct=gt.get(X),de=p.state.lights;if(Ft===!0&&($===!0||R!==M)){const Be=R===M&&X.id===S;st.setState(X,R,Be)}let Qt=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==de.state.version||Ct.outputColorSpace!==xt||k.isBatchedMesh&&Ct.batching===!1||!k.isBatchedMesh&&Ct.batching===!0||k.isBatchedMesh&&Ct.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ct.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ct.instancing===!1||!k.isInstancedMesh&&Ct.instancing===!0||k.isSkinnedMesh&&Ct.skinning===!1||!k.isSkinnedMesh&&Ct.skinning===!0||k.isInstancedMesh&&Ct.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ct.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ct.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ct.instancingMorph===!1&&k.morphTexture!==null||Ct.envMap!==mt||X.fog===!0&&Ct.fog!==et||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==st.numPlanes||Ct.numIntersection!==st.numIntersection)||Ct.vertexAlphas!==Dt||Ct.vertexTangents!==Ut||Ct.morphTargets!==wt||Ct.morphNormals!==Xt||Ct.morphColors!==ee||Ct.toneMapping!==pe||Ct.morphTargetsCount!==ae)&&(Qt=!0):(Qt=!0,Ct.__version=X.version);let Qe=Ct.currentProgram;Qt===!0&&(Qe=Wr(X,O,k));let Ki=!1,Je=!1,qs=!1;const fe=Qe.getUniforms(),ln=Ct.uniforms;if(vt.useProgram(Qe.program)&&(Ki=!0,Je=!0,qs=!0),X.id!==S&&(S=X.id,Je=!0),Ki||M!==R){vt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),fe.setValue(U,"projectionMatrix",R.projectionMatrix),fe.setValue(U,"viewMatrix",R.matrixWorldInverse);const Xe=fe.map.cameraPosition;Xe!==void 0&&Xe.setValue(U,ft.setFromMatrixPosition(R.matrixWorld)),At.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&fe.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Je=!0,qs=!0)}if(k.isSkinnedMesh){fe.setOptional(U,k,"bindMatrix"),fe.setOptional(U,k,"bindMatrixInverse");const Be=k.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),fe.setValue(U,"boneTexture",Be.boneTexture,Bt))}k.isBatchedMesh&&(fe.setOptional(U,k,"batchingTexture"),fe.setValue(U,"batchingTexture",k._matricesTexture,Bt),fe.setOptional(U,k,"batchingIdTexture"),fe.setValue(U,"batchingIdTexture",k._indirectTexture,Bt),fe.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&fe.setValue(U,"batchingColorTexture",k._colorsTexture,Bt));const cn=W.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&nt.update(k,W,Qe),(Je||Ct.receiveShadow!==k.receiveShadow)&&(Ct.receiveShadow=k.receiveShadow,fe.setValue(U,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ln.envMap.value=mt,ln.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(ln.envMapIntensity.value=O.environmentIntensity),Je&&(fe.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&up(ln,qs),et&&X.fog===!0&&J.refreshFogUniforms(ln,et),J.refreshMaterialUniforms(ln,X,V,Y,p.state.transmissionRenderTarget[R.id]),Vo.upload(U,Ou(Ct),ln,Bt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Vo.upload(U,Ou(Ct),ln,Bt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&fe.setValue(U,"center",k.center),fe.setValue(U,"modelViewMatrix",k.modelViewMatrix),fe.setValue(U,"normalMatrix",k.normalMatrix),fe.setValue(U,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Be=X.uniformsGroups;for(let Xe=0,Ia=Be.length;Xe<Ia;Xe++){const bi=Be[Xe];zt.update(bi,Qe),zt.bind(bi,Qe)}}return Qe}function up(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function hp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,O,W){const X=gt.get(R);X.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),gt.get(R.texture).__webglTexture=O,gt.get(R.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,O){const W=gt.get(R);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const dp=U.createFramebuffer();this.setRenderTarget=function(R,O=0,W=0){A=R,E=O,T=W;let X=!0,k=null,et=!1,ht=!1;if(R){const mt=gt.get(R);if(mt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(mt.__webglFramebuffer===void 0)Bt.setupRenderTarget(R);else if(mt.__hasExternalTextures)Bt.rebindTextures(R,gt.get(R.texture).__webglTexture,gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const wt=R.depthTexture;if(mt.__boundDepthTexture!==wt){if(wt!==null&&gt.has(wt)&&(R.width!==wt.image.width||R.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(R)}}const Dt=R.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ht=!0);const Ut=gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ut[O])?k=Ut[O][W]:k=Ut[O],et=!0):R.samples>0&&Bt.useMultisampledRTT(R)===!1?k=gt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ut)?k=Ut[W]:k=Ut,C.copy(R.viewport),P.copy(R.scissor),L=R.scissorTest}else C.copy(pt).multiplyScalar(V).floor(),P.copy(It).multiplyScalar(V).floor(),L=Ht;if(W!==0&&(k=dp),vt.bindFramebuffer(U.FRAMEBUFFER,k)&&X&&vt.drawBuffers(R,k),vt.viewport(C),vt.scissor(P),vt.setScissorTest(L),et){const mt=gt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,mt.__webglTexture,W)}else if(ht){const mt=O;for(let Dt=0;Dt<R.textures.length;Dt++){const Ut=gt.get(R.textures[Dt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Dt,Ut.__webglTexture,W,mt)}}else if(R!==null&&W!==0){const mt=gt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mt.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(R,O,W,X,k,et,ht,xt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ht!==void 0&&(mt=mt[ht]),mt){vt.bindFramebuffer(U.FRAMEBUFFER,mt);try{const Dt=R.textures[xt],Ut=Dt.format,wt=Dt.type;if(!At.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-X&&W>=0&&W<=R.height-k&&(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt),U.readPixels(O,W,X,k,Et.convert(Ut),Et.convert(wt),et))}finally{const Dt=A!==null?gt.get(A).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(R,O,W,X,k,et,ht,xt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ht!==void 0&&(mt=mt[ht]),mt)if(O>=0&&O<=R.width-X&&W>=0&&W<=R.height-k){vt.bindFramebuffer(U.FRAMEBUFFER,mt);const Dt=R.textures[xt],Ut=Dt.format,wt=Dt.type;if(!At.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Xt),U.bufferData(U.PIXEL_PACK_BUFFER,et.byteLength,U.STREAM_READ),R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt),U.readPixels(O,W,X,k,Et.convert(Ut),Et.convert(wt),0);const ee=A!==null?gt.get(A).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,ee);const pe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Cm(U,pe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,et),U.deleteBuffer(Xt),U.deleteSync(pe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,O=null,W=0){const X=Math.pow(2,-W),k=Math.floor(R.image.width*X),et=Math.floor(R.image.height*X),ht=O!==null?O.x:0,xt=O!==null?O.y:0;Bt.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,ht,xt,k,et),vt.unbindTexture()};const fp=U.createFramebuffer(),pp=U.createFramebuffer();this.copyTextureToTexture=function(R,O,W=null,X=null,k=0,et=null){et===null&&(k!==0?(Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=k,k=0):et=0);let ht,xt,mt,Dt,Ut,wt,Xt,ee,pe;const ce=R.isCompressedTexture?R.mipmaps[et]:R.image;if(W!==null)ht=W.max.x-W.min.x,xt=W.max.y-W.min.y,mt=W.isBox3?W.max.z-W.min.z:1,Dt=W.min.x,Ut=W.min.y,wt=W.isBox3?W.min.z:0;else{const cn=Math.pow(2,-k);ht=Math.floor(ce.width*cn),xt=Math.floor(ce.height*cn),R.isDataArrayTexture?mt=ce.depth:R.isData3DTexture?mt=Math.floor(ce.depth*cn):mt=1,Dt=0,Ut=0,wt=0}X!==null?(Xt=X.x,ee=X.y,pe=X.z):(Xt=0,ee=0,pe=0);const ae=Et.convert(O.format),Ct=Et.convert(O.type);let de;O.isData3DTexture?(Bt.setTexture3D(O,0),de=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Bt.setTexture2DArray(O,0),de=U.TEXTURE_2D_ARRAY):(Bt.setTexture2D(O,0),de=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Qt=U.getParameter(U.UNPACK_ROW_LENGTH),Qe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ki=U.getParameter(U.UNPACK_SKIP_PIXELS),Je=U.getParameter(U.UNPACK_SKIP_ROWS),qs=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ce.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,wt);const fe=R.isDataArrayTexture||R.isData3DTexture,ln=O.isDataArrayTexture||O.isData3DTexture;if(R.isDepthTexture){const cn=gt.get(R),Be=gt.get(O),Xe=gt.get(cn.__renderTarget),Ia=gt.get(Be.__renderTarget);vt.bindFramebuffer(U.READ_FRAMEBUFFER,Xe.__webglFramebuffer),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ia.__webglFramebuffer);for(let bi=0;bi<mt;bi++)fe&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gt.get(R).__webglTexture,k,wt+bi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gt.get(O).__webglTexture,et,pe+bi)),U.blitFramebuffer(Dt,Ut,ht,xt,Xt,ee,ht,xt,U.DEPTH_BUFFER_BIT,U.NEAREST);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||R.isRenderTargetTexture||gt.has(R)){const cn=gt.get(R),Be=gt.get(O);vt.bindFramebuffer(U.READ_FRAMEBUFFER,fp),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,pp);for(let Xe=0;Xe<mt;Xe++)fe?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,cn.__webglTexture,k,wt+Xe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,cn.__webglTexture,k),ln?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Be.__webglTexture,et,pe+Xe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Be.__webglTexture,et),k!==0?U.blitFramebuffer(Dt,Ut,ht,xt,Xt,ee,ht,xt,U.COLOR_BUFFER_BIT,U.NEAREST):ln?U.copyTexSubImage3D(de,et,Xt,ee,pe+Xe,Dt,Ut,ht,xt):U.copyTexSubImage2D(de,et,Xt,ee,Dt,Ut,ht,xt);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ln?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(de,et,Xt,ee,pe,ht,xt,mt,ae,Ct,ce.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(de,et,Xt,ee,pe,ht,xt,mt,ae,ce.data):U.texSubImage3D(de,et,Xt,ee,pe,ht,xt,mt,ae,Ct,ce):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,et,Xt,ee,ht,xt,ae,Ct,ce.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,et,Xt,ee,ce.width,ce.height,ae,ce.data):U.texSubImage2D(U.TEXTURE_2D,et,Xt,ee,ht,xt,ae,Ct,ce);U.pixelStorei(U.UNPACK_ROW_LENGTH,Qt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ki),U.pixelStorei(U.UNPACK_SKIP_ROWS,Je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qs),et===0&&O.generateMipmaps&&U.generateMipmap(de),vt.unbindTexture()},this.initRenderTarget=function(R){gt.get(R).__webglFramebuffer===void 0&&Bt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Bt.setTextureCube(R,0):R.isData3DTexture?Bt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Bt.setTexture2DArray(R,0):Bt.setTexture2D(R,0),vt.unbindTexture()},this.resetState=function(){E=0,T=0,A=null,vt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const jh={type:"change"},Su={type:"start"},gf={type:"end"},vo=new Br,Zh=new Ln,uy=Math.cos(70*fu.DEG2RAD),ye=new I,qe=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ml=1e-6;class hy extends wg{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Wi,this._lastTargetPosition=new I,this._quat=new Wi().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sh,this._sphericalDelta=new Sh,this._scale=1,this._panOffset=new I,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new I,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fy.bind(this),this._onPointerDown=dy.bind(this),this._onPointerUp=py.bind(this),this._onContextMenu=by.bind(this),this._onMouseWheel=_y.bind(this),this._onKeyDown=vy.bind(this),this._onTouchStart=xy.bind(this),this._onTouchMove=yy.bind(this),this._onMouseDown=my.bind(this),this._onMouseMove=gy.bind(this),this._interceptControlDown=Sy.bind(this),this._interceptControlUp=My.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jh),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=qe:n>Math.PI&&(n-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ye.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vo.origin.copy(this.object.position),vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vo.direction))<uy?this.object.lookAt(this.target):(Zh.setFromNormalAndCoplanarPoint(this.object.up,this.target),vo.intersectPlane(Zh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ml||this._lastTargetPosition.distanceToSquared(this.target)>ml?(this.dispatchEvent(jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ye.copy(s).sub(this.target);let r=ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function dy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function fy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function py(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gf),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function my(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case Ps.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case Ps.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Su)}function gy(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _y(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Su),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gf))}function vy(i){this.enabled!==!1&&this._handleKeyDown(i)}function xy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Su)}function yy(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function by(i){this.enabled!==!1&&i.preventDefault()}function Sy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function My(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var vr=function(){var i=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(u){u.preventDefault(),n(++i%t.children.length)},!1);function e(u){return t.appendChild(u.dom),u}function n(u){for(var h=0;h<t.children.length;h++)t.children[h].style.display=h===u?"block":"none";i=u}var s=(performance||Date).now(),r=s,o=0,a=e(new vr.Panel("FPS","#0ff","#002")),l=e(new vr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new vr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-s,200),u>=r+1e3&&(a.update(o*1e3/(u-r),100),r=u,o=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){s=this.end()},domElement:t,setMode:n}};vr.Panel=function(i,t,e){var n=1/0,s=0,r=Math.round,o=r(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,h=3*o,d=15*o,f=74*o,g=30*o,v=document.createElement("canvas");v.width=a,v.height=l,v.style.cssText="width:80px;height:48px";var m=v.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=e,m.fillRect(0,0,a,l),m.fillStyle=t,m.fillText(i,c,u),m.fillRect(h,d,f,g),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(h,d,f,g),{dom:v,update:function(p,x){n=Math.min(n,p),s=Math.max(s,p),m.fillStyle=e,m.globalAlpha=1,m.fillRect(0,0,a,d),m.fillStyle=t,m.fillText(r(p)+" "+i+" ("+r(n)+"-"+r(s)+")",c,u),m.drawImage(v,h+o,d,f-o,g,h,d,f-o,g),m.fillRect(h+f-o,d,o,g),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(h+f-o,d,o,r((1-p/x)*g))}}};const _f=0,Ey=1,Ty=2,Kh=2,gl=1.25,Qh=1,xr=32,Ma=65535,wy=Math.pow(2,-24),_l=Symbol("SKIP_GENERATION");function Ay(i){return i.index?i.index.count:i.attributes.position.count}function $s(i){return Ay(i)/3}function Ry(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Cy(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Ry(e,n);i.setIndex(new Ze(s,1));for(let r=0;r<e;r++)s[r]=r}}function vf(i,t){const e=$s(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,o=Math.max(0,s),a=Math.min(e,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function xf(i,t){if(!i.groups||!i.groups.length)return vf(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,o=(s.start+s.count)/3;for(const l of i.groups){const c=l.start/3,u=(l.start+l.count)/3;n.add(Math.max(r,c)),n.add(Math.min(o,u))}const a=Array.from(n.values()).sort((l,c)=>l-c);for(let l=0;l<a.length-1;l++){const c=a[l],u=a[l+1];e.push({offset:Math.floor(c),count:Math.floor(u-c)})}return e}function Py(i,t){const e=$s(i),n=xf(i,t).sort((o,a)=>o.offset-a.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:o})=>r+=o),e!==r}function vl(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,h=1/0,d=1/0,f=1/0,g=-1/0,v=-1/0,m=-1/0;for(let p=t*6,x=(t+e)*6;p<x;p+=6){const y=i[p+0],_=i[p+1],b=y-_,E=y+_;b<r&&(r=b),E>l&&(l=E),y<h&&(h=y),y>g&&(g=y);const T=i[p+2],A=i[p+3],S=T-A,M=T+A;S<o&&(o=S),M>c&&(c=M),T<d&&(d=T),T>v&&(v=T);const C=i[p+4],P=i[p+5],L=C-P,N=C+P;L<a&&(a=L),N>u&&(u=N),C<f&&(f=C),C>m&&(m=C)}n[0]=r,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,s[0]=h,s[1]=d,s[2]=f,s[3]=g,s[4]=v,s[5]=m}function Dy(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,o=$s(i),a=s.normalized;let l;t===null?(l=new Float32Array(o*6),e=0,n=o):(l=t,e=e||0,n=n||o);const c=s.array,u=s.offset||0;let h=3;s.isInterleavedBufferAttribute&&(h=s.data.stride);const d=["getX","getY","getZ"];for(let f=e;f<e+n;f++){const g=f*3,v=f*6;let m=g+0,p=g+1,x=g+2;r&&(m=r[m],p=r[p],x=r[x]),a||(m=m*h+u,p=p*h+u,x=x*h+u);for(let y=0;y<3;y++){let _,b,E;a?(_=s[d[y]](m),b=s[d[y]](p),E=s[d[y]](x)):(_=c[m+y],b=c[p+y],E=c[x+y]);let T=_;b<T&&(T=b),E<T&&(T=E);let A=_;b>A&&(A=b),E>A&&(A=E);const S=(A-T)/2,M=y*2;l[v+M+0]=T+S,l[v+M+1]=S+(Math.abs(T)+S)*wy}}return l}function me(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Jh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function td(i,t){t.set(i)}function ed(i,t,e){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function xo(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function er(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const Yn=32,Iy=(i,t)=>i.candidate-t.candidate,li=new Array(Yn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),yo=new Float32Array(6);function Ly(i,t,e,n,s,r){let o=-1,a=0;if(r===_f)o=Jh(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===Ey)o=Jh(i),o!==-1&&(a=Uy(e,n,s,o));else if(r===Ty){const l=er(i);let c=gl*s;const u=n*6,h=(n+s)*6;for(let d=0;d<3;d++){const f=t[d],m=(t[d+3]-f)/Yn;if(s<Yn/4){const p=[...li];p.length=s;let x=0;for(let _=u;_<h;_+=6,x++){const b=p[x];b.candidate=e[_+2*d],b.count=0;const{bounds:E,leftCacheBounds:T,rightCacheBounds:A}=b;for(let S=0;S<3;S++)A[S]=1/0,A[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0,E[S]=1/0,E[S+3]=-1/0;xo(_,e,E)}p.sort(Iy);let y=s;for(let _=0;_<y;_++){const b=p[_];for(;_+1<y&&p[_+1].candidate===b.candidate;)p.splice(_+1,1),y--}for(let _=u;_<h;_+=6){const b=e[_+2*d];for(let E=0;E<y;E++){const T=p[E];b>=T.candidate?xo(_,e,T.rightCacheBounds):(xo(_,e,T.leftCacheBounds),T.count++)}}for(let _=0;_<y;_++){const b=p[_],E=b.count,T=s-b.count,A=b.leftCacheBounds,S=b.rightCacheBounds;let M=0;E!==0&&(M=er(A)/l);let C=0;T!==0&&(C=er(S)/l);const P=Qh+gl*(M*E+C*T);P<c&&(o=d,c=P,a=b.candidate)}}else{for(let y=0;y<Yn;y++){const _=li[y];_.count=0,_.candidate=f+m+y*m;const b=_.bounds;for(let E=0;E<3;E++)b[E]=1/0,b[E+3]=-1/0}for(let y=u;y<h;y+=6){let E=~~((e[y+2*d]-f)/m);E>=Yn&&(E=Yn-1);const T=li[E];T.count++,xo(y,e,T.bounds)}const p=li[Yn-1];td(p.bounds,p.rightCacheBounds);for(let y=Yn-2;y>=0;y--){const _=li[y],b=li[y+1];ed(_.bounds,b.rightCacheBounds,_.rightCacheBounds)}let x=0;for(let y=0;y<Yn-1;y++){const _=li[y],b=_.count,E=_.bounds,A=li[y+1].rightCacheBounds;b!==0&&(x===0?td(E,yo):ed(E,yo,yo)),x+=b;let S=0,M=0;x!==0&&(S=er(yo)/l);const C=s-x;C!==0&&(M=er(A)/l);const P=Qh+gl*(S*x+M*C);P<c&&(o=d,c=P,a=_.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function Uy(i,t,e,n){let s=0;for(let r=t,o=t+e;r<o;r++)s+=i[r*6+n*2];return s/e}class xl{constructor(){this.boundingData=new Float32Array(6)}}function Ny(i,t,e,n,s,r){let o=n,a=n+s-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){for(let u=0;u<3;u++){let h=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=h}for(let u=0;u<6;u++){let h=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=h}o++,a--}else return o}}function Fy(i,t,e,n,s,r){let o=n,a=n+s-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){let u=i[o];i[o]=i[a],i[a]=u;for(let h=0;h<6;h++){let d=e[o*6+h];e[o*6+h]=e[a*6+h],e[a*6+h]=d}o++,a--}else return o}}function je(i,t){return t[i+15]===65535}function rn(i,t){return t[i+6]}function mn(i,t){return t[i+14]}function gn(i){return i+8}function _n(i,t){return t[i+6]}function yf(i,t){return t[i+7]}let bf,pr,Go,Sf;const By=Math.pow(2,32);function Bc(i){return"count"in i?1:1+Bc(i.left)+Bc(i.right)}function Oy(i,t,e){return bf=new Float32Array(e),pr=new Uint32Array(e),Go=new Uint16Array(e),Sf=new Uint8Array(e),Oc(i,t)}function Oc(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)bf[e+o]=r[o];if(s)if(t.buffer){const o=t.buffer;Sf.set(new Uint8Array(o),i);for(let a=i,l=i+o.byteLength;a<l;a+=xr){const c=a/2;je(c,Go)||(pr[a/4+6]+=e)}return i+o.byteLength}else{const o=t.offset,a=t.count;return pr[e+6]=o,Go[n+14]=a,Go[n+15]=Ma,i+xr}else{const o=t.left,a=t.right,l=t.splitAxis;let c;if(c=Oc(i+xr,o),c/4>By)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return pr[e+6]=c/4,c=Oc(c,a),pr[e+7]=l,c}}function zy(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function ky(i,t,e,n,s){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:l,onProgress:c,indirect:u}=s,h=i._indirectBuffer,d=i.geometry,f=d.index?d.index.array:null,g=u?Fy:Ny,v=$s(d),m=new Float32Array(6);let p=!1;const x=new xl;return vl(t,e,n,x.boundingData,m),_(x,e,n,m),x;function y(b){c&&c(b/v)}function _(b,E,T,A=null,S=0){if(!p&&S>=r&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),T<=a||S>=r)return y(E+T),b.offset=E,b.count=T,b;const M=Ly(b.boundingData,A,t,E,T,l);if(M.axis===-1)return y(E+T),b.offset=E,b.count=T,b;const C=g(h,f,t,E,T,M);if(C===E||C===E+T)y(E+T),b.offset=E,b.count=T;else{b.splitAxis=M.axis;const P=new xl,L=E,N=C-E;b.left=P,vl(t,L,N,P.boundingData,m),_(P,L,N,m,S+1);const z=new xl,H=C,Y=T-N;b.right=z,vl(t,H,Y,z.boundingData,m),_(z,H,Y,m,S+1)}return b}}function Hy(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=zy(e,t.useSharedArrayBuffer),Py(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Cy(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Dy(e),r=t.indirect?vf(e,t.range):xf(e,t.range);i._roots=r.map(o=>{const a=ky(i,s,o.offset,o.count,t),l=Bc(a),c=new n(xr*l);return Oy(0,a,c),c})}class ei{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const l=t[r][e];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],l=t.dot(a);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}ei.prototype.setFromBox=(function(){const i=new I;return function(e,n){const s=n.min,r=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*u+r.z*(1-u);const h=e.dot(i);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();const Vy=(function(){const i=new I,t=new I,e=new I;return function(s,r,o){const a=s.start,l=i,c=r.start,u=t;e.subVectors(a,c),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const h=e.dot(u),d=u.dot(l),f=u.dot(u),g=e.dot(l),m=l.dot(l)*f-d*d;let p,x;m!==0?p=(h*d-g*f)/m:p=0,x=(h+p*d)/f,o.x=p,o.y=x}})(),Mu=(function(){const i=new Rt,t=new I,e=new I;return function(s,r,o,a){Vy(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=s.start:u=s.end;let h;c<0?h=r.start:h=r.end;const d=t,f=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),d.distanceToSquared(h)<=f.distanceToSquared(u)){o.copy(d),a.copy(h);return}else{o.copy(u),a.copy(f);return}}}})(),Gy=(function(){const i=new I,t=new I,e=new Ln,n=new Jn;return function(r,o){const{radius:a,center:l}=r,{a:c,b:u,c:h}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const v=o.getPlane(e);if(Math.abs(v.distanceToPoint(l))<=a){const p=v.projectPoint(l,t);if(o.containsPoint(p))return!0}return!1}})(),Wy=1e-15;function yl(i){return Math.abs(i)<Wy}class An extends Pe{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new ei),this.points=[this.a,this.b,this.c],this.sphere=new Fn,this.plane=new Ln,this.needsUpdate=!0}intersectsSphere(t){return Gy(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);const c=r[1],u=o[1];c.subVectors(t,e),u.setFromPoints(c,s);const h=r[2],d=o[2];h.subVectors(e,n),d.setFromPoints(h,s);const f=r[3],g=o[3];f.subVectors(n,t),g.setFromPoints(f,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}An.prototype.closestPointToSegment=(function(){const i=new I,t=new I,e=new Jn;return function(s,r=null,o=null){const{start:a,end:l}=s,c=this.points;let u,h=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;e.start.copy(c[d]),e.end.copy(c[f]),Mu(e,s,i,t),u=i.distanceToSquared(t),u<h&&(h=u,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),u=l.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(l)),Math.sqrt(h)}})();An.prototype.intersectsTriangle=(function(){const i=new An,t=new Array(3),e=new Array(3),n=new ei,s=new ei,r=new I,o=new I,a=new I,l=new I,c=new I,u=new Jn,h=new Jn,d=new Jn,f=new I;function g(v,m,p){const x=v.points;let y=0,_=-1;for(let b=0;b<3;b++){const{start:E,end:T}=u;E.copy(x[b]),T.copy(x[(b+1)%3]),u.delta(o);const A=yl(m.distanceToPoint(E));if(yl(m.normal.dot(o))&&A){p.copy(u),y=2;break}const S=m.intersectLine(u,f);if(!S&&A&&f.copy(E),(S||A)&&!yl(f.distanceTo(T))){if(y<=1)(y===1?p.start:p.end).copy(f),A&&(_=y);else if(y>=2){(_===1?p.start:p.end).copy(f),y=2;break}if(y++,y===2&&_===-1)break}}return y}return function(m,p=null,x=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);const y=this.plane,_=m.plane;if(Math.abs(y.normal.dot(_.normal))>1-1e-10){const b=this.satBounds,E=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let S=0;S<4;S++){const M=b[S],C=E[S];if(n.setFromPoints(C,e),M.isSeparated(n))return!1}const T=m.satBounds,A=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let S=0;S<4;S++){const M=T[S],C=A[S];if(n.setFromPoints(C,t),M.isSeparated(n))return!1}for(let S=0;S<4;S++){const M=E[S];for(let C=0;C<4;C++){const P=A[C];if(r.crossVectors(M,P),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return p&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const b=g(this,_,h);if(b===1&&m.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(b!==2)return!1;const E=g(m,y,d);if(E===1&&this.containsPoint(d.end))return p&&(p.start.copy(d.end),p.end.copy(d.end)),!0;if(E!==2)return!1;if(h.delta(a),d.delta(l),a.dot(l)<0){let L=d.start;d.start=d.end,d.end=L}const T=h.start.dot(a),A=h.end.dot(a),S=d.start.dot(a),M=d.end.dot(a),C=A<S,P=T<M;return T!==M&&S!==A&&C===P?!1:(p&&(c.subVectors(h.start,d.start),c.dot(a)>0?p.start.copy(h.start):p.start.copy(d.start),c.subVectors(h.end,d.end),c.dot(a)<0?p.end.copy(h.end):p.end.copy(d.end)),!0)}}})();An.prototype.distanceToPoint=(function(){const i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();An.prototype.distanceToTriangle=(function(){const i=new I,t=new I,e=["a","b","c"],n=new Jn,s=new Jn;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let h=0;h<3;h++){let d;const f=e[h],g=o[f];this.closestPointToPoint(g,i),d=g.distanceToSquared(i),d<u&&(u=d,a&&a.copy(i),l&&l.copy(g));const v=this[f];o.closestPointToPoint(v,i),d=v.distanceToSquared(i),d<u&&(u=d,a&&a.copy(v),l&&l.copy(i))}for(let h=0;h<3;h++){const d=e[h],f=e[(h+1)%3];n.set(this[d],this[f]);for(let g=0;g<3;g++){const v=e[g],m=e[(g+1)%3];s.set(o[v],o[m]),Mu(n,s,i,t);const p=i.distanceToSquared(t);p<u&&(u=p,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(u)}})();class We{constructor(t,e,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new jt,this.invMatrix=new jt,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new ei),this.alignedSatBounds=new Array(3).fill().map(()=>new ei),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}We.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const d=1*c|2*u|4*h,f=s[d];f.x=c?n.x:e.x,f.y=u?n.y:e.y,f.z=h?n.z:e.z,f.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let c=0;c<3;c++){const u=o[c],h=r[c],d=1<<c,f=s[d];u.subVectors(a,f),h.setFromPoints(u,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();We.prototype.intersectsBox=(function(){const i=new ei;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=o[l],u=r[l];if(i.setFromBox(c,e),u.isSeparated(i))return!1}return!0}})();We.prototype.intersectsTriangle=(function(){const i=new An,t=new Array(3),e=new ei,n=new ei,s=new I;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let d=0;d<3;d++){const f=a[d],g=l[d];if(e.setFromPoints(g,t),f.isSeparated(e))return!1}const c=o.satBounds,u=o.satAxes,h=this.points;for(let d=0;d<3;d++){const f=c[d],g=u[d];if(e.setFromPoints(g,h),f.isSeparated(e))return!1}for(let d=0;d<3;d++){const f=l[d];for(let g=0;g<4;g++){const v=u[g];if(s.crossVectors(f,v),e.setFromPoints(s,t),n.setFromPoints(s,h),e.isSeparated(n))return!1}}return!0}})();We.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();We.prototype.distanceToPoint=(function(){const i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();We.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Jn),e=new Array(12).fill().map(()=>new Jn),n=new I,s=new I;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;const u=a*a,h=o.min,d=o.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];s.copy(p).clamp(h,d);const x=p.distanceToSquared(s);if(x<g&&(g=x,l&&l.copy(p),c&&c.copy(s),x<u))return Math.sqrt(x)}let v=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const y=(m+1)%3,_=(m+2)%3,b=p<<y|x<<_,E=1<<m|p<<y|x<<_,T=f[b],A=f[E];t[v].set(T,A);const M=i[m],C=i[y],P=i[_],L=e[v],N=L.start,z=L.end;N[M]=h[M],N[C]=p?h[C]:d[C],N[P]=x?h[P]:d[C],z[M]=d[M],z[C]=p?h[C]:d[C],z[P]=x?h[P]:d[C],v++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){s.x=m?d.x:h.x,s.y=p?d.y:h.y,s.z=x?d.z:h.z,this.closestPointToPoint(s,n);const y=s.distanceToSquared(n);if(y<g&&(g=y,l&&l.copy(n),c&&c.copy(s),y<u))return Math.sqrt(y)}for(let m=0;m<12;m++){const p=t[m];for(let x=0;x<12;x++){const y=e[x];Mu(p,y,n,s);const _=n.distanceToSquared(s);if(_<g&&(g=_,l&&l.copy(n),c&&c.copy(s),_<u))return Math.sqrt(_)}}return Math.sqrt(g)}})();class Eu{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Xy extends Eu{constructor(){super(()=>new An)}}const vn=new Xy;class $y{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ue=new $y;let pi,Rs;const ps=[],bo=new Eu(()=>new be);function qy(i,t,e,n,s,r){pi=bo.getPrimitive(),Rs=bo.getPrimitive(),ps.push(pi,Rs),ue.setBuffer(i._roots[t]);const o=zc(0,i.geometry,e,n,s,r);ue.clearBuffer(),bo.releasePrimitive(pi),bo.releasePrimitive(Rs),ps.pop(),ps.pop();const a=ps.length;return a>0&&(Rs=ps[a-1],pi=ps[a-2]),o}function zc(i,t,e,n,s=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=ue;let u=i*2;if(je(u,l)){const d=rn(i,c),f=mn(u,l);return me(i,a,pi),n(d,f,!1,o,r+i,pi)}else{let M=function(P){const{uint16Array:L,uint32Array:N}=ue;let z=P*2;for(;!je(z,L);)P=gn(P),z=P*2;return rn(P,N)},C=function(P){const{uint16Array:L,uint32Array:N}=ue;let z=P*2;for(;!je(z,L);)P=_n(P,N),z=P*2;return rn(P,N)+mn(z,L)};const d=gn(i),f=_n(i,c);let g=d,v=f,m,p,x,y;if(s&&(x=pi,y=Rs,me(g,a,x),me(v,a,y),m=s(x),p=s(y),p<m)){g=f,v=d;const P=m;m=p,p=P,x=y}x||(x=pi,me(g,a,x));const _=je(g*2,l),b=e(x,_,m,o+1,r+g);let E;if(b===Kh){const P=M(g),N=C(g)-P;E=n(P,N,!0,o+1,r+g,x)}else E=b&&zc(g,t,e,n,s,r,o+1);if(E)return!0;y=Rs,me(v,a,y);const T=je(v*2,l),A=e(y,T,p,o+1,r+v);let S;if(A===Kh){const P=M(v),N=C(v)-P;S=n(P,N,!0,o+1,r+v,y)}else S=A&&zc(v,t,e,n,s,r,o+1);return!!S}}const nr=new I,bl=new I;function Yy(i,t,e={},n=0,s=1/0){const r=n*n,o=s*s;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:u=>(nr.copy(t).clamp(u.min,u.max),nr.distanceToSquared(t)),intersectsBounds:(u,h,d)=>d<a&&d<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,nr);const d=t.distanceToSquared(nr);return d<a&&(bl.copy(nr),a=d,l=h),d<r}}),a===1/0)return null;const c=Math.sqrt(a);return e.point?e.point.copy(bl):e.point=bl.clone(),e.distance=c,e.faceIndex=l,e}const jy=parseInt(va)>=169,Pi=new I,Di=new I,Ii=new I,So=new Rt,Mo=new Rt,Eo=new Rt,nd=new I,id=new I,sd=new I,ir=new I;function Zy(i,t,e,n,s,r,o,a){let l;if(r===ke?l=i.intersectTriangle(n,e,t,!0,s):l=i.intersectTriangle(t,e,n,r!==Mn,s),l===null)return null;const c=i.origin.distanceTo(s);return c<o||c>a?null:{distance:c,point:s.clone()}}function Ky(i,t,e,n,s,r,o,a,l,c,u){Pi.fromBufferAttribute(t,r),Di.fromBufferAttribute(t,o),Ii.fromBufferAttribute(t,a);const h=Zy(i,Pi,Di,Ii,ir,l,c,u);if(h){const d=new I;Pe.getBarycoord(ir,Pi,Di,Ii,d),n&&(So.fromBufferAttribute(n,r),Mo.fromBufferAttribute(n,o),Eo.fromBufferAttribute(n,a),h.uv=Pe.getInterpolation(ir,Pi,Di,Ii,So,Mo,Eo,new Rt)),s&&(So.fromBufferAttribute(s,r),Mo.fromBufferAttribute(s,o),Eo.fromBufferAttribute(s,a),h.uv1=Pe.getInterpolation(ir,Pi,Di,Ii,So,Mo,Eo,new Rt)),e&&(nd.fromBufferAttribute(e,r),id.fromBufferAttribute(e,o),sd.fromBufferAttribute(e,a),h.normal=Pe.getInterpolation(ir,Pi,Di,Ii,nd,id,sd,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:o,c:a,normal:new I,materialIndex:0};Pe.getNormal(Pi,Di,Ii,f.normal),h.face=f,h.faceIndex=r,jy&&(h.barycoord=d)}return h}function Ea(i,t,e,n,s,r,o){const a=n*3;let l=a+0,c=a+1,u=a+2;const h=i.index;i.index&&(l=h.getX(l),c=h.getX(c),u=h.getX(u));const{position:d,normal:f,uv:g,uv1:v}=i.attributes,m=Ky(e,d,f,g,v,l,c,u,t,r,o);return m?(m.faceIndex=n,s&&s.push(m),m):null}function ve(i,t,e,n){const s=i.a,r=i.b,o=i.c;let a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function Qy(i,t,e,n,s,r,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let u=n,h=n+s;u<h;u++)Ea(l,t,e,u,r,o,a)}function Jy(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,u=null;for(let h=n,d=n+s;h<d;h++){let f;f=Ea(a,t,e,h,null,r,o),f&&f.distance<c&&(u=f,c=f.distance)}return u}function tb(i,t,e,n,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let d;if(d=u,ve(o,d*3,l,c),o.needsUpdate=!0,n(o,d,s,r))return!0}return!1}function eb(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const u=i._roots;for(let d=0,f=u.length;d<f;d++)r=u[d],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),h(0,c),c+=r.byteLength;function h(d,f,g=!1){const v=d*2;if(a[v+15]===Ma){const p=o[d+6],x=a[v+14];let y=1/0,_=1/0,b=1/0,E=-1/0,T=-1/0,A=-1/0;for(let S=3*p,M=3*(p+x);S<M;S++){let C=n[S];const P=s.getX(C),L=s.getY(C),N=s.getZ(C);P<y&&(y=P),P>E&&(E=P),L<_&&(_=L),L>T&&(T=L),N<b&&(b=N),N>A&&(A=N)}return l[d+0]!==y||l[d+1]!==_||l[d+2]!==b||l[d+3]!==E||l[d+4]!==T||l[d+5]!==A?(l[d+0]=y,l[d+1]=_,l[d+2]=b,l[d+3]=E,l[d+4]=T,l[d+5]=A,!0):!1}else{const p=d+8,x=o[d+6],y=p+f,_=x+f;let b=g,E=!1,T=!1;t?b||(E=t.has(y),T=t.has(_),b=!E&&!T):(E=!0,T=!0);const A=b||E,S=b||T;let M=!1;A&&(M=h(p,f,b));let C=!1;S&&(C=h(x,f,b));const P=M||C;if(P)for(let L=0;L<3;L++){const N=p+L,z=x+L,H=l[N],Y=l[N+3],V=l[z],Q=l[z+3];l[d+L]=H<V?H:V,l[d+L+3]=Y>Q?Y:Q}return P}}}function xi(i,t,e,n,s){let r,o,a,l,c,u;const h=1/e.direction.x,d=1/e.direction.y,f=1/e.direction.z,g=e.origin.x,v=e.origin.y,m=e.origin.z;let p=t[i],x=t[i+3],y=t[i+1],_=t[i+3+1],b=t[i+2],E=t[i+3+2];return h>=0?(r=(p-g)*h,o=(x-g)*h):(r=(x-g)*h,o=(p-g)*h),d>=0?(a=(y-v)*d,l=(_-v)*d):(a=(_-v)*d,l=(y-v)*d),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),f>=0?(c=(b-m)*f,u=(E-m)*f):(c=(E-m)*f,u=(b-m)*f),r>u||c>o)?!1:((c>r||r!==r)&&(r=c),(u<o||o!==o)&&(o=u),r<=s&&o>=n)}function nb(i,t,e,n,s,r,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let u=n,h=n+s;u<h;u++){let d=c?c[u]:u;Ea(l,t,e,d,r,o,a)}}function ib(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,u=null;for(let h=n,d=n+s;h<d;h++){let f;f=Ea(a,t,e,l?l[h]:h,null,r,o),f&&f.distance<c&&(u=f,c=f.distance)}return u}function sb(i,t,e,n,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let d;if(d=e.resolveTriangleIndex(u),ve(o,d*3,l,c),o.needsUpdate=!0,n(o,d,s,r))return!0}return!1}function rb(i,t,e,n,s,r,o){ue.setBuffer(i._roots[t]),kc(0,i,e,n,s,r,o),ue.clearBuffer()}function kc(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=ue,u=i*2;if(je(u,l)){const d=rn(i,c),f=mn(u,l);Qy(t,e,n,d,f,s,r,o)}else{const d=gn(i);xi(d,a,n,r,o)&&kc(d,t,e,n,s,r,o);const f=_n(i,c);xi(f,a,n,r,o)&&kc(f,t,e,n,s,r,o)}}const ob=["x","y","z"];function ab(i,t,e,n,s,r){ue.setBuffer(i._roots[t]);const o=Hc(0,i,e,n,s,r);return ue.clearBuffer(),o}function Hc(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=ue;let c=i*2;if(je(c,a)){const h=rn(i,l),d=mn(c,a);return Jy(t,e,n,h,d,s,r)}else{const h=yf(i,l),d=ob[h],g=n.direction[d]>=0;let v,m;g?(v=gn(i),m=_n(i,l)):(v=_n(i,l),m=gn(i));const x=xi(v,o,n,s,r)?Hc(v,t,e,n,s,r):null;if(x){const b=x.point[d];if(g?b<=o[m+h]:b>=o[m+h+3])return x}const _=xi(m,o,n,s,r)?Hc(m,t,e,n,s,r):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const To=new be,ms=new An,gs=new An,sr=new jt,rd=new We,wo=new We;function lb(i,t,e,n){ue.setBuffer(i._roots[t]);const s=Vc(0,i,e,n);return ue.clearBuffer(),s}function Vc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ue;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),rd.set(e.boundingBox.min,e.boundingBox.max,n),s=rd),je(l,o)){const u=t.geometry,h=u.index,d=u.attributes.position,f=e.index,g=e.attributes.position,v=rn(i,a),m=mn(l,o);if(sr.copy(n).invert(),e.boundsTree)return me(i,r,wo),wo.matrix.copy(sr),wo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>wo.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=v*3,_=(m+v)*3;y<_;y+=3)if(ve(gs,y,h,d),gs.needsUpdate=!0,x.intersectsTriangle(gs))return!0;return!1}});for(let p=v*3,x=(m+v)*3;p<x;p+=3){ve(ms,p,h,d),ms.a.applyMatrix4(sr),ms.b.applyMatrix4(sr),ms.c.applyMatrix4(sr),ms.needsUpdate=!0;for(let y=0,_=f.count;y<_;y+=3)if(ve(gs,y,f,g),gs.needsUpdate=!0,ms.intersectsTriangle(gs))return!0}}else{const u=i+8,h=a[i+6];return me(u,r,To),!!(s.intersectsBox(To)&&Vc(u,t,e,n,s)||(me(h,r,To),s.intersectsBox(To)&&Vc(h,t,e,n,s)))}}const Ao=new jt,Sl=new We,rr=new We,cb=new I,ub=new I,hb=new I,db=new I;function fb(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Sl.set(t.boundingBox.min,t.boundingBox.max,e),Sl.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,h=t.index,d=vn.getPrimitive(),f=vn.getPrimitive();let g=cb,v=ub,m=null,p=null;s&&(m=hb,p=db);let x=1/0,y=null,_=null;return Ao.copy(e).invert(),rr.matrix.copy(Ao),i.shapecast({boundsTraverseOrder:b=>Sl.distanceToBox(b),intersectsBounds:(b,E,T)=>T<x&&T<o?(E&&(rr.min.copy(b.min),rr.max.copy(b.max),rr.needsUpdate=!0),!0):!1,intersectsRange:(b,E)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>rr.distanceToBox(A),intersectsBounds:(A,S,M)=>M<x&&M<o,intersectsRange:(A,S)=>{for(let M=A,C=A+S;M<C;M++){ve(f,3*M,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let P=b,L=b+E;P<L;P++){ve(d,3*P,c,l),d.needsUpdate=!0;const N=d.distanceToTriangle(f,g,m);if(N<x&&(v.copy(g),p&&p.copy(m),x=N,y=P,_=M),N<r)return!0}}}});{const T=$s(t);for(let A=0,S=T;A<S;A++){ve(f,3*A,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let M=b,C=b+E;M<C;M++){ve(d,3*M,c,l),d.needsUpdate=!0;const P=d.distanceToTriangle(f,g,m);if(P<x&&(v.copy(g),p&&p.copy(m),x=P,y=M,_=A),P<r)return!0}}}}}),vn.releasePrimitive(d),vn.releasePrimitive(f),x===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=x,n.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Ao),v.applyMatrix4(Ao),s.distance=v.sub(s.point).length(),s.faceIndex=_),n)}function pb(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const u=i._roots;for(let d=0,f=u.length;d<f;d++)r=u[d],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),h(0,c),c+=r.byteLength;function h(d,f,g=!1){const v=d*2;if(a[v+15]===Ma){const p=o[d+6],x=a[v+14];let y=1/0,_=1/0,b=1/0,E=-1/0,T=-1/0,A=-1/0;for(let S=p,M=p+x;S<M;S++){const C=3*i.resolveTriangleIndex(S);for(let P=0;P<3;P++){let L=C+P;L=n?n[L]:L;const N=s.getX(L),z=s.getY(L),H=s.getZ(L);N<y&&(y=N),N>E&&(E=N),z<_&&(_=z),z>T&&(T=z),H<b&&(b=H),H>A&&(A=H)}}return l[d+0]!==y||l[d+1]!==_||l[d+2]!==b||l[d+3]!==E||l[d+4]!==T||l[d+5]!==A?(l[d+0]=y,l[d+1]=_,l[d+2]=b,l[d+3]=E,l[d+4]=T,l[d+5]=A,!0):!1}else{const p=d+8,x=o[d+6],y=p+f,_=x+f;let b=g,E=!1,T=!1;t?b||(E=t.has(y),T=t.has(_),b=!E&&!T):(E=!0,T=!0);const A=b||E,S=b||T;let M=!1;A&&(M=h(p,f,b));let C=!1;S&&(C=h(x,f,b));const P=M||C;if(P)for(let L=0;L<3;L++){const N=p+L,z=x+L,H=l[N],Y=l[N+3],V=l[z],Q=l[z+3];l[d+L]=H<V?H:V,l[d+L+3]=Y>Q?Y:Q}return P}}}function mb(i,t,e,n,s,r,o){ue.setBuffer(i._roots[t]),Gc(0,i,e,n,s,r,o),ue.clearBuffer()}function Gc(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=ue,u=i*2;if(je(u,l)){const d=rn(i,c),f=mn(u,l);nb(t,e,n,d,f,s,r,o)}else{const d=gn(i);xi(d,a,n,r,o)&&Gc(d,t,e,n,s,r,o);const f=_n(i,c);xi(f,a,n,r,o)&&Gc(f,t,e,n,s,r,o)}}const gb=["x","y","z"];function _b(i,t,e,n,s,r){ue.setBuffer(i._roots[t]);const o=Wc(0,i,e,n,s,r);return ue.clearBuffer(),o}function Wc(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=ue;let c=i*2;if(je(c,a)){const h=rn(i,l),d=mn(c,a);return ib(t,e,n,h,d,s,r)}else{const h=yf(i,l),d=gb[h],g=n.direction[d]>=0;let v,m;g?(v=gn(i),m=_n(i,l)):(v=_n(i,l),m=gn(i));const x=xi(v,o,n,s,r)?Wc(v,t,e,n,s,r):null;if(x){const b=x.point[d];if(g?b<=o[m+h]:b>=o[m+h+3])return x}const _=xi(m,o,n,s,r)?Wc(m,t,e,n,s,r):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const Ro=new be,_s=new An,vs=new An,or=new jt,od=new We,Co=new We;function vb(i,t,e,n){ue.setBuffer(i._roots[t]);const s=Xc(0,i,e,n);return ue.clearBuffer(),s}function Xc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ue;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),od.set(e.boundingBox.min,e.boundingBox.max,n),s=od),je(l,o)){const u=t.geometry,h=u.index,d=u.attributes.position,f=e.index,g=e.attributes.position,v=rn(i,a),m=mn(l,o);if(or.copy(n).invert(),e.boundsTree)return me(i,r,Co),Co.matrix.copy(or),Co.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Co.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=v,_=m+v;y<_;y++)if(ve(vs,3*t.resolveTriangleIndex(y),h,d),vs.needsUpdate=!0,x.intersectsTriangle(vs))return!0;return!1}});for(let p=v,x=m+v;p<x;p++){const y=t.resolveTriangleIndex(p);ve(_s,3*y,h,d),_s.a.applyMatrix4(or),_s.b.applyMatrix4(or),_s.c.applyMatrix4(or),_s.needsUpdate=!0;for(let _=0,b=f.count;_<b;_+=3)if(ve(vs,_,f,g),vs.needsUpdate=!0,_s.intersectsTriangle(vs))return!0}}else{const u=i+8,h=a[i+6];return me(u,r,Ro),!!(s.intersectsBox(Ro)&&Xc(u,t,e,n,s)||(me(h,r,Ro),s.intersectsBox(Ro)&&Xc(h,t,e,n,s)))}}const Po=new jt,Ml=new We,ar=new We,xb=new I,yb=new I,bb=new I,Sb=new I;function Mb(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ml.set(t.boundingBox.min,t.boundingBox.max,e),Ml.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,h=t.index,d=vn.getPrimitive(),f=vn.getPrimitive();let g=xb,v=yb,m=null,p=null;s&&(m=bb,p=Sb);let x=1/0,y=null,_=null;return Po.copy(e).invert(),ar.matrix.copy(Po),i.shapecast({boundsTraverseOrder:b=>Ml.distanceToBox(b),intersectsBounds:(b,E,T)=>T<x&&T<o?(E&&(ar.min.copy(b.min),ar.max.copy(b.max),ar.needsUpdate=!0),!0):!1,intersectsRange:(b,E)=>{if(t.boundsTree){const T=t.boundsTree;return T.shapecast({boundsTraverseOrder:A=>ar.distanceToBox(A),intersectsBounds:(A,S,M)=>M<x&&M<o,intersectsRange:(A,S)=>{for(let M=A,C=A+S;M<C;M++){const P=T.resolveTriangleIndex(M);ve(f,3*P,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let L=b,N=b+E;L<N;L++){const z=i.resolveTriangleIndex(L);ve(d,3*z,c,l),d.needsUpdate=!0;const H=d.distanceToTriangle(f,g,m);if(H<x&&(v.copy(g),p&&p.copy(m),x=H,y=L,_=M),H<r)return!0}}}})}else{const T=$s(t);for(let A=0,S=T;A<S;A++){ve(f,3*A,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let M=b,C=b+E;M<C;M++){const P=i.resolveTriangleIndex(M);ve(d,3*P,c,l),d.needsUpdate=!0;const L=d.distanceToTriangle(f,g,m);if(L<x&&(v.copy(g),p&&p.copy(m),x=L,y=M,_=A),L<r)return!0}}}}}),vn.releasePrimitive(d),vn.releasePrimitive(f),x===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=x,n.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Po),v.applyMatrix4(Po),s.distance=v.sub(s.point).length(),s.faceIndex=_),n)}function Eb(){return typeof SharedArrayBuffer<"u"}const yr=new ue.constructor,oa=new ue.constructor,ci=new Eu(()=>new be),xs=new be,ys=new be,El=new be,Tl=new be;let wl=!1;function Tb(i,t,e,n){if(wl)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");wl=!0;const s=i._roots,r=t._roots;let o,a=0,l=0;const c=new jt().copy(e).invert();for(let u=0,h=s.length;u<h;u++){yr.setBuffer(s[u]),l=0;const d=ci.getPrimitive();me(0,yr.float32Array,d),d.applyMatrix4(c);for(let f=0,g=r.length;f<g&&(oa.setBuffer(r[f]),o=Sn(0,0,e,c,n,a,l,0,0,d),oa.clearBuffer(),l+=r[f].length,!o);f++);if(ci.releasePrimitive(d),yr.clearBuffer(),a+=s[u].length,o)break}return wl=!1,o}function Sn(i,t,e,n,s,r=0,o=0,a=0,l=0,c=null,u=!1){let h,d;u?(h=oa,d=yr):(h=yr,d=oa);const f=h.float32Array,g=h.uint32Array,v=h.uint16Array,m=d.float32Array,p=d.uint32Array,x=d.uint16Array,y=i*2,_=t*2,b=je(y,v),E=je(_,x);let T=!1;if(E&&b)u?T=s(rn(t,p),mn(t*2,x),rn(i,g),mn(i*2,v),l,o+t,a,r+i):T=s(rn(i,g),mn(i*2,v),rn(t,p),mn(t*2,x),a,r+i,l,o+t);else if(E){const A=ci.getPrimitive();me(t,m,A),A.applyMatrix4(e);const S=gn(i),M=_n(i,g);me(S,f,xs),me(M,f,ys);const C=A.intersectsBox(xs),P=A.intersectsBox(ys);T=C&&Sn(t,S,n,e,s,o,r,l,a+1,A,!u)||P&&Sn(t,M,n,e,s,o,r,l,a+1,A,!u),ci.releasePrimitive(A)}else{const A=gn(t),S=_n(t,p);me(A,m,El),me(S,m,Tl);const M=c.intersectsBox(El),C=c.intersectsBox(Tl);if(M&&C)T=Sn(i,A,e,n,s,r,o,a,l+1,c,u)||Sn(i,S,e,n,s,r,o,a,l+1,c,u);else if(M)if(b)T=Sn(i,A,e,n,s,r,o,a,l+1,c,u);else{const P=ci.getPrimitive();P.copy(El).applyMatrix4(e);const L=gn(i),N=_n(i,g);me(L,f,xs),me(N,f,ys);const z=P.intersectsBox(xs),H=P.intersectsBox(ys);T=z&&Sn(A,L,n,e,s,o,r,l,a+1,P,!u)||H&&Sn(A,N,n,e,s,o,r,l,a+1,P,!u),ci.releasePrimitive(P)}else if(C)if(b)T=Sn(i,S,e,n,s,r,o,a,l+1,c,u);else{const P=ci.getPrimitive();P.copy(Tl).applyMatrix4(e);const L=gn(i),N=_n(i,g);me(L,f,xs),me(N,f,ys);const z=P.intersectsBox(xs),H=P.intersectsBox(ys);T=z&&Sn(S,L,n,e,s,o,r,l,a+1,P,!u)||H&&Sn(S,N,n,e,s,o,r,l,a+1,P,!u),ci.releasePrimitive(P)}}return T}const Do=new We,ad=new be,wb={strategy:_f,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Tu{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex();let a;return e.cloneBuffers?a={roots:s.map(l=>l.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:s,index:o?o.array:null,indirectBuffer:r},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:o}=t,a=new Tu(e,{...n,[_l]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const l=e.getIndex();if(l===null){const c=new Ze(t.index,1,!1);e.setIndex(c)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...wb,[_l]:!1},e),e.useSharedArrayBuffer&&!Eb())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[_l]||(Hy(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new be))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?pb:eb)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,u=r[c+15]===Ma;if(u){const h=s[a+6],d=r[c+14];t(l,u,new Float32Array(n,a*4,6),h,d)}else{const h=a+xr/4,d=s[a+6],f=s[a+7];t(l,u,new Float32Array(n,a*4,6),f)||(o(h,l+1),o(d,l+1))}}}raycast(t,e=Bn,n=0,s=1/0){const r=this._roots,o=this.geometry,a=[],l=e.isMaterial,c=Array.isArray(e),u=o.groups,h=l?e.side:e,d=this.indirect?mb:rb;for(let f=0,g=r.length;f<g;f++){const v=c?e[u[f].materialIndex].side:h,m=a.length;if(d(this,f,v,t,a,n,s),c){const p=u[f].materialIndex;for(let x=m,y=a.length;x<y;x++)a[x].face.materialIndex=p}}return a}raycastFirst(t,e=Bn,n=0,s=1/0){const r=this._roots,o=this.geometry,a=e.isMaterial,l=Array.isArray(e);let c=null;const u=o.groups,h=a?e.side:e,d=this.indirect?_b:ab;for(let f=0,g=r.length;f<g;f++){const v=l?e[u[f].materialIndex].side:h,m=d(this,f,v,t,n,s);m!=null&&(c==null||m.distance<c.distance)&&(c=m,l&&(m.face.materialIndex=u[f].materialIndex))}return c}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?vb:lb;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=vn.getPrimitive(),n=this.indirect?sb:tb;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const h=o;o=(d,f,g,v,m)=>h(d,f,g,v,m)?!0:n(d,f,this,a,g,v,e)}else o||(a?o=(h,d,f,g)=>n(h,d,this,a,f,g,e):o=(h,d,f)=>f);let l=!1,c=0;const u=this._roots;for(let h=0,d=u.length;h<d;h++){const f=u[h];if(l=qy(this,h,r,o,s,c),l)break;c+=f.byteLength}return vn.releasePrimitive(e),l}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=vn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const v=this.resolveTriangleIndex(g);ve(o,v*3,a,l)}:g=>{ve(o,g*3,a,l)},u=vn.getPrimitive(),h=t.geometry.index,d=t.geometry.attributes.position,f=t.indirect?g=>{const v=t.resolveTriangleIndex(g);ve(u,v*3,h,d)}:g=>{ve(u,g*3,h,d)};if(r){const g=(v,m,p,x,y,_,b,E)=>{for(let T=p,A=p+x;T<A;T++){f(T),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let S=v,M=v+m;S<M;S++)if(c(S),o.needsUpdate=!0,r(o,u,S,T,y,_,b,E))return!0}return!1};if(s){const v=s;s=function(m,p,x,y,_,b,E,T){return v(m,p,x,y,_,b,E,T)?!0:g(m,p,x,y,_,b,E,T)}}else s=g}return Tb(this,t,e,s)}intersectsBox(t,e){return Do.set(t.min,t.max,e),Do.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Do.intersectsBox(n),intersectsTriangle:n=>Do.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?Mb:fb)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return Yy(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{me(0,new Float32Array(n),ad),t.union(ad)}),t}}function ld(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const Io=new Br,cd=new I,ud=new jt,Ab=Ne.prototype.raycast,Rb=hg.prototype.raycast,hd=new I,Ae=new Ne,Lo=[];function Cb(i,t){this.isBatchedMesh?Pb.call(this,i,t):Db.call(this,i,t)}function Pb(i,t){if(this.boundsTrees){const e=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;Ae.material=this.material,Ae.geometry=this.geometry;const o=Ae.geometry.boundsTree,a=Ae.geometry.drawRange;Ae.geometry.boundingSphere===null&&(Ae.geometry.boundingSphere=new Fn);for(let l=0,c=n.length;l<c;l++){if(!this.getVisibleAt(l))continue;const u=n[l].geometryIndex;if(Ae.geometry.boundsTree=e[u],this.getMatrixAt(l,Ae.matrixWorld).premultiply(r),!Ae.geometry.boundsTree){this.getBoundingBoxAt(u,Ae.geometry.boundingBox),this.getBoundingSphereAt(u,Ae.geometry.boundingSphere);const h=s[u];Ae.geometry.setDrawRange(h.start,h.count)}Ae.raycast(i,Lo);for(let h=0,d=Lo.length;h<d;h++){const f=Lo[h];f.object=this,f.batchId=l,t.push(f)}Lo.length=0}Ae.geometry.boundsTree=o,Ae.geometry.drawRange=a,Ae.material=null,Ae.geometry=null}else Rb.call(this,i,t)}function Db(i,t){if(this.geometry.boundsTree){if(this.material===void 0)return;ud.copy(this.matrixWorld).invert(),Io.copy(i.ray).applyMatrix4(ud),hd.setFromMatrixScale(this.matrixWorld),cd.copy(Io.direction).multiply(hd);const e=cd.length(),n=i.near/e,s=i.far/e,r=this.geometry.boundsTree;if(i.firstHitOnly===!0){const o=ld(r.raycastFirst(Io,this.material,n,s),this,i);o&&t.push(o)}else{const o=r.raycast(Io,this.material,n,s);for(let a=0,l=o.length;a<l;a++){const c=ld(o[a],this,i);c&&t.push(c)}}}else Ab.call(this,i,t)}function Ib(i={}){return this.boundsTree=new Tu(this,i),this.boundsTree}function Lb(){this.boundsTree=null}function Ce(i,t,e,n){return new(e||(e=Promise))((function(s,r){function o(c){try{l(n.next(c))}catch(u){r(u)}}function a(c){try{l(n.throw(c))}catch(u){r(u)}}function l(c){var u;c.done?s(c.value):(u=c.value,u instanceof e?u:new e((function(h){h(u)}))).then(o,a)}l((n=n.apply(i,t||[])).next())}))}let kr=class{constructor(){this.listeners={}}on(t,e,n){if(this.listeners[t]||(this.listeners[t]=new Set),n?.once){const s=(...r)=>{this.un(t,s),e(...r)};return this.listeners[t].add(s),()=>this.un(t,s)}return this.listeners[t].add(e),()=>this.un(t,e)}un(t,e){var n;(n=this.listeners[t])===null||n===void 0||n.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach((n=>n(...e)))}};const Uo={decode:function(i,t){return Ce(this,void 0,void 0,(function*(){const e=new AudioContext({sampleRate:t});try{return yield e.decodeAudioData(i)}finally{e.close()}}))},createBuffer:function(i,t){if(!i||i.length===0)throw new Error("channelData must be a non-empty array");if(t<=0)throw new Error("duration must be greater than 0");if(typeof i[0]=="number"&&(i=[i]),!i[0]||i[0].length===0)throw new Error("channelData must contain non-empty channel arrays");return(function(e){const n=e[0];if(n.some((s=>s>1||s<-1))){const s=n.length;let r=0;for(let o=0;o<s;o++){const a=Math.abs(n[o]);a>r&&(r=a)}for(const o of e)for(let a=0;a<s;a++)o[a]/=r}})(i),{duration:t,length:i[0].length,sampleRate:i[0].length/t,numberOfChannels:i.length,getChannelData:e=>i?.[e],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function Mf(i,t){const e=t.xmlns?document.createElementNS(t.xmlns,i):document.createElement(i);for(const[n,s]of Object.entries(t))if(n==="children"&&s)for(const[r,o]of Object.entries(s))o instanceof Node?e.appendChild(o):typeof o=="string"?e.appendChild(document.createTextNode(o)):e.appendChild(Mf(r,o));else n==="style"?Object.assign(e.style,s):n==="textContent"?e.textContent=s:e.setAttribute(n,s.toString());return e}function dd(i,t,e){const n=Mf(i,t||{});return e?.appendChild(n),n}var Ub=Object.freeze({__proto__:null,createElement:dd,default:dd});const Nb={fetchBlob:function(i,t,e){return Ce(this,void 0,void 0,(function*(){const n=yield fetch(i,e);if(n.status>=400)throw new Error(`Failed to fetch ${i}: ${n.status} (${n.statusText})`);return(function(s,r){Ce(this,void 0,void 0,(function*(){if(!s.body||!s.headers)return;const o=s.body.getReader(),a=Number(s.headers.get("Content-Length"))||0;let l=0,c=0;const u=d=>Ce(this,void 0,void 0,(function*(){l+=d?.length||0;const f=Math.round(l/a*100);r(f)})),h=()=>Ce(this,void 0,void 0,(function*(){if(c++>1e5)return void console.error("Fetcher: Maximum iterations reached, stopping read loop");let d;try{d=yield o.read()}catch{return}d.done||(u(d.value),yield h())}));h()}))})(n.clone(),t),n.blob()}))}};let Fb=class extends kr{constructor(t){super(),this.isExternalMedia=!1,t.media?(this.media=t.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),t.mediaControls&&(this.media.controls=!0),t.autoplay&&(this.media.autoplay=!0),t.playbackRate!=null&&this.onMediaEvent("canplay",(()=>{t.playbackRate!=null&&(this.media.playbackRate=t.playbackRate)}),{once:!0})}onMediaEvent(t,e,n){return this.media.addEventListener(t,e,n),()=>this.media.removeEventListener(t,e,n)}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const t=this.getSrc();t.startsWith("blob:")&&URL.revokeObjectURL(t)}canPlayType(t){return this.media.canPlayType(t)!==""}setSrc(t,e){const n=this.getSrc();if(t&&n===t)return;this.revokeSrc();const s=e instanceof Blob&&(this.canPlayType(e.type)||!t)?URL.createObjectURL(e):t;if(n&&this.media.removeAttribute("src"),s||t)try{this.media.src=s}catch{this.media.src=t}}destroy(){this.isExternalMedia||(this.media.pause(),this.revokeSrc(),this.media.removeAttribute("src"),this.media.load(),this.media.remove())}setMediaElement(t){this.media=t}play(){return Ce(this,void 0,void 0,(function*(){try{return yield this.media.play()}catch(t){if(t instanceof DOMException&&t.name==="AbortError")return;throw t}}))}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(t){this.media.currentTime=Math.max(0,Math.min(t,this.getDuration()))}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(t){this.media.volume=t}getMuted(){return this.media.muted}setMuted(t){this.media.muted=t}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(t,e){e!=null&&(this.media.preservesPitch=e),this.media.playbackRate=t}getMediaElement(){return this.media}setSinkId(t){return this.media.setSinkId(t)}},$c=class qc extends kr{constructor(t,e){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.subscriptions=[],this.unsubscribeOnScroll=[],this.dragUnsubscribe=null,this.subscriptions=[],this.options=t;const n=this.parentFromOptionsContainer(t.container);this.parent=n;const[s,r]=this.initHtml();n.appendChild(s),this.container=s,this.scrollContainer=r.querySelector(".scroll"),this.wrapper=r.querySelector(".wrapper"),this.canvasWrapper=r.querySelector(".canvases"),this.progressWrapper=r.querySelector(".progress"),this.cursor=r.querySelector(".cursor"),e&&r.appendChild(e),this.initEvents()}parentFromOptionsContainer(t){let e;if(typeof t=="string"?e=document.querySelector(t):t instanceof HTMLElement&&(e=t),!e)throw new Error("Container not found");return e}initEvents(){const t=e=>{const n=this.wrapper.getBoundingClientRect(),s=e.clientX-n.left,r=e.clientY-n.top;return[s/n.width,r/n.height]};if(this.wrapper.addEventListener("click",(e=>{const[n,s]=t(e);this.emit("click",n,s)})),this.wrapper.addEventListener("dblclick",(e=>{const[n,s]=t(e);this.emit("dblclick",n,s)})),this.options.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.scrollContainer.addEventListener("scroll",(()=>{const{scrollLeft:e,scrollWidth:n,clientWidth:s}=this.scrollContainer,r=e/n,o=(e+s)/n;this.emit("scroll",r,o,e,e+s)})),typeof ResizeObserver=="function"){const e=this.createDelay(100);this.resizeObserver=new ResizeObserver((()=>{e().then((()=>this.onContainerResize())).catch((()=>{}))})),this.resizeObserver.observe(this.scrollContainer)}}onContainerResize(){const t=this.parent.clientWidth;t===this.lastContainerWidth&&this.options.height!=="auto"||(this.lastContainerWidth=t,this.reRender())}initDrag(){this.dragUnsubscribe||(this.dragUnsubscribe=(function(t,e,n,s,r=3,o=0,a=100){if(!t)return()=>{};const l=matchMedia("(pointer: coarse)").matches;let c=()=>{};const u=h=>{if(h.button!==o)return;h.preventDefault(),h.stopPropagation();let d=h.clientX,f=h.clientY,g=!1;const v=Date.now(),m=b=>{if(b.preventDefault(),b.stopPropagation(),l&&Date.now()-v<a)return;const E=b.clientX,T=b.clientY,A=E-d,S=T-f;if(g||Math.abs(A)>r||Math.abs(S)>r){const M=t.getBoundingClientRect(),{left:C,top:P}=M;g||(n?.(d-C,f-P),g=!0),e(A,S,E-C,T-P),d=E,f=T}},p=b=>{if(g){const E=b.clientX,T=b.clientY,A=t.getBoundingClientRect(),{left:S,top:M}=A;s?.(E-S,T-M)}c()},x=b=>{b.relatedTarget&&b.relatedTarget!==document.documentElement||p(b)},y=b=>{g&&(b.stopPropagation(),b.preventDefault())},_=b=>{g&&b.preventDefault()};document.addEventListener("pointermove",m),document.addEventListener("pointerup",p),document.addEventListener("pointerout",x),document.addEventListener("pointercancel",x),document.addEventListener("touchmove",_,{passive:!1}),document.addEventListener("click",y,{capture:!0}),c=()=>{document.removeEventListener("pointermove",m),document.removeEventListener("pointerup",p),document.removeEventListener("pointerout",x),document.removeEventListener("pointercancel",x),document.removeEventListener("touchmove",_),setTimeout((()=>{document.removeEventListener("click",y,{capture:!0})}),10)}};return t.addEventListener("pointerdown",u),()=>{c(),t.removeEventListener("pointerdown",u)}})(this.wrapper,((t,e,n)=>{this.emit("drag",Math.max(0,Math.min(1,n/this.wrapper.getBoundingClientRect().width)))}),(t=>{this.isDragging=!0,this.emit("dragstart",Math.max(0,Math.min(1,t/this.wrapper.getBoundingClientRect().width)))}),(t=>{this.isDragging=!1,this.emit("dragend",Math.max(0,Math.min(1,t/this.wrapper.getBoundingClientRect().width)))})),this.subscriptions.push(this.dragUnsubscribe))}getHeight(t,e){var n;const s=((n=this.audioData)===null||n===void 0?void 0:n.numberOfChannels)||1;if(t==null)return 128;if(!isNaN(Number(t)))return Number(t);if(t==="auto"){const r=this.parent.clientHeight||128;return e?.every((o=>!o.overlay))?r/s:r}return 128}initHtml(){const t=document.createElement("div"),e=t.attachShadow({mode:"open"}),n=this.options.cspNonce&&typeof this.options.cspNonce=="string"?this.options.cspNonce.replace(/"/g,""):"";return e.innerHTML=`
      <style${n?` nonce="${n}"`:""}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height,this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `,[t,e]}setOptions(t){if(this.options.container!==t.container){const e=this.parentFromOptionsContainer(t.container);e.appendChild(this.container),this.parent=e}t.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.options=t,this.reRender()}getWrapper(){return this.wrapper}getWidth(){return this.scrollContainer.clientWidth}getScroll(){return this.scrollContainer.scrollLeft}setScroll(t){this.scrollContainer.scrollLeft=t}setScrollPercentage(t){const{scrollWidth:e}=this.scrollContainer,n=e*t;this.setScroll(n)}destroy(){var t;this.subscriptions.forEach((e=>e())),this.container.remove(),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),(t=this.unsubscribeOnScroll)===null||t===void 0||t.forEach((e=>e())),this.unsubscribeOnScroll=[]}createDelay(t=10){let e,n;const s=()=>{e&&(clearTimeout(e),e=void 0),n&&(n(),n=void 0)};return this.timeouts.push(s),()=>new Promise(((r,o)=>{s(),n=o,e=setTimeout((()=>{e=void 0,n=void 0,r()}),t)}))}convertColorValues(t){if(!Array.isArray(t))return t||"";if(t.length===0)return"#999";if(t.length<2)return t[0]||"";const e=document.createElement("canvas"),n=e.getContext("2d"),s=e.height*(window.devicePixelRatio||1),r=n.createLinearGradient(0,0,0,s),o=1/(t.length-1);return t.forEach(((a,l)=>{const c=l*o;r.addColorStop(c,a)})),r}getPixelRatio(){return Math.max(1,window.devicePixelRatio||1)}renderBarWaveform(t,e,n,s){const r=t[0],o=t[1]||t[0],a=r.length,{width:l,height:c}=n.canvas,u=c/2,h=this.getPixelRatio(),d=e.barWidth?e.barWidth*h:1,f=e.barGap?e.barGap*h:e.barWidth?d/2:0,g=e.barRadius||0,v=l/(d+f)/a,m=g&&"roundRect"in n?"roundRect":"rect";n.beginPath();let p=0,x=0,y=0;for(let _=0;_<=a;_++){const b=Math.round(_*v);if(b>p){const A=Math.round(x*u*s),S=A+Math.round(y*u*s)||1;let M=u-A;e.barAlign==="top"?M=0:e.barAlign==="bottom"&&(M=c-S),n[m](p*(d+f),M,d,S,g),p=b,x=0,y=0}const E=Math.abs(r[_]||0),T=Math.abs(o[_]||0);E>x&&(x=E),T>y&&(y=T)}n.fill(),n.closePath()}renderLineWaveform(t,e,n,s){const r=o=>{const a=t[o]||t[0],l=a.length,{height:c}=n.canvas,u=c/2,h=n.canvas.width/l;n.moveTo(0,u);let d=0,f=0;for(let g=0;g<=l;g++){const v=Math.round(g*h);if(v>d){const p=u+(Math.round(f*u*s)||1)*(o===0?-1:1);n.lineTo(d,p),d=v,f=0}const m=Math.abs(a[g]||0);m>f&&(f=m)}n.lineTo(d,u)};n.beginPath(),r(0),r(1),n.fill(),n.closePath()}renderWaveform(t,e,n){if(n.fillStyle=this.convertColorValues(e.waveColor),e.renderFunction)return void e.renderFunction(t,n);let s=e.barHeight||1;if(e.normalize){const r=Array.from(t[0]).reduce(((o,a)=>Math.max(o,Math.abs(a))),0);s=r?s/r:s}e.barWidth||e.barGap||e.barAlign?this.renderBarWaveform(t,e,n,s):this.renderLineWaveform(t,e,n,s)}renderSingleCanvas(t,e,n,s,r,o,a){const l=this.getPixelRatio(),c=document.createElement("canvas");c.width=Math.round(n*l),c.height=Math.round(s*l),c.style.width=`${n}px`,c.style.height=`${s}px`,c.style.left=`${Math.round(r)}px`,o.appendChild(c);const u=c.getContext("2d");if(this.renderWaveform(t,e,u),c.width>0&&c.height>0){const h=c.cloneNode(),d=h.getContext("2d");d.drawImage(c,0,0),d.globalCompositeOperation="source-in",d.fillStyle=this.convertColorValues(e.progressColor),d.fillRect(0,0,c.width,c.height),a.appendChild(h)}}renderMultiCanvas(t,e,n,s,r,o){const a=this.getPixelRatio(),{clientWidth:l}=this.scrollContainer,c=n/a;let u=Math.min(qc.MAX_CANVAS_WIDTH,l,c),h={};if(e.barWidth||e.barGap){const m=e.barWidth||.5,p=m+(e.barGap||m/2);u%p!=0&&(u=Math.floor(u/p)*p)}if(u===0)return;const d=m=>{if(m<0||m>=f||h[m])return;h[m]=!0;const p=m*u;let x=Math.min(c-p,u);if(e.barWidth||e.barGap){const _=e.barWidth||.5,b=_+(e.barGap||_/2);x=Math.floor(x/b)*b}if(x<=0)return;const y=t.map((_=>{const b=Math.floor(p/c*_.length),E=Math.floor((p+x)/c*_.length);return _.slice(b,E)}));this.renderSingleCanvas(y,e,x,s,p,r,o)},f=Math.ceil(c/u);if(!this.isScrollable){for(let m=0;m<f;m++)d(m);return}const g=this.scrollContainer.scrollLeft/c,v=Math.floor(g*f);if(d(v-1),d(v),d(v+1),f>1){const m=this.on("scroll",(()=>{const{scrollLeft:p}=this.scrollContainer,x=Math.floor(p/c*f);Object.keys(h).length>qc.MAX_NODES&&(r.innerHTML="",o.innerHTML="",h={}),d(x-1),d(x),d(x+1)}));this.unsubscribeOnScroll.push(m)}}renderChannel(t,e,n,s){var{overlay:r}=e,o=(function(u,h){var d={};for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&h.indexOf(f)<0&&(d[f]=u[f]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(f=Object.getOwnPropertySymbols(u);g<f.length;g++)h.indexOf(f[g])<0&&Object.prototype.propertyIsEnumerable.call(u,f[g])&&(d[f[g]]=u[f[g]])}return d})(e,["overlay"]);const a=document.createElement("div"),l=this.getHeight(o.height,o.splitChannels);a.style.height=`${l}px`,r&&s>0&&(a.style.marginTop=`-${l}px`),this.canvasWrapper.style.minHeight=`${l}px`,this.canvasWrapper.appendChild(a);const c=a.cloneNode();this.progressWrapper.appendChild(c),this.renderMultiCanvas(t,o,n,l,a,c)}render(t){return Ce(this,void 0,void 0,(function*(){var e;this.timeouts.forEach((l=>l())),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.options.width!=null&&(this.scrollContainer.style.width=typeof this.options.width=="number"?`${this.options.width}px`:this.options.width);const n=this.getPixelRatio(),s=this.scrollContainer.clientWidth,r=Math.ceil(t.duration*(this.options.minPxPerSec||0));this.isScrollable=r>s;const o=this.options.fillParent&&!this.isScrollable,a=(o?s:r)*n;if(this.wrapper.style.width=o?"100%":`${r}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=t,this.emit("render"),this.options.splitChannels)for(let l=0;l<t.numberOfChannels;l++){const c=Object.assign(Object.assign({},this.options),(e=this.options.splitChannels)===null||e===void 0?void 0:e[l]);this.renderChannel([t.getChannelData(l)],c,a,l)}else{const l=[t.getChannelData(0)];t.numberOfChannels>1&&l.push(t.getChannelData(1)),this.renderChannel(l,this.options,a,0)}Promise.resolve().then((()=>this.emit("rendered")))}))}reRender(){if(this.unsubscribeOnScroll.forEach((n=>n())),this.unsubscribeOnScroll=[],!this.audioData)return;const{scrollWidth:t}=this.scrollContainer,{right:e}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&t!==this.scrollContainer.scrollWidth){const{right:n}=this.progressWrapper.getBoundingClientRect();let s=n-e;s*=2,s=s<0?Math.floor(s):Math.ceil(s),s/=2,this.scrollContainer.scrollLeft+=s}}zoom(t){this.options.minPxPerSec=t,this.reRender()}scrollIntoView(t,e=!1){const{scrollLeft:n,scrollWidth:s,clientWidth:r}=this.scrollContainer,o=t*s,a=n,l=n+r,c=r/2;if(this.isDragging)o+30>l?this.scrollContainer.scrollLeft+=30:o-30<a&&(this.scrollContainer.scrollLeft-=30);else{(o<a||o>l)&&(this.scrollContainer.scrollLeft=o-(this.options.autoCenter?c:0));const u=o-n-c;e&&this.options.autoCenter&&u>0&&(this.scrollContainer.scrollLeft+=Math.min(u,10))}{const u=this.scrollContainer.scrollLeft,h=u/s,d=(u+r)/s;this.emit("scroll",h,d,u,u+r)}}renderProgress(t,e){if(isNaN(t))return;const n=100*t;this.canvasWrapper.style.clipPath=`polygon(${n}% 0%, 100% 0%, 100% 100%, ${n}% 100%)`,this.progressWrapper.style.width=`${n}%`,this.cursor.style.left=`${n}%`,this.cursor.style.transform=this.options.cursorWidth?`translateX(-${t*this.options.cursorWidth}px)`:"",this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(t,e)}exportImage(t,e,n){return Ce(this,void 0,void 0,(function*(){const s=this.canvasWrapper.querySelectorAll("canvas");if(!s.length)throw new Error("No waveform data");if(n==="dataURL"){const r=Array.from(s).map((o=>o.toDataURL(t,e)));return Promise.resolve(r)}return Promise.all(Array.from(s).map((r=>new Promise(((o,a)=>{r.toBlob((l=>{l?o(l):a(new Error("Could not export image"))}),t,e)})))))}))}};$c.MAX_CANVAS_WIDTH=8e3,$c.MAX_NODES=10;let Bb=class extends kr{constructor(){super(...arguments),this.animationFrameId=null,this.isRunning=!1}start(){if(this.isRunning)return;this.isRunning=!0;const t=()=>{this.isRunning&&(this.emit("tick"),this.animationFrameId=requestAnimationFrame(t))};t()}stop(){this.isRunning=!1,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}destroy(){this.stop()}},Al=class extends kr{constructor(t=new AudioContext){super(),this.bufferNode=null,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this._duration=void 0,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.autoplay=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=t,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return Ce(this,void 0,void 0,(function*(){}))}get src(){return this.currentSrc}set src(t){if(this.currentSrc=t,this._duration=void 0,!t)return this.buffer=null,void this.emit("emptied");fetch(t).then((e=>{if(e.status>=400)throw new Error(`Failed to fetch ${t}: ${e.status} (${e.statusText})`);return e.arrayBuffer()})).then((e=>this.currentSrc!==t?null:this.audioContext.decodeAudioData(e))).then((e=>{this.currentSrc===t&&(this.buffer=e,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())}))}_play(){if(!this.paused)return;this.paused=!1,this.bufferNode&&(this.bufferNode.onended=null,this.bufferNode.disconnect()),this.bufferNode=this.audioContext.createBufferSource(),this.buffer&&(this.bufferNode.buffer=this.buffer),this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let t=this.playedDuration*this._playbackRate;(t>=this.duration||t<0)&&(t=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,t),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var t;this.paused=!0,(t=this.bufferNode)===null||t===void 0||t.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return Ce(this,void 0,void 0,(function*(){this.paused&&(this._play(),this.emit("play"))}))}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(t){const e=t-this.currentTime,n=this.bufferNode;n?.stop(this.audioContext.currentTime+e),n?.addEventListener("ended",(()=>{n===this.bufferNode&&(this.bufferNode=null,this.pause())}),{once:!0})}setSinkId(t){return Ce(this,void 0,void 0,(function*(){return this.audioContext.setSinkId(t)}))}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this.bufferNode&&(this.bufferNode.playbackRate.value=t)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(t){const e=!this.paused;e&&this._pause(),this.playedDuration=t/this._playbackRate,e&&this._play(),this.emit("seeking"),this.emit("timeupdate")}get duration(){var t,e;return(t=this._duration)!==null&&t!==void 0?t:((e=this.buffer)===null||e===void 0?void 0:e.duration)||0}set duration(t){this._duration=t}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.value=t,this.emit("volumechange")}get muted(){return this._muted}set muted(t){this._muted!==t&&(this._muted=t,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(t){return/^(audio|video)\//.test(t)}getGainNode(){return this.gainNode}getChannelData(){const t=[];if(!this.buffer)return t;const e=this.buffer.numberOfChannels;for(let n=0;n<e;n++)t.push(this.buffer.getChannelData(n));return t}removeAttribute(t){switch(t){case"src":this.src="";break;case"playbackRate":this.playbackRate=0;break;case"currentTime":this.currentTime=0;break;case"duration":this.duration=0;break;case"volume":this.volume=0;break;case"muted":this.muted=!1}}};const Ob={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};let Yc=class Ef extends Fb{static create(t){return new Ef(t)}constructor(t){const e=t.media||(t.backend==="WebAudio"?new Al:void 0);super({media:e,mediaControls:t.mediaControls,autoplay:t.autoplay,playbackRate:t.audioRate}),this.plugins=[],this.decodedData=null,this.stopAtPosition=null,this.subscriptions=[],this.mediaSubscriptions=[],this.abortController=null,this.options=Object.assign({},Ob,t),this.timer=new Bb;const n=e?void 0:this.getMediaElement();this.renderer=new $c(this.options,n),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const s=this.options.url||this.getSrc()||"";Promise.resolve().then((()=>{this.emit("init");const{peaks:r,duration:o}=this.options;(s||r&&o)&&this.load(s,r,o).catch((a=>{console.error("WaveSurfer initial load error:",a)}))}))}updateProgress(t=this.getCurrentTime()){return this.renderer.renderProgress(t/this.getDuration(),this.isPlaying()),t}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",(()=>{if(!this.isSeeking()){const t=this.updateProgress();this.emit("timeupdate",t),this.emit("audioprocess",t),this.stopAtPosition!=null&&this.isPlaying()&&t>=this.stopAtPosition&&this.pause()}})))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",(()=>{const t=this.updateProgress();this.emit("timeupdate",t)})),this.onMediaEvent("play",(()=>{this.emit("play"),this.timer.start()})),this.onMediaEvent("pause",(()=>{this.emit("pause"),this.timer.stop(),this.stopAtPosition=null})),this.onMediaEvent("emptied",(()=>{this.timer.stop(),this.stopAtPosition=null})),this.onMediaEvent("ended",(()=>{this.emit("timeupdate",this.getDuration()),this.emit("finish"),this.stopAtPosition=null})),this.onMediaEvent("seeking",(()=>{this.emit("seeking",this.getCurrentTime())})),this.onMediaEvent("error",(()=>{var t;this.emit("error",(t=this.getMediaElement().error)!==null&&t!==void 0?t:new Error("Media error")),this.stopAtPosition=null})))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",((t,e)=>{this.options.interact&&(this.seekTo(t),this.emit("interaction",t*this.getDuration()),this.emit("click",t,e))})),this.renderer.on("dblclick",((t,e)=>{this.emit("dblclick",t,e)})),this.renderer.on("scroll",((t,e,n,s)=>{const r=this.getDuration();this.emit("scroll",t*r,e*r,n,s)})),this.renderer.on("render",(()=>{this.emit("redraw")})),this.renderer.on("rendered",(()=>{this.emit("redrawcomplete")})),this.renderer.on("dragstart",(t=>{this.emit("dragstart",t)})),this.renderer.on("dragend",(t=>{this.emit("dragend",t)})));{let t;const e=this.renderer.on("drag",(n=>{if(!this.options.interact)return;let s;this.renderer.renderProgress(n),clearTimeout(t),this.isPlaying()?s=0:this.options.dragToSeek===!0?s=200:typeof this.options.dragToSeek=="object"&&this.options.dragToSeek!==void 0&&(s=this.options.dragToSeek.debounceTime),t=setTimeout((()=>{this.seekTo(n)}),s),this.emit("interaction",n*this.getDuration()),this.emit("drag",n)}));this.subscriptions.push((()=>{clearTimeout(t),e()}))}}initPlugins(){var t;!((t=this.options.plugins)===null||t===void 0)&&t.length&&this.options.plugins.forEach((e=>{this.registerPlugin(e)}))}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach((t=>t())),this.mediaSubscriptions=[]}setOptions(t){this.options=Object.assign({},this.options,t),t.duration&&!t.peaks&&(this.decodedData=Uo.createBuffer(this.exportPeaks(),t.duration)),t.peaks&&t.duration&&(this.decodedData=Uo.createBuffer(t.peaks,t.duration)),this.renderer.setOptions(this.options),t.audioRate&&this.setPlaybackRate(t.audioRate),t.mediaControls!=null&&(this.getMediaElement().controls=t.mediaControls)}registerPlugin(t){if(this.plugins.includes(t))return t;t._init(this),this.plugins.push(t);const e=t.once("destroy",(()=>{this.plugins=this.plugins.filter((n=>n!==t)),this.subscriptions=this.subscriptions.filter((n=>n!==e))}));return this.subscriptions.push(e),t}unregisterPlugin(t){this.plugins=this.plugins.filter((e=>e!==t)),t.destroy()}getWrapper(){return this.renderer.getWrapper()}getWidth(){return this.renderer.getWidth()}getScroll(){return this.renderer.getScroll()}setScroll(t){return this.renderer.setScroll(t)}setScrollTime(t){const e=t/this.getDuration();this.renderer.setScrollPercentage(e)}getActivePlugins(){return this.plugins}loadAudio(t,e,n,s){return Ce(this,void 0,void 0,(function*(){var r;if(this.emit("load",t),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,this.stopAtPosition=null,(r=this.abortController)===null||r===void 0||r.abort(),this.abortController=null,!e&&!n){const a=this.options.fetchParams||{};window.AbortController&&!a.signal&&(this.abortController=new AbortController,a.signal=this.abortController.signal);const l=u=>this.emit("loading",u);e=yield Nb.fetchBlob(t,l,a);const c=this.options.blobMimeType;c&&(e=new Blob([e],{type:c}))}this.setSrc(t,e);const o=yield new Promise((a=>{const l=s||this.getDuration();l?a(l):this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata",(()=>a(this.getDuration())),{once:!0}))}));if(!t&&!e){const a=this.getMediaElement();a instanceof Al&&(a.duration=o)}if(n)this.decodedData=Uo.createBuffer(n,o||0);else if(e){const a=yield e.arrayBuffer();this.decodedData=yield Uo.decode(a,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())}))}load(t,e,n){return Ce(this,void 0,void 0,(function*(){try{return yield this.loadAudio(t,void 0,e,n)}catch(s){throw this.emit("error",s),s}}))}loadBlob(t,e,n){return Ce(this,void 0,void 0,(function*(){try{return yield this.loadAudio("",t,e,n)}catch(s){throw this.emit("error",s),s}}))}zoom(t){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(t),this.emit("zoom",t)}getDecodedData(){return this.decodedData}exportPeaks({channels:t=2,maxLength:e=8e3,precision:n=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const s=Math.min(t,this.decodedData.numberOfChannels),r=[];for(let o=0;o<s;o++){const a=this.decodedData.getChannelData(o),l=[],c=a.length/e;for(let u=0;u<e;u++){const h=a.slice(Math.floor(u*c),Math.ceil((u+1)*c));let d=0;for(let f=0;f<h.length;f++){const g=h[f];Math.abs(g)>Math.abs(d)&&(d=g)}l.push(Math.round(d*n)/n)}r.push(l)}return r}getDuration(){let t=super.getDuration()||0;return t!==0&&t!==1/0||!this.decodedData||(t=this.decodedData.duration),t}toggleInteraction(t){this.options.interact=t}setTime(t){this.stopAtPosition=null,super.setTime(t),this.updateProgress(t),this.emit("timeupdate",t)}seekTo(t){const e=this.getDuration()*t;this.setTime(e)}play(t,e){const n=Object.create(null,{play:{get:()=>super.play}});return Ce(this,void 0,void 0,(function*(){t!=null&&this.setTime(t);const s=yield n.play.call(this);return e!=null&&(this.media instanceof Al?this.media.stopAt(e):this.stopAtPosition=e),s}))}playPause(){return Ce(this,void 0,void 0,(function*(){return this.isPlaying()?this.pause():this.play()}))}stop(){this.pause(),this.setTime(0)}skip(t){this.setTime(this.getCurrentTime()+t)}empty(){this.load("",[[0]],.001)}setMediaElement(t){this.unsubscribePlayerEvents(),super.setMediaElement(t),this.initPlayerEvents()}exportImage(){return Ce(this,arguments,void 0,(function*(t="image/png",e=1,n="dataURL"){return this.renderer.exportImage(t,e,n)}))}destroy(){var t;this.emit("destroy"),(t=this.abortController)===null||t===void 0||t.abort(),this.plugins.forEach((e=>e.destroy())),this.subscriptions.forEach((e=>e())),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}};Yc.BasePlugin=class extends kr{constructor(i){super(),this.subscriptions=[],this.isDestroyed=!1,this.options=i}onInit(){}_init(i){this.isDestroyed&&(this.subscriptions=[],this.isDestroyed=!1),this.wavesurfer=i,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach((i=>i())),this.subscriptions=[],this.isDestroyed=!0,this.wavesurfer=void 0}},Yc.dom=Ub;function lr(i,t,e,n){return new(e||(e=Promise))((function(s,r){function o(c){try{l(n.next(c))}catch(u){r(u)}}function a(c){try{l(n.throw(c))}catch(u){r(u)}}function l(c){var u;c.done?s(c.value):(u=c.value,u instanceof e?u:new e((function(h){h(u)}))).then(o,a)}l((n=n.apply(i,[])).next())}))}const Tf=1e3*Math.log(10)/107.939;function wf(i){return 2595*Math.log10(1+i/700)}function Af(i){return 700*(Math.pow(10,i/2595)-1)}function Rf(i){return Math.log10(Math.max(1,i))}function Cf(i){return Math.pow(10,i)}function Pf(i){let t=26.81*i/(1960+i)-.53;return t<2&&(t+=.15*(2-t)),t>20.1&&(t+=.22*(t-20.1)),t}function Df(i){return i<2&&(i=(i-.3)/.85),i>20.1&&(i=(i+4.422)/1.22),(i+.53)/(26.28-i)*1960}function If(i){return Tf*Math.log10(1+.00437*i)}function Lf(i){return(Math.pow(10,i/Tf)-1)/.00437}function Cs(i,t){switch(t){case"mel":return wf(i);case"logarithmic":return Rf(i);case"bark":return Pf(i);case"erb":return If(i);default:return i}}function No(i,t,e,n,s){const r=n(0),o=n(e/2),a=Array.from({length:i},(()=>Array(t/2+1).fill(0))),l=e/t;for(let c=0;c<i;c++){const u=s(r+c/i*(o-r)),h=Math.floor(u/l),d=h*l,f=(u-d)/((h+1)*l-d);a[c][h]=1-f,a[c][h+1]=f}return a}function zb(i,t){const e=t.length,n=Float32Array.from({length:e},(()=>0));for(let s=0;s<e;s++)for(let r=0;r<i.length;r++)n[s]+=i[r]*t[s][r];return n}const kb={gray:()=>{const i=[];for(let t=0;t<256;t++){const e=(255-t)/256;i.push([e,e,e,1])}return i},igray:()=>{const i=[];for(let t=0;t<256;t++){const e=t/256;i.push([e,e,e,1])}return i},roseus:()=>[[.004528,.004341,.004307,1],[.005625,.006156,.00601,1],[.006628,.008293,.008161,1],[.007551,.010738,.01079,1],[.008382,.013482,.013941,1],[.009111,.01652,.017662,1],[.009727,.019846,.022009,1],[.010223,.023452,.027035,1],[.010593,.027331,.032799,1],[.010833,.031475,.039361,1],[.010941,.035875,.046415,1],[.010918,.04052,.053597,1],[.010768,.045158,.060914,1],[.010492,.049708,.068367,1],[.010098,.054171,.075954,1],[.009594,.058549,.083672,1],[.008989,.06284,.091521,1],[.008297,.067046,.099499,1],[.00753,.071165,.107603,1],[.006704,.075196,.11583,1],[.005838,.07914,.124178,1],[.004949,.082994,.132643,1],[.004062,.086758,.141223,1],[.003198,.09043,.149913,1],[.002382,.09401,.158711,1],[.001643,.097494,.167612,1],[.001009,.100883,.176612,1],[514e-6,.104174,.185704,1],[187e-6,.107366,.194886,1],[66e-6,.110457,.204151,1],[186e-6,.113445,.213496,1],[587e-6,.116329,.222914,1],[.001309,.119106,.232397,1],[.002394,.121776,.241942,1],[.003886,.124336,.251542,1],[.005831,.126784,.261189,1],[.008276,.12912,.270876,1],[.011268,.131342,.280598,1],[.014859,.133447,.290345,1],[.0191,.135435,.300111,1],[.024043,.137305,.309888,1],[.029742,.139054,.319669,1],[.036252,.140683,.329441,1],[.043507,.142189,.339203,1],[.050922,.143571,.348942,1],[.058432,.144831,.358649,1],[.066041,.145965,.368319,1],[.073744,.146974,.377938,1],[.081541,.147858,.387501,1],[.089431,.148616,.396998,1],[.097411,.149248,.406419,1],[.105479,.149754,.415755,1],[.113634,.150134,.424998,1],[.121873,.150389,.434139,1],[.130192,.150521,.443167,1],[.138591,.150528,.452075,1],[.147065,.150413,.460852,1],[.155614,.150175,.469493,1],[.164232,.149818,.477985,1],[.172917,.149343,.486322,1],[.181666,.148751,.494494,1],[.190476,.148046,.502493,1],[.199344,.147229,.510313,1],[.208267,.146302,.517944,1],[.217242,.145267,.52538,1],[.226264,.144131,.532613,1],[.235331,.142894,.539635,1],[.24444,.141559,.546442,1],[.253587,.140131,.553026,1],[.262769,.138615,.559381,1],[.271981,.137016,.5655,1],[.281222,.135335,.571381,1],[.290487,.133581,.577017,1],[.299774,.131757,.582404,1],[.30908,.129867,.587538,1],[.318399,.12792,.592415,1],[.32773,.125921,.597032,1],[.337069,.123877,.601385,1],[.346413,.121793,.605474,1],[.355758,.119678,.609295,1],[.365102,.11754,.612846,1],[.374443,.115386,.616127,1],[.383774,.113226,.619138,1],[.393096,.111066,.621876,1],[.402404,.108918,.624343,1],[.411694,.106794,.62654,1],[.420967,.104698,.628466,1],[.430217,.102645,.630123,1],[.439442,.100647,.631513,1],[.448637,.098717,.632638,1],[.457805,.096861,.633499,1],[.46694,.095095,.6341,1],[.47604,.093433,.634443,1],[.485102,.091885,.634532,1],[.494125,.090466,.63437,1],[.503104,.08919,.633962,1],[.512041,.088067,.633311,1],[.520931,.087108,.63242,1],[.529773,.086329,.631297,1],[.538564,.085738,.629944,1],[.547302,.085346,.628367,1],[.555986,.085162,.626572,1],[.564615,.08519,.624563,1],[.573187,.085439,.622345,1],[.581698,.085913,.619926,1],[.590149,.086615,.617311,1],[.598538,.087543,.614503,1],[.606862,.0887,.611511,1],[.61512,.090084,.608343,1],[.623312,.09169,.605001,1],[.631438,.093511,.601489,1],[.639492,.095546,.597821,1],[.647476,.097787,.593999,1],[.655389,.100226,.590028,1],[.66323,.102856,.585914,1],[.670995,.105669,.581667,1],[.678686,.108658,.577291,1],[.686302,.111813,.57279,1],[.69384,.115129,.568175,1],[.7013,.118597,.563449,1],[.708682,.122209,.558616,1],[.715984,.125959,.553687,1],[.723206,.12984,.548666,1],[.730346,.133846,.543558,1],[.737406,.13797,.538366,1],[.744382,.142209,.533101,1],[.751274,.146556,.527767,1],[.758082,.151008,.522369,1],[.764805,.155559,.516912,1],[.771443,.160206,.511402,1],[.777995,.164946,.505845,1],[.784459,.169774,.500246,1],[.790836,.174689,.494607,1],[.797125,.179688,.488935,1],[.803325,.184767,.483238,1],[.809435,.189925,.477518,1],[.815455,.19516,.471781,1],[.821384,.200471,.466028,1],[.827222,.205854,.460267,1],[.832968,.211308,.454505,1],[.838621,.216834,.448738,1],[.844181,.222428,.442979,1],[.849647,.22809,.43723,1],[.855019,.233819,.431491,1],[.860295,.239613,.425771,1],[.865475,.245471,.420074,1],[.870558,.251393,.414403,1],[.875545,.25738,.408759,1],[.880433,.263427,.403152,1],[.885223,.269535,.397585,1],[.889913,.275705,.392058,1],[.894503,.281934,.386578,1],[.898993,.288222,.381152,1],[.903381,.294569,.375781,1],[.907667,.300974,.370469,1],[.911849,.307435,.365223,1],[.915928,.313953,.360048,1],[.919902,.320527,.354948,1],[.923771,.327155,.349928,1],[.927533,.333838,.344994,1],[.931188,.340576,.340149,1],[.934736,.347366,.335403,1],[.938175,.354207,.330762,1],[.941504,.361101,.326229,1],[.944723,.368045,.321814,1],[.947831,.375039,.317523,1],[.950826,.382083,.313364,1],[.953709,.389175,.309345,1],[.956478,.396314,.305477,1],[.959133,.403499,.301766,1],[.961671,.410731,.298221,1],[.964093,.418008,.294853,1],[.966399,.425327,.291676,1],[.968586,.43269,.288696,1],[.970654,.440095,.285926,1],[.972603,.44754,.28338,1],[.974431,.455025,.281067,1],[.976139,.462547,.279003,1],[.977725,.470107,.277198,1],[.979188,.477703,.275666,1],[.980529,.485332,.274422,1],[.981747,.492995,.273476,1],[.98284,.50069,.272842,1],[.983808,.508415,.272532,1],[.984653,.516168,.27256,1],[.985373,.523948,.272937,1],[.985966,.531754,.273673,1],[.986436,.539582,.274779,1],[.98678,.547434,.276264,1],[.986998,.555305,.278135,1],[.987091,.563195,.280401,1],[.987061,.5711,.283066,1],[.986907,.579019,.286137,1],[.986629,.58695,.289615,1],[.986229,.594891,.293503,1],[.985709,.602839,.297802,1],[.985069,.610792,.302512,1],[.98431,.618748,.307632,1],[.983435,.626704,.313159,1],[.982445,.634657,.319089,1],[.981341,.642606,.32542,1],[.98013,.650546,.332144,1],[.978812,.658475,.339257,1],[.977392,.666391,.346753,1],[.97587,.67429,.354625,1],[.974252,.68217,.362865,1],[.972545,.690026,.371466,1],[.97075,.697856,.380419,1],[.968873,.705658,.389718,1],[.966921,.713426,.399353,1],[.964901,.721157,.409313,1],[.962815,.728851,.419594,1],[.960677,.7365,.430181,1],[.95849,.744103,.44107,1],[.956263,.751656,.452248,1],[.954009,.759153,.463702,1],[.951732,.766595,.475429,1],[.949445,.773974,.487414,1],[.947158,.781289,.499647,1],[.944885,.788535,.512116,1],[.942634,.795709,.524811,1],[.940423,.802807,.537717,1],[.938261,.809825,.550825,1],[.936163,.81676,.564121,1],[.934146,.823608,.577591,1],[.932224,.830366,.59122,1],[.930412,.837031,.604997,1],[.928727,.843599,.618904,1],[.927187,.850066,.632926,1],[.925809,.856432,.647047,1],[.92461,.862691,.661249,1],[.923607,.868843,.675517,1],[.92282,.874884,.689832,1],[.922265,.880812,.704174,1],[.921962,.886626,.718523,1],[.92193,.892323,.732859,1],[.922183,.897903,.747163,1],[.922741,.903364,.76141,1],[.92362,.908706,.77558,1],[.924837,.913928,.789648,1],[.926405,.919031,.80359,1],[.92834,.924015,.817381,1],[.930655,.928881,.830995,1],[.93336,.933631,.844405,1],[.936466,.938267,.857583,1],[.939982,.942791,.870499,1],[.943914,.947207,.883122,1],[.948267,.951519,.895421,1],[.953044,.955732,.907359,1],[.958246,.959852,.918901,1],[.963869,.963887,.930004,1],[.969909,.967845,.940623,1],[.976355,.971737,.950704,1],[.983195,.97558,.960181,1],[.990402,.979395,.968966,1],[.99793,.983217,.97692,1]]};function Hb(i){return i>=1e3?(i/1e3).toFixed(1):Math.round(i).toString()}function Vb(i){return i>=1e3?"kHz":"Hz"}function Gb(i,t,e,n,s){const r=Cs(e,s);return(function(o,a){switch(a){case"mel":return Af(o);case"logarithmic":return Cf(o);case"bark":return Df(o);case"erb":return Lf(o);default:return o}})(r+i/t*(Cs(n,s)-r),s)}function Wb(i,t,e,n){switch(this.bufferSize=i,this.sampleRate=t,this.bandwidth=2/i*(t/2),this.sinTable=new Float32Array(i),this.cosTable=new Float32Array(i),this.windowValues=new Float32Array(i),this.reverseTable=new Uint32Array(i),this.peakBand=0,this.peak=0,e){case"bartlett":for(let o=0;o<i;o++)this.windowValues[o]=2/(i-1)*((i-1)/2-Math.abs(o-(i-1)/2));break;case"bartlettHann":for(let o=0;o<i;o++)this.windowValues[o]=.62-.48*Math.abs(o/(i-1)-.5)-.38*Math.cos(2*Math.PI*o/(i-1));break;case"blackman":n=n||.16;for(let o=0;o<i;o++)this.windowValues[o]=(1-n)/2-.5*Math.cos(2*Math.PI*o/(i-1))+n/2*Math.cos(4*Math.PI*o/(i-1));break;case"cosine":for(let o=0;o<i;o++)this.windowValues[o]=Math.cos(Math.PI*o/(i-1)-Math.PI/2);break;case"gauss":n=n||.25;for(let o=0;o<i;o++)this.windowValues[o]=Math.pow(Math.E,-.5*Math.pow((o-(i-1)/2)/(n*(i-1)/2),2));break;case"hamming":for(let o=0;o<i;o++)this.windowValues[o]=.54-.46*Math.cos(2*Math.PI*o/(i-1));break;case"hann":case void 0:for(let o=0;o<i;o++)this.windowValues[o]=.5*(1-Math.cos(2*Math.PI*o/(i-1)));break;case"lanczoz":for(let o=0;o<i;o++)this.windowValues[o]=Math.sin(Math.PI*(2*o/(i-1)-1))/(Math.PI*(2*o/(i-1)-1));break;case"rectangular":for(let o=0;o<i;o++)this.windowValues[o]=1;break;case"triangular":for(let o=0;o<i;o++)this.windowValues[o]=2/i*(i/2-Math.abs(o-(i-1)/2));break;default:throw Error("No such window function '"+e+"'")}let s=1,r=i>>1;for(;s<i;){for(let o=0;o<s;o++)this.reverseTable[o+s]=this.reverseTable[o]+r;s<<=1,r>>=1}for(let o=0;o<i;o++)this.sinTable[o]=Math.sin(-Math.PI/o),this.cosTable[o]=Math.cos(-Math.PI/o);this.calculateSpectrum=function(o){const a=this.bufferSize,l=this.cosTable,c=this.sinTable,u=this.reverseTable,h=new Float32Array(a),d=new Float32Array(a),f=2/this.bufferSize,g=Math.sqrt,v=new Float32Array(a/2);let m,p,x;const y=Math.floor(Math.log(a)/Math.LN2);if(Math.pow(2,y)!==a)throw"Invalid buffer size, must be a power of 2.";if(a!==o.length)throw"Supplied buffer is not the same size as defined FFT. FFT Size: "+a+" Buffer Size: "+o.length;let _,b,E,T,A,S,M,C,P=1;for(let L=0;L<a;L++)h[L]=o[u[L]]*this.windowValues[u[L]],d[L]=0;for(;P<a;){_=l[P],b=c[P],E=1,T=0;for(let L=0;L<P;L++){let N=L;for(;N<a;)A=N+P,S=E*h[A]-T*d[A],M=E*d[A]+T*h[A],h[A]=h[N]-S,d[A]=d[N]-M,h[N]+=S,d[N]+=M,N+=P<<1;C=E,E=C*_-T*b,T=C*b+T*_}P<<=1}for(let L=0,N=a/2;L<N;L++)m=h[L],p=d[L],x=f*g(m*m+p*p),x>this.peak&&(this.peakBand=L,this.peak=x),v[L]=x;return v}}let Xb=class{constructor(){this.listeners={}}on(t,e,n){if(this.listeners[t]||(this.listeners[t]=new Set),n?.once){const s=(...r)=>{this.un(t,s),e(...r)};return this.listeners[t].add(s),()=>this.un(t,s)}return this.listeners[t].add(e),()=>this.un(t,e)}un(t,e){var n;(n=this.listeners[t])===null||n===void 0||n.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach((n=>n(...e)))}},$b=class extends Xb{constructor(t){super(),this.subscriptions=[],this.isDestroyed=!1,this.options=t}onInit(){}_init(t){this.isDestroyed&&(this.subscriptions=[],this.isDestroyed=!1),this.wavesurfer=t,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach((t=>t())),this.subscriptions=[],this.isDestroyed=!0,this.wavesurfer=void 0}};function Uf(i,t){const e=t.xmlns?document.createElementNS(t.xmlns,i):document.createElement(i);for(const[n,s]of Object.entries(t))if(n==="children"&&s)for(const[r,o]of Object.entries(s))o instanceof Node?e.appendChild(o):typeof o=="string"?e.appendChild(document.createTextNode(o)):e.appendChild(Uf(r,o));else n==="style"?Object.assign(e.style,s):n==="textContent"?e.textContent=s:e.setAttribute(n,s.toString());return e}function Fo(i,t,e){const n=Uf(i,t||{});return e?.appendChild(n),n}var Nf=null;try{var qb=typeof module<"u"&&typeof module.require=="function"&&module.require("worker_threads")||typeof __non_webpack_require__=="function"&&__non_webpack_require__("worker_threads")||typeof require=="function"&&require("worker_threads");Nf=qb.Worker}catch{}function Yb(i,t,e){var n=(function(o){return Buffer.from(o,"base64").toString("utf8")})(i),s=n.indexOf(`
`,10)+1,r=n.substring(s)+"";return function(o){return new Nf(r,Object.assign({},o,{eval:!0}))}}function jb(i,t,e){var n=(function(a){return atob(a)})(i),s=n.indexOf(`
`,10)+1,r=n.substring(s)+"",o=new Blob([r],{type:"application/javascript"});return URL.createObjectURL(o)}var Zb=Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]";function Kb(i,t,e){return Zb?Yb(i):(function(n){var s;return function(r){return s=s||jb(n),new Worker(s,r)}})(i)}var Qb=Kb("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y29uc3QgdD0xZTMqTWF0aC5sb2coMTApLzEwNy45Mzk7ZnVuY3Rpb24gZSh0KXtyZXR1cm4gMjU5NSpNYXRoLmxvZzEwKDErdC83MDApfWZ1bmN0aW9uIGEodCl7cmV0dXJuIDcwMCooTWF0aC5wb3coMTAsdC8yNTk1KS0xKX1mdW5jdGlvbiByKHQpe3JldHVybiBNYXRoLmxvZzEwKE1hdGgubWF4KDEsdCkpfWZ1bmN0aW9uIHModCl7cmV0dXJuIE1hdGgucG93KDEwLHQpfWZ1bmN0aW9uIG4odCl7bGV0IGU9MjYuODEqdC8oMTk2MCt0KS0uNTM7cmV0dXJuIGU8MiYmKGUrPS4xNSooMi1lKSksZT4yMC4xJiYoZSs9LjIyKihlLTIwLjEpKSxlfWZ1bmN0aW9uIG8odCl7cmV0dXJuIHQ8MiYmKHQ9KHQtLjMpLy44NSksdD4yMC4xJiYodD0odCs0LjQyMikvMS4yMiksKHQrLjUzKS8oMjYuMjgtdCkqMTk2MH1mdW5jdGlvbiBsKGUpe3JldHVybiB0Kk1hdGgubG9nMTAoMSsuMDA0MzcqZSl9ZnVuY3Rpb24gaShlKXtyZXR1cm4oTWF0aC5wb3coMTAsZS90KS0xKS8uMDA0Mzd9ZnVuY3Rpb24gaCh0LGUsYSxyLHMpe2NvbnN0IG49cigwKSxvPXIoYS8yKSxsPUFycmF5LmZyb20oe2xlbmd0aDp0fSwoKCk9PkFycmF5KGUvMisxKS5maWxsKDApKSksaT1hL2U7Zm9yKGxldCBlPTA7ZTx0O2UrKyl7Y29uc3QgYT1zKG4rZS90KihvLW4pKSxyPU1hdGguZmxvb3IoYS9pKSxoPXIqaSxjPShhLWgpLygocisxKSppLWgpO2xbZV1bcl09MS1jLGxbZV1bcisxXT1jfXJldHVybiBsfWZ1bmN0aW9uIGModCxlKXtjb25zdCBhPWUubGVuZ3RoLHI9RmxvYXQzMkFycmF5LmZyb20oe2xlbmd0aDphfSwoKCk9PjApKTtmb3IobGV0IHM9MDtzPGE7cysrKWZvcihsZXQgYT0wO2E8dC5sZW5ndGg7YSsrKXJbc10rPXRbYV0qZVtzXVthXTtyZXR1cm4gcn1mdW5jdGlvbiB1KHQsZSxhLHIpe3N3aXRjaCh0aGlzLmJ1ZmZlclNpemU9dCx0aGlzLnNhbXBsZVJhdGU9ZSx0aGlzLmJhbmR3aWR0aD0yL3QqKGUvMiksdGhpcy5zaW5UYWJsZT1uZXcgRmxvYXQzMkFycmF5KHQpLHRoaXMuY29zVGFibGU9bmV3IEZsb2F0MzJBcnJheSh0KSx0aGlzLndpbmRvd1ZhbHVlcz1uZXcgRmxvYXQzMkFycmF5KHQpLHRoaXMucmV2ZXJzZVRhYmxlPW5ldyBVaW50MzJBcnJheSh0KSx0aGlzLnBlYWtCYW5kPTAsdGhpcy5wZWFrPTAsYSl7Y2FzZSJiYXJ0bGV0dCI6Zm9yKGxldCBlPTA7ZTx0O2UrKyl0aGlzLndpbmRvd1ZhbHVlc1tlXT0yLyh0LTEpKigodC0xKS8yLU1hdGguYWJzKGUtKHQtMSkvMikpO2JyZWFrO2Nhc2UiYmFydGxldHRIYW5uIjpmb3IobGV0IGU9MDtlPHQ7ZSsrKXRoaXMud2luZG93VmFsdWVzW2VdPS42Mi0uNDgqTWF0aC5hYnMoZS8odC0xKS0uNSktLjM4Kk1hdGguY29zKDIqTWF0aC5QSSplLyh0LTEpKTticmVhaztjYXNlImJsYWNrbWFuIjpyPXJ8fC4xNjtmb3IobGV0IGU9MDtlPHQ7ZSsrKXRoaXMud2luZG93VmFsdWVzW2VdPSgxLXIpLzItLjUqTWF0aC5jb3MoMipNYXRoLlBJKmUvKHQtMSkpK3IvMipNYXRoLmNvcyg0Kk1hdGguUEkqZS8odC0xKSk7YnJlYWs7Y2FzZSJjb3NpbmUiOmZvcihsZXQgZT0wO2U8dDtlKyspdGhpcy53aW5kb3dWYWx1ZXNbZV09TWF0aC5jb3MoTWF0aC5QSSplLyh0LTEpLU1hdGguUEkvMik7YnJlYWs7Y2FzZSJnYXVzcyI6cj1yfHwuMjU7Zm9yKGxldCBlPTA7ZTx0O2UrKyl0aGlzLndpbmRvd1ZhbHVlc1tlXT1NYXRoLnBvdyhNYXRoLkUsLS41Kk1hdGgucG93KChlLSh0LTEpLzIpLyhyKih0LTEpLzIpLDIpKTticmVhaztjYXNlImhhbW1pbmciOmZvcihsZXQgZT0wO2U8dDtlKyspdGhpcy53aW5kb3dWYWx1ZXNbZV09LjU0LS40NipNYXRoLmNvcygyKk1hdGguUEkqZS8odC0xKSk7YnJlYWs7Y2FzZSJoYW5uIjpjYXNlIHZvaWQgMDpmb3IobGV0IGU9MDtlPHQ7ZSsrKXRoaXMud2luZG93VmFsdWVzW2VdPS41KigxLU1hdGguY29zKDIqTWF0aC5QSSplLyh0LTEpKSk7YnJlYWs7Y2FzZSJsYW5jem96Ijpmb3IobGV0IGU9MDtlPHQ7ZSsrKXRoaXMud2luZG93VmFsdWVzW2VdPU1hdGguc2luKE1hdGguUEkqKDIqZS8odC0xKS0xKSkvKE1hdGguUEkqKDIqZS8odC0xKS0xKSk7YnJlYWs7Y2FzZSJyZWN0YW5ndWxhciI6Zm9yKGxldCBlPTA7ZTx0O2UrKyl0aGlzLndpbmRvd1ZhbHVlc1tlXT0xO2JyZWFrO2Nhc2UidHJpYW5ndWxhciI6Zm9yKGxldCBlPTA7ZTx0O2UrKyl0aGlzLndpbmRvd1ZhbHVlc1tlXT0yL3QqKHQvMi1NYXRoLmFicyhlLSh0LTEpLzIpKTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKCJObyBzdWNoIHdpbmRvdyBmdW5jdGlvbiAnIithKyInIil9bGV0IHM9MSxuPXQ+PjE7Zm9yKDtzPHQ7KXtmb3IobGV0IHQ9MDt0PHM7dCsrKXRoaXMucmV2ZXJzZVRhYmxlW3Qrc109dGhpcy5yZXZlcnNlVGFibGVbdF0rbjtzPDw9MSxuPj49MX1mb3IobGV0IGU9MDtlPHQ7ZSsrKXRoaXMuc2luVGFibGVbZV09TWF0aC5zaW4oLU1hdGguUEkvZSksdGhpcy5jb3NUYWJsZVtlXT1NYXRoLmNvcygtTWF0aC5QSS9lKTt0aGlzLmNhbGN1bGF0ZVNwZWN0cnVtPWZ1bmN0aW9uKHQpe2NvbnN0IGU9dGhpcy5idWZmZXJTaXplLGE9dGhpcy5jb3NUYWJsZSxyPXRoaXMuc2luVGFibGUscz10aGlzLnJldmVyc2VUYWJsZSxuPW5ldyBGbG9hdDMyQXJyYXkoZSksbz1uZXcgRmxvYXQzMkFycmF5KGUpLGw9Mi90aGlzLmJ1ZmZlclNpemUsaT1NYXRoLnNxcnQsaD1uZXcgRmxvYXQzMkFycmF5KGUvMik7bGV0IGMsdSxmO2NvbnN0IE09TWF0aC5mbG9vcihNYXRoLmxvZyhlKS9NYXRoLkxOMik7aWYoTWF0aC5wb3coMixNKSE9PWUpdGhyb3ciSW52YWxpZCBidWZmZXIgc2l6ZSwgbXVzdCBiZSBhIHBvd2VyIG9mIDIuIjtpZihlIT09dC5sZW5ndGgpdGhyb3ciU3VwcGxpZWQgYnVmZmVyIGlzIG5vdCB0aGUgc2FtZSBzaXplIGFzIGRlZmluZWQgRkZULiBGRlQgU2l6ZTogIitlKyIgQnVmZmVyIFNpemU6ICIrdC5sZW5ndGg7bGV0IHcsYixkLHAsZyxtLGsseSxUPTE7Zm9yKGxldCBhPTA7YTxlO2ErKyluW2FdPXRbc1thXV0qdGhpcy53aW5kb3dWYWx1ZXNbc1thXV0sb1thXT0wO2Zvcig7VDxlOyl7dz1hW1RdLGI9cltUXSxkPTEscD0wO2ZvcihsZXQgdD0wO3Q8VDt0Kyspe2xldCBhPXQ7Zm9yKDthPGU7KWc9YStULG09ZCpuW2ddLXAqb1tnXSxrPWQqb1tnXStwKm5bZ10sbltnXT1uW2FdLW0sb1tnXT1vW2FdLWssblthXSs9bSxvW2FdKz1rLGErPVQ8PDE7eT1kLGQ9eSp3LXAqYixwPXkqYitwKnd9VDw8PTF9Zm9yKGxldCB0PTAsYT1lLzI7dDxhO3QrKyljPW5bdF0sdT1vW3RdLGY9bCppKGMqYyt1KnUpLGY+dGhpcy5wZWFrJiYodGhpcy5wZWFrQmFuZD10LHRoaXMucGVhaz1mKSxoW3RdPWY7cmV0dXJuIGh9fWxldCBmPW51bGw7c2VsZi5vbm1lc3NhZ2U9ZnVuY3Rpb24odCl7Y29uc3R7dHlwZTpNLGlkOncsYXVkaW9EYXRhOmIsb3B0aW9uczpkfT10LmRhdGE7aWYoImNhbGN1bGF0ZUZyZXF1ZW5jaWVzIj09PU0pdHJ5e2NvbnN0IHQ9ZnVuY3Rpb24odCxNKXtjb25zdHtzdGFydFRpbWU6dyxlbmRUaW1lOmIsc2FtcGxlUmF0ZTpkLGZmdFNhbXBsZXM6cCx3aW5kb3dGdW5jOmcsYWxwaGE6bSxub3ZlcmxhcDprLHNjYWxlOnksZ2FpbkRCOlQscmFuZ2VEQjpGLHNwbGl0Q2hhbm5lbHM6SX09TSxWPU1hdGguZmxvb3IodypkKSxBPU1hdGguZmxvb3IoYipkKSxQPUk/dC5sZW5ndGg6MTtmJiZmLmJ1ZmZlclNpemU9PT1wfHwoZj1uZXcgdShwLGQsZyxtfHwuMTYpKTtjb25zdCBTPWZ1bmN0aW9uKHQsYyx1LGYpe3N3aXRjaCh0KXtjYXNlIm1lbCI6cmV0dXJuIGgoYyx1LGYsZSxhKTtjYXNlImxvZ2FyaXRobWljIjpyZXR1cm4gaChjLHUsZixyLHMpO2Nhc2UiYmFyayI6cmV0dXJuIGgoYyx1LGYsbixvKTtjYXNlImVyYiI6cmV0dXJuIGgoYyx1LGYsbCxpKTtkZWZhdWx0OnJldHVybiBudWxsfX0oeSxwLzIscCxkKTtsZXQgej1rfHxNYXRoLm1heCgwLE1hdGgucm91bmQoLjUqcCkpO2NvbnN0IHY9LjUqcDt6PU1hdGgubWluKHosdik7Y29uc3QgQj1NYXRoLm1heCg2NCwuMjUqcCkscT1NYXRoLm1heChCLHAteikseD1bXTtmb3IobGV0IGU9MDtlPFA7ZSsrKXtjb25zdCBhPXRbZV0scj1bXTtmb3IobGV0IHQ9Vjt0K3A8QTt0Kz1xKXtjb25zdCBlPWEuc2xpY2UodCx0K3ApO2xldCBzPWYuY2FsY3VsYXRlU3BlY3RydW0oZSk7UyYmKHM9YyhzLFMpKTtjb25zdCBuPW5ldyBVaW50OEFycmF5KHMubGVuZ3RoKSxvPVQrRjtmb3IobGV0IHQ9MDt0PHMubGVuZ3RoO3QrKyl7Y29uc3QgZT1zW3RdPjFlLTEyP3NbdF06MWUtMTIsYT0yMCpNYXRoLmxvZzEwKGUpO25bdF09YTwtbz8wOmE+LVQ/MjU1Ok1hdGgucm91bmQoKGErVCkvRioyNTUpfXIucHVzaChuKX14LnB1c2gocil9cmV0dXJuIHh9KGIsZCksTT17dHlwZToiZnJlcXVlbmNpZXNSZXN1bHQiLGlkOncscmVzdWx0OnR9O3NlbGYucG9zdE1lc3NhZ2UoTSl9Y2F0Y2godCl7Y29uc3QgZT17dHlwZToiZnJlcXVlbmNpZXNSZXN1bHQiLGlkOncsZXJyb3I6dCBpbnN0YW5jZW9mIEVycm9yP3QubWVzc2FnZTpTdHJpbmcodCl9O3NlbGYucG9zdE1lc3NhZ2UoZSl9fX0oKTsKLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3BlY3Ryb2dyYW0td29ya2VyLmpzLm1hcAoK");let jc=class Ms extends $b{static create(t){return new Ms(t||{})}constructor(t){var e,n;if(super(t),this.canvases=[],this.useWebWorker=!1,this.worker=null,this.workerPromises=new Map,this.cachedFrequencies=null,this.cachedResampledData=null,this.cachedBuffer=null,this.cachedWidth=0,this.renderTimeout=null,this.isRendering=!1,this.lastZoomLevel=0,this.renderThrottleMs=50,this.zoomThreshold=.05,this.drawnCanvases={},this.pendingBitmaps=new Set,this.isScrollable=!1,this.scrollUnsubscribe=null,this.frequenciesDataUrl=t.frequenciesDataUrl,this.frequenciesDataUrl&&!t.sampleRate)throw new Error("sampleRate option is required when using frequenciesDataUrl");this.container=typeof t.container=="string"?document.querySelector(t.container):t.container,this.useWebWorker=t.useWebWorker===!0,this.colorMap=(function(s="roseus"){if(s&&typeof s!="string"){if(s.length<256)throw new Error("Colormap must contain 256 elements");for(let o=0;o<s.length;o++)if(s[o].length!==4)throw new Error("ColorMap entries must contain 4 values");return s}const r=kb[s];if(!r)throw Error("No such colormap '"+s+"'");return r()})(t.colorMap),this.fftSamples=t.fftSamples||512,this.height=t.height||200,this.noverlap=t.noverlap||null,this.windowFunc=t.windowFunc||"hann",this.alpha=t.alpha,this.frequencyMin=t.frequencyMin||0,this.frequencyMax=t.frequencyMax||0,this.gainDB=(e=t.gainDB)!==null&&e!==void 0?e:20,this.rangeDB=(n=t.rangeDB)!==null&&n!==void 0?n:80,this.scale=t.scale||"mel",this.numMelFilters=this.fftSamples/2,this.numLogFilters=this.fftSamples/2,this.numBarkFilters=this.fftSamples/2,this.numErbFilters=this.fftSamples/2,t.maxCanvasWidth&&(Ms.MAX_CANVAS_WIDTH=t.maxCanvasWidth),this.renderThrottleMs=50,this.zoomThreshold=.05,this.createWrapper(),this.createCanvas(),this.useWebWorker&&this.initializeWorker()}initializeWorker(){if(typeof window<"u"&&typeof Worker<"u")try{this.worker=new Qb,this.worker.onmessage=t=>{const{type:e,id:n,result:s,error:r}=t.data;if(e==="frequenciesResult"){const o=this.workerPromises.get(n);o&&(this.workerPromises.delete(n),r?o.reject(new Error(r)):o.resolve(s))}},this.worker.onerror=t=>{console.warn("Spectrogram worker error, falling back to main thread:",t),this.worker=null}}catch(t){console.warn("Failed to initialize worker, falling back to main thread:",t),this.worker=null}else console.warn("Worker not available in this environment, using main thread calculation")}onInit(){this.wrapper||this.createWrapper(),this.canvasContainer||this.createCanvas(),this.container=this.wavesurfer.getWrapper(),this.container.appendChild(this.wrapper),this.wavesurfer.options.fillParent&&Object.assign(this.wrapper.style,{width:"100%",overflowX:"hidden",overflowY:"hidden"}),this.subscriptions.push(this.wavesurfer.on("redraw",(()=>this.throttledRender()))),this.wavesurfer.getDecodedData()&&setTimeout((()=>{this.throttledRender()}),0)}destroy(){this.unAll(),this.wavesurfer&&(typeof this._onReady=="function"&&this.wavesurfer.un("ready",this._onReady),typeof this._onRender=="function"&&this.wavesurfer.un("redraw",this._onRender)),this.renderTimeout&&(clearTimeout(this.renderTimeout),this.renderTimeout=null),this.scrollUnsubscribe&&(this.scrollUnsubscribe(),this.scrollUnsubscribe=null),this.pendingBitmaps.clear(),this.worker&&(this.worker.terminate(),this.worker=null),this.cachedFrequencies=null,this.cachedResampledData=null,this.cachedBuffer=null,this.clearCanvases(),this.canvasContainer&&(this.canvasContainer.remove(),this.canvasContainer=null),this.wrapper&&(this.wrapper.remove(),this.wrapper=null),this.labelsEl&&(this.labelsEl.remove(),this.labelsEl=null),this.container=null,this.isRendering=!1,this.lastZoomLevel=0,this.wavesurfer=null,this.util=null,this.options=null,super.destroy()}loadFrequenciesData(t){return lr(this,void 0,void 0,(function*(){const e=yield fetch(t);if(!e.ok)throw new Error("Unable to fetch frequencies data");const n=yield e.json();this.drawSpectrogram(n)}))}getFrequenciesData(){return lr(this,void 0,void 0,(function*(){var t;const e=(t=this.wavesurfer)===null||t===void 0?void 0:t.getDecodedData();if(!e)return null;if(this.cachedBuffer===e&&this.cachedFrequencies)return this.cachedFrequencies;{const n=yield this.getFrequencies(e);return this.cachedFrequencies=n,this.cachedBuffer=e,n}}))}clearCache(){this.cachedFrequencies=null,this.cachedResampledData=null,this.cachedBuffer=null,this.cachedWidth=0,this.lastZoomLevel=0}createWrapper(){var t,e;this.wrapper=Fo("div",{style:{display:"block",position:"relative",userSelect:"none"}}),this.options.labels&&(this.labelsEl=Fo("canvas",{part:"spec-labels",style:{position:"absolute",zIndex:9,width:"55px",height:"100%"}},this.wrapper)),this._onWrapperClick=(t=this.wrapper,e=this.emit.bind(this),n=>{const s=t.getBoundingClientRect(),r=n.clientX-s.left,o=s.width;e("click",r/o)}),this.wrapper.addEventListener("click",this._onWrapperClick)}createCanvas(){this.canvasContainer=Fo("div",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:4}},this.wrapper)}createSingleCanvas(t,e,n){const s=Fo("canvas",{style:{position:"absolute",left:`${Math.round(n)}px`,top:"0",width:`${t}px`,height:`${e}px`,zIndex:4}});return s.width=Math.round(t),s.height=Math.round(e),this.canvasContainer.appendChild(s),s}clearCanvases(){this.canvases.forEach((t=>t.remove())),this.canvases=[],this.drawnCanvases={}}clearExcessCanvases(){Object.keys(this.drawnCanvases).length>Ms.MAX_NODES&&this.clearCanvases()}throttledRender(){var t;if(this.renderTimeout&&clearTimeout(this.renderTimeout),this.isRendering)return;const e=((t=this.wavesurfer)===null||t===void 0?void 0:t.options.minPxPerSec)||0;Math.abs(e-this.lastZoomLevel)/Math.max(e,this.lastZoomLevel,1)<this.zoomThreshold&&this.cachedFrequencies?this.renderTimeout=window.setTimeout((()=>{this.fastRender()}),this.renderThrottleMs):this.renderTimeout=window.setTimeout((()=>{this.render()}),this.renderThrottleMs)}render(){return lr(this,void 0,void 0,(function*(){var t,e;if(!this.isRendering){this.isRendering=!0;try{this.frequenciesDataUrl?yield this.loadFrequenciesData(this.frequenciesDataUrl):!((t=this.wavesurfer)===null||t===void 0)&&t.getDecodedData()&&(yield this.getFrequenciesData(),this.drawSpectrogram(this.cachedFrequencies)),this.lastZoomLevel=((e=this.wavesurfer)===null||e===void 0?void 0:e.options.minPxPerSec)||0}finally{this.isRendering=!1}}}))}fastRender(){var t;if(!this.isRendering&&this.cachedFrequencies){this.isRendering=!0;try{this.drawSpectrogram(this.cachedFrequencies),this.lastZoomLevel=((t=this.wavesurfer)===null||t===void 0?void 0:t.options.minPxPerSec)||0}finally{this.isRendering=!1}}}drawSpectrogram(t){var e,n,s;isNaN(t[0][0])||(t=[t]),this.clearCanvases();const r=this.height*t.length;this.wrapper.style.height=r+"px";const o=this.getWidth(),a=Math.min(Ms.MAX_CANVAS_WIDTH,o);if(o===0||r===0)return;const l=Math.ceil(o/a);let c;const u=((e=t[0])===null||e===void 0?void 0:e.length)||0;o!==u?this.cachedResampledData&&this.cachedWidth===o?c=this.cachedResampledData:(c=this.efficientResample(t,o),this.cachedResampledData=c,this.cachedWidth=o):c=t;const h=!((n=this.buffer)===null||n===void 0)&&n.sampleRate?this.buffer.sampleRate/2:(this.options.sampleRate||0)/2,d=this.frequencyMin,f=this.frequencyMax,g=f>h,v=g?this.colorMap[this.colorMap.length-1]:null,m=p=>{if(p<0||p>=l||this.drawnCanvases[p])return;this.drawnCanvases[p]=!0;const x=p*a,y=Math.min(a,o-x);if(y<=0)return;const _=this.createSingleCanvas(y,r,x);this.canvases.push(_);const b=_.getContext("2d");if(b){g&&v&&(b.fillStyle=`rgba(${255*v[0]}, ${255*v[1]}, ${255*v[2]}, ${v[3]})`,b.fillRect(0,0,y,r));for(let E=0;E<c.length;E++)this.drawSpectrogramSegment(c[E],b,y,this.height,E*this.height,x,o,h,d,f)}};if(this.isScrollable=o>this.getWrapperWidth(),this.scrollUnsubscribe&&(this.scrollUnsubscribe(),this.scrollUnsubscribe=null),!this.isScrollable||l<=3)for(let p=0;p<l;p++)m(p);else{const p=()=>{var b;const E=(b=this.wavesurfer)===null||b===void 0?void 0:b.getWrapper();if(!E)return;const T=E.scrollLeft||0,A=E.clientWidth||0,S=Math.max(0,T-.5*A),M=Math.min(o,T+1.5*A),C=Math.floor(S/o*l),P=Math.min(Math.ceil(M/o*l),l-1);Object.keys(this.drawnCanvases).length>Ms.MAX_NODES&&this.clearExcessCanvases();for(let L=C;L<=P;L++)m(L)};p();let x=null;const y=()=>{x&&clearTimeout(x),x=window.setTimeout(p,16)},_=(s=this.wavesurfer)===null||s===void 0?void 0:s.getWrapper();_&&(_.addEventListener("scroll",y,{passive:!0}),this.scrollUnsubscribe=()=>{_.removeEventListener("scroll",y),x&&clearTimeout(x)})}this.options.labels&&this.loadLabels(this.options.labelsBackground,"12px","12px","",this.options.labelsColor,this.options.labelsHzColor||this.options.labelsColor,"center","#specLabels",t.length),this.emit("ready")}drawSpectrogramSegment(t,e,n,s,r,o,a,l,c,u){const h=t[0].length,d=Math.floor(o/a*t.length),f=Math.min(Math.ceil((o+n)/a*t.length),t.length),g=t.slice(d,f);if(g.length===0)return;const v=g.length,m=new ImageData(v,h),p=m.data;this.fillImageDataQuality(p,g,v,h);const x=Cs(c,this.scale)/Cs(l,this.scale),y=Cs(u,this.scale)/Cs(l,this.scale),_=Math.min(1,y),b=createImageBitmap(m,0,Math.round(h*(1-_)),v,Math.round(h*(_-x)));this.pendingBitmaps.add(b),b.then((E=>{if(this.pendingBitmaps.delete(b),e.canvas.parentNode){const T=s*_/y,A=r+s*(1-_/y);e.drawImage(E,0,A,n,T),"close"in E&&E.close()}})).catch((E=>{this.pendingBitmaps.delete(b)}))}getWidth(){return this.wavesurfer.getWrapper().offsetWidth}getWrapperWidth(){var t,e;return((e=(t=this.wavesurfer)===null||t===void 0?void 0:t.getWrapper())===null||e===void 0?void 0:e.clientWidth)||0}calculateFrequenciesWithWorker(t){return lr(this,void 0,void 0,(function*(){var e,n;if(!this.worker)throw new Error("Worker not available");const s=this.fftSamples,r=((e=this.options.splitChannels)!==null&&e!==void 0?e:!((n=this.wavesurfer)===null||n===void 0)&&n.options.splitChannels)?t.numberOfChannels:1;let o=this.noverlap;if(!o){const u=this.getWidth(),h=t.length/u;o=Math.max(0,Math.round(s-h))}const a=[];for(let u=0;u<r;u++)a.push(t.getChannelData(u));const l=`${Date.now()}_${Math.random()}`,c=new Promise(((u,h)=>{this.workerPromises.set(l,{resolve:u,reject:h}),setTimeout((()=>{this.workerPromises.has(l)&&(this.workerPromises.delete(l),h(new Error("Worker timeout")))}),3e4)}));return this.worker.postMessage({type:"calculateFrequencies",id:l,audioData:a,options:{startTime:0,endTime:t.duration,sampleRate:t.sampleRate,fftSamples:this.fftSamples,windowFunc:this.windowFunc,alpha:this.alpha,noverlap:o,scale:this.scale,gainDB:this.gainDB,rangeDB:this.rangeDB,splitChannels:this.options.splitChannels||!1}}),c}))}getFrequencies(t){return lr(this,void 0,void 0,(function*(){var e,n;if(this.frequencyMax=this.frequencyMax||t.sampleRate/2,this.buffer=t,!t)return[];if(this.useWebWorker&&this.worker)try{return yield this.calculateFrequenciesWithWorker(t)}catch(m){console.warn("Worker calculation failed, falling back to main thread:",m)}const s=this.fftSamples,r=((e=this.options.splitChannels)!==null&&e!==void 0?e:!((n=this.wavesurfer)===null||n===void 0)&&n.options.splitChannels)?t.numberOfChannels:1,o=t.sampleRate,a=[];let l=this.noverlap;if(!l){const m=this.getWidth(),p=t.length/m;l=Math.max(0,Math.round(s-p))}let c=l||Math.max(0,Math.round(.5*s));const u=.5*s;c=Math.min(c,u);const h=Math.max(64,.25*s),d=Math.max(h,s-c),f=new Wb(s,o,this.windowFunc,this.alpha),g=this.fftSamples/2,v=(function(m,p,x,y){switch(m){case"mel":return No(p,x,y,wf,Af);case"logarithmic":return No(p,x,y,Rf,Cf);case"bark":return No(p,x,y,Pf,Df);case"erb":return No(p,x,y,If,Lf);default:return null}})(this.scale,g,this.fftSamples,o);for(let m=0;m<r;m++){const p=t.getChannelData(m),x=[];for(let y=0;y+s<p.length;y+=d){const _=p.slice(y,y+s);let b=f.calculateSpectrum(_);v&&(b=zb(b,v));const E=new Uint8Array(b.length),T=this.gainDB+this.rangeDB;for(let A=0;A<b.length;A++){const S=b[A]>1e-12?b[A]:1e-12,M=20*Math.log10(S);M<-T?E[A]=0:M>-this.gainDB?E[A]=255:E[A]=Math.round((M+this.gainDB)/this.rangeDB*255)}x.push(E)}a.push(x)}return a}))}loadLabels(t,e,n,s,r,o,a,l,c){t=t||"rgba(68,68,68,0)",e=e||"12px",n=n||"12px",s=s||"Helvetica",r=r||"#fff",o=o||"#fff",a=a||"center";const u=this.height||512,h=u/256*5;this.frequencyMin,this.frequencyMax;const d=this.labelsEl.getContext("2d"),f=window.devicePixelRatio;if(this.labelsEl.height=this.height*c*f,this.labelsEl.width=55*f,d.scale(f,f),d)for(let g=0;g<c;g++){let v;for(d.fillStyle=t,d.fillRect(0,g*u,55,(1+g)*u),d.fill(),v=0;v<=h;v++){d.textAlign=a,d.textBaseline="middle";const m=Gb(v,h,this.frequencyMin,this.frequencyMax,this.scale),p=Hb(m),x=Vb(m),y=16;let _=(1+g)*u-v/h*u;_=Math.min(Math.max(_,g*u+10),(1+g)*u-10),d.fillStyle=o,d.font=n+" "+s,d.fillText(x,y+24,_),d.fillStyle=r,d.font=e+" "+s,d.fillText(p,y,_)}}}efficientResample(t,e){return t.map((n=>this.resampleChannel(n,e)))}resampleChannel(t,e){var n;const s=t.length,r=((n=t[0])===null||n===void 0?void 0:n.length)||0;if(s===e||e===0)return t;const o=s/e,a=new Array(e);if(o>=1)for(let l=0;l<e;l++){const c=Math.floor(l*o),u=Math.min(Math.ceil((l+1)*o),s),h=u-c,d=new Uint8Array(r);if(h===1)d.set(t[c]);else for(let f=0;f<r;f++){let g=0;for(let v=c;v<u;v++)g+=t[v][f];d[f]=Math.round(g/h)}a[l]=d}else for(let l=0;l<e;l++){const c=l*o,u=Math.floor(c),h=Math.min(u+1,s-1),d=c-u,f=new Uint8Array(r);if(d===0||u===h)f.set(t[u]);else{const g=t[u],v=t[h],m=1-d;for(let p=0;p<r;p++)f[p]=Math.round(g[p]*m+v[p]*d)}a[l]=f}return a}fillImageDataQuality(t,e,n,s){const r=this.colorMap;for(let o=0;o<n;o++){const a=e[o];for(let l=0;l<s;l++){const c=r[a[l]],u=4*((s-l-1)*n+o);t[u]=255*c[0],t[u+1]=255*c[1],t[u+2]=255*c[2],t[u+3]=255*c[3]}}}};jc.MAX_CANVAS_WIDTH=3e4,jc.MAX_NODES=10;let Jb=class{constructor(){this.listeners={}}on(t,e,n){if(this.listeners[t]||(this.listeners[t]=new Set),n?.once){const s=(...r)=>{this.un(t,s),e(...r)};return this.listeners[t].add(s),()=>this.un(t,s)}return this.listeners[t].add(e),()=>this.un(t,e)}un(t,e){var n;(n=this.listeners[t])===null||n===void 0||n.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach((n=>n(...e)))}},tS=class extends Jb{constructor(t){super(),this.subscriptions=[],this.isDestroyed=!1,this.options=t}onInit(){}_init(t){this.isDestroyed&&(this.subscriptions=[],this.isDestroyed=!1),this.wavesurfer=t,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach((t=>t())),this.subscriptions=[],this.isDestroyed=!0,this.wavesurfer=void 0}};function Ff(i,t){const e=t.xmlns?document.createElementNS(t.xmlns,i):document.createElement(i);for(const[n,s]of Object.entries(t))if(n==="children"&&s)for(const[r,o]of Object.entries(s))o instanceof Node?e.appendChild(o):typeof o=="string"?e.appendChild(document.createTextNode(o)):e.appendChild(Ff(r,o));else n==="style"?Object.assign(e.style,s):n==="textContent"?e.textContent=s:e.setAttribute(n,s.toString());return e}function Rl(i,t,e){return Ff(i,t||{})}const eS={height:20,timeOffset:0,formatTimeCallback:i=>i/60>1?`${Math.floor(i/60)}:${`${(i=Math.round(i%60))<10?"0":""}${i}`}`:`${Math.round(1e3*i)/1e3}`};let nS=class Bf extends tS{constructor(t){super(t||{}),this.unsubscribeNotches=[],this.notchElements=new Map,this.options=Object.assign({},eS,t),this.timelineWrapper=this.initTimelineWrapper()}static create(t){return new Bf(t)}onInit(){var t;if(!this.wavesurfer)throw Error("WaveSurfer is not initialized");let e=this.wavesurfer.getWrapper();if(this.options.container instanceof HTMLElement)e=this.options.container;else if(typeof this.options.container=="string"){const n=document.querySelector(this.options.container);if(!n)throw Error(`No Timeline container found matching ${this.options.container}`);e=n}this.options.insertPosition?(e.firstElementChild||e).insertAdjacentElement(this.options.insertPosition,this.timelineWrapper):e.appendChild(this.timelineWrapper),this.subscriptions.push(this.wavesurfer.on("redraw",(()=>this.initTimeline()))),(!((t=this.wavesurfer)===null||t===void 0)&&t.getDuration()||this.options.duration)&&this.initTimeline()}destroy(){this.unsubscribeNotches.forEach((t=>t())),this.unsubscribeNotches=[],this.timelineWrapper.remove(),super.destroy()}initTimelineWrapper(){return Rl("div",{part:"timeline-wrapper",style:{pointerEvents:"none"}})}defaultTimeInterval(t){return t>=25?1:5*t>=25?5:15*t>=25?15:60*Math.ceil(.5/t)}defaultPrimaryLabelInterval(t){return t>=25?10:5*t>=25?6:4}defaultSecondaryLabelInterval(t){return t>=25?5:2}virtualAppend(t,e,n){if(this.notchElements.set(n,{start:t,width:n.clientWidth,wasVisible:!1}),!this.wavesurfer)return;const s=this.wavesurfer.getScroll(),r=s+this.wavesurfer.getWidth(),o=this.notchElements.get(n),a=t>=s&&t+o.width<r;o.wasVisible=a,a&&e.appendChild(n)}updateVisibleNotches(t,e,n){this.notchElements.forEach(((s,r)=>{const o=s.start>=t&&s.start+s.width<e;o!==s.wasVisible&&(s.wasVisible=o,o?n.appendChild(r):r.remove())}))}initTimeline(){var t,e,n,s,r,o,a,l;this.unsubscribeNotches.forEach((y=>y())),this.unsubscribeNotches=[],this.notchElements.clear();const c=(n=(e=(t=this.wavesurfer)===null||t===void 0?void 0:t.getDuration())!==null&&e!==void 0?e:this.options.duration)!==null&&n!==void 0?n:0,u=(((s=this.wavesurfer)===null||s===void 0?void 0:s.getWrapper().scrollWidth)||this.timelineWrapper.scrollWidth)/c,h=(r=this.options.timeInterval)!==null&&r!==void 0?r:this.defaultTimeInterval(u),d=(o=this.options.primaryLabelInterval)!==null&&o!==void 0?o:this.defaultPrimaryLabelInterval(u),f=this.options.primaryLabelSpacing,g=(a=this.options.secondaryLabelInterval)!==null&&a!==void 0?a:this.defaultSecondaryLabelInterval(u),v=this.options.secondaryLabelSpacing,m=this.options.insertPosition==="beforebegin",p=Rl("div",{style:Object.assign({height:`${this.options.height}px`,overflow:"hidden",fontSize:this.options.height/2+"px",whiteSpace:"nowrap"},m?{position:"absolute",top:"0",left:"0",right:"0",zIndex:"2"}:{position:"relative"})});p.setAttribute("part","timeline"),typeof this.options.style=="string"?p.setAttribute("style",p.getAttribute("style")+this.options.style):typeof this.options.style=="object"&&Object.assign(p.style,this.options.style);const x=Rl("div",{style:{width:"0",height:"50%",display:"flex",flexDirection:"column",justifyContent:m?"flex-start":"flex-end",top:m?"0":"auto",bottom:m?"auto":"0",overflow:"visible",borderLeft:"1px solid currentColor",opacity:`${(l=this.options.secondaryLabelOpacity)!==null&&l!==void 0?l:.25}`,position:"absolute",zIndex:"1"}});for(let y=0,_=0;y<c;y+=h,_++){const b=x.cloneNode(),E=Math.round(100*y)%Math.round(100*d)==0||f&&_%f==0,T=Math.round(100*y)%Math.round(100*g)==0||v&&_%v==0;(E||T)&&(b.style.height="100%",b.style.textIndent="3px",b.textContent=this.options.formatTimeCallback(y),E&&(b.style.opacity="1"));const A=E?"primary":T?"secondary":"tick";b.setAttribute("part",`timeline-notch timeline-notch-${A}`);const S=Math.round(100*(y+this.options.timeOffset))/100*u;b.style.left=`${S}px`,this.virtualAppend(S,p,b)}this.timelineWrapper.innerHTML="",this.timelineWrapper.appendChild(p),this.wavesurfer&&this.unsubscribeNotches.push(this.wavesurfer.on("scroll",((y,_,b,E)=>{this.updateVisibleNotches(b,E,p)}))),this.emit("ready")}};function iS(i,t,e={}){const{fftSize:n=512,smoothingTimeConstant:s=.3}=e,r=i.createAnalyser();r.fftSize=n,r.smoothingTimeConstant=s;const o=r.frequencyBinCount,a=new Float32Array(o);return t.connect(r),{getRMS:()=>{r.getFloatTimeDomainData(a);let h=0;for(let d=0;d<a.length;d++)h+=a[d]*a[d];return Math.sqrt(h/a.length)},getPeak:()=>{r.getFloatTimeDomainData(a);let h=0;for(let d=0;d<a.length;d++){const f=Math.abs(a[d]);f>h&&(h=f)}return h},stop:()=>{t.disconnect(r)},analyserNode:r}}const sS=(i,t=1e-6,e=1)=>Math.min(Math.max(i,t),e);class fd{constructor({attack:t=.01,release:e=.2,sampleRate:n=60}={}){this.attack=t,this.release=e,this.sampleRate=n,this.value=0}process(t){const e=1/this.sampleRate,n=Math.exp(-e/this.attack),s=Math.exp(-e/this.release);return t>this.value?this.value=n*this.value+(1-n)*t:this.value=s*this.value+(1-s)*t,sS(this.value)}reset(t=0){this.value=t}}const cr={gainToDb:i=>20*Math.log10(i),dbToGain:i=>Math.pow(10,i/20)};function pd(i){const{sliderEl:t,outputEl:e,minDb:n=-60,maxDb:s=12,defaultDb:r=0}=i;if(!t||!e)throw new Error("sliderEl and outputEl must be provided.");const o=parseFloat(t.min),a=parseFloat(t.max),l=cr.dbToGain(n),c=cr.dbToGain(s);function u(g){if(g==o)return-1/0;const v=(g-o)/(a-o),m=l*Math.pow(c/l,v);return cr.gainToDb(m)}function h(g){if(g===-1/0)return o;const v=cr.dbToGain(g),m=Math.log(v/l)/Math.log(c/l);return o+(a-o)*m}function d(){const g=u(parseFloat(t.value));if(g===-1/0)e.textContent="-∞ dB";else{const v=g>0?"+":"";e.textContent=`${v}${g.toFixed(1)} dB`}}t.addEventListener("input",d);const f={setDb(g){t.value=h(g),t.dispatchEvent(new Event("input",{bubbles:!0}))},getDb(){return u(parseFloat(t.value))},getGain(){return cr.dbToGain(this.getDb())},destroy(){t.removeEventListener("input",d)}};return f.setDb(r),f}const rS=1/3,Dn=1/6,Cl=i=>Math.floor(i)|0,Pl=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function Of(i=Math.random){const t=oS(i),e=new Float64Array(t).map(r=>Pl[r%12*3]),n=new Float64Array(t).map(r=>Pl[r%12*3+1]),s=new Float64Array(t).map(r=>Pl[r%12*3+2]);return function(o,a,l){let c,u,h,d;const f=(o+a+l)*rS,g=Cl(o+f),v=Cl(a+f),m=Cl(l+f),p=(g+v+m)*Dn,x=g-p,y=v-p,_=m-p,b=o-x,E=a-y,T=l-_;let A,S,M,C,P,L;b>=E?E>=T?(A=1,S=0,M=0,C=1,P=1,L=0):b>=T?(A=1,S=0,M=0,C=1,P=0,L=1):(A=0,S=0,M=1,C=1,P=0,L=1):E<T?(A=0,S=0,M=1,C=0,P=1,L=1):b<T?(A=0,S=1,M=0,C=0,P=1,L=1):(A=0,S=1,M=0,C=1,P=1,L=0);const N=b-A+Dn,z=E-S+Dn,H=T-M+Dn,Y=b-C+2*Dn,V=E-P+2*Dn,Q=T-L+2*Dn,rt=b-1+3*Dn,pt=E-1+3*Dn,It=T-1+3*Dn,Ht=g&255,Jt=v&255,Ft=m&255;let $=.6-b*b-E*E-T*T;if($<0)c=0;else{const lt=Ht+t[Jt+t[Ft]];$*=$,c=$*$*(e[lt]*b+n[lt]*E+s[lt]*T)}let K=.6-N*N-z*z-H*H;if(K<0)u=0;else{const lt=Ht+A+t[Jt+S+t[Ft+M]];K*=K,u=K*K*(e[lt]*N+n[lt]*z+s[lt]*H)}let ft=.6-Y*Y-V*V-Q*Q;if(ft<0)h=0;else{const lt=Ht+C+t[Jt+P+t[Ft+L]];ft*=ft,h=ft*ft*(e[lt]*Y+n[lt]*V+s[lt]*Q)}let St=.6-rt*rt-pt*pt-It*It;if(St<0)d=0;else{const lt=Ht+1+t[Jt+1+t[Ft+1]];St*=St,d=St*St*(e[lt]*rt+n[lt]*pt+s[lt]*It)}return 32*(c+u+h+d)}}function oS(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const s=n+~~(i()*(256-n)),r=e[n];e[n]=e[s],e[s]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}function aS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function lS(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var t=i.default;if(typeof t=="function"){var e=function n(){var s=!1;try{s=this instanceof n}catch{}return s?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),e}var Wo={exports:{}},cS=Wo.exports,md;function uS(){return md||(md=1,(function(i){(function(t,e,n){function s(l){var c=this,u=a();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function r(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function o(l,c){var u=new s(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&r(h,u),d.state=function(){return r(u,{})}),d}function a(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}e&&e.exports?e.exports=o:this.alea=o})(cS,i)})(Wo)),Wo.exports}var Xo={exports:{}},hS=Xo.exports,gd;function dS(){return gd||(gd=1,(function(i){(function(t,e,n){function s(a){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function o(a,l){var c=new s(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=o:this.xor128=o})(hS,i)})(Xo)),Xo.exports}var $o={exports:{}},fS=$o.exports,_d;function pS(){return _d||(_d=1,(function(i){(function(t,e,n){function s(a){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function o(a,l){var c=new s(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=o:this.xorwow=o})(fS,i)})($o)),$o.exports}var qo={exports:{}},mS=qo.exports,vd;function gS(){return vd||(vd=1,(function(i){(function(t,e,n){function s(a){var l=this;l.next=function(){var u=l.x,h=l.i,d,f;return d=u[h],d^=d>>>7,f=d^d<<24,d=u[h+1&7],f^=d^d>>>10,d=u[h+3&7],f^=d^d>>>3,d=u[h+4&7],f^=d^d<<7,d=u[h+7&7],d=d^d<<13,f^=d^d<<9,u[h]=f,l.i=h+1&7,f};function c(u,h){var d,f=[];if(h===(h|0))f[0]=h;else for(h=""+h,d=0;d<h.length;++d)f[d&7]=f[d&7]<<15^h.charCodeAt(d)+f[d+1&7]<<13;for(;f.length<8;)f.push(0);for(d=0;d<8&&f[d]===0;++d);for(d==8?f[7]=-1:f[d],u.x=f,u.i=0,d=256;d>0;--d)u.next()}c(l,a)}function r(a,l){return l.x=a.x.slice(),l.i=a.i,l}function o(a,l){a==null&&(a=+new Date);var c=new s(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(u.x&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=o:this.xorshift7=o})(mS,i)})(qo)),qo.exports}var Yo={exports:{}},_S=Yo.exports,xd;function vS(){return xd||(xd=1,(function(i){(function(t,e,n){function s(a){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,f,g;return l.w=u=u+1640531527|0,g=h[d+34&127],f=h[d=d+1&127],g^=g<<13,f^=f<<17,g^=g>>>15,f^=f>>>12,g=h[d]=g^f,l.i=d,g+(u^u>>>16)|0};function c(u,h){var d,f,g,v,m,p=[],x=128;for(h===(h|0)?(f=h,h=null):(h=h+"\0",f=0,x=Math.max(x,h.length)),g=0,v=-32;v<x;++v)h&&(f^=h.charCodeAt((v+32)%h.length)),v===0&&(m=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,v>=0&&(m=m+1640531527|0,d=p[v&127]^=f+m,g=d==0?g+1:0);for(g>=128&&(p[(h&&h.length||0)&127]=-1),g=127,v=512;v>0;--v)f=p[g+34&127],d=p[g=g+1&127],f^=f<<13,d^=d<<17,f^=f>>>15,d^=d>>>12,p[g]=f^d;u.w=m,u.X=p,u.i=g}c(l,a)}function r(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function o(a,l){a==null&&(a=+new Date);var c=new s(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(u.X&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=o:this.xor4096=o})(_S,i)})(Yo)),Yo.exports}var jo={exports:{}},xS=jo.exports,yd;function yS(){return yd||(yd=1,(function(i){(function(t,e,n){function s(a){var l=this,c="";l.next=function(){var h=l.b,d=l.c,f=l.d,g=l.a;return h=h<<25^h>>>7^d,d=d-f|0,f=f<<24^f>>>8^g,g=g-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-f|0,l.d=f<<16^d>>>16^g,l.a=g-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):c+=a;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function o(a,l){var c=new s(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,f=(c.next()>>>0)/4294967296,g=(d+f)/(1<<21);while(g===0);return g},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=o:this.tychei=o})(xS,i)})(jo)),jo.exports}var Zo={exports:{}};const bS={},SS=Object.freeze(Object.defineProperty({__proto__:null,default:bS},Symbol.toStringTag,{value:"Module"})),MS=lS(SS);var ES=Zo.exports,bd;function TS(){return bd||(bd=1,(function(i){(function(t,e,n){var s=256,r=6,o=52,a="random",l=n.pow(s,r),c=n.pow(2,o),u=c*2,h=s-1,d;function f(_,b,E){var T=[];b=b==!0?{entropy:!0}:b||{};var A=p(m(b.entropy?[_,y(e)]:_??x(),3),T),S=new g(T),M=function(){for(var C=S.g(r),P=l,L=0;C<c;)C=(C+L)*s,P*=s,L=S.g(1);for(;C>=u;)C/=2,P/=2,L>>>=1;return(C+L)/P};return M.int32=function(){return S.g(4)|0},M.quick=function(){return S.g(4)/4294967296},M.double=M,p(y(S.S),e),(b.pass||E||function(C,P,L,N){return N&&(N.S&&v(N,S),C.state=function(){return v(S,{})}),L?(n[a]=C,P):C})(M,A,"global"in b?b.global:this==n,b.state)}function g(_){var b,E=_.length,T=this,A=0,S=T.i=T.j=0,M=T.S=[];for(E||(_=[E++]);A<s;)M[A]=A++;for(A=0;A<s;A++)M[A]=M[S=h&S+_[A%E]+(b=M[A])],M[S]=b;(T.g=function(C){for(var P,L=0,N=T.i,z=T.j,H=T.S;C--;)P=H[N=h&N+1],L=L*s+H[h&(H[N]=H[z=h&z+P])+(H[z]=P)];return T.i=N,T.j=z,L})(s)}function v(_,b){return b.i=_.i,b.j=_.j,b.S=_.S.slice(),b}function m(_,b){var E=[],T=typeof _,A;if(b&&T=="object")for(A in _)try{E.push(m(_[A],b-1))}catch{}return E.length?E:T=="string"?_:_+"\0"}function p(_,b){for(var E=_+"",T,A=0;A<E.length;)b[h&A]=h&(T^=b[h&A]*19)+E.charCodeAt(A++);return y(b)}function x(){try{var _;return d&&(_=d.randomBytes)?_=_(s):(_=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(_)),y(_)}catch{var b=t.navigator,E=b&&b.plugins;return[+new Date,t,E,t.screen,y(e)]}}function y(_){return String.fromCharCode.apply(0,_)}if(p(n.random(),e),i.exports){i.exports=f;try{d=MS}catch{}}else n["seed"+a]=f})(typeof self<"u"?self:ES,[],Math)})(Zo)),Zo.exports}var Dl,Sd;function wS(){if(Sd)return Dl;Sd=1;var i=uS(),t=dS(),e=pS(),n=gS(),s=vS(),r=yS(),o=TS();return o.alea=i,o.xor128=t,o.xorwow=e,o.xorshift7=n,o.xor4096=s,o.tychei=r,Dl=o,Dl}var AS=wS();const wu=aS(AS);function aa(i){return i==="lowshelf12"||i==="lowshelf24"||i==="highshelf12"||i==="highshelf24"||i==="peaking12"||i==="peaking24"}function Il(i){return i!=="noop"}function RS(i){return i==="lowpass12"||i==="lowpass24"||i==="highpass12"||i==="highpass24"||i==="bandpass12"||i==="bandpass24"||i==="peaking12"||i==="peaking24"||i==="notch12"||i==="notch24"}function Bo(i){switch(i){case"lowpass12":case"lowpass24":return"lowpass";case"highpass12":case"highpass24":return"highpass";case"bandpass12":case"bandpass24":return"bandpass";case"lowshelf12":case"lowshelf24":return"lowshelf";case"highshelf12":case"highshelf24":return"highshelf";case"peaking12":case"peaking24":return"peaking";case"notch12":case"notch24":return"notch"}}function Ko(i){switch(i){case"noop":return 0;case"lowpass12":case"highpass12":case"bandpass12":case"lowshelf12":case"highshelf12":case"peaking12":case"notch12":return 1;case"lowpass24":case"highpass24":case"bandpass24":case"lowshelf24":case"highshelf24":case"peaking24":case"notch24":return 2}}function la(i,t,e){let n=Math.log10(t),s=Math.log10(e);return(Math.log10(Ls(i,t,e))-n)/(s-n)}function ca(i,t,e){let n=Math.log10(t),s=Math.log10(e);return Ls(Math.pow(10,i*(s-n)+n),t,e)}function Ls(i,t,e){return Math.min(Math.max(i,t),e)}function CS(i,t=!1){return i>=1e3&&!t?(i/1e3).toFixed(2):i.toFixed(0)}function PS(i,t=!1){return i>=1e3&&!t?"kHz":"Hz"}let DS=()=>({events:{},emit(i,...t){let e=this.events[i]||[];for(let n=0,s=e.length;n<s;n++)e[n](...t)},on(i,t){var e;return(e=this.events[i])!=null&&e.push(t)||(this.events[i]=[t]),()=>{var n;this.events[i]=(n=this.events[i])==null?void 0:n.filter(s=>t!==s)}}});const IS=["lowpass12","lowpass24","highpass12","highpass24","bandpass12","bandpass24","lowshelf12","lowshelf24","highshelf12","highshelf24","peaking12","peaking24","notch12","notch24"],LS=[{type:"lowshelf12",frequency:30,gain:0,Q:.7,bypass:!1},{type:"peaking12",frequency:200,gain:0,Q:.7,bypass:!1},{type:"peaking12",frequency:1e3,gain:0,Q:.7,bypass:!1},{type:"highshelf12",frequency:5e3,gain:0,Q:.7,bypass:!1},{type:"noop",frequency:350,gain:0,Q:1,bypass:!1},{type:"noop",frequency:350,gain:0,Q:1,bypass:!1},{type:"noop",frequency:350,gain:0,Q:1,bypass:!1},{type:"noop",frequency:350,gain:0,Q:1,bypass:!1}];let US=class{constructor(t,e=LS,n=IS){this.audioCtx=t,this.spec=e,this.supportedFilterTypes=n,this.filterbank=[],this.input=t.createGain(),this.output=t.createGain(),this.buildFilterChain(e),this.emitter=DS()}connect(t){this.output.connect(t)}disconnect(t){this.output.disconnect(t)}on(t,e){return this.emitter.on(t,e)}setFilterType(t,e){var n;if(e==="noop"&&this.spec[t].type!=="noop"&&!this.spec[t].bypass?this.disconnectFilter(t):e!=="noop"&&this.spec[t].type==="noop"&&!this.spec[t].bypass&&this.connectFilter(t,e),this.spec[t].type=e,e!=="noop"&&!this.spec[t].bypass){let s=(n=this.filterbank.find(o=>o.idx===t))==null?void 0:n.filters;if(!s)throw new Error("Assertion failed: No filters in filterbank");for(let o of s)o.type=Bo(e);let r=Ko(e);for(;s.length>r;){let o=s.length-1,a=s[o],l=s[o-1],c=this.getNextInChain(t);a.disconnect(),l.disconnect(a),l.connect(c),s.splice(o,1)}for(;s.length<r;){let o=this.audioCtx.createBiquadFilter();o.type=Bo(e),o.frequency.value=this.spec[t].frequency,o.Q.value=this.spec[t].Q,o.gain.value=this.spec[t].gain;let a=s[s.length-1],l=this.getNextInChain(t);a.disconnect(l),a.connect(o),o.connect(l),s.push(o)}}this.emitter.emit("filtersChanged",this.spec)}toggleBypass(t,e){e&&!this.spec[t].bypass&&this.spec[t].type!=="noop"?this.disconnectFilter(t):!e&&this.spec[t].bypass&&this.spec[t].type!=="noop"&&this.connectFilter(t,this.spec[t].type),this.spec[t].bypass=e,this.emitter.emit("filtersChanged",this.spec)}disconnectFilter(t){var e;let n=(e=this.filterbank.find(o=>o.idx===t))==null?void 0:e.filters;if(!n)throw new Error("Assertion failed: No filters in filterbank when disconnecting filter. Was it connected?");let s=this.getPreviousInChain(t),r=this.getNextInChain(t);s.disconnect(n[0]),n[n.length-1].disconnect(r),s.connect(r),this.filterbank=this.filterbank.filter(o=>o.idx!==t)}connectFilter(t,e){let n=Array.from({length:Ko(e)},()=>{let o=this.audioCtx.createBiquadFilter();return o.type=Bo(e),o.frequency.value=this.spec[t].frequency,o.Q.value=this.spec[t].Q,o.gain.value=this.spec[t].gain,o}),s=this.getPreviousInChain(t),r=this.getNextInChain(t);s.disconnect(r),s.connect(n[0]);for(let o=0;o<n.length-1;o++)n[o].connect(n[o+1]);n[n.length-1].connect(r),this.filterbank.push({idx:t,filters:n})}setFilterFrequency(t,e){this.spec[t].frequency=e;let n=this.filterbank.find(s=>s.idx===t);if(n)for(let s of n.filters)s.frequency.value=e;this.emitter.emit("filtersChanged",this.spec)}setFilterQ(t,e){this.spec[t].Q=e;let n=this.filterbank.find(s=>s.idx===t);if(n)for(let s of n.filters)s.Q.value=e;this.emitter.emit("filtersChanged",this.spec)}setFilterGain(t,e){this.spec[t].gain=e;let n=this.filterbank.find(s=>s.idx===t);if(n)for(let s of n.filters)s.gain.value=e;this.emitter.emit("filtersChanged",this.spec)}getFrequencyResponse(t,e,n,s,r){let o=this.filterbank.find(a=>a.idx===t);return o?(o.filters[e].getFrequencyResponse(n,s,r),!0):!1}buildFilterChain(t){this.filterbank=[];for(let e=0;e<t.length;e++){let n=t[e];if(n.type==="noop"||n.bypass)continue;let s=Array.from({length:Ko(n.type)},()=>{let r=this.audioCtx.createBiquadFilter();return r.type=Bo(n.type),r.frequency.value=n.frequency,r.Q.value=n.Q,r.gain.value=n.gain,r});this.filterbank.push({idx:e,filters:s})}if(this.filterbank.length===0)this.input.connect(this.output);else for(let e=0;e<this.filterbank.length;e++){let{filters:n}=this.filterbank[e];e===0?this.input.connect(n[0]):this.filterbank[e-1].filters[this.filterbank[e-1].filters.length-1].connect(n[0]);for(let s=0;s<n.length-1;s++)n[s].connect(n[s+1]);e===this.filterbank.length-1&&n[n.length-1].connect(this.output)}}getPreviousInChain(t){let e=this.input,n=-1;for(let s of this.filterbank)s.idx<t&&s.idx>n&&(e=s.filters[s.filters.length-1],n=s.idx);return e}getNextInChain(t){let e=this.output,n=this.spec.length;for(let s of this.filterbank)s.idx>t&&s.idx<n&&(e=s.filters[0],n=s.idx);return e}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo=window,Au=Qo.ShadowRoot&&(Qo.ShadyCSS===void 0||Qo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ru=Symbol(),Md=new WeakMap;let zf=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ru)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Au&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=Md.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Md.set(e,t))}return t}toString(){return this.cssText}};const NS=i=>new zf(typeof i=="string"?i:i+"",void 0,Ru),Cu=(i,...t)=>{const e=i.length===1?i[0]:t.reduce(((n,s,r)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1]),i[0]);return new zf(e,i,Ru)},FS=(i,t)=>{Au?i.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((e=>{const n=document.createElement("style"),s=Qo.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}))},Ed=Au?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return NS(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ll;const ua=window,Td=ua.trustedTypes,BS=Td?Td.emptyScript:"",wd=ua.reactiveElementPolyfillSupport,Zc={toAttribute(i,t){switch(t){case Boolean:i=i?BS:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},kf=(i,t)=>t!==i&&(t==t||i==i),Ul={attribute:!0,type:String,converter:Zc,reflect:!1,hasChanged:kf},Kc="finalized";let Es=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const s=this._$Ep(n,e);s!==void 0&&(this._$Ev.set(s,n),t.push(s))})),t}static createProperty(t,e=Ul){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,n,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ul}static finalize(){if(this.hasOwnProperty(Kc))return!1;this[Kc]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,n=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of n)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const s of n)e.unshift(Ed(s))}else t!==void 0&&e.push(Ed(t));return e}static _$Ep(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach((e=>e(this)))}addController(t){var e,n;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return FS(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach((e=>{var n;return(n=e.hostConnected)===null||n===void 0?void 0:n.call(e)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach((e=>{var n;return(n=e.hostDisconnected)===null||n===void 0?void 0:n.call(e)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=Ul){var s;const r=this.constructor._$Ep(t,n);if(r!==void 0&&n.reflect===!0){const o=(((s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?n.converter:Zc).toAttribute(e,n.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var n;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:Zc;this._$El=r,this[r]=a.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,n){let s=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||kf)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((s,r)=>this[r]=s)),this._$Ei=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach((s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)})),this.update(n)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach((n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach(((e,n)=>this._$EO(n,this[n],e))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Es[Kc]=!0,Es.elementProperties=new Map,Es.elementStyles=[],Es.shadowRootOptions={mode:"open"},wd?.({ReactiveElement:Es}),((Ll=ua.reactiveElementVersions)!==null&&Ll!==void 0?Ll:ua.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Nl;const ha=window,ks=ha.trustedTypes,Ad=ks?ks.createPolicy("lit-html",{createHTML:i=>i}):void 0,Qc="$lit$",di=`lit$${(Math.random()+"").slice(9)}$`,Hf="?"+di,OS=`<${Hf}>`,$i=document,Ir=()=>$i.createComment(""),Lr=i=>i===null||typeof i!="object"&&typeof i!="function",Vf=Array.isArray,zS=i=>Vf(i)||typeof i?.[Symbol.iterator]=="function",Fl=`[ 	
\f\r]`,ur=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rd=/-->/g,Cd=/>/g,Li=RegExp(`>|${Fl}(?:([^\\s"'>=/]+)(${Fl}*=${Fl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pd=/'/g,Dd=/"/g,Gf=/^(?:script|style|textarea|title)$/i,Wf=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),br=Wf(1),Id=Wf(2),qi=Symbol.for("lit-noChange"),we=Symbol.for("lit-nothing"),Ld=new WeakMap,ki=$i.createTreeWalker($i,129,null,!1);function Xf(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ad!==void 0?Ad.createHTML(t):t}const kS=(i,t)=>{const e=i.length-1,n=[];let s,r=t===2?"<svg>":"",o=ur;for(let a=0;a<e;a++){const l=i[a];let c,u,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===ur?u[1]==="!--"?o=Rd:u[1]!==void 0?o=Cd:u[2]!==void 0?(Gf.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=Li):u[3]!==void 0&&(o=Li):o===Li?u[0]===">"?(o=s??ur,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?Li:u[3]==='"'?Dd:Pd):o===Dd||o===Pd?o=Li:o===Rd||o===Cd?o=ur:(o=Li,s=void 0);const f=o===Li&&i[a+1].startsWith("/>")?" ":"";r+=o===ur?l+OS:h>=0?(n.push(c),l.slice(0,h)+Qc+l.slice(h)+di+f):l+di+(h===-2?(n.push(void 0),a):f)}return[Xf(i,r+(i[e]||"<?>")+(t===2?"</svg>":"")),n]};class Ur{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let r=0,o=0;const a=t.length-1,l=this.parts,[c,u]=kS(t,e);if(this.el=Ur.createElement(c,n),ki.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=ki.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith(Qc)||d.startsWith(di)){const f=u[o++];if(h.push(d),f!==void 0){const g=s.getAttribute(f.toLowerCase()+Qc).split(di),v=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:v[2],strings:g,ctor:v[1]==="."?VS:v[1]==="?"?WS:v[1]==="@"?XS:Ta})}else l.push({type:6,index:r})}for(const d of h)s.removeAttribute(d)}if(Gf.test(s.tagName)){const h=s.textContent.split(di),d=h.length-1;if(d>0){s.textContent=ks?ks.emptyScript:"";for(let f=0;f<d;f++)s.append(h[f],Ir()),ki.nextNode(),l.push({type:2,index:++r});s.append(h[d],Ir())}}}else if(s.nodeType===8)if(s.data===Hf)l.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(di,h+1))!==-1;)l.push({type:7,index:r}),h+=di.length-1}r++}}static createElement(t,e){const n=$i.createElement("template");return n.innerHTML=t,n}}function Hs(i,t,e=i,n){var s,r,o,a;if(t===qi)return t;let l=n!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[n]:e._$Cl;const c=Lr(t)?void 0:t._$litDirective$;return l?.constructor!==c&&((r=l?._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,e,n)),n!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[n]=l:e._$Cl=l),l!==void 0&&(t=Hs(i,l._$AS(i,t.values),l,n)),t}let HS=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:n},parts:s}=this._$AD,r=((e=t?.creationScope)!==null&&e!==void 0?e:$i).importNode(n,!0);ki.currentNode=r;let o=ki.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Hr(o,o.nextSibling,this,t):c.type===1?u=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(u=new $S(o,this,t)),this._$AV.push(u),c=s[++l]}a!==c?.index&&(o=ki.nextNode(),a++)}return ki.currentNode=$i,r}v(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}};class Hr{constructor(t,e,n,s){var r;this.type=2,this._$AH=we,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cp=(r=s?.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Hs(this,t,e),Lr(t)?t===we||t==null||t===""?(this._$AH!==we&&this._$AR(),this._$AH=we):t!==this._$AH&&t!==qi&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):zS(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==we&&Lr(this._$AH)?this._$AA.nextSibling.data=t:this.$($i.createTextNode(t)),this._$AH=t}g(t){var e;const{values:n,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ur.createElement(Xf(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(n);else{const o=new HS(r,this),a=o.u(this.options);o.v(n),this.$(a),this._$AH=o}}_$AC(t){let e=Ld.get(t.strings);return e===void 0&&Ld.set(t.strings,e=new Ur(t)),e}T(t){Vf(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,s=0;for(const r of t)s===e.length?e.push(n=new Hr(this.k(Ir()),this.k(Ir()),this,this.options)):n=e[s],n._$AI(r),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Ta{constructor(t,e,n,s,r){this.type=1,this._$AH=we,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=we}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,s){const r=this.strings;let o=!1;if(r===void 0)t=Hs(this,t,e,0),o=!Lr(t)||t!==this._$AH&&t!==qi,o&&(this._$AH=t);else{const a=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=Hs(this,a[n+l],e,l),c===qi&&(c=this._$AH[l]),o||(o=!Lr(c)||c!==this._$AH[l]),c===we?t=we:t!==we&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!s&&this.j(t)}j(t){t===we?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class VS extends Ta{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===we?void 0:t}}const GS=ks?ks.emptyScript:"";class WS extends Ta{constructor(){super(...arguments),this.type=4}j(t){t&&t!==we?this.element.setAttribute(this.name,GS):this.element.removeAttribute(this.name)}}let XS=class extends Ta{constructor(t,e,n,s,r){super(t,e,n,s,r),this.type=5}_$AI(t,e=this){var n;if((t=(n=Hs(this,t,e,0))!==null&&n!==void 0?n:we)===qi)return;const s=this._$AH,r=t===we&&s!==we||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==we&&(s===we||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;typeof this._$AH=="function"?this._$AH.call((n=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}};class $S{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Hs(this,t)}}const Ud=ha.litHtmlPolyfillSupport;Ud?.(Ur,Hr),((Nl=ha.litHtmlVersions)!==null&&Nl!==void 0?Nl:ha.litHtmlVersions=[]).push("2.8.0");const qS=(i,t,e)=>{var n,s;const r=(n=e?.renderBefore)!==null&&n!==void 0?n:t;let o=r._$litPart$;if(o===void 0){const a=(s=e?.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Hr(t.insertBefore(Ir(),a),a,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bl,Ol;class Us extends Es{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=qS(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return qi}}Us.finalized=!0,Us._$litElement$=!0,(Bl=globalThis.litElementHydrateSupport)===null||Bl===void 0||Bl.call(globalThis,{LitElement:Us});const Nd=globalThis.litElementPolyfillSupport;Nd?.({LitElement:Us});((Ol=globalThis.litElementVersions)!==null&&Ol!==void 0?Ol:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $f=i=>t=>typeof t=="function"?((e,n)=>(customElements.define(e,n),n))(i,t):((e,n)=>{const{kind:s,elements:r}=n;return{kind:s,elements:r,finisher(o){customElements.define(e,o)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const YS=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}},jS=(i,t,e)=>{t.constructor.createProperty(e,i)};function wa(i){return(t,e)=>e!==void 0?jS(i,t,e):YS(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ji(i){return wa({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ZS=({finisher:i,descriptor:t})=>(e,n)=>{var s;if(n===void 0){const r=(s=e.originalKey)!==null&&s!==void 0?s:e.key,o=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return i!=null&&(o.finisher=function(a){i(a,r)}),o}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,n,t(n)),i?.(r,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qf(i,t){return ZS({descriptor:e=>({get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zl;((zl=window.HTMLSlotElement)===null||zl===void 0?void 0:zl.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const KS={ATTRIBUTE:1},QS=i=>(...t)=>({_$litDirective$:i,values:t});class JS{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const In=QS(class extends JS{constructor(i){var t;if(super(i),i.type!==KS.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter((t=>i[t])).join(" ")+" "}update(i,[t]){var e,n;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!(!((e=this.nt)===null||e===void 0)&&e.has(r))&&this.it.add(r);return this.render(t)}const s=i.element.classList;this.it.forEach((r=>{r in t||(s.remove(r),this.it.delete(r))}));for(const r in t){const o=!!t[r];o===this.it.has(r)||!((n=this.nt)===null||n===void 0)&&n.has(r)||(o?(s.add(r),this.it.add(r)):(s.remove(r),this.it.delete(r)))}return qi}});function Ke(i,t,e,n){var s=arguments.length,r=s<3?t:n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r}class tM{constructor(t,e){this.runtime=t,this.canvas=e,this.disposed=!1,this.analyser=t.audioCtx.createAnalyser(),this.analyser.fftSize=8192,this.analyser.smoothingTimeConstant=.5,t.connect(this.analyser),this.analysisData=new Uint8Array(this.analyser.frequencyBinCount);let n=Math.log10(t.audioCtx.sampleRate/2)-1;this.canvas.width=this.canvas.offsetWidth*window.devicePixelRatio,this.canvas.height=this.canvas.offsetHeight*window.devicePixelRatio,this.analysisXs=this.calculateAnalysisXs(n),this.resizeObserver=new ResizeObserver(()=>{this.canvas.width=this.canvas.offsetWidth*window.devicePixelRatio,this.canvas.height=this.canvas.offsetHeight*window.devicePixelRatio,this.analysisXs=this.calculateAnalysisXs(n)}),this.resizeObserver.observe(this.canvas)}calculateAnalysisXs(t){return Array.from(this.analysisData).map((e,n)=>{let s=n/this.analysisData.length*(this.runtime.audioCtx.sampleRate/2);return Math.floor((Math.log10(s)-1)/t*this.canvas.width)})}analyse(){let t=()=>{this.disposed||(this.analyser.getByteFrequencyData(this.analysisData),this.draw(),requestAnimationFrame(t))};requestAnimationFrame(t)}draw(){let t=this.canvas.width,e=this.canvas.height,n=this.canvas.height/255,s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get a canvas context!");s.clearRect(0,0,t,e);let r=new Path2D;r.moveTo(0,e);for(let o=0;o<this.analysisData.length;o++){let a=Math.floor(e-this.analysisData[o]*n);r.lineTo(this.analysisXs[o],a)}r.lineTo(t,e),s.fillStyle="rgba(30, 30, 60, 0.7)",s.fill(r),s.strokeStyle="rgb(155, 155, 255)",s.stroke(r)}dispose(){this.disposed=!0,this.analyser.disconnect(),this.resizeObserver.disconnect()}}class eM{constructor(t,e){this.runtime=t,this.canvas=e,this.canvas.width=this.canvas.offsetWidth*window.devicePixelRatio,this.canvas.height=this.canvas.offsetHeight*window.devicePixelRatio,this.frequencies=this.calculateFrequencies(),this.filterMagResponse=new Float32Array(this.frequencies.length),this.filterPhaseResponse=new Float32Array(this.frequencies.length),this.frequencyResponse=new Float32Array(this.frequencies.length),this.resizeObserver=new ResizeObserver(()=>{this.canvas.width=this.canvas.offsetWidth*window.devicePixelRatio,this.canvas.height=this.canvas.offsetHeight*window.devicePixelRatio,this.frequencies=this.calculateFrequencies(),this.filterMagResponse=new Float32Array(this.frequencies.length),this.filterPhaseResponse=new Float32Array(this.frequencies.length),this.frequencyResponse=new Float32Array(this.frequencies.length),this.render()}),this.resizeObserver.observe(this.canvas)}dispose(){this.resizeObserver.disconnect()}render(){this.frequencyResponse.fill(1);for(let t=0;t<this.runtime.spec.length;t++)for(let e=0;e<Ko(this.runtime.spec[t].type);e++)if(this.runtime.getFrequencyResponse(t,e,this.frequencies,this.filterMagResponse,this.filterPhaseResponse))for(let n=0;n<this.frequencyResponse.length;n++)this.frequencyResponse[n]*=this.filterMagResponse[n];this.draw()}draw(){let t=this.canvas.getContext("2d"),e=this.canvas.width,n=this.canvas.height;if(!t)throw new Error("Could not get a canvas context!");t.clearRect(0,0,e,n),t.strokeStyle="#ffffff",t.lineWidth=2,t.beginPath();let s=13,r=-s;for(let o=0;o<this.frequencyResponse.length;o++){let a=this.frequencyResponse[o],l=20*Math.log10(a),c=n-(l-r)/(s-r)*n;o===0?t.moveTo(o,c):t.lineTo(o,c)}t.stroke()}calculateFrequencies(){let t=new Float32Array(this.canvas.width),e=this.runtime.audioCtx.sampleRate/2,n=1,s=Math.log10(e);for(let r=0;r<this.canvas.width;r++){let o=n+r/this.canvas.width*(s-n),a=Math.pow(10,o);t[r]=a}return t}}const Yf=Cu`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    background-color: #111;
    color: white;
    --font-stack: "Inter", sans-serif;
    --font-size: 11px;
    --font-weight: 500;
    font-family: var(--font-stack);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
  }
`,nM=[["noop","Add +"],["lowpass12","LP12"],["lowpass24","LP24"],["highpass12","HP12"],["highpass24","HP24"],["lowshelf12","LS12"],["lowshelf24","LS24"],["highshelf12","HS12"],["highshelf24","HS24"],["peaking12","PK12"],["peaking24","PK24"],["notch12","NT12"],["notch24","NT24"]];var kl;let Vs=(kl=class extends Us{constructor(){super(),this.frequencyInputFocused=!1,this.dragStates={frequency:null,gain:null,Q:null},this.addEventListener("click",()=>this.dispatchEvent(new CustomEvent("select",{composed:!0,bubbles:!0})))}render(){if(!this.runtime||this.index===void 0)return;let i=nM.filter(e=>this.runtime.supportedFilterTypes.includes(e[0])),t=this.runtime.spec[this.index];return br`
      <th>
        <div
          class=${In({chip:!0,disabled:!Il(t.type),bypassed:t.bypass})}
        >
          <div
            class=${In({filterNumber:!0,bypassed:t.bypass})}
            @click=${()=>this.toggleBypass()}
          >
            ${this.index+1}
          </div>
          <select
            class=${In({filterTypeSelect:!0,bypassed:t.bypass})}
            @change=${e=>this.setFilterType(e.target.value)}
          >
            ${i.map(([e,n])=>br`<option value=${e} ?selected=${t.type===e}>
                  ${n}
                </option>`)}
          </select>
        </div>
      </th>
      <td>
        <input
          class=${In({frequencyInput:!0,numberInput:!0,bypassed:t.bypass})}
          type="number"
          step="0.1"
          lang="en_EN"
          .value=${CS(t.frequency,this.frequencyInputFocused)}
          ?disabled=${!Il(t.type)}
          @focus=${()=>this.frequencyInputFocused=!0}
          @blur=${()=>{this.frequencyInputFocused=!1,this.setFilterFrequency(Ls(t.frequency,10,this.nyquist))}}
          @input=${e=>this.setFilterFrequency(e.target.valueAsNumber)}
          @pointerdown=${e=>this.startDraggingValue(e,"frequency")}
          @pointerup=${e=>this.stopDraggingValue(e,"frequency")}
          @pointermove=${e=>this.dragValue(e,"frequency")}
        />
        <span
          class=${In({frequencyUnit:!0,disabled:!Il(t.type),bypassed:t.bypass})}
          >${PS(t.frequency,this.frequencyInputFocused)}</span
        >
      </td>
      <td>
        <input
          class=${In({gainInput:!0,numberInput:!0,bypassed:t.bypass})}
          type="number"
          min="-15"
          max="15"
          step="0.1"
          lang="en_EN"
          .value=${t.gain.toFixed(1)}
          ?disabled=${!aa(t.type)}
          @input=${e=>this.setFilterGain(e.target.valueAsNumber)}
          @pointerdown=${e=>this.startDraggingValue(e,"gain")}
          @pointerup=${e=>this.stopDraggingValue(e,"gain")}
          @pointermove=${e=>this.dragValue(e,"gain")}
        />
        <span
          class=${In({gainUnit:!0,disabled:!aa(t.type),bypassed:t.bypass})}
          >dB</span
        >
      </td>
      <td>
        <input
          class=${In({qInput:!0,numberInput:!0,bypassed:t.bypass})}
          type="number"
          min="0.1"
          max="18"
          step="0.1"
          .value=${t.Q.toFixed(2)}
          ?disabled=${!RS(t.type)}
          @input=${e=>this.setFilterQ(e.target.valueAsNumber)}
          @pointerdown=${e=>this.startDraggingValue(e,"Q")}
          @pointerup=${e=>this.stopDraggingValue(e,"Q")}
          @pointermove=${e=>this.dragValue(e,"Q")}
        />
      </td>
    `}get nyquist(){var i,t;return((t=(i=this.runtime)==null?void 0:i.audioCtx.sampleRate)!=null?t:48e3)/2}toggleBypass(){!this.runtime||this.index===void 0||this.runtime.toggleBypass(this.index,!this.runtime.spec[this.index].bypass)}setFilterType(i){!this.runtime||this.index===void 0||this.runtime.setFilterType(this.index,i)}setFilterFrequency(i){!this.runtime||this.index===void 0||isNaN(i)||this.runtime.setFilterFrequency(this.index,i)}setFilterGain(i){!this.runtime||this.index===void 0||isNaN(i)||this.runtime.setFilterGain(this.index,i)}setFilterQ(i){!this.runtime||this.index===void 0||isNaN(i)||this.runtime.setFilterQ(this.index,i)}startDraggingValue(i,t){!this.runtime||this.index===void 0||(i.target.setPointerCapture(i.pointerId),this.dragStates={...this.dragStates,[t]:{pointer:i.pointerId,startY:i.clientY,startValue:this.runtime.spec[this.index][t]}})}stopDraggingValue(i,t){var e;!this.runtime||this.index===void 0||((e=this.dragStates[t])==null?void 0:e.pointer)===i.pointerId&&(i.target.releasePointerCapture(i.pointerId),this.dragStates={...this.dragStates,[t]:null})}dragValue(i,t){if(!this.runtime||this.index===void 0)return;let e=this.dragStates[t];if(e&&e.pointer===i.pointerId){let n=e.startY,s=-(i.clientY-n),r=Ls(s/150,-1,1);if(t==="frequency"){let o=10,a=this.runtime.audioCtx.sampleRate/2,l=la(e.startValue,o,a),c=ca(l+r,o,a);this.runtime.setFilterFrequency(this.index,c)}else if(t==="gain"){let o=r*15;this.runtime.setFilterGain(this.index,Ls(e.startValue+o,-15,15))}else if(t==="Q"){let o=.1,a=18,l=la(e.startValue,o,a),c=ca(l+r,o,a);this.runtime.setFilterQ(this.index,c)}i.target.blur()}}},kl.styles=[Yf,Cu`
      :host {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 60px 60px 50px 40px;
        align-items: center;
        gap: 4px;
        background-color: transparent;
        border-radius: 22px;
        transition: background-color 0.15s ease;
      }
      :host(.selected) {
        background-color: #373737;
      }
      input,
      select {
        padding: 0;
        border: 0;
      }
      input {
        border-bottom: 1px solid transparent;
        transition: border-color 0.15s ease;
      }
      input:focus,
      input:active {
        border-color: white;
      }
      .chip {
        display: inline-grid;
        grid-auto-flow: column;
        gap: 3px;
        height: 20px;
        padding-right: 6px;
        border-radius: 10px;
        background: #373737;
        transition: background-color 0.15s ease;
      }
      :host(.selected) .chip .filterNumber {
        background: #ffcc00;
      }
      .chip.disabled:hover {
        background: #444444;
      }
      .filterNumber {
        cursor: pointer;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        display: grid;
        place-content: center;
        background: white;
        font-weight: var(--font-weight);
        color: black;
        transition: background-color 0.15s ease;
      }
      .chip.disabled .filterNumber {
        background: transparent;
        color: white;
      }
      .chip.bypassed .filterNumber {
        background: #7d7d7d;
        color: black;
      }
      .filterTypeSelect {
        width: 30px;
        appearance: none;
        outline: none;
        background-color: transparent;
        color: white;
        cursor: pointer;
        text-align: center;
        font-family: var(--font-stack);
        font-size: var(--font-size);
        font-weight: var(--font-weight);
      }
      .filterTypeSelect.bypassed {
        color: #7d7d7d;
      }
      .chip.disabled .filterTypeSelect {
        pointer-events: all;
      }
      .frequencyInput {
        width: 28px;
      }
      .gainInput {
        width: 26px;
      }
      .qInput {
        width: 30px;
      }
      .numberInput {
        appearance: none;
        outline: none;
        background-color: transparent;
        color: white;
        text-align: right;
        -moz-appearance: textfield;
        font-family: var(--font-stack);
        font-size: var(--font-size);
        font-weight: var(--font-weight);
        touch-action: none;
      }
      .numberInput:disabled,
      .disabled {
        color: #7d7d7d;
        pointer-events: none;
      }
      .bypassed {
        color: #7d7d7d;
      }
      .numberInput::-webkit-inner-spin-button,
      .numberInput::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
        margin: 0 !important;
      }
    `],kl);Ke([wa({attribute:!1})],Vs.prototype,"runtime",void 0);Ke([wa()],Vs.prototype,"index",void 0);Ke([ji()],Vs.prototype,"frequencyInputFocused",void 0);Ke([ji()],Vs.prototype,"dragStates",void 0);Vs=Ke([$f("weq8-ui-filter-row")],Vs);var Hl;let kn=(Hl=class extends Us{constructor(){super(),this.gridXs=[],this.dragStates={},this.selectedFilterIdx=-1,this.addEventListener("click",i=>{i.composedPath()[0]===this&&(this.selectedFilterIdx=-1)})}updated(i){var t,e;if(i.has("runtime")&&((t=this.analyser)==null||t.dispose(),(e=this.frequencyResponse)==null||e.dispose(),this.runtime&&this.analyserCanvas&&this.frequencyResponseCanvas)){this.analyser=new tM(this.runtime,this.analyserCanvas),this.analyser.analyse(),this.frequencyResponse=new eM(this.runtime,this.frequencyResponseCanvas),this.frequencyResponse.render();let n=[],s=this.runtime.audioCtx.sampleRate/2,r=Math.floor(Math.log10(s));for(let o=0;o<r;o++){let a=Math.pow(10,o+1);for(let l=1;l<10;l++){let c=a*l;if(c>s)break;n.push((Math.log10(c)-1)/(Math.log10(s)-1)*100)}}this.gridXs=n,this.runtime.on("filtersChanged",()=>{var o,a,l;(o=this.frequencyResponse)==null||o.render(),this.requestUpdate();for(let c of Array.from((l=(a=this.shadowRoot)==null?void 0:a.querySelectorAll("weq8-ui-filter-row"))!=null?l:[]))c.requestUpdate()})}}render(){var i;return br`
      <table class="filters">
        <thead>
          <tr>
            <th class="headerFilter">Filter</th>
            <th>Freq</th>
            <th>Gain</th>
            <th>Q</th>
          </tr>
        </thead>
        <tbody>
          ${Array.from({length:8}).map((t,e)=>br`<weq8-ui-filter-row
                class="${In({selected:this.selectedFilterIdx===e})}"
                .runtime=${this.runtime}
                .index=${e}
                @select=${n=>{var s;this.selectedFilterIdx=((s=this.runtime)==null?void 0:s.spec[e].type)==="noop"?-1:e,n.stopPropagation()}}
              />`)}
        </tbody>
      </table>
      <div class="visualisation">
        <svg
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          ${this.gridXs.map(this.renderGridX)}
          ${[12,6,0,-6,-12].map(this.renderGridY)}
        </svg>
        <canvas class="analyser"></canvas>
        <canvas
          class="frequencyResponse"
          @click=${()=>this.selectedFilterIdx=-1}
        ></canvas>
        ${(i=this.runtime)==null?void 0:i.spec.map((t,e)=>t.type==="noop"?void 0:this.renderFilterHandle(t,e))}
      </div>
    `}renderGridX(i){return Id`<line
      class="grid-x"
      x1=${i}
      y1="0"
      x2=${i}
      y2="10"
    />`}renderGridY(i){let t=(i+15)/30*10;return Id`<line
      class="grid-y"
      x1="0"
      y1=${t}
      x2="100"
      y2=${t}
    />`}renderFilterHandle(i,t){var e,n,s,r;if(!this.runtime)return;let o=this.runtime.spec[t].type,a=(n=(e=this.analyserCanvas)==null?void 0:e.offsetWidth)!=null?n:0,l=(r=(s=this.analyserCanvas)==null?void 0:s.offsetHeight)!=null?r:0,c=la(i.frequency,10,this.runtime.audioCtx.sampleRate/2)*a,u=l-(i.gain+15)/30*l;return aa(o)||(u=l-la(i.Q,.1,18)*l),br`<div
      class="filter-handle-positioner"
      style="transform: translate(${c}px,${u}px)"
      @pointerdown=${h=>this.startDraggingFilterHandle(h,t)}
      @pointerup=${h=>this.stopDraggingFilterHandle(h,t)}
      @pointermove=${h=>this.dragFilterHandle(h,t)}
    >
      <div
        class="${In({"filter-handle":!0,bypassed:i.bypass,selected:t===this.selectedFilterIdx})}"
      >
        ${t+1}
      </div>
    </div>`}startDraggingFilterHandle(i,t){i.target.setPointerCapture(i.pointerId),this.dragStates={...this.dragStates,[t]:i.pointerId},this.selectedFilterIdx=t,i.preventDefault()}stopDraggingFilterHandle(i,t){this.dragStates[t]===i.pointerId&&(i.target.releasePointerCapture(i.pointerId),this.dragStates={...this.dragStates,[t]:null})}dragFilterHandle(i,t){var e,n;if(this.runtime&&this.dragStates[t]===i.pointerId){let s=this.runtime.spec[t].type,r=(n=(e=this.frequencyResponseCanvas)==null?void 0:e.getBoundingClientRect())!=null?n:{left:0,top:0,width:0,height:0},o=i.clientX-r.left,a=i.clientY-r.top,l=ca(o/r.width,10,this.runtime.audioCtx.sampleRate/2);this.runtime.setFilterFrequency(t,l);let c=1-a/r.height;if(aa(s)){let u=Ls(c*30-15,-15,15);this.runtime.setFilterGain(t,u)}else{let u=ca(c,.1,18);this.runtime.setFilterQ(t,u)}}}},Hl.styles=[Yf,Cu`
      :host {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        gap: 10px;
        min-width: 600px;
        min-height: 200px;
        padding: 20px;
        border-radius: 8px;
        overflow: hidden;
        background: #202020;
        border: 1px solid #373737;
      }
      .filters {
        display: inline-grid;
        grid-auto-flow: row;
        gap: 4px;
      }
      .filters tbody,
      .filters tr {
        display: contents;
      }
      .filters thead {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 60px 60px 50px 40px;
        align-items: center;
        gap: 4px;
      }
      .filters thead th {
        display: grid;
        place-content: center;
        height: 20px;
        border-radius: 10px;
        font-weight: var(--font-weight);
        border: 1px solid #373737;
      }
      .filters thead th.headerFilter {
        text-align: left;
        padding-left: 18px;
        border: none;
      }
      .visualisation {
        flex: 1;
        position: relative;
        border: 1px solid #373737;
      }
      canvas,
      svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      svg {
        overflow: visible;
      }
      .grid-x,
      .grid-y {
        stroke: #333;
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
      }
      .filter-handle-positioner {
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        touch-action: none;
      }
      .filter-handle {
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fff;
        color: black;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: grab;
        transition: background-color 0.15s ease;
      }
      .filter-handle.selected {
        background: #ffcc00;
      }
      .filter-handle.bypassed {
        background: #7d7d7d;
      }
    `],Hl);Ke([wa({attribute:!1})],kn.prototype,"runtime",void 0);Ke([ji()],kn.prototype,"analyser",void 0);Ke([ji()],kn.prototype,"frequencyResponse",void 0);Ke([ji()],kn.prototype,"gridXs",void 0);Ke([ji()],kn.prototype,"dragStates",void 0);Ke([ji()],kn.prototype,"selectedFilterIdx",void 0);Ke([qf(".analyser")],kn.prototype,"analyserCanvas",void 0);Ke([qf(".frequencyResponse")],kn.prototype,"frequencyResponseCanvas",void 0);kn=Ke([$f("weq8-ui")],kn);/*!
 * rubberband-wasm v2.0.1 (https://www.npmjs.com/package/rubberband-wasm)
 * (c) Dani Biro
 * @license GPLv2
 */var ui;(function(i){i[i.RubberBandOptionProcessOffline=0]="RubberBandOptionProcessOffline",i[i.RubberBandOptionProcessRealTime=1]="RubberBandOptionProcessRealTime",i[i.RubberBandOptionStretchElastic=0]="RubberBandOptionStretchElastic",i[i.RubberBandOptionStretchPrecise=16]="RubberBandOptionStretchPrecise",i[i.RubberBandOptionTransientsCrisp=0]="RubberBandOptionTransientsCrisp",i[i.RubberBandOptionTransientsMixed=256]="RubberBandOptionTransientsMixed",i[i.RubberBandOptionTransientsSmooth=512]="RubberBandOptionTransientsSmooth",i[i.RubberBandOptionDetectorCompound=0]="RubberBandOptionDetectorCompound",i[i.RubberBandOptionDetectorPercussive=1024]="RubberBandOptionDetectorPercussive",i[i.RubberBandOptionDetectorSoft=2048]="RubberBandOptionDetectorSoft",i[i.RubberBandOptionPhaseLaminar=0]="RubberBandOptionPhaseLaminar",i[i.RubberBandOptionPhaseIndependent=8192]="RubberBandOptionPhaseIndependent",i[i.RubberBandOptionThreadingAuto=0]="RubberBandOptionThreadingAuto",i[i.RubberBandOptionThreadingNever=65536]="RubberBandOptionThreadingNever",i[i.RubberBandOptionThreadingAlways=131072]="RubberBandOptionThreadingAlways",i[i.RubberBandOptionWindowStandard=0]="RubberBandOptionWindowStandard",i[i.RubberBandOptionWindowShort=1048576]="RubberBandOptionWindowShort",i[i.RubberBandOptionWindowLong=2097152]="RubberBandOptionWindowLong",i[i.RubberBandOptionSmoothingOff=0]="RubberBandOptionSmoothingOff",i[i.RubberBandOptionSmoothingOn=8388608]="RubberBandOptionSmoothingOn",i[i.RubberBandOptionFormantShifted=0]="RubberBandOptionFormantShifted",i[i.RubberBandOptionFormantPreserved=16777216]="RubberBandOptionFormantPreserved",i[i.RubberBandOptionPitchHighSpeed=0]="RubberBandOptionPitchHighSpeed",i[i.RubberBandOptionPitchHighQuality=33554432]="RubberBandOptionPitchHighQuality",i[i.RubberBandOptionPitchHighConsistency=67108864]="RubberBandOptionPitchHighConsistency",i[i.RubberBandOptionChannelsApart=0]="RubberBandOptionChannelsApart",i[i.RubberBandOptionChannelsTogether=268435456]="RubberBandOptionChannelsTogether",i[i.RubberBandOptionEngineFaster=0]="RubberBandOptionEngineFaster",i[i.RubberBandOptionEngineFiner=536870912]="RubberBandOptionEngineFiner"})(ui||(ui={}));var Fd;(function(i){i[i.DefaultOptions=0]="DefaultOptions",i[i.PercussiveOptions=1056768]="PercussiveOptions"})(Fd||(Fd={}));class Pu{constructor(){}static async initialize(t){if(typeof WebAssembly>"u")throw new Error("WebAssembly is not supported in this environment!");let e={};const n=(...c)=>(console.error("WASI called with params",c),52);let s=[];const r=await WebAssembly.instantiate(t,{env:{emscripten_notify_memory_growth:()=>{e.HEAP8=new Uint8Array(r.exports.memory.buffer),e.HEAP32=new Uint32Array(r.exports.memory.buffer)}},wasi_snapshot_preview1:{proc_exit:(...c)=>n("proc_exit",c),fd_read:(...c)=>n("fd_read",c),fd_write:(c,u,h,d)=>{if(c>2)return 52;let f=0;for(let g=0;g<h;g++){const v=e.HEAP32[u>>2],m=e.HEAP32[u+4>>2];u+=8;for(let p=0;p<m;p++){const x=e.HEAP8[v+p];x===0||x===10?(console.log(s.join("")),s.length=0):s.push(String.fromCharCode(x))}f+=m}return e.HEAP32[d>>2]=f,0},fd_seek:(...c)=>n("fd_seek",c),fd_close:(...c)=>n("fd_close",c),environ_sizes_get:(c,u)=>52,environ_get:(...c)=>n("environ_get",c),clock_time_get:(...c)=>n("clock_time_get",c)}}),o=r.exports;e.HEAP8=new Uint8Array(r.exports.memory.buffer),e.HEAP32=new Uint32Array(r.exports.memory.buffer),o._initialize();const a={heap:e,exports:o},l=new Pu;return l.wasm=a,l}malloc(t){return this.wasm.exports.wasm_malloc(t)}memWrite(t,e){const n=e instanceof Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength);this.wasm.heap.HEAP8.set(n,t)}memWritePtr(t,e){const n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,e,!0),this.wasm.heap.HEAP8.set(n,t)}memReadU8(t,e){return this.wasm.heap.HEAP8.subarray(t,t+e)}memReadF32(t,e){const n=this.memReadU8(t,e*4);return new Float32Array(n.buffer,n.byteOffset,e)}free(t){this.wasm.exports.wasm_free(t)}rubberband_new(t,e,n,s,r){return this.wasm.exports.rb_new(t,e,n,s,r)}rubberband_delete(t){this.wasm.exports.rb_delete(t)}rubberband_reset(t){this.wasm.exports.rb_reset(t)}rubberband_set_time_ratio(t,e){this.wasm.exports.rb_set_time_ratio(t,e)}rubberband_set_pitch_scale(t,e){this.wasm.exports.rb_set_pitch_scale(t,e)}rubberband_set_formant_scale(t,e){this.wasm.exports.rb_set_formant_scale(t,e)}rubberband_get_time_ratio(t){return this.wasm.exports.rb_get_time_ratio(t)}rubberband_get_pitch_scale(t){return this.wasm.exports.rb_get_pitch_scale(t)}rubberband_get_formant_scale(t){return this.wasm.exports.rb_get_formant_scale(t)}rubberband_get_preferred_start_pad(t){return this.wasm.exports.rb_get_preferred_start_pad(t)}rubberband_get_start_delay(t){return this.wasm.exports.rb_get_start_delay(t)}rubberband_get_latency(t){return this.wasm.exports.rb_get_latency(t)}rubberband_set_transients_option(t,e){this.wasm.exports.rb_set_transients_option(t,e)}rubberband_set_detector_option(t,e){this.wasm.exports.rb_set_detector_option(t,e)}rubberband_set_phase_option(t,e){this.wasm.exports.rb_set_phase_option(t,e)}rubberband_set_formant_option(t,e){this.wasm.exports.rb_set_formant_option(t,e)}rubberband_set_pitch_option(t,e){this.wasm.exports.rb_set_pitch_option(t,e)}rubberband_set_expected_input_duration(t,e){this.wasm.exports.rb_set_expected_input_duration(t,e)}rubberband_get_samples_required(t){return this.wasm.exports.rb_get_samples_required(t)}rubberband_set_max_process_size(t,e){this.wasm.exports.rb_set_max_process_size(t,e)}rubberband_get_process_size_limit(t){return this.wasm.exports.rb_get_process_size_limit(t)}rubberband_set_key_frame_map(t,e,n,s){this.wasm.exports.rb_set_key_frame_map(t,e,n,s)}rubberband_study(t,e,n,s){this.wasm.exports.rb_study(t,e,n,s)}rubberband_process(t,e,n,s){this.wasm.exports.rb_process(t,e,n,s)}rubberband_available(t){return this.wasm.exports.rb_available(t)}rubberband_retrieve(t,e,n){return this.wasm.exports.rb_retrieve(t,e,n)}rubberband_get_channel_count(t){return this.wasm.exports.rb_get_channel_count(t)}rubberband_calculate_stretch(t){this.wasm.exports.rb_calculate_stretch(t)}rubberband_set_debug_level(t,e){this.wasm.exports.rb_set_debug_level(t,e)}rubberband_set_default_debug_level(t){this.wasm.exports.rb_set_default_debug_level(t)}}const iM="/blobverb/assets/rubberband-nHFrPblx.wasm",sM=`//
// Description : Array and textureless GLSL 2D/3D/4D simplex noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}
vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}
float snoise(vec3 v)
  { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;
// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
// Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
// Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                  dot(p2,x2), dot(p3,x3) ) );
  }`,rM=`uniform float uTime;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vNormal;
varying float vNoise;
// We are including the 3D noise function here
\${glsl_noise_3d}
void main() {
    // *** THE KEY CHANGE IS HERE ***
    // We now use the vertex's full 3D position as input to the noise function.
    // Adding uTime to the input vec3 animates the noise field over time.
    // GLSL automatically adds the float uTime to each component of the vec3.
    float noise = snoise(position * uFrequency + uTime);
    // Add the noise to the vertex position, moving it along the normal
    vec3 newPosition = position + normal * noise * uAmplitude;
    // Pass some values to the fragment shader
    vNormal = normal;
    vNoise = noise;
    // Standard projection
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}`,oM=`precision mediump float;

varying vec3 vNormal;
varying float vNoise;
uniform float uAlpha;

void main() {
    // Remap noise from [-1, 1] into [0, 1] so we can drive the color ramp.
    float mixFactor = vNoise * 0.5 + 0.5;
    vec3 color1 = vec3(0.23, 0.9, 0.0);
    vec3 color2 = vec3(0.2, 0.2, 0.9);
    vec3 finalColor = mix(color1, color2, mixFactor);
    gl_FragColor = vec4(finalColor, uAlpha);
}`;Ge.prototype.computeBoundsTree=Ib;Ge.prototype.disposeBoundsTree=Lb;Ne.prototype.raycast=Cb;const ie={CANVAS_TARGET_ID:"threeViewport",INITIAL_CAMERA_DISTANCE:35,DEFAULT_MAX_BOUNCES:100,SPEED_OF_SOUND:343,EMITTER_RADIUS:.5,RAY_RADIOSITY:{enabled:!0,scatteringCoeff:.3,histogramResolution:.003,maxTime:6,hybridBounceThreshold:3,poissonDensity:22,minEnergyThreshold:1e-9,diffuseGain:1.6},DEFAULTS:{randomSeed:"nmz6kp.6n",baseRadius:15,noiseFrequency:.2,noiseAmplitude:5,absorption:{200:.15,800:.2,3200:.25,1e4:.3},numRays:15e3,useWebWorker:!0,realtimePreview:!0,irPreDelayMs:0,rayRadiosity:{enabled:!0,scatteringCoeff:.45,histogramResolution:.003,maxTime:6,hybridBounceThreshold:3,poissonDensity:22,minEnergyThreshold:1e-9,diffuseGain:1.6}},FREQ_BANDS:[200,800,3200,1e4]},B={},ut={initialized:!1,isSimulating:!1,shaderMaterial:null,roomMesh:null,baseVertexDirections:null,noise3D:Of(),maxBounces:ie.DEFAULT_MAX_BOUNCES,workerGeometryReady:!1,realtimeSimEnabled:!0};let Zn,fi,Vi,Ye,da,hn,Re,pn;const mi=new Mg,Yt={origin:new I,direction:new I,temp:new I,temp2:new I,temp3:new I,toReceiver:new I,specular:new I,scatter:new I};mi.firstHitOnly=!0;function aM(i){if(i<=0)return 0;const t=Math.exp(-i);let e=0,n=1;do e++,n*=Math.random();while(n>t);return e-1}function jf(i){const t=Math.random(),e=Math.random(),n=Math.sqrt(t),s=2*Math.PI*e,r=Yt.temp2,o=Yt.temp3;return Math.abs(i.x)>Math.abs(i.z)?r.set(-i.y,i.x,0).normalize():r.set(0,-i.z,i.y).normalize(),o.crossVectors(i,r),Yt.scatter.copy(r).multiplyScalar(n*Math.cos(s)).addScaledVector(o,n*Math.sin(s)).addScaledVector(i,Math.sqrt(Math.max(0,1-t))).normalize()}function Zf(i,t,e,n){const s=[];for(let r=0;r<i.length;r++){const o=i[r];if(o<=n)continue;const a=Math.max(o*e,0);let l=aM(a);l<=0&&(l=1);const c=o/l,u=Math.sqrt(c),h=r*t;for(let d=0;d<l;d++){const f=Math.random()*t,g=Math.random()<.5?-1:1;s.push({time:h+f,amplitude:u*g})}}return s}const lM=ui.RubberBandOptionProcessOffline|ui.RubberBandOptionStretchPrecise|ui.RubberBandOptionTransientsSmooth|ui.RubberBandOptionFormantPreserved|ui.RubberBandOptionPitchHighQuality|ui.RubberBandOptionChannelsTogether;async function cM(){return Vl||(Vl=(async()=>{const t=await(await fetch(iM)).arrayBuffer(),e=await WebAssembly.compile(t);return Pu.initialize(e)})()),Vl}async function Kf(i,{timeRatio:t=1,pitchSemitones:e=0}={}){if(!i)throw new Error("No audio buffer provided to Rubber Band processor.");const n=await cM(),s=i.numberOfChannels,r=i.sampleRate,o=i.length;if(s===0||o===0)return i;Zi();const a=$t,l=Math.max(.1,Math.min(t,10)),c=Math.pow(2,e/12),u=n.rubberband_new(r,s,lM,1,1);n.rubberband_set_time_ratio(u,l),n.rubberband_set_pitch_scale(u,c),n.rubberband_set_expected_input_duration(u,o);let h=n.rubberband_get_samples_required(u);(!Number.isFinite(h)||h<=0)&&(h=2048);const d=n.malloc(s*4),f=[],g=[];for(let E=0;E<s;E++){const T=n.malloc(h*4);f.push(T),g.push(new Float32Array(h)),n.memWritePtr(d+E*4,T)}const v=Array.from({length:s},(E,T)=>Float32Array.from(i.getChannelData(T)));let m=Math.max(1,Math.ceil(o*Math.max(l,1))+h);const p=Array.from({length:s},()=>new Float32Array(m));let x=0;const y=E=>{if(x+E<=m)return;const T=Math.max(x+E,Math.ceil(m*1.5));for(let A=0;A<s;A++){const S=new Float32Array(T);S.set(p[A].subarray(0,x)),p[A]=S}m=T},_=(E,T,A)=>{if(A===h)n.memWrite(f[E],T);else{const S=g[E];S.fill(0),S.set(T),n.memWrite(f[E],S)}},b=(E=!1)=>{for(;;){const T=n.rubberband_available(u);if(T<1||!E&&T<h)break;const A=Math.min(h,T);y(A);const S=n.rubberband_retrieve(u,d,A);for(let M=0;M<s;M++){const C=n.memReadF32(f[M],S);p[M].set(C,x)}x+=S}};try{let E=0;for(;E<o;){const S=Math.min(h,o-E);for(let C=0;C<s;C++){const P=v[C].subarray(E,E+S);_(C,P,P.length)}E+=S;const M=E<o?0:1;n.rubberband_study(u,d,S,M)}for(E=0;E<o;){const S=Math.min(h,o-E);for(let C=0;C<s;C++){const P=v[C].subarray(E,E+S);_(C,P,P.length)}E+=S;const M=E<o?0:1;n.rubberband_process(u,d,S,M),b(!1)}b(!0);const T=Math.max(1,x),A=a.createBuffer(s,T,r);for(let S=0;S<s;S++)A.copyToChannel(p[S].subarray(0,T),S);return A}finally{f.forEach(E=>n.free(E)),n.free(d),n.rubberband_delete(u)}}let $t,Nr,Kn,jn,Ni,Sr,Mr,Jo,Jc,tu,Er,Hi,fa,Bd,on,Gi,fn,En,hr,Vl=null,Gl=!1,Wl=!1,eu=0,nu=0,Xl=null,$l=null,he=null;function uM(){Object.assign(B,{baseRadius:document.getElementById("baseRadius"),noiseFrequency:document.getElementById("noiseFreq"),noiseAmplitude:document.getElementById("noiseAmp"),randomSeed:document.getElementById("randomSeed"),status:document.getElementById("status"),startButton:document.getElementById("startButton"),downloadBtn:document.getElementById("downloadBtn"),randomizeSeedBtn:document.getElementById("randomizeSeedBtn"),raysToVisualizeSlider:document.getElementById("raysToVisualize"),lineColorModeSelect:document.getElementById("lineColorMode"),sampleAudioSelect:document.getElementById("sample-audio"),playSampleBtn:document.getElementById("playSampleBtn"),stopSampleBtn:document.getElementById("stopSampleBtn"),drySlider:document.getElementById("dry-slider"),dryOutput:document.getElementById("dry-output"),wetSlider:document.getElementById("wet-slider"),wetOutput:document.getElementById("wet-output"),samplePitchSlider:document.getElementById("samplePitch"),samplePitchOutput:document.getElementById("samplePitch-val"),irStretchSlider:document.getElementById("irStretch"),irStretchOutput:document.getElementById("irStretch-val"),irPreDelaySlider:document.getElementById("irPreDelay"),irPreDelayOutput:document.getElementById("irPreDelay-val"),useWebWorker:document.getElementById("useWebWorker"),realtimeSimToggle:document.getElementById("realtimeSimToggle"),rrEnabled:document.getElementById("rrEnabled"),rrScattering:document.getElementById("rrScattering"),rrScatteringOutput:document.getElementById("rrScattering-val"),rrHistogramResolution:document.getElementById("rrHistogramResolution"),rrHistogramResolutionOutput:document.getElementById("rrHistogramResolution-val"),rrMaxTime:document.getElementById("rrMaxTime"),rrMaxTimeOutput:document.getElementById("rrMaxTime-val"),rrHybridBounce:document.getElementById("rrHybridBounce"),rrHybridBounceOutput:document.getElementById("rrHybridBounce-val"),rrPoissonDensity:document.getElementById("rrPoissonDensity"),rrPoissonDensityOutput:document.getElementById("rrPoissonDensity-val"),rrDiffuseGain:document.getElementById("rrDiffuseGain"),rrDiffuseGainOutput:document.getElementById("rrDiffuseGain-val"),rrMinEnergy:document.getElementById("rrMinEnergy"),rrMinEnergyOutput:document.getElementById("rrMinEnergy-val"),resetButton:document.getElementById("resetButton")}),B.downloadBtn&&(B.downloadBtn.disabled=!0)}function Kt(i){B.status&&(B.status.textContent=i)}function hM(){Zn=document.getElementById(ie.CANVAS_TARGET_ID),fi=new tg,Vi=new nn(75,1,.1,1e3),Vi.position.set(0,0,ie.INITIAL_CAMERA_DISTANCE),Ye=new cy({antialias:!0}),Ye.setPixelRatio(Math.min(window.devicePixelRatio,2)),Zn?(Zn.appendChild(Ye.domElement),Ye.domElement.style.display="block",Ye.domElement.style.width="100%",Ye.domElement.style.height="100%"):(console.warn("Three.js viewport container not found; falling back to document.body"),document.body.appendChild(Ye.domElement),Ye.setSize(window.innerWidth,window.innerHeight)),da=new hy(Vi,Ye.domElement),da.enableDamping=!0,fi.add(new bg(16777215,.4)),fi.add(new xg(16777215,1.5)),hn=new vr,hn.dom.style.position="absolute",hn.dom.style.top="8px",hn.dom.style.left="8px",hn.dom.style.pointerEvents="none",hn.dom.style.zIndex="2",Zn?(hn.dom.style.position="absolute",Zn.appendChild(hn.dom)):(hn.dom.style.position="fixed",document.body.appendChild(hn.dom)),Re=new Ne(new yu(ie.EMITTER_RADIUS,32,32),new pg({color:16766720,emissive:16766720,emissiveIntensity:.5})),fi.add(Re),pn=new dr,fi.add(pn),iu(!0),window.addEventListener("resize",()=>iu(!0))}function iu(i=!1){const t=Zn?Zn.clientWidth:window.innerWidth,e=Zn?Zn.clientHeight:window.innerHeight;if(t===0||e===0)return;const n=Math.min(window.devicePixelRatio,2),s=Ye.domElement;(i||s.width!==Math.floor(t*n)||s.height!==Math.floor(e*n))&&(Ye.setPixelRatio(n),Ye.setSize(t,e),Vi.aspect=t/e,Vi.updateProjectionMatrix())}async function dM(){const i=rM.replace("${glsl_noise_3d}",sM);return new ti({uniforms:{uTime:{value:0},uFrequency:{value:.2},uAmplitude:{value:.2},uAlpha:{value:.4}},vertexShader:i,fragmentShader:oM,side:Mn,wireframe:!0,transparent:!0,depthWrite:!1})}async function fM(){console.log("Loading shaders..."),ut.shaderMaterial=await dM(),console.log("Shader material created successfully")}function pa(i){const t=wu(i||void 0);ut.noise3D=Of(t)}function Qf(){if(ut.roomMesh)ut.shaderMaterial&&ut.roomMesh.material!==ut.shaderMaterial&&(ut.roomMesh.material=ut.shaderMaterial);else{const a=new xu(1,20);ut.roomMesh=new Ne(a,ut.shaderMaterial||new gu({color:65280,wireframe:!0})),fi.add(ut.roomMesh)}const i=ut.roomMesh.geometry;pn.clear();const t=Math.max(parseFloat(B.baseRadius?.value??"1"),.01),e=parseFloat(B.noiseFrequency?.value??"0.2"),n=parseFloat(B.noiseAmplitude?.value??"0.2"),s=i.getAttribute("position");if(!ut.baseVertexDirections||ut.baseVertexDirections.length!==s.count*3){ut.baseVertexDirections=new Float32Array(s.count*3);const a=new I;for(let l=0;l<s.count;l++){a.fromBufferAttribute(s,l).normalize();const c=l*3;ut.baseVertexDirections[c]=a.x,ut.baseVertexDirections[c+1]=a.y,ut.baseVertexDirections[c+2]=a.z}}const r=new I,o=new I;for(let a=0;a<s.count;a++){const l=a*3;r.set(ut.baseVertexDirections[l],ut.baseVertexDirections[l+1],ut.baseVertexDirections[l+2]),o.copy(r).multiplyScalar(t);const c=ut.noise3D(r.x*e,r.y*e,r.z*e);o.addScaledVector(r,n*c),s.setXYZ(a,o.x,o.y,o.z)}s.needsUpdate=!0,i.computeVertexNormals(),i.disposeBoundsTree?.(),i.computeBoundsTree()}function Ts(){Qf()}function pM(){he&&he.terminate();try{he=new Worker(new URL("/blobverb/assets/raytracing-worker-Ke-R88Sj.js",import.meta.url),{type:"module"}),he.onmessage=mM,he.onerror=i=>{console.error("Modern worker failed to load:",i),su()},he.postMessage({type:"init"})}catch(i){console.error("Failed to create modern worker:",i),su()}}function mM(i){const t=i.data,{type:e}=t;switch(e){case"ready":console.log("Modern ES Module BVH worker initialized"),ta();break;case"geometrySet":console.log("Worker geometry updated BVH"),ut.workerGeometryReady=!0,B.startButton&&!ut.isSimulating&&(B.startButton.disabled=!1);break;case"progress":{const n=Math.round((t.progress||0)*100),s=t.raysPerSecond||0,r=t.currentArrivals||0;Kt(`Simulating (Modern BVH Worker)... ${n}% (${s} rays/sec, ${r} arrivals)`);break}case"complete":{const n=t.totalArrivals||0,s=t.avgRaysPerSecond||0,r=t.rayRadiosity;console.log(`Modern BVH Worker simulation complete: ${n} arrivals`),console.log(`Performance: ${s} rays/sec average`),r?.enabled&&console.log(`Ray-radiosity tail: ${r.lateArrivalCount} late pulses (bins=${r.histogramBins}, resolution=${r.rrConfig?.histogramResolution??"n/a"}s)`),t.arrivalsByBand&&t.freqBands?Iu(t.arrivalsByBand,t.freqBands):t.arrivals?gM(t.arrivals):console.warn("Worker completed without arrivals payload; skipping IR plotting."),B.startButton&&(B.startButton.disabled=!1),ut.isSimulating=!1;const o=r?.enabled&&r.lateArrivalCount?`, ${r.lateArrivalCount} RR pulses`:"";Kt(`Complete: ${n} arrivals (${s} rays/sec${o})`);break}case"error":console.error("Modern BVH Worker error:",t.error||t.data?.error),su();break}}function su(){if(console.warn("Falling back: disabling worker and using main-thread simulation."),he)try{he.terminate()}catch(t){console.error("Failed to terminate worker cleanly:",t)}he=null;const i=document.getElementById("useWebWorker");i&&(i.checked=!1),Kt("Worker unavailable. Using main thread."),B.startButton&&(B.startButton.disabled=!1),ut.isSimulating=!1}function ta(){if(!he||!ut.roomMesh)return;ut.workerGeometryReady=!1;const i=ut.roomMesh.geometry,t=i.attributes.position.array,e=i.attributes.normal.array,n=i.index?i.index.array:null;he.postMessage({type:"setGeometry",data:{roomGeometry:{positions:Array.from(t),normals:Array.from(e),indices:n?Array.from(n):null},emitterRadius:ie.EMITTER_RADIUS,emitterPosition:{x:0,y:0,z:0}}})}function Zi(){if($t)return;$t=new(window.AudioContext||window.webkitAudioContext),Nr=$t.createConvolver(),Kn=$t.createGain(),jn=$t.createGain(),Ni=$t.createGain(),Jo=iS($t,Ni,{fftSize:512,smoothingTimeConstant:1});const i=Sr?Sr.getDb():0,t=Mr?Mr.getDb():-6;Kn.gain.value=ma(i),jn.gain.value=ma(t),console.log("Initial dry gain:",Kn.gain.value,"from",i,"dB"),console.log("Initial wet gain:",jn.gain.value,"from",t,"dB"),Nr.connect(jn),Kn.connect(Ni),jn.connect(Ni),Ni.connect($t.destination),console.log("AudioContext Initialized."),hr=new US($t),jn.connect(hr.input),Kn.connect(hr.input),hr.connect(Ni);const e=document.querySelector("weq8-ui");e&&(e.runtime=hr),Jc=new fd({attack:.1,release:.1,sampleRate:120}),tu=new fd({attack:.1,release:.1,sampleRate:120})}function mr(){if(ut.isSimulating)return;const i=B.useWebWorker?.checked??!0,t={numRays:5e3,absorptionCoeffs:{200:Fe("absorption200",.1),800:Fe("absorption800",.15),3200:Fe("absorption3200",.2),1e4:Fe("absorption10000",.25)},freqBands:ie.FREQ_BANDS,seed:B.randomSeed?.value??"",speedOfSound:ie.SPEED_OF_SOUND,maxBounces:ut.maxBounces,batchSize:5e3,rrConfig:Aa(Vr())};i&&he&&ut.workerGeometryReady?(ut.isSimulating=!0,Kt("Quick preview..."),he.postMessage({type:"simulate",data:t})):i||Jf(t)}function Jf(i){if(ut.isSimulating=!0,Kt("Quick preview (main thread)..."),!ut.roomMesh||!Re){console.warn("Simulation unavailable: missing room or emitter mesh."),Kt("Simulation unavailable: scene not ready."),ut.isSimulating=!1;return}const t=i.seed||"",e=Math.random;wu(t||void 0,{global:!0});const n=(i.freqBands??ie.FREQ_BANDS).slice().sort((_,b)=>_-b),s=i.absorptionCoeffs??{},r=i.numRays||1500,o=i.maxBounces??ut.maxBounces,a=i.speedOfSound??ie.SPEED_OF_SOUND,l=Aa(i.rrConfig??Vr()),c=l.enabled,u=c?Math.ceil(l.maxTime/l.histogramResolution):0,h={};n.forEach(_=>{h[_]=[]});const d=c?Object.fromEntries(n.map(_=>[_,new Float32Array(u)])):null,f=Re.geometry?.boundingSphere?.radius??ie.EMITTER_RADIUS,g=Re.getWorldPosition(new I),v=[],m=[];for(let _=0;_<r;_++){Yt.origin.set(0,0,0),Yt.direction.randomDirection();let b=0;const E=Object.fromEntries(n.map(T=>[T,1]));for(let T=0;T<o;T++){mi.set(Yt.origin,Yt.direction),v.length=0,m.length=0,mi.intersectObject(ut.roomMesh,!1,v),Re&&mi.intersectObject(Re,!1,m);const A=m.length>0,S=v.length>0;if(A&&(!S||m[0].distance<v[0].distance)){const z=m[0];if(z&&z.distance>.001){b+=z.distance;const H=b/a;n.forEach(Y=>{h[Y].push({time:H,amplitude:E[Y]})});break}}if(!S)break;const M=v[0];if(b+=M.distance,n.forEach(z=>{const H=s[z]??0;E[z]*=1-H,E[z]<0&&(E[z]=0)}),c&&u>0&&T>=l.hybridBounceThreshold&&Re){Yt.toReceiver.copy(M.point).sub(g);const z=Math.max(Yt.toReceiver.length(),Math.max(f*.5,.01)),H=(b+z)/a;if(H<=l.maxTime){const Y=1/Math.max(4*Math.PI*z*z,1e-6),V=Math.floor(H/l.histogramResolution);V<u&&n.forEach(Q=>{const rt=E[Q];if(rt<=0)return;const pt=rt*rt*l.diffuseGain*Y*Math.max(l.scatteringCoeff,.001);pt>l.minEnergyThreshold&&(d[Q][V]+=pt)})}}const C=M.face?.normal??Yt.temp.set(0,1,0),P=Yt.temp.copy(C).transformDirection(ut.roomMesh.matrixWorld).normalize(),L=Yt.specular.copy(Yt.direction).reflect(P),N=l.scatteringCoeff>0?jf(P):L;Yt.direction.copy(L).multiplyScalar(1-l.scatteringCoeff).addScaledVector(N,l.scatteringCoeff).normalize(),Yt.temp.copy(Yt.direction).multiplyScalar(.001),Yt.origin.copy(M.point).add(Yt.temp)}}let p=0;c&&u>0&&d?n.forEach(_=>{const b=Zf(d[_],l.histogramResolution,l.poissonDensity,l.minEnergyThreshold);b.length>0&&(h[_].push(...b),p+=b.length),h[_].sort((E,T)=>E.time-T.time)}):n.forEach(_=>{h[_].sort((b,E)=>b.time-E.time)}),Iu(h,n);const x=Object.values(h).reduce((_,b)=>_+b.length,0),y=c&&p?`, ${p} RR pulses`:"";Kt(`Quick preview: ${x} arrivals${y}`),Math.random=e,ut.isSimulating=!1}function tp(i,t){Zi();const e=$t.sampleRate;if(i.length===0)return $t.createBuffer(1,1,e);const n=i.reduce((c,u)=>Math.max(c,u.time),0),s=Math.max(n+.5,1),r=Math.ceil(s*e),o=$t.createBuffer(1,r,e),a=o.getChannelData(0);for(const c of i){const u=c.time*e,h=Math.floor(u),d=u-h;h<r-1?(a[h]+=c.amplitude*(1-d),a[h+1]+=c.amplitude*d):h<r&&(a[h]+=c.amplitude)}const l=a.reduce((c,u)=>Math.max(c,Math.abs(u)),0);if(l>1)for(let c=0;c<a.length;c++)a[c]/=l;return o}function Du(){En&&En.destroy(),Zi();const i=document.querySelector("#waveform");if(!i)return console.error("Waveform container #waveform not found"),null;i.innerHTML="";try{const t=nS.create({height:10,insertPosition:"beforebegin",timeInterval:.5,primaryLabelInterval:.05,style:{fontSize:"10px",color:"#2D5B88"}}),e=Yc.create({container:i,waveColor:"rgb(200, 100, 0)",progressColor:"rgb(100, 50, 0)",height:100,sampleRate:$t?$t.sampleRate:44100,interact:!0,dragToSeek:!0,plugins:[t]});e.registerPlugin(jc.create({height:100,scale:"linear",useWebWorker:!0,windowFunc:"hann",fftSamples:1024}));const n=e.getMediaElement();return Bd=$t.createMediaElementSource(n),Bd.connect(Ni),e.on("error",s=>console.error("WaveSurfer error:",s)),e.on("click",()=>e.play()),e}catch(t){return console.error("Error initializing WaveSurfer:",t),null}}function gM(i){if(En=Du(),!En||i.length===0)return;Zi();const t=i.reduce((r,o)=>Math.max(r,Math.abs(o.amplitude)),0),e=.988,n=t>0?i.map(r=>({...r,amplitude:r.amplitude/t*e})):i;fa=tp(n),Ca("simulation",!0)}function _M(i){const t=new Float32Array(i);for(let e=0;e<i;e++)t[e]=.5*(1-Math.cos(2*Math.PI*e/(i-1)));return t}function vM(i,t,e,n){const s=new Float32Array(i),r=_M(i),o=i-1,a=t/n,l=e/n;for(let u=0;u<i;u++){const h=u-o/2;let d;h===0?d=2*(l-a):d=(Math.sin(2*Math.PI*l*h)-Math.sin(2*Math.PI*a*h))/(Math.PI*h),s[u]=d*r[u]}const c=s.reduce((u,h)=>u+h,0);for(let u=0;u<i;u++)s[u]/=c;return s}async function xM(i,t){const e=new OfflineAudioContext(1,i.length+t.length,i.sampleRate),n=e.createBuffer(1,t.length,i.sampleRate);n.copyToChannel(t,0);const s=e.createBufferSource();s.buffer=i;const r=e.createConvolver();return r.buffer=n,s.connect(r).connect(e.destination),s.start(),await e.startRendering()}async function Iu(i,t){if(En=Du(),!En)return;Zi(),console.log("Processing multi-band impulse response (FIR):",t);const e=257,n=$t.sampleRate,s={};for(const o of t){const a=i[o];if(a&&a.length>0){const l=a.reduce((p,x)=>Math.max(p,Math.abs(x.amplitude)),0),c=.988,u=l>0?a.map(p=>({...p,amplitude:p.amplitude/l*c})):a,h=tp(u),d=parseFloat(o),f=d,g=Math.max(d-f/2,20),v=Math.min(d+f/2,n/2-1),m=vM(e,g,v,n);s[o]=await xM(h,m)}}const r=yM(s,t);fa=r,r&&(Kt("Multi-band Impulse Response loaded!"),Ca("simulation",!0))}function yM(i,t){if(!$t)return null;const e=t.sort((l,c)=>l-c);let n=0;if(e.forEach(l=>{i[l]&&(n=Math.max(n,i[l].length))}),n===0)return null;const s=$t.sampleRate,r=$t.createBuffer(1,n,s),o=r.getChannelData(0);e.forEach(l=>{const c=i[l];if(!c)return;const u=c.getChannelData(0);for(let h=0;h<u.length;h++)o[h]+=u[h]});const a=o.reduce((l,c)=>Math.max(l,Math.abs(c)),0);if(a>0)for(let c=0;c<o.length;c++)o[c]=o[c]/a*.98;return r}function ma(i){return Math.pow(10,i/20)}function ep(i){const t=i.numberOfChannels,e=i.length*t*2+44,n=new ArrayBuffer(e),s=new DataView(n),r=[];let o=0,a=0;function l(u){s.setUint16(a,u,!0),a+=2}function c(u){s.setUint32(a,u,!0),a+=4}c(1179011410),c(e-8),c(1163280727),c(544501094),c(16),l(1),l(t),c(i.sampleRate),c(i.sampleRate*2*t),l(t*2),l(16),c(1635017060),c(e-a-4);for(let u=0;u<t;u++)r.push(i.getChannelData(u));for(;a<e;){for(let u=0;u<t;u++){let h=Math.max(-1,Math.min(1,r[u][o]));h=(h<0?h*32768:h*32767)|0,s.setInt16(a,h,!0),a+=2}o++}return new Blob([n],{type:"audio/wav"})}async function bM(){if(!B.sampleAudioSelect)return;const t=Object.entries(Object.assign({"/src/audio/samples/bird-Corn_Bunting.wav":gp,"/src/audio/samples/bird-Grey_breasted_Crake-.wav":vp,"/src/audio/samples/cow.wav":yp,"/src/audio/samples/dog.wav":Sp,"/src/audio/samples/elephant.wav":Ep})).sort(([e],[n])=>e.localeCompare(n));B.sampleAudioSelect.innerHTML="",t.forEach(([e,n])=>{const s=n.default??e.replace("/src",""),r=e.split("/").pop(),o=document.createElement("option");o.value=s,o.textContent=r,B.sampleAudioSelect.appendChild(o)}),t.length>0&&(B.sampleAudioSelect.selectedIndex=0,await np(B.sampleAudioSelect.value))}async function np(i){if(Tr(),on=null,!!i){$t||console.warn("AudioContext not initialized yet; sample will load but not play until splash is dismissed."),Kt("Loading sample…"),B.playSampleBtn&&(B.playSampleBtn.disabled=!0);try{const t=await fetch(i);if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=await t.arrayBuffer();$t?(on=await $t.decodeAudioData(e),Gi=on,Pa(!0,"load"),Kt(`Sample ready: ${i.split("/").pop()}`),B.playSampleBtn&&(B.playSampleBtn.disabled=!1)):(window._pendingSampleBuffer=e,Kt(`Sample loaded (awaiting audio context): ${i.split("/").pop()}`))}catch(t){console.error("Sample load failed:",t),Kt("Error loading sample.")}}}function Tr(){if(fn){try{fn.stop(0)}catch{}fn.disconnect(),fn=null}B.playSampleBtn&&(B.playSampleBtn.textContent="Play Sample")}function Fe(i,t=0){const e=document.getElementById(i);if(!e)return t;const n=parseFloat(e.value);return Number.isFinite(n)?n:t}function ip(i,t=0){const e=document.getElementById(i);if(!e)return t;const n=parseInt(e.value,10);return Number.isFinite(n)?n:t}function bs(i,t,e){if(!i)return t;const n=parseFloat(i.value);if(!Number.isFinite(n))return t;if(e){const[s,r]=e;return Math.min(r,Math.max(s,n))}return n}function SM(i,t,e){if(!i)return t;const n=parseInt(i.value,10);if(!Number.isFinite(n))return t;if(e){const[s,r]=e;return Math.min(r,Math.max(s,n))}return n}function Vr(){const i=ie.RAY_RADIOSITY,t=B.rrEnabled?B.rrEnabled.checked:i.enabled,e=bs(B.rrScattering,i.scatteringCoeff,[0,1]),n=bs(B.rrHistogramResolution,i.histogramResolution,[5e-4,.05]),s=bs(B.rrMaxTime,i.maxTime,[n,20]),r=SM(B.rrHybridBounce,i.hybridBounceThreshold,[0,64]),o=bs(B.rrPoissonDensity,i.poissonDensity,[.1,128]),a=bs(B.rrDiffuseGain,i.diffuseGain,[.01,10]),l=bs(B.rrMinEnergy,i.minEnergyThreshold,[1e-12,.001]);return{enabled:t,scatteringCoeff:e,histogramResolution:n,maxTime:s,hybridBounceThreshold:r,poissonDensity:o,diffuseGain:a,minEnergyThreshold:l}}function Aa(i){const t=ie.RAY_RADIOSITY,e={...t,...i||{}};return e.scatteringCoeff=fu.clamp(e.scatteringCoeff??t.scatteringCoeff,0,1),e.histogramResolution=Math.max(5e-4,e.histogramResolution??t.histogramResolution),e.maxTime=Math.max(e.histogramResolution,e.maxTime??t.maxTime),e.hybridBounceThreshold=Math.max(0,Math.floor(e.hybridBounceThreshold??t.hybridBounceThreshold)),e.poissonDensity=Math.max(.1,e.poissonDensity??t.poissonDensity),e.minEnergyThreshold=Math.max(1e-12,e.minEnergyThreshold??t.minEnergyThreshold),e.diffuseGain=Math.max(.01,e.diffuseGain??t.diffuseGain),e.enabled=!!e.enabled,e}function ru(){const i=Vr();B.rrScatteringOutput&&(B.rrScatteringOutput.textContent=i.scatteringCoeff.toFixed(2)),B.rrHistogramResolutionOutput&&(B.rrHistogramResolutionOutput.textContent=i.histogramResolution.toFixed(4)+" s"),B.rrMaxTimeOutput&&(B.rrMaxTimeOutput.textContent=i.maxTime.toFixed(2)+" s"),B.rrHybridBounceOutput&&(B.rrHybridBounceOutput.textContent=`${i.hybridBounceThreshold}`),B.rrPoissonDensityOutput&&(B.rrPoissonDensityOutput.textContent=i.poissonDensity.toFixed(1)),B.rrDiffuseGainOutput&&(B.rrDiffuseGainOutput.textContent=i.diffuseGain.toFixed(2)),B.rrMinEnergyOutput&&(B.rrMinEnergyOutput.textContent=i.minEnergyThreshold.toExponential(1))}function ga(i){const t=Math.round(i);return`${t>0?"+":""}${t} st`}function _a(i){return`${i.toFixed(2)}×`}function Ra(i){return`${Math.max(0,i).toFixed(0)} ms`}function Lu(){const i=ie.DEFAULTS?.irPreDelayMs,t=parseFloat(B.irPreDelaySlider?.value??`${i}`);return Number.isNaN(t)?i:Math.max(0,t)}function MM(i,t){if(!i)return null;Zi();const e=i.sampleRate,n=Math.round(t/1e3*e);if(n<=0)return i;if(n>=i.length)return $t.createBuffer(i.numberOfChannels,1,e);const s=i.length-n,r=$t.createBuffer(i.numberOfChannels,s,e);for(let o=0;o<i.numberOfChannels;o++){const a=i.getChannelData(o);r.getChannelData(o).set(a.subarray(n,n+s))}return r}function Ca(i=null,t=!0){if(!fa)return;const e=Lu();B.irPreDelayOutput&&(B.irPreDelayOutput.textContent=Ra(e)),Hi=MM(fa,e),Hi&&sp(t,i)}function sp(i=!1,t=null){if(!Hi)return;const e=()=>{const n=++eu;rp(n,t).catch(s=>{console.error("IR stretch failed:",s)})};i?e():(Xl&&clearTimeout(Xl),Xl=setTimeout(e,200))}async function rp(i,t=null){if(!Hi)return;const e=parseFloat(B.irStretchSlider?.value??"1")||1,n=Math.abs(e-1)>.001;let s=Hi;if(n){if(Gl){setTimeout(()=>{i===eu&&rp(i,t).catch(r=>console.error("IR stretch retry failed:",r))},120);return}Gl=!0;try{s=await Kf(Hi,{timeRatio:e})}catch(r){console.error("Error stretching impulse response:",r),s=Hi,t==="slider"&&Kt("IR stretch failed; using original response.")}finally{Gl=!1}}if(i===eu){if(Er=s,Nr&&(Nr.buffer=Er),B.downloadBtn&&(B.downloadBtn.disabled=!1),En||(En=Du()),En){const r=ep(Er);if(r){const o=URL.createObjectURL(r);En.load(o),En.once("ready",()=>URL.revokeObjectURL(o))}}t==="simulation"?Kt("Impulse Response loaded! Ready for auralization."):t==="slider"?Kt(`IR stretch updated (${_a(e)}).`):t==="preDelay"?Kt(`IR pre-delay trimmed (${Ra(Lu())}).`):t==="reset"&&Kt("Impulse response settings reset.")}}function Pa(i=!1,t=null){if(!on)return;const e=()=>{const n=++nu;op(n,t).catch(s=>{console.error("Sample pitch processing failed:",s)})};i?e():($l&&clearTimeout($l),$l=setTimeout(e,150))}async function op(i,t=null){if(!on)return;const e=parseFloat(B.samplePitchSlider?.value??"0")||0,n=Math.abs(e)>.001;if(fn&&Tr(),!n){Gi=on,t==="slider"&&Kt("Sample pitch reset.");return}if(Wl){setTimeout(()=>{i===nu&&op(i,t).catch(s=>console.error("Sample pitch retry failed:",s))},120);return}Wl=!0,B.playSampleBtn&&(B.playSampleBtn.disabled=!0);try{const s=await Kf(on,{pitchSemitones:e,timeRatio:1});if(i!==nu)return;Gi=s,t==="slider"&&Kt(`Sample pitched (${ga(e)}).`)}catch(s){console.error("Error applying sample pitch:",s),Gi=on,Kt("Pitch shift failed; using original sample.")}finally{Wl=!1,B.playSampleBtn&&(B.playSampleBtn.disabled=!1)}}function EM(){return Gi||on}function TM(){const i=ie.DEFAULTS;if(!i)return;if(B.randomSeed&&(B.randomSeed.value=i.randomSeed),B.baseRadius){B.baseRadius.value=i.baseRadius;const r=document.getElementById("baseRadius-val");r&&(r.textContent=i.baseRadius)}if(B.noiseFrequency){B.noiseFrequency.value=i.noiseFrequency;const r=document.getElementById("noiseFreq-val");r&&(r.textContent=i.noiseFrequency)}if(B.noiseAmplitude){B.noiseAmplitude.value=i.noiseAmplitude;const r=document.getElementById("noiseAmp-val");r&&(r.textContent=i.noiseAmplitude)}const t=i.absorption||{};[200,800,3200,1e4].forEach(r=>{const o=document.getElementById(`absorption${r}`),a=document.getElementById(`absorption${r}-val`),l=t[r]??o?.value;!o||l===void 0||(o.value=l,a&&(a.textContent=l))});const n=document.getElementById("numRays");if(n){n.value=i.numRays;const r=document.getElementById("numRays-val");r&&(r.textContent=i.numRays)}B.useWebWorker&&(B.useWebWorker.checked=i.useWebWorker),B.realtimeSimToggle&&(B.realtimeSimToggle.checked=i.realtimePreview),ut.realtimeSimEnabled=i.realtimePreview;const s=i.rayRadiosity||{};if(B.rrEnabled&&(B.rrEnabled.checked=s.enabled??ie.RAY_RADIOSITY.enabled),B.rrScattering&&(B.rrScattering.value=s.scatteringCoeff??ie.RAY_RADIOSITY.scatteringCoeff),B.rrHistogramResolution&&(B.rrHistogramResolution.value=s.histogramResolution??ie.RAY_RADIOSITY.histogramResolution),B.rrMaxTime&&(B.rrMaxTime.value=s.maxTime??ie.RAY_RADIOSITY.maxTime),B.rrHybridBounce&&(B.rrHybridBounce.value=s.hybridBounceThreshold??ie.RAY_RADIOSITY.hybridBounceThreshold),B.rrPoissonDensity&&(B.rrPoissonDensity.value=s.poissonDensity??ie.RAY_RADIOSITY.poissonDensity),B.rrDiffuseGain&&(B.rrDiffuseGain.value=s.diffuseGain??ie.RAY_RADIOSITY.diffuseGain),B.rrMinEnergy&&(B.rrMinEnergy.value=s.minEnergyThreshold??ie.RAY_RADIOSITY.minEnergyThreshold),ru(),B.samplePitchSlider&&(B.samplePitchSlider.value="0",document.querySelectorAll("#samplePitch-val").forEach(r=>r.textContent=ga(0))),B.irStretchSlider&&(B.irStretchSlider.value="1",document.querySelectorAll("#irStretch-val").forEach(r=>r.textContent=_a(1))),B.irPreDelaySlider){const r=i.irPreDelayMs;B.irPreDelaySlider.value=`${r}`,document.querySelectorAll("#irPreDelay-val").forEach(o=>o.textContent=Ra(r))}Gi=on||null,pa(i.randomSeed),Ts(),Kt("Controls reset to defaults."),ut.realtimeSimEnabled&&!ut.isSimulating&&mr(),Pa(!0,"reset"),Ca("reset",!0)}function wM(){if(ut.isSimulating)return;if(!he){console.warn("Worker unavailable; running simulation on main thread."),ap();return}if(!ut.workerGeometryReady){console.warn("Worker geometry not ready yet, please wait..."),Kt("Waiting for geometry update...");return}if(ut.isSimulating=!0,B.startButton&&(B.startButton.disabled=!0),Kt("Starting simulation..."),pn)for(;pn.children.length>0;)pn.remove(pn.children[0]);const i={numRays:ip("numRays",1e3),maxBounces:ut.maxBounces,useFreqDependent:!0,absorptionCoeffs:{200:Fe("absorption200",.1),800:Fe("absorption800",.15),3200:Fe("absorption3200",.2),1e4:Fe("absorption10000",.25)},seed:B.randomSeed?.value??"",speedOfSound:ie.SPEED_OF_SOUND,batchSize:5e3,rrConfig:Aa(Vr())};console.log("Starting worker simulation with params:",i),console.time("Worker Simulation"),he.postMessage({type:"simulate",data:i})}function ap(){if(ut.isSimulating)return;ut.isSimulating=!0,B.startButton&&(B.startButton.disabled=!0),Kt("Simulating...");const i=ut.maxBounces,t=1e3,e=B.randomSeed?.value||"",n=Math.random;wu(e||void 0,{global:!0}),console.log(`Optimized main thread simulation starting with seed: "${e||"random"}"`),console.time("Main Thread Simulation");const s=ip("numRays",1e3),r=parseInt(B.raysToVisualizeSlider?.value??"0",10)||0,o=B.lineColorModeSelect?.value??"random";if(!mi||!ut.roomMesh||!Re||!pn){console.warn("Simulation prerequisites missing."),Kt("Simulation unavailable: scene not ready."),B.startButton&&(B.startButton.disabled=!1),Math.random=n,ut.isSimulating=!1;return}Re.geometry&&!Re.geometry.boundingSphere&&Re.geometry.computeBoundingSphere();const a=ie.FREQ_BANDS.slice().sort((N,z)=>N-z),l={200:Fe("absorption200",.1),800:Fe("absorption800",.15),3200:Fe("absorption3200",.2),1e4:Fe("absorption10000",.25)},c=Aa(Vr()),u=c.enabled,h=u?Math.ceil(c.maxTime/c.histogramResolution):0,d=ie.SPEED_OF_SOUND,f=Object.fromEntries(a.map(N=>[N,[]])),g=u?Object.fromEntries(a.map(N=>[N,new Float32Array(h)])):null;let v=0;const m=Re.geometry?.boundingSphere?.radius??ie.EMITTER_RADIUS,p=Re.getWorldPosition(new I),x=a[Math.floor(a.length/2)]??a[0],y=[],_=[];let b=0;const E=Math.max(1,r*i*2),T=new Float32Array(E*3),A=new Float32Array(E*3);let S=0,M=0;function C(N){if(!N||N.length<2)return;const z=new qt().setHSL(Math.random(),.8,.55);for(let H=0;H<N.length-1&&!(S>T.length-6||M>A.length-6);H++){const Y=N[H],V=N[H+1];T[S++]=Y.point.x,T[S++]=Y.point.y,T[S++]=Y.point.z,T[S++]=V.point.x,T[S++]=V.point.y,T[S++]=V.point.z;let Q=z;if(o==="energy"){const rt=fu.clamp(Math.abs(Y.amplitude),0,1);Q=new qt().setHSL(.68,.95,.2+rt*.5)}A[M++]=Q.r,A[M++]=Q.g,A[M++]=Q.b,A[M++]=Q.r,A[M++]=Q.g,A[M++]=Q.b}}function P(){const N=b,z=Math.min(b+t,s),H=performance.now();for(let pt=b;pt<z;pt++){Yt.origin.set(0,0,0),Yt.direction.randomDirection();let It=0;const Ht=Object.fromEntries(a.map($=>[$,1])),Ft=pt<r?[{point:Yt.origin.clone(),amplitude:Ht[x]}]:null;for(let $=0;$<i;$++){mi.set(Yt.origin,Yt.direction),y.length=0,_.length=0,mi.intersectObject(ut.roomMesh,!1,y),Re&&mi.intersectObject(Re,!1,_);const K=_.length>0,ft=y.length>0;if(K&&(!ft||_[0].distance<y[0].distance)){const Gt=_[0];if(Gt&&Gt.distance>.001){It+=Gt.distance;const Pt=It/d;a.forEach(At=>{f[At].push({time:Pt,amplitude:Ht[At]})}),Ft&&Ft.push({point:Gt.point.clone(),amplitude:Ht[x]});break}}if(!ft)break;const St=y[0];if(It+=St.distance,a.forEach(Gt=>{const Pt=l[Gt]??0;Ht[Gt]*=1-Pt,Ht[Gt]<0&&(Ht[Gt]=0)}),Ft&&Ft.push({point:St.point.clone(),amplitude:Ht[x]}),u&&h>0&&$>=c.hybridBounceThreshold&&Re){Yt.toReceiver.copy(St.point).sub(p);const Gt=Math.max(Yt.toReceiver.length(),Math.max(m*.5,.01)),Pt=(It+Gt)/d;if(Pt<=c.maxTime){const At=1/Math.max(4*Math.PI*Gt*Gt,1e-6),vt=Math.floor(Pt/c.histogramResolution);vt<h&&a.forEach(oe=>{const gt=Ht[oe];if(gt<=0)return;const Bt=gt*gt*c.diffuseGain*At*Math.max(c.scatteringCoeff,.001);Bt>c.minEnergyThreshold&&(g[oe][vt]+=Bt,v++)})}}const lt=St.face?.normal??Yt.temp.set(0,1,0),Wt=Yt.temp.copy(lt).transformDirection(ut.roomMesh.matrixWorld).normalize(),xe=Yt.specular.copy(Yt.direction).reflect(Wt),U=c.scatteringCoeff>0?jf(Wt):xe;Yt.direction.copy(xe).multiplyScalar(1-c.scatteringCoeff).addScaledVector(U,c.scatteringCoeff).normalize(),Yt.temp.copy(Yt.direction).multiplyScalar(.001),Yt.origin.copy(St.point).add(Yt.temp)}Ft&&Ft.length>1&&C(Ft)}b=z;const Y=performance.now()-H,V=z-N,Q=V>0&&Y>0?Math.round(V/(Y/1e3)):0,rt=Object.values(f).reduce((pt,It)=>pt+It.length,0);if(b<s){const pt=Math.round(b/s*100);Kt(`Simulating (Main Thread)... ${pt}% (${Q} rays/sec, ${rt+v} events)`),window.requestIdleCallback?requestIdleCallback(P):setTimeout(P,0)}else L()}function L(){for(;pn.children.length>0;)pn.remove(pn.children[0]);if(S>0){const Y=new Ge;Y.setAttribute("position",new De(T.slice(0,S),3)),Y.setAttribute("color",new De(A.slice(0,M),3));const V=new af({vertexColors:!0,transparent:!0,opacity:.6}),Q=new fg(Y,V);pn.add(Q)}let N=0;u&&h>0&&g?(a.forEach(Y=>{const V=Zf(g[Y],c.histogramResolution,c.poissonDensity,c.minEnergyThreshold);V.length>0&&(f[Y].push(...V),N+=V.length),f[Y].sort((Q,rt)=>Q.time-rt.time)}),console.log(`Ray-radiosity histogram contributions: ${v}, synthesized pulses: ${N}`)):a.forEach(Y=>{f[Y].sort((V,Q)=>V.time-Q.time)}),console.timeEnd("Main Thread Simulation"),Iu(f,a),B.startButton&&(B.startButton.disabled=!1);const z=Object.values(f).reduce((Y,V)=>Y+V.length,0),H=u&&N?`, ${N} RR pulses`:"";Kt(`Simulation complete: ${z} arrivals${H}`),Math.random=n,ut.isSimulating=!1}P()}function AM(){if(B.useWebWorker&&B.useWebWorker.addEventListener("change",()=>{const o=B.useWebWorker.checked;Kt(o?"Web Worker enabled":"Main thread mode")}),B.realtimeSimToggle&&B.realtimeSimToggle.addEventListener("change",()=>{ut.realtimeSimEnabled=B.realtimeSimToggle.checked,Kt(ut.realtimeSimEnabled?"Realtime preview enabled":"Realtime preview disabled")}),[B.rrEnabled,B.rrScattering,B.rrHistogramResolution,B.rrMaxTime,B.rrHybridBounce,B.rrPoissonDensity,B.rrDiffuseGain,B.rrMinEnergy].filter(Boolean).forEach(o=>{const a=o.type==="checkbox"?"change":"input";o.addEventListener(a,ru)}),ru(),[B.baseRadius,B.noiseFrequency,B.noiseAmplitude,document.getElementById("absorption200"),document.getElementById("absorption800"),document.getElementById("absorption3200"),document.getElementById("absorption10000")].filter(Boolean).forEach(o=>{o.addEventListener("change",()=>{ut.realtimeSimEnabled&&!ut.isSimulating&&mr()})}),B.resetButton){if(B.samplePitchSlider){const o=document.querySelectorAll("#samplePitch-val");o.forEach(a=>a.textContent=ga(parseFloat(B.samplePitchSlider.value||"0"))),B.samplePitchSlider.addEventListener("input",()=>{const a=parseFloat(B.samplePitchSlider.value||"0");o.forEach(l=>l.textContent=ga(a)),Pa(!1,"slider")})}if(B.irStretchSlider){const o=document.querySelectorAll("#irStretch-val");o.forEach(a=>a.textContent=_a(parseFloat(B.irStretchSlider.value||"1"))),B.irStretchSlider.addEventListener("input",a=>{a.stopImmediatePropagation();const l=parseFloat(B.irStretchSlider.value||"1");o.forEach(c=>c.textContent=_a(l)),sp(!1,"slider")})}if(B.irPreDelaySlider){const o=document.querySelectorAll("#irPreDelay-val"),a=()=>{const l=Lu();o.forEach(c=>c.textContent=Ra(l))};a(),B.irPreDelaySlider.addEventListener("input",l=>{l.stopImmediatePropagation(),a()}),B.irPreDelaySlider.addEventListener("change",l=>{l.stopImmediatePropagation(),a(),Ca("preDelay",!0)})}B.resetButton.addEventListener("click",()=>{TM()})}B.downloadBtn&&B.downloadBtn.addEventListener("click",()=>{if(!Er)return;const o=ep(Er),a=URL.createObjectURL(o),l=document.createElement("a");l.style.display="none",l.href=a;const c=B.randomSeed?.value??"impulse-response";l.download=`IR_${c}.wav`,document.body.appendChild(l),l.click(),window.URL.revokeObjectURL(a),document.body.removeChild(l)}),document.querySelectorAll('input[type="range"]').forEach(o=>{const a=document.getElementById(`${o.id}-val`);a&&(o.id==="irStretch"||o.id==="irPreDelay"||(a.textContent=o.value,o.addEventListener("input",()=>{a.textContent=o.value})))}),B.startButton&&B.startButton.addEventListener("click",()=>{if(!$t){console.warn("AudioContext not ready; cannot start simulation.");return}(B.useWebWorker?.checked??!0)&&he?wM():ap()}),B.sampleAudioSelect&&B.sampleAudioSelect.addEventListener("change",()=>{B.sampleAudioSelect.value&&np(B.sampleAudioSelect.value)}),B.playSampleBtn&&B.playSampleBtn.addEventListener("click",()=>{if(!on)return;if(fn){Tr();return}if(!$t){console.warn("AudioContext not ready yet.");return}const o=EM();if(!o){console.warn("Sample unavailable for playback.");return}fn=$t.createBufferSource(),fn.buffer=o,fn.connect(Kn),fn.connect(Nr),fn.start(),B.playSampleBtn.textContent="Stop Sample",Kt("Playing sample…"),fn.onended=()=>{Tr(),Kt("Sample finished.")}}),B.stopSampleBtn&&B.stopSampleBtn.addEventListener("click",()=>Tr());let e=!1,n=null;function s(){e=!0}function r(){e&&he&&(ta(),e=!1),ut.realtimeSimEnabled&&(clearTimeout(n),n=setTimeout(()=>{mr()},300))}B.baseRadius&&(B.baseRadius.addEventListener("input",()=>{Ts(),s()}),B.baseRadius.addEventListener("change",r),B.baseRadius.addEventListener("mouseup",r),B.baseRadius.addEventListener("touchend",r)),B.noiseFrequency&&(B.noiseFrequency.addEventListener("input",()=>{Ts(),s()}),B.noiseFrequency.addEventListener("change",r),B.noiseFrequency.addEventListener("mouseup",r),B.noiseFrequency.addEventListener("touchend",r)),B.noiseAmplitude&&(B.noiseAmplitude.addEventListener("input",()=>{Ts(),s()}),B.noiseAmplitude.addEventListener("change",r),B.noiseAmplitude.addEventListener("mouseup",r),B.noiseAmplitude.addEventListener("touchend",r)),B.randomSeed&&B.randomSeed.addEventListener("change",()=>{pa(B.randomSeed.value),Ts(),he&&ta(),ut.realtimeSimEnabled&&setTimeout(()=>mr(),300)}),B.randomizeSeedBtn&&B.randomSeed&&B.randomizeSeedBtn.addEventListener("click",()=>{B.randomSeed.value=(Date.now()*Math.random()).toString(36).substr(2,9),pa(B.randomSeed.value),Ts(),he&&ta(),ut.realtimeSimEnabled&&setTimeout(()=>mr(),300)})}function RM(){B.drySlider&&B.dryOutput&&(Sr=pd({sliderEl:B.drySlider,outputEl:B.dryOutput,minDb:-60,maxDb:12,defaultDb:0}),B.drySlider.addEventListener("input",()=>{if(Kn&&Sr){const i=Sr.getDb();Kn.gain.value=ma(i),console.log("Dry gain set to",Kn.gain.value,"from",i,"dB")}})),B.wetSlider&&B.wetOutput&&(Mr=pd({sliderEl:B.wetSlider,outputEl:B.wetOutput,minDb:-60,maxDb:12,defaultDb:-6}),B.wetSlider.addEventListener("input",()=>{if(jn&&Mr){const i=Mr.getDb();jn.gain.value=ma(i),console.log("Wet gain set to",jn.gain.value,"from",i,"dB")}}))}function CM(){document.querySelectorAll(".section-toggle").forEach(t=>{if(t.dataset.section==="scene")return;const e=t.closest(".panel-section");if(!e)return;const n=t.getAttribute("aria-expanded"),s=n?n==="true":e.classList.contains("is-open");Od(e,t,s),t.addEventListener("click",()=>{const r=t.getAttribute("aria-expanded")==="true";Od(e,t,!r)})})}function Od(i,t,e){i.classList.toggle("is-open",e),i.classList.toggle("collapsed",!e),t.setAttribute("aria-expanded",e?"true":"false")}function PM(){const i=document.getElementById("splashScreen"),t=document.getElementById("enterAppBtn");!i||!t||t.addEventListener("click",async()=>{$t?.state==="suspended"&&await $t.resume(),await DM(),i.classList.add("hidden")})}async function ou(){ut.initialized||(uM(),hM(),RM(),AM(),CM(),PM(),await fM(),pa(B.randomSeed?.value),Qf(),pM(),await bM(),lp(),ut.initialized=!0)}async function DM(){if(ut.initialized||await ou(),Zi(),$t&&$t.state==="suspended"&&await $t.resume(),window._pendingSampleBuffer&&$t)try{on=await $t.decodeAudioData(window._pendingSampleBuffer),Gi=on,Pa(!0,"load"),delete window._pendingSampleBuffer,B.playSampleBtn&&(B.playSampleBtn.disabled=!1),Kt("Sample ready")}catch(i){console.error("Failed to decode pending sample:",i)}if(ut.workerGeometryReady||!he)ql();else{const i=setInterval(()=>{ut.workerGeometryReady&&(clearInterval(i),ql())},100);setTimeout(()=>{clearInterval(i),ut.workerGeometryReady||(console.warn("Geometry not ready in time, running main thread simulation"),ql())},5e3)}}function ql(){Kt("Generating initial impulse response...");const i=B.useWebWorker?.checked??!0,t={numRays:2e3,absorptionCoeffs:{200:Fe("absorption200",.1),800:Fe("absorption800",.15),3200:Fe("absorption3200",.2),1e4:Fe("absorption10000",.25)},freqBands:ie.FREQ_BANDS,seed:B.randomSeed?.value??"",speedOfSound:ie.SPEED_OF_SOUND,maxBounces:ut.maxBounces,batchSize:5e3};i&&he&&ut.workerGeometryReady?(ut.isSimulating=!0,he.postMessage({type:"simulate",data:t})):Jf(t)}function lp(){if(requestAnimationFrame(lp),hn&&hn.update(),da&&da.update(),iu(),Ye&&fi&&Vi&&Ye.render(fi,Vi),Jo&&tu&&Jc&&ut.shaderMaterial){const i=Math.sqrt(Jo.getPeak()),t=tu.process(i),e=Math.sqrt(Jo.getRMS());Jc.process(e),ut.shaderMaterial.uniforms.uTime.value=performance.now()*4e-4*(1+t*15)}}function IM(){he&&he.terminate()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ou):ou();window.addEventListener("beforeunload",IM);
