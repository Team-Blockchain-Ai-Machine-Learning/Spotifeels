# Generated by Django 3.0.2 on 2020-01-25 22:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reactions', '0005_auto_20200125_1701'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reaction',
            name='task',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='reactions.Task'),
        ),
    ]
