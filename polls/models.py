import time

from django.db import models


# Create your models here.
class Rate(models.Model):
    comment = models.CharField(max_length=200, default='')
    stars = models.CharField(max_length=3, default='')

    def __str__(self):
        return f'{self.stars}'


class File(models.Model):
    text = models.CharField(max_length=20, default='')
    time = models.CharField(max_length=40, default=time.ctime())
    zip_file = models.FileField(upload_to='static/zips/')

    def __str__(self):
        return f'{self.zip_file},             {self.time}'
