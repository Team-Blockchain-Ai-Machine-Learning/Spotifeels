from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from .langtest import analyze_text

# Create your models here.

class Skill(models.Model):
    user = models.ManyToManyField(User, blank=True)
    name = models.TextField()

    def __str__(self):
        return f'{self.name}'

class Task(models.Model):
    user = models.ManyToManyField(User, blank=True)
    title = models.TextField()
    skills = models.ManyToManyField(Skill, blank=True)

class Reaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mood = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    comment = models.TextField(null=True, blank=True)
    comment_sentiment = models.FloatField(null=True, blank=True)
    time_of_reaction = models.DateTimeField(auto_now_add=True)
    task = models.ForeignKey(Task, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'{self.user} was feeling {self.mood} at {self.time_of_reaction}'

    def save(self, *args, **kwargs):
        self.comment_sentiment = analyze_text(self.comment)
        super().save(*args, **kwargs)  # Call the "real" save() method.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    skills = models.ManyToManyField(Skill)
    task = models.ManyToManyField(Task, blank=True)
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
