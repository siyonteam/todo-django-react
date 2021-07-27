from django.urls import path
from django.urls.conf import include


app_name = "api"
urlpatterns = [
    path('accounts/' , include('accounts.urls')),
]
