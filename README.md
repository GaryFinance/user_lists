## nodejs 를 이용해서 게시판기능 웹을 구현한다.

#### 1. 서버를 만들기위해서 nodejs 유명한 라이브리중 하나인 express 라이브러리를 이용하여

#### http://localhost:8080 이 주소로 서버를 만든다.

user_lists 프로젝트 생성후 npm 을 통해서 폴더를 초기화하면 package.json 을 생성한다.

```
mkdir user_lists
cd user_lists
npm init -y 
```



package.json

```json
{
  "name": "user_lists",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```



app.js파일을 생성후 다음 같이 코드를 생성한다.

​	(1) express 를 임포트 한다.

​		

```javascript
require('express')
```



```powershell
npm install express
```

```javascript
var express = require("express")

var app = express()


app.get('', function(req, res){
    res.send("Hello World!!")
})


app.listen(8080, function(){
    console.log("Server is runing!")
})
```





node app.js 실행하면 http://localhost:8080 서버가 실행이 되고

클라이언트(크롬브라우저)를 통해서 GET방식으로 http://localhost:8080으로 request 를 하면

"Hello World!!" 문자열을 클라이언트에 send 해주고 클라언트는 그 데이타 받아서 처리한다.

그러므로 다음과 같은 결과가 나온다.



![image-20211008212935266](C:\Users\82108\AppData\Roaming\Typora\typora-user-images\image-20211008212935266.png)



##### var express = require("express") 

##### express 라이브러리를 import 해서 express 새로운 인스턴스 생성시킨다.

##### var app = express()

app이라는 새로운 인스턴스 생성된다.

##### 새로운 app안에는 listen , get , post 등등의 여러가지 메소드(함수)와 프로퍼티(속성값) 를 가지고 있고 

##### app다음에 .(점)을 찍은 다음 원하고자는 메소드나 프로퍼티 호출하면된다.



listen메소를 호출하는데 app.listen() 이런식으로 호출한다.

##### 역활은 서버를 띄우고 대기하고 있게 만드는 역활을 하는 메소드이다.

##### listen 이라는 메소드 안에 인자로 받는것 중에 첫번째 인자로 받는 것은 포트 번호를 인자로 받고 그 다음 인자로 콜백함수를 받는다.

그렇다면 콜백함수라는 것은 함수안에 다시 함수를 호출하는 함수를 콜백함수라고 한다.



클라이언트가 GET방식으로 요청(request)을 했을때  서버가  Reponse하기 위해서는 app이라는 인스턴스 안에 있는 get메소드를 이용해서 처리한다.

app.get()를 실행시켜주면된다.

get이라는 메소는 인자로 받는 것중에 첫번째인자로 경로를 정해주는 역활을 하는 것을 인자로 받는데 문자열에 형태로 적는다.



' ' 이렇게 적었다면 http://localhost:8080 경로로 요청이 들어 왔을떄 처리하고 자 할 때 이다.

예를 들어 http://localhost:8080/data 경로로 요청이 들어왔을때 처리하고자 한다면 인자값으로 "/data" 라고 적어주면 된다.

두번째 인자로 받는것중에 콜백함수를 받는다.

여기서의 콜백 함수는 매개변수(인자)를 두개를 받아서 처리한다.

첫번째 req라고 임의로 정한 매개변수에는 클라이언트 요청을 하면서 보낸 많은 데이타를 여기에 저장시켜주고 그걸 처리할 수 있는 메소드등을 저장시켜준다.



두번째 res라고 임의로 정한 매개변에는 클라이언트에 응답을 보낼 수 있는 많은 메소드와 프로퍼티등을 저장시켜 둔다.

누가 ? get 이라는 메소드 실행이 다 끝난후에 처리한 결과를 각각에 저장시켜 준다.

