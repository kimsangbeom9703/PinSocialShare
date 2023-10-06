# PinSocialShare

## 구상
```
이름에서 딱 보인다.. 저장하고 공유하고 즐기자~

구상하고 있는 서비스는

공부하고 싶은? 알고 싶은? 관심 있는 사이트를 저장하고 공유하고 게시글 올리고~

지역 정보 가져와서 날씨 데이터 보여주고 챗봇 연결, 

소켓 통신으로 게시글 업데이트 시 알람기능 핀터레스트? 생각한 건 많다.. 하나씩 해보자~
```

## 사용 언어
```
    로컬에서 개발을 우선 진행하고 
    추후에 서버는 AWS / 백앤드는 nodeJs / 프론트는 React 사용
```

## 구조 및 흐름?
```
    request -> routers -> middlewares(인증?) 없으면 제외 -> Controllesr -> services -> models 
    
    컨트롤러에서 req , res 를제어 하여 (유효성체크?)
    service에서 데이터 가공 후
    model에서 db삽입.
    
    ex)
    1. router.get('/',authmiddlewares,testController.home)
    2. authmiddlewares 로그인 체크
    3. testController
        module.exports = {
            home:(req,res,next) => {
                const data = testService.getTest()
                res.json(data)             
            }
        }
    4. testService
        module.exports = {
            getTest:() => {
                데이터 가공
                user = testModel.get()
                return user
            }
        }    
    
    
```