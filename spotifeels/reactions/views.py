from .models import Reaction
from .serializers import ReactionSerializer
from rest_framework import generics
class ReactionListCreate(generics.ListCreateAPIView):
    queryset = Reaction.objects.all()
    serializer_class = ReactionSerializer