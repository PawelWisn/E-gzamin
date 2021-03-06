# Generated by Django 3.0.7 on 2020-06-07 13:50

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('E_gzamin_app', '0002_auto_20200607_1154'),
    ]

    operations = [
        migrations.AlterField(
            model_name='group',
            name='groupCode',
            field=models.CharField(max_length=16, unique=True),
        ),
        migrations.AlterField(
            model_name='group',
            name='members',
            field=models.ManyToManyField(related_name='is_member_of', to=settings.AUTH_USER_MODEL),
        ),
    ]
