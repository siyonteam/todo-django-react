from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import generics, serializers
from django.utils.http import urlsafe_base64_decode , urlsafe_base64_encode
from django.utils.encoding import smart_bytes, smart_str
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from rest_framework import status
from rest_framework.response import Response
from django.http import HttpResponseRedirect
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from .serilizers import RegisterSerializer , ChangePasswordSerializer , LoginSerializer , ResetPasswordSerializer , SetNewPassword


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


class ResetPasswordApi(generics.GenericAPIView):
    serializer_class = ResetPasswordSerializer
    permission_classes = [AllowAny,]


    def post(self , request):
        serializer = self.get_serializer( data=request.data)
        serializer.is_valid(raise_exception=True)
        user = User.objects.get(email = serializer.validated_data['email'])
        uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
        token = PasswordResetTokenGenerator().make_token(user)
        
        url = request.build_absolute_uri(f'confirm/{token}/{uidb64}/')
        
        send_mail(
            'Reset password',
            url,
            'from todo',
            [user.email,]
        )
        return Response({'status':'1',"message":"the link sended to the email"} , status=status.HTTP_200_OK)


class PasswordResetConfirmApi(generics.GenericAPIView):
    serializer_class = SetNewPassword
    permission_classes = [AllowAny,]


    def valid_link(self , token , uidb64):
        try :
            user_id = smart_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=user_id)

        except :
            return False

        if not PasswordResetTokenGenerator().check_token(user , token):
            return False

        return True

    def post(self , request , token , uidb64):
        if not self.valid_link(token , uidb64):
            return Response({'status':"0" , "message":"invalid link"})
            
        serializer = self.get_serializer( data=request.data)
        serializer.is_valid(raise_exception=True)
        user_id = smart_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(id=user_id)
        user.set_password(serializer.validated_data["password1"])
        user.save()
        return Response({"status":"1" , "message":"password successfuly reseted"})
        



