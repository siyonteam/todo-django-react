from django.urls import path
#from rest_framework.authtoken import views
from .views import  LoginApi,RegisterApi , ChangePasswordApi , ResetPasswordApi , PasswordResetConfirmApi



urlpatterns = [
    path('login/', LoginApi.as_view() , name="login_api"),
    path('register/' , RegisterApi.as_view() , name="register_api"),
    path('password/change/' ,ChangePasswordApi.as_view() , name="change_password_api" ),
    path('password/reset/',ResetPasswordApi.as_view() , name="reset_password_api"),
    path('password/reset/confirm/<token>/<uidb64>/',PasswordResetConfirmApi.as_view() , name="reset_password_api"),
]