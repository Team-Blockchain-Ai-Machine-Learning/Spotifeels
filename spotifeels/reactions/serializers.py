from rest_framework import serializers
from .models import Reaction
class ReactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reaction
        # fields = ('user', 'mood', 'comment')
        fields = '__all__'