# Generated by Django 3.0.2 on 2020-01-26 03:54

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reactions', '0011_auto_20200125_2253'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='user_lvl',
            field=models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(2)]),
        ),
    ]
