# Generated by Django 3.0.2 on 2020-01-26 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reactions', '0008_auto_20200125_2153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reaction',
            name='comment_sentiment',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
