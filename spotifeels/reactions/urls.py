from django.urls import path
from . import views
urlpatterns = [
    path('api/reactions/', views.ReactionListCreate.as_view() ),
]