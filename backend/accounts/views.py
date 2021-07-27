from django.contrib.auth import authenticate
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from .serilizers import RegisterSerializer , ChangePasswordSerializer , LoginSerializer


class RegisterApi(generics.GenericAPIView):
    permission_classes = [AllowAny,]
    serializer_class = RegisterSerializer
    def post(self , requset ,format=None):
        serializer = self.get_serializer(data = requset.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = Token.objects.create(user=user)
        response = {
            'user_id' : user.id,
            'username' : user.username ,
            'email' : user.email,
            'token' : token.key
        }

        return Response(response ,status=status.HTTP_201_CREATED)



class LoginApi(generics.GenericAPIView):
    permission_classes = [AllowAny,]
    serializer_class = LoginSerializer
    def post(self , requset ,format=None):
        serializer = self.get_serializer(data = requset.data)
        serializer.is_valid(raise_exception=True)
        vd = serializer.validated_data
        user = authenticate(username=vd['username'] , password=vd['password'])
        if user is not None :
            token, created = Token.objects.get_or_create(user=user)
            response = {
                'user_id' : user.id,
                'username' : user.username ,
                'email' : user.email,
                'token' : token.key
            }

            return Response(response , status=status.HTTP_202_ACCEPTED)
        else :
            return Response({'error' : "invalid username or password "} , status=status.HTTP_400_BAD_REQUEST)


class ChangePasswordApi(generics.GenericAPIView):
    serializer_class = ChangePasswordSerializer

    def put(self , request , format=None):
        serializer = self.get_serializer(request.user , data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = Token.objects.get(user=user)
        response = {
            'user_id' : user.id,
            'username' : user.username ,
            'email' : user.email,
            'token' : token.key
        }

        return Response(response , status=status.HTTP_200_OK)        


