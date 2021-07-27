from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from todo.models import Todo
from .serializers import TodoSerializer






class TodoViewSet(viewsets.ViewSet):

    def list(self, request, *args, **kwargs):
        queryset = Todo.objects.filter(user=request.user)
        serializer = TodoSerializer(queryset , many = True)
        return Response(serializer.data)

    def create(self, request):
        user = request.user
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            todo = serializer.create(serializer.validated_data , user)
            return Response({"message":"success"})
    
    def retrieve(self, request, pk=None):
        queryset = Todo.objects.all()
        todo = get_object_or_404(queryset, id=pk , user=request.user)
        serializer = TodoSerializer(todo)
        return Response(serializer.data)

    def update(self, request, pk=None):
        queryset = Todo.objects.all()
        todo = get_object_or_404(queryset, id=pk , user=request.user)
        serializer= TodoSerializer(todo , data=request.data)
        if serializer.is_valid():
            todo = serializer.save()
            return Response(serializer.data)


    def partial_update(self, request, pk=None):
        queryset = Todo.objects.all()
        todo = get_object_or_404(queryset, id=pk , user=request.user)
        serializer= TodoSerializer(todo , data=request.data)
        if serializer.is_valid():
            todo = serializer.save()
            return Response(serializer.data)

    def destroy(self, request, pk=None):
        queryset = Todo.objects.all()
        todo = get_object_or_404(queryset, id=pk , user=request.user)
        todo.delete()
        return Response({'message' : 'todo successfuly deleted'})