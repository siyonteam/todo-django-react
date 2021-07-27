from django.db.models import fields
from rest_framework import serializers
from todo.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta :
        model = Todo
        fields = ("id","user" , "task" , "due" , "is_completed", "completed_date")
        read_only_fields = ["id" , "user"]

    def create(self, validated_data , user):
        todo = Todo(
            user = user , 
            task= validated_data["task"],
            due = validated_data["due"],
            )
        todo.save()
        return todo


