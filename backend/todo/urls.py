from django.urls import path

from rest_framework import routers
from .views import TodoViewSet

router = routers.SimpleRouter()
router.register('' , TodoViewSet , basename="todo")
urlpatterns = router.urls