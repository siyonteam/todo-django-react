from django.db import models
from django.conf import settings
from django.utils import timezone



class Todo(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="todos" , on_delete=models.CASCADE)
    task = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    due = models.DateTimeField(null=True,blank=True)
    is_completed = models.BooleanField(default=False)
    completed_date = models.DateTimeField(null=True,blank=True)


    def status(self):
        if self.due > timezone.now():
            return True
        return False
    
    def __str__(self) -> str:
        return self.task

    def save(self , **kwargs):
        if self.is_completed :
            self.completed_date = timezone.now()
        super().save()

