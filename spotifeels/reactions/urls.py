from django.urls import path
from . import views
urlpatterns = [
	# reaction views
    path('api/reactions/<int:pk>', views.ReactionRetrieveAPIView.as_view()),
    path('api/reactions/', views.ReactionListAPIView.as_view()),
    path('api/reactions/create/', views.ReactionListCreate.as_view()),

    # task views
    path('api/tasks/<int:pk>', views.TaskRetrieveAPIView.as_view()),
    path('api/tasks/', views.TaskListAPIView.as_view()),
    path('api/tasks/create/', views.TaskListCreate.as_view()),

    # skill views
    path('api/skills/<int:pk>', views.SkillRetrieveAPIView.as_view()),
    path('api/skills/', views.SkillListAPIView.as_view()),
    path('api/skills/create/', views.SkillListCreate.as_view()),

    # skill views
    path('api/users/<int:pk>', views.UserRetrieveAPIView.as_view()),
    path('api/users/', views.UserListAPIView.as_view()),
    path('api/users/create/', views.UserListCreate.as_view()),
]