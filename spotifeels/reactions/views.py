from .models import Reaction, Task, Skill
from .serializers import ReactionSerializer, TaskSerializer, SkillSerializer, UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User

# reaction views
class ReactionRetrieveAPIView(generics.RetrieveAPIView):
	queryset = Reaction.objects.all()
	serializer_class = ReactionSerializer

class ReactionListAPIView(generics.ListAPIView):
	queryset = Reaction.objects.all()
	serializer_class = ReactionSerializer

class ReactionListCreate(generics.ListCreateAPIView):
    queryset = Reaction.objects.all()
    serializer_class = ReactionSerializer

# task views
class TaskRetrieveAPIView(generics.RetrieveAPIView):
	queryset = Task.objects.all()
	serializer_class = TaskSerializer

class TaskListAPIView(generics.ListAPIView):
	queryset = Task.objects.all()
	serializer_class = TaskSerializer

class TaskListCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

# skill views
class SkillRetrieveAPIView(generics.RetrieveAPIView):
	queryset = Skill.objects.all()
	serializer_class = SkillSerializer

class SkillListAPIView(generics.ListAPIView):
	queryset = Skill.objects.all()
	serializer_class = SkillSerializer

class SkillListCreate(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

# user views
class UserRetrieveAPIView(generics.RetrieveAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer

class UserListAPIView(generics.ListAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer