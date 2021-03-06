# Generated by Django 3.1.5 on 2021-05-15 01:08

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0008_auto_20210514_1728'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='text',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AlterField(
            model_name='file',
            name='time',
            field=models.CharField(default='Sat May 15 01:08:05 2021', max_length=40),
        ),
        migrations.AlterField(
            model_name='file',
            name='zip_file',
            field=cloudinary.models.CloudinaryField(max_length=255, verbose_name='file'),
        ),
    ]
