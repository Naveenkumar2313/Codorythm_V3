export const treeDPProblemsSolutions = {
  'tdp-e1': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-e2': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-e3': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-e4': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-e5': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-m1': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-m2': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-m3': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-m4': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-m5': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
    'tdp-h1': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-h2': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-h3': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-h4': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  },
  'tdp-h5': {
    python: `from collections import deque
class T:
 def __init__(s,v):s.v=v;s.l=s.r=None;s.a=s.b=0
def f(x):
 if not x or x[0]==-1:return 0
 r=T(x[0]);q=deque([r]);i=1
 while q and i<len(x):
  u=q.popleft()
  if x[i]!=-1:u.l=T(x[i]);q.append(u.l)
  i+=1
  if i<len(x) and x[i]!=-1:u.r=T(x[i]);q.append(u.r)
  i+=1
 st=[r];o=[]
 while st:
  u=st.pop();o.append(u)
  if u.l:st.append(u.l)
  if u.r:st.append(u.r)
 while o:
  u=o.pop();u.b=u.v
  if u.l:u.a+=max(u.l.a,u.l.b);u.b+=u.l.a
  if u.r:u.a+=max(u.r.a,u.r.b);u.b+=u.r.a
 return max(r.a,r.b)
n=int(input());print(f(list(map(int,input().split()))))`,
    java: `import java.util.*;
public class Main{
 static class T{long v,a,b;T l,r;T(long v){this.v=v;}}
 static T f(long[]x){
  if(x.length==0||x[0]==-1)return null;T r=new T(x[0]);Queue<T>q=new ArrayDeque<>();q.add(r);int i=1;
  while(!q.isEmpty()&&i<x.length){T u=q.poll();if(x[i]!=-1){u.l=new T(x[i]);q.add(u.l);}i++;if(i<x.length&&x[i]!=-1){u.r=new T(x[i]);q.add(u.r);}i++;}
  Deque<T>s=new ArrayDeque<>(),o=new ArrayDeque<>();s.push(r);while(!s.isEmpty()){T u=s.pop();o.push(u);if(u.l!=null)s.push(u.l);if(u.r!=null)s.push(u.r);}
  while(!o.isEmpty()){T u=o.pop();u.b=u.v;if(u.l!=null){u.a+=Math.max(u.l.a,u.l.b);u.b+=u.l.a;}if(u.r!=null){u.a+=Math.max(u.r.a,u.r.b);u.b+=u.r.a;}}return r;
 }
 public static void main(String[]z){Scanner s=new Scanner(System.in);int n=s.nextInt();long[]x=new long[n];for(int i=0;i<n;i++)x[i]=s.nextLong();T r=f(x);System.out.println(r==null?0:Math.max(r.a,r.b));}
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct T{long long v,a,b;struct T*l,*r;}T;
T*n(long long v){T*x=malloc(sizeof(T));x->v=v;x->a=x->b=0;x->l=x->r=0;return x;}
T*f(long long*x,int n0){if(!n0||x[0]==-1)return 0;T*r=n(x[0]),**q=malloc(n0*sizeof(T*)),**s=malloc(n0*sizeof(T*)),**o=malloc(n0*sizeof(T*));int h=0,t=0,i=1,c=0;q[t++]=r;while(h<t&&i<n0){T*u=q[h++];if(x[i]!=-1){u->l=n(x[i]);q[t++]=u->l;}i++;if(i<n0&&x[i]!=-1){u->r=n(x[i]);q[t++]=u->r;}i++;}h=0;s[h++]=r;while(h){T*u=s[--h];o[c++]=u;if(u->l)s[h++]=u->l;if(u->r)s[h++]=u->r;}while(c){T*u=o[--c];u->b=u->v;if(u->l){u->a+=u->l->a>u->l->b?u->l->a:u->l->b;u->b+=u->l->a;}if(u->r){u->a+=u->r->a>u->r->b?u->r->a:u->r->b;u->b+=u->r->a;}}free(q);free(s);free(o);return r;}
int main(){int n0;scanf("%d",&n0);long long*x=malloc(n0*sizeof(long long));for(int i=0;i<n0;i++)scanf("%lld",&x[i]);T*r=f(x,n0);printf("%lld\\n",r?(r->a>r->b?r->a:r->b):0);free(x);return 0;}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct T{long long v,a=0,b=0;T*l=0,*r=0;T(long long v):v(v){}};
T*f(vector<long long>&x){if(x.empty()||x[0]==-1)return 0;T*r=new T(x[0]);queue<T*>q;q.push(r);int i=1;while(!q.empty()&&i<x.size()){T*u=q.front();q.pop();if(x[i]!=-1){u->l=new T(x[i]);q.push(u->l);}i++;if(i<x.size()&&x[i]!=-1){u->r=new T(x[i]);q.push(u->r);}i++;}vector<T*>s{r},o;while(!s.empty()){T*u=s.back();s.pop_back();o.push_back(u);if(u->l)s.push_back(u->l);if(u->r)s.push_back(u->r);}while(!o.empty()){T*u=o.back();o.pop_back();u->b=u->v;if(u->l){u->a+=max(u->l->a,u->l->b);u->b+=u->l->a;}if(u->r){u->a+=max(u->r->a,u->r->b);u->b+=u->r->a;}}return r;}
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;cin>>n;vector<long long>x(n);for(auto&v:x)cin>>v;T*r=f(x);cout<<(r?max(r->a,r->b):0)<<'\\n';}`
  }
};