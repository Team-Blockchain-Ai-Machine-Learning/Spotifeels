from rest_framework import serializers
from .models import Reaction, Task, Skill
from django.contrib.auth.models import User

class ReactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reaction
        # fields = ('user', 'mood', 'comment')
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('user', 'title', 'skills')
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        # fields = ('user', 'name')
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ('username', 'first_name', 'last_name', 'email')
        fields = ['username', 'first_name', 'last_name', 'email']