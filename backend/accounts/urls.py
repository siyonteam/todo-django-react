from django.urls import path
#from rest_framework.authtoken import views
from .views import  LoginApi,RegisterApi , ChangePasswordApi



urlpatterns = [
    path('login/', LoginApi.as_view() , name="login_api"),
    path('register/' , RegisterApi.as_view() , name="register_api"),
    path('password/change/' ,ChangePasswordApi.as_view() , name="change_password_api" )
]